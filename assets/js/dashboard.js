document.addEventListener(
    "DOMContentLoaded",
    function () {


        /*
         * Profile Data
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
         * Quiz Data
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
         * Welcome Message
         */

        document.getElementById(
            "welcomeMessage"
        ).textContent =
            "Welcome, " +
            studentName;



        /*
         * Profile Information
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
         * Last Score
         */

        document.getElementById(
            "lastScore"
        ).textContent =
            lastScore + "%";



        /*
         * Quiz Count
         */

        document.getElementById(
            "quizCount"
        ).textContent =
            completedQuizzes;



        /*
         * Progress
         */

        let progress =
            lastScore;


        if (progress > 100) {

            progress = 100;

        }


        document.getElementById(
            "progressBar"
        ).style.width =
            progress + "%";


        document.getElementById(
            "progressText"
        ).textContent =
            progress +
            "% completed";



        /*
         * Learning Status
         */

        let status =
            "Not Started";


        if (completedQuizzes === 0) {

            status =
                "Not Started";

        }

        else if (lastScore >= 75) {

            status =
                "Excellent";

        }

        else if (lastScore >= 50) {

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

/*
 * Lessons Progress
 */

const TOTAL_LESSONS = 4;


function getCompletedLessons() {

    const saved =
        localStorage.getItem(
            "uez_completed_lessons"
        );

    if (!saved) {

        return [];

    }

    try {

        return JSON.parse(saved);

    } catch (error) {

        return [];

    }

}



function updateLessonsProgress() {

    const completedLessons =
        getCompletedLessons();


    const completedCount =
        completedLessons.length;


    const progress =
        Math.round(
            (completedCount /
                TOTAL_LESSONS) * 100
        );


    /*
     * Lessons Completed
     */

    const lessonsCompleted =
        document.getElementById(
            "lessonsCompleted"
        );


    if (lessonsCompleted) {

        lessonsCompleted.textContent =
            completedCount +
            " / " +
            TOTAL_LESSONS;

    }


    /*
     * Overall Progress
     */

    const progressBar =
        document.getElementById(
            "progressBar"
        );


    const progressText =
        document.getElementById(
            "progressText"
        );


    if (progressBar) {

        progressBar.style.width =
            progress + "%";

    }


    if (progressText) {

        progressText.textContent =
            progress +
            "% completed";

    }

}



document.addEventListener(
    "DOMContentLoaded",
    function () {

        updateLessonsProgress();

    }
);
