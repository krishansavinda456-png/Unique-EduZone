document.addEventListener(
    "DOMContentLoaded",
    function () {

        /*
         * =========================
         * Profile Data
         * =========================
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
         * =========================
         * Quiz Data
         * =========================
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
         * =========================
         * Welcome Message
         * =========================
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
         * =========================
         * Profile Information
         * =========================
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
         * =========================
         * Last Quiz Score
         * =========================
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
         * =========================
         * Quiz Count
         * =========================
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
         * =========================
         * Lessons Progress
         * =========================
         */

        const TOTAL_LESSONS = 4;


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
         * Remove duplicate lesson numbers
         */

        completedLessons =
            completedLessons.filter(
                function (lesson, index, array) {

                    return (
                        array.indexOf(
                            lesson
                        ) === index
                    );

                }
            );


        const lessonsCompleted =
            completedLessons.length;


        /*
         * =========================
         * Lessons Completed
         * =========================
         */

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
         * =========================
         * Overall Progress
         * =========================
         *
         * 50% Lesson Progress
         * 50% Quiz Progress
         */

        const lessonProgress =
            Math.round(
                (
                    lessonsCompleted /
                    TOTAL_LESSONS
                ) * 100
            );


        const quizProgress =
            Math.min(
                Math.max(
                    lastScore,
                    0
                ),
                100
            );


        let progress =
            Math.round(
                (
                    (lessonProgress * 0.5) +
                    (quizProgress * 0.5)
                )
            );


        if (progress > 100) {

            progress = 100;

        }


        if (progress < 0) {

            progress = 0;

        }


        /*
         * =========================
         * Progress Bar
         * =========================
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
         * =========================
         * Progress Text
         * =========================
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
         * =========================
         * Learning Status
         * =========================
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
