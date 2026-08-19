document.addEventListener(
    "DOMContentLoaded",
    function () {

        /*
         * =========================================
         * UNIQUE EDUZONE STUDENT DASHBOARD
         * =========================================
         *
         * Grade 10 = 10 Lessons
         * Grade 11 = 8 Lessons
         * Total     = 18 Lessons
         *
         * IMPORTANT:
         * Grade 10 existing localStorage data
         * will NOT be deleted or modified.
         *
         * Grade 11 data is read separately.
         * =========================================
         */


        const GRADE10_TOTAL_LESSONS = 10;
        const GRADE11_TOTAL_LESSONS = 8;

        const TOTAL_LESSONS =
            GRADE10_TOTAL_LESSONS +
            GRADE11_TOTAL_LESSONS;


        /*
         * =========================================
         * PROFILE DATA
         * =========================================
         */

        const studentName =
            localStorage.getItem(
                "uez_student_name"
            ) || "Student";


        const studentGrade =
            localStorage.getItem(
                "uez_student_grade"
            ) || "-";


        const studentSubject =
            localStorage.getItem(
                "uez_student_subject"
            ) || "-";


        /*
         * =========================================
         * WELCOME MESSAGE
         * =========================================
         */

        const welcomeMessage =
            document.getElementById(
                "welcomeMessage"
            );


        if (welcomeMessage) {

            welcomeMessage.textContent =
                "Welcome, " +
                studentName;

        }


        /*
         * =========================================
         * PROFILE INFORMATION
         * =========================================
         */

        const nameElement =
            document.getElementById(
                "studentName"
            );


        if (nameElement) {

            nameElement.textContent =
                studentName;

        }


        const gradeElement =
            document.getElementById(
                "studentGrade"
            );


        if (gradeElement) {

            gradeElement.textContent =
                studentGrade;

        }


        const subjectElement =
            document.getElementById(
                "studentSubject"
            );


        if (subjectElement) {

            subjectElement.textContent =
                studentSubject;

        }


        /*
         * =========================================
         * GRADE 10 - EXISTING DATA
         * =========================================
         *
         * DO NOT CHANGE EXISTING GRADE 10 SYSTEM
         */

        let grade10CompletedLessons = [];


        const savedGrade10Lessons =
            localStorage.getItem(
                "uez_completed_lessons"
            );


        if (savedGrade10Lessons) {

            try {

                grade10CompletedLessons =
                    JSON.parse(
                        savedGrade10Lessons
                    );

            }

            catch (error) {

                grade10CompletedLessons = [];

            }

        }


        if (
            !Array.isArray(
                grade10CompletedLessons
            )
        ) {

            grade10CompletedLessons = [];

        }


        /*
         * Validate only Grade 10 Lesson 1-10
         */

        grade10CompletedLessons =
            grade10CompletedLessons.filter(
                function (lesson) {

                    const lessonNumber =
                        Number(
                            String(lesson)
                                .replace(
                                    "lesson",
                                    ""
                                )
                        );


                    return (
                        lessonNumber >= 1 &&
                        lessonNumber <=
                        GRADE10_TOTAL_LESSONS
                    );

                }
            );


        /*
         * Remove duplicates
         */

        grade10CompletedLessons =
            grade10CompletedLessons.filter(
                function (
                    lesson,
                    index,
                    array
                ) {

                    return (
                        array.indexOf(
                            lesson
                        ) === index
                    );

                }
            );


        const grade10LessonsCompleted =
            grade10CompletedLessons.length;


        /*
         * =========================================
         * GRADE 11 - COMPLETED LESSONS
         * =========================================
         *
         * Reads:
         * grade11CompletedLessons
         *
         * Example:
         * {
         *     "1": true,
         *     "2": true
         * }
         */

        let grade11CompletedLessons = {};


        try {

            grade11CompletedLessons =
                JSON.parse(
                    localStorage.getItem(
                        "grade11CompletedLessons"
                    ) || "{}"
                );

        }

        catch (error) {

            grade11CompletedLessons = {};

        }


        /*
         * Count Grade 11 completed lessons
         */

        let grade11LessonsCompleted = 0;


        for (
            let i = 1;
            i <= GRADE11_TOTAL_LESSONS;
            i++
        ) {

            if (
                grade11CompletedLessons[i] === true
            ) {

                grade11LessonsCompleted++;

            }

        }


        /*
         * =========================================
         * TOTAL COMPLETED LESSONS
         * =========================================
         */

        const totalLessonsCompleted =
            grade10LessonsCompleted +
            grade11LessonsCompleted;


        /*
         * =========================================
         * UPDATE LESSON CARD
         * =========================================
         */

        const lessonsCompletedElement =
            document.getElementById(
                "lessonsCompleted"
            );


        if (
            lessonsCompletedElement
        ) {

            lessonsCompletedElement.textContent =
                totalLessonsCompleted +
                " / " +
                TOTAL_LESSONS;

        }


        /*
         * =========================================
         * GRADE 10 QUIZ DATA
         * =========================================
         *
         * Existing system is preserved.
         */

        const grade10LastScore =
            Number(
                localStorage.getItem(
                    "uez_last_score"
                )
            ) || 0;


        const grade10QuizCount =
            Number(
                localStorage.getItem(
                    "uez_quiz_count"
                )
            ) || 0;


        /*
         * =========================================
         * GRADE 11 QUIZ DATA
         * =========================================
         */

        const grade11Results = [];


        for (
            let i = 1;
            i <= GRADE11_TOTAL_LESSONS;
            i++
        ) {

            const key =
                "grade11_lesson" +
                i +
                "_quiz_result";


            const savedResult =
                localStorage.getItem(key);


            if (!savedResult) {
                continue;
            }


            try {

                const result =
                    JSON.parse(
                        savedResult
                    );


                if (
                    result &&
                    result.completed === true
                ) {

                    grade11Results.push(
                        {
                            lesson: i,
                            result: result
                        }
                    );

                }

            }

            catch (error) {

                console.warn(
                    "Invalid Grade 11 quiz result:",
                    key
                );

            }

        }


        /*
         * =========================================
         * GRADE 11 QUIZ COUNT
         * =========================================
         */

        const grade11QuizCount =
            grade11Results.length;


        /*
         * =========================================
         * TOTAL QUIZ COUNT
         * =========================================
         */

        const totalQuizCount =
            grade10QuizCount +
            grade11QuizCount;


        /*
         * =========================================
         * FIND LATEST QUIZ
         * =========================================
         *
         * Grade 10:
         * Existing system does not provide
         * completedAt, therefore it is used
         * as the fallback.
         *
         * Grade 11:
         * completedAt is available.
         */

        let latestScore =
            grade10LastScore;


        let latestCompletedAt = null;


        grade11Results.forEach(
            function (item) {

                const result =
                    item.result;


                if (
                    result.completedAt
                ) {

                    const resultDate =
                        new Date(
                            result.completedAt
                        );


                    if (
                        latestCompletedAt === null ||
                        resultDate >
                        latestCompletedAt
                    ) {

                        latestCompletedAt =
                            resultDate;


                        latestScore =
                            Number(
                                result.percentage
                            ) || 0;

                    }

                }

            }
        );


        /*
         * =========================================
         * LAST QUIZ SCORE
         * =========================================
         */

        const lastScoreElement =
            document.getElementById(
                "lastScore"
            );


        if (lastScoreElement) {

            if (totalQuizCount > 0) {

                lastScoreElement.textContent =
                    latestScore +
                    "%";

            }

            else {

                lastScoreElement.textContent =
                    "0%";

            }

        }


        /*
         * =========================================
         * QUIZ COUNT DISPLAY
         * =========================================
         */

        const quizCountElement =
            document.getElementById(
                "quizCount"
            );


        if (quizCountElement) {

            quizCountElement.textContent =
                totalQuizCount;

        }


        /*
         * =========================================
         * LESSON PROGRESS
         * =========================================
         */

        const lessonProgress =
            Math.round(
                (
                    totalLessonsCompleted /
                    TOTAL_LESSONS
                ) * 100
            );


        /*
         * =========================================
         * QUIZ PROGRESS
         * =========================================
         *
         * Last completed quiz percentage.
         */

        const quizProgress =
            Math.min(
                Math.max(
                    latestScore,
                    0
                ),
                100
            );


        /*
         * =========================================
         * OVERALL PROGRESS
         * =========================================
         *
         * 50% Lesson Progress
         * 50% Quiz Progress
         *
         * Existing Dashboard method preserved.
         */

        let progress =
            Math.round(
                (
                    (
                        lessonProgress *
                        0.5
                    ) +
                    (
                        quizProgress *
                        0.5
                    )
                )
            );


        if (progress > 100) {
            progress = 100;
        }


        if (progress < 0) {
            progress = 0;
        }


        /*
         * =========================================
         * PROGRESS BAR
         * =========================================
         */

        const progressBar =
            document.getElementById(
                "progressBar"
            );


        if (progressBar) {

            progressBar.style.width =
                progress + "%";

        }


        /*
         * =========================================
         * PROGRESS TEXT
         * =========================================
         */

        const progressText =
            document.getElementById(
                "progressText"
            );


        if (progressText) {

            progressText.textContent =
                progress +
                "% completed";

        }


        /*
         * =========================================
         * LEARNING STATUS
         * =========================================
         */

        let status =
            "Not Started";


        if (
            totalLessonsCompleted === 0 &&
            totalQuizCount === 0
        ) {

            status =
                "Not Started";

        }

        else if (
            totalLessonsCompleted ===
            TOTAL_LESSONS
        ) {

            status =
                "All Lessons Completed";

        }

        else if (
            latestScore >= 75
        ) {

            status =
                "Excellent";

        }

        else if (
            latestScore >= 50
        ) {

            status =
                "Good Progress";

        }

        else {

            status =
                "Keep Practicing";

        }


        /*
         * =========================================
         * DISPLAY STATUS
         * =========================================
         */

        const learningStatus =
            document.getElementById(
                "learningStatus"
            );


        if (learningStatus) {

            learningStatus.textContent =
                status;

        }


        /*
         * =========================================
         * CONSOLE INFORMATION
         * =========================================
         *
         * Useful for checking the system.
         */

        console.log(
            "================================="
        );

        console.log(
            "Unique EduZone Dashboard"
        );

        console.log(
            "Grade 10 Lessons:",
            grade10LessonsCompleted +
            " / " +
            GRADE10_TOTAL_LESSONS
        );

        console.log(
            "Grade 11 Lessons:",
            grade11LessonsCompleted +
            " / " +
            GRADE11_TOTAL_LESSONS
        );

        console.log(
            "Total Lessons:",
            totalLessonsCompleted +
            " / " +
            TOTAL_LESSONS
        );

        console.log(
            "Grade 10 Quizzes:",
            grade10QuizCount
        );

        console.log(
            "Grade 11 Quizzes:",
            grade11QuizCount
        );

        console.log(
            "Total Quizzes:",
            totalQuizCount
        );

        console.log(
            "Latest Score:",
            latestScore + "%"
        );

        console.log(
            "Overall Progress:",
            progress + "%"
        );

        console.log(
            "================================="
        );

    }
);
