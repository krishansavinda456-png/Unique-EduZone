document.addEventListener(
    "DOMContentLoaded",
    function () {

        /*
         * =========================================
         * UNIQUE EDUZONE STUDENT DASHBOARD
         * LESSON 1 - LESSON 10
         * =========================================
         */

        const TOTAL_LESSONS = 10;


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
         * QUIZ DATA
         * =========================================
         */

        const lastScore =
            Number(
                localStorage.getItem(
                    "uez_last_score"
                )
            ) || 0;


        const completedQuizzes =
            Number(
                localStorage.getItem(
                    "uez_quiz_count"
                )
            ) || 0;



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
         * LAST QUIZ SCORE
         * =========================================
         */

        const lastScoreElement =
            document.getElementById(
                "lastScore"
            );


        if (lastScoreElement) {

            if (completedQuizzes > 0) {

                lastScoreElement.textContent =
                    lastScore + "%";

            }

            else {

                lastScoreElement.textContent =
                    "0%";

            }

        }



        /*
         * =========================================
         * QUIZ COUNT
         * =========================================
         */

        const quizCountElement =
            document.getElementById(
                "quizCount"
            );


        if (quizCountElement) {

            quizCountElement.textContent =
                completedQuizzes;

        }



        /*
         * =========================================
         * GET COMPLETED LESSONS
         * =========================================
         */

        let completedLessons = [];


        const savedLessons =
            localStorage.getItem(
                "uez_completed_lessons"
            );


        if (savedLessons) {

            try {

                completedLessons =
                    JSON.parse(
                        savedLessons
                    );

            }

            catch (error) {

                completedLessons = [];

            }

        }


        if (
            !Array.isArray(
                completedLessons
            )
        ) {

            completedLessons = [];

        }



        /*
         * =========================================
         * VALIDATE LESSON 1 - 10
         * =========================================
         *
         * Only Lesson 1-10 are counted.
         */

        completedLessons =
            completedLessons.filter(
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
                        lessonNumber <= TOTAL_LESSONS
                    );

                }
            );



        /*
         * =========================================
         * REMOVE DUPLICATES
         * =========================================
         */

        completedLessons =
            completedLessons.filter(
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



        /*
         * =========================================
         * LESSONS COMPLETED
         * =========================================
         */

        const lessonsCompleted =
            completedLessons.length;


        const lessonsCompletedElement =
            document.getElementById(
                "lessonsCompleted"
            );


        if (
            lessonsCompletedElement
        ) {

            lessonsCompletedElement.textContent =
                lessonsCompleted +
                " / " +
                TOTAL_LESSONS;

        }



        /*
         * =========================================
         * LESSON PROGRESS
         * =========================================
         */

        const lessonProgress =
            Math.round(
                (
                    lessonsCompleted /
                    TOTAL_LESSONS
                ) * 100
            );



        /*
         * =========================================
         * QUIZ PROGRESS
         * =========================================
         *
         * Last quiz score is used as
         * current quiz progress.
         */

        const quizProgress =
            Math.min(
                Math.max(
                    lastScore,
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
            lessonsCompleted === 0 &&
            completedQuizzes === 0
        ) {

            status =
                "Not Started";

        }

        else if (
            lessonsCompleted ===
            TOTAL_LESSONS
        ) {

            status =
                "Lessons Completed";

        }

        else if (
            lastScore >= 75
        ) {

            status =
                "Excellent";

        }

        else if (
            lastScore >= 50
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
         * DISPLAY LEARNING STATUS
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

    }
);
