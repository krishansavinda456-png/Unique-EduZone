document.addEventListener("DOMContentLoaded", function () {

    /*
     * =====================================================
     * UNIQUE EDUZONE STUDENT DASHBOARD
     *
     * Grade 10  -> 10 Lessons
     * Grade 11  -> 8 Lessons
     *
     * Grade 10 existing system is preserved.
     * Grade 11 uses grade11Progress / grade11CompletedLessons.
     * =====================================================
     */


    /* =====================================================
       PROFILE DATA
       ===================================================== */

    const studentName =
        localStorage.getItem("uez_student_name") || "Student";

    const studentGrade =
        localStorage.getItem("uez_student_grade") || "-";

    const studentSubject =
        localStorage.getItem("uez_student_subject") || "-";


    /* =====================================================
       DETECT GRADE
       ===================================================== */

    const gradeText =
        String(studentGrade).toLowerCase().trim();

    const isGrade11 =
        gradeText === "11" ||
        gradeText.includes("grade 11") ||
        gradeText.includes("11 ශ්‍රේණිය") ||
        gradeText.includes("11 ශ්‍රේණිය");


    /*
     * Grade 11 = 8 Lessons
     * Grade 10 = 10 Lessons
     */

    const TOTAL_LESSONS =
        isGrade11 ? 8 : 10;


    /* =====================================================
       WELCOME MESSAGE
       ===================================================== */

    const welcomeMessage =
        document.getElementById("welcomeMessage");

    if (welcomeMessage) {

        welcomeMessage.textContent =
            "Welcome, " + studentName;

    }


    /* =====================================================
       PROFILE INFORMATION
       ===================================================== */

    const nameElement =
        document.getElementById("studentName");

    if (nameElement) {

        nameElement.textContent =
            studentName;

    }


    const gradeElement =
        document.getElementById("studentGrade");

    if (gradeElement) {

        gradeElement.textContent =
            studentGrade;

    }


    const subjectElement =
        document.getElementById("studentSubject");

    if (subjectElement) {

        subjectElement.textContent =
            studentSubject;

    }


    /* =====================================================
       VARIABLES
       ===================================================== */

    let lastScore = 0;
    let completedQuizzes = 0;
    let completedLessons = [];


    /* =====================================================
       GRADE 11 DATA
       ===================================================== */

    if (isGrade11) {

        let grade11Progress = {};

        try {

            grade11Progress =
                JSON.parse(
                    localStorage.getItem(
                        "grade11Progress"
                    ) || "{}"
                );

        } catch (error) {

            grade11Progress = {};

        }


        /*
         * -----------------------------------------------
         * Grade 11 Completed Lessons
         * -----------------------------------------------
         */

        let grade11CompletedLessons = {};

        try {

            grade11CompletedLessons =
                JSON.parse(
                    localStorage.getItem(
                        "grade11CompletedLessons"
                    ) || "{}"
                );

        } catch (error) {

            grade11CompletedLessons = {};

        }


        /*
         * Count Lesson 1 - Lesson 8 only
         */

        for (let i = 1; i <= 8; i++) {

            const lessonKey =
                "lesson" + i;

            const progressData =
                grade11Progress[lessonKey];

            const completedByProgress =
                progressData &&
                progressData.completed === true;

            const completedByLessonList =
                grade11CompletedLessons[String(i)] === true ||
                grade11CompletedLessons[lessonKey] === true;

            if (
                completedByProgress ||
                completedByLessonList
            ) {

                completedLessons.push(i);

            }

        }


        /*
         * Remove duplicates
         */

        completedLessons =
            [...new Set(completedLessons)];


        /*
         * -----------------------------------------------
         * Count Completed Grade 11 Quizzes
         * -----------------------------------------------
         */

        let latestQuiz = null;


        for (let i = 1; i <= 8; i++) {

            const lessonKey =
                "lesson" + i;

            const lessonData =
                grade11Progress[lessonKey];


            if (
                lessonData &&
                lessonData.quizCompleted === true
            ) {

                completedQuizzes++;


                /*
                 * Find latest quiz
                 */

                if (
                    !latestQuiz ||
                    new Date(
                        lessonData.completedAt || 0
                    ) >
                    new Date(
                        latestQuiz.completedAt || 0
                    )
                ) {

                    latestQuiz = {

                        score:
                            Number(
                                lessonData.score
                            ) || 0,

                        percentage:
                            Number(
                                lessonData.percentage
                            ) || 0,

                        completedAt:
                            lessonData.completedAt || 0

                    };

                }

            }

        }


        /*
         * -----------------------------------------------
         * Also check individual Grade 11 result keys
         * -----------------------------------------------
         */

        for (let i = 1; i <= 8; i++) {

            const resultKey =
                "grade11_lesson" +
                i +
                "_quiz_result";


            const savedResult =
                localStorage.getItem(
                    resultKey
                );


            if (!savedResult) {
                continue;
            }


            try {

                const result =
                    JSON.parse(
                        savedResult
                    );


                /*
                 * Prevent double counting
                 */

                const alreadyCounted =
                    grade11Progress[
                        "lesson" + i
                    ] &&
                    grade11Progress[
                        "lesson" + i
                    ].quizCompleted === true;


                if (!alreadyCounted) {

                    completedQuizzes++;

                }


                if (
                    !latestQuiz ||
                    new Date(
                        result.completedAt || 0
                    ) >
                    new Date(
                        latestQuiz.completedAt || 0
                    )
                ) {

                    latestQuiz = {

                        score:
                            Number(
                                result.score
                            ) || 0,

                        percentage:
                            Number(
                                result.percentage
                            ) || 0,

                        completedAt:
                            result.completedAt || 0

                    };

                }


            } catch (error) {

                // Ignore invalid result data

            }

        }


        /*
         * -----------------------------------------------
         * Latest Grade 11 Score
         * -----------------------------------------------
         */

        if (latestQuiz) {

            lastScore =
                Math.min(
                    Math.max(
                        latestQuiz.percentage,
                        0
                    ),
                    100
                );

        }

    }


    /* =====================================================
       GRADE 10 DATA
       ===================================================== */

    else {

        /*
         * IMPORTANT:
         * Existing Grade 10 system remains unchanged.
         */

        lastScore =
            Number(
                localStorage.getItem(
                    "uez_last_score"
                )
            ) || 0;


        completedQuizzes =
            Number(
                localStorage.getItem(
                    "uez_quiz_count"
                )
            ) || 0;


        /*
         * Existing Grade 10 completed lessons
         */

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

            } catch (error) {

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
         * Only Lesson 1 - 10
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
                        lessonNumber <= 10
                    );

                }
            );


        /*
         * Remove duplicates
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

    }


    /* =====================================================
       COMPLETED LESSON COUNT
       ===================================================== */

    const lessonsCompleted =
        completedLessons.length;


    const lessonsCompletedElement =
        document.getElementById(
            "lessonsCompleted"
        );


    if (lessonsCompletedElement) {

        lessonsCompletedElement.textContent =
            lessonsCompleted +
            " / " +
            TOTAL_LESSONS;

    }


    /* =====================================================
       LAST QUIZ SCORE
       ===================================================== */

    const lastScoreElement =
        document.getElementById(
            "lastScore"
        );


    if (lastScoreElement) {

        if (completedQuizzes > 0) {

            lastScoreElement.textContent =
                lastScore + "%";

        } else {

            lastScoreElement.textContent =
                "0%";

        }

    }


    /* =====================================================
       QUIZ COUNT
       ===================================================== */

    const quizCountElement =
        document.getElementById(
            "quizCount"
        );


    if (quizCountElement) {

        quizCountElement.textContent =
            completedQuizzes;

    }


    /* =====================================================
       LESSON PROGRESS
       ===================================================== */

    const lessonProgress =
        Math.round(
            (
                lessonsCompleted /
                TOTAL_LESSONS
            ) * 100
        );


    /* =====================================================
       QUIZ PROGRESS
       ===================================================== */

    const quizProgress =
        Math.min(
            Math.max(
                lastScore,
                0
            ),
            100
        );


    /* =====================================================
       OVERALL PROGRESS
       =====================================================
       
       50% Lessons
       50% Quiz performance
       ===================================================== */

    let progress =
        Math.round(
            (
                lessonProgress * 0.5
            ) +
            (
                quizProgress * 0.5
            )
        );


    progress =
        Math.min(
            Math.max(
                progress,
                0
            ),
            100
        );


    /* =====================================================
       PROGRESS BAR
       ===================================================== */

    const progressBar =
        document.getElementById(
            "progressBar"
        );


    if (progressBar) {

        progressBar.style.width =
            progress + "%";

    }


    /* =====================================================
       PROGRESS TEXT
       ===================================================== */

    const progressText =
        document.getElementById(
            "progressText"
        );


    if (progressText) {

        progressText.textContent =
            progress +
            "% completed";

    }


    /* =====================================================
       LEARNING STATUS
       ===================================================== */

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
            "All Lessons Completed";

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


    /* =====================================================
       DISPLAY STATUS
       ===================================================== */

    const learningStatus =
        document.getElementById(
            "learningStatus"
        );


    if (learningStatus) {

        learningStatus.textContent =
            status;

    }


    /* =====================================================
       OPTIONAL: STORE GENERAL DASHBOARD DATA
       =====================================================
       
       This does NOT overwrite the existing Grade 10
       quiz system.
       ===================================================== */

    if (isGrade11) {

        const dashboardData = {

            grade: 11,

            totalLessons:
                TOTAL_LESSONS,

            completedLessons:
                lessonsCompleted,

            completedQuizzes:
                completedQuizzes,

            lastScore:
                lastScore,

            overallProgress:
                progress,

            updatedAt:
                new Date().toISOString()

        };


        localStorage.setItem(
            "uez_grade11_dashboard",
            JSON.stringify(
                dashboardData
            )
        );

    }

});
