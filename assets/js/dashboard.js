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

        document.getElementById(
            "welcomeMessage"
        ).textContent =
            "Welcome, " +
            studentName;



        /*
         * =========================
         * Profile Information
         * =========================
         */

        document.getElementById(
            "studentName"
        ).textContent =
            studentName;


        document.getElementById(
            "studentGrade"
        ).textContent =
            studentGrade;


        document.getElementById(
            "studentSubject"
        ).textContent =
            studentSubject;



        /*
         * =========================
         * Last Quiz Score
         * =========================
         */

        document.getElementById(
            "lastScore"
        ).textContent =
            lastScore + "%";



        /*
         * =========================
         * Quiz Count
         * =========================
         */

        document.getElementById(
            "quizCount"
        ).textContent =
            completedQuizzes;



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

            } catch (error) {

                completedLessons = [];

            }

        }



        const lessonsCompleted =
            completedLessons.length;



        /*
         * Lessons Completed
         */

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



        /*
         * =========================
         * Overall Progress
         * =========================
         *
         * Lesson progress is used
         * for the Dashboard progress.
         */

        let progress =
            Math.round(
                (
                    lessonsCompleted /
                    TOTAL_LESSONS
                ) * 100
            );


        if (progress > 100) {

            progress = 100;

        }



        /*
         * Progress Bar
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
         * Progress Text
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



        document.getElementById(
            "learningStatus"
        ).textContent =
            status;


    }
);
