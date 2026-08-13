const TOTAL_LESSONS = 4;


/* =========================================
   GET COMPLETED LESSONS
========================================= */

function getCompletedLessons() {

    const saved =
        localStorage.getItem(
            "uez_completed_lessons"
        );


    if (!saved) {

        return [];

    }


    try {

        const lessons =
            JSON.parse(saved);


        if (
            Array.isArray(lessons)
        ) {

            return lessons;

        }


        return [];

    }

    catch (error) {

        return [];

    }

}


/* =========================================
   COMPLETE LESSON
========================================= */

function completeLesson(
    lessonId
) {

    let completedLessons =
        getCompletedLessons();


    if (
        !completedLessons.includes(
            lessonId
        )
    ) {

        completedLessons.push(
            lessonId
        );


        localStorage.setItem(
            "uez_completed_lessons",
            JSON.stringify(
                completedLessons
            )
        );

    }


    updateLessonCards();

}


/* =========================================
   UPDATE LESSON CARDS
========================================= */

function updateLessonCards() {

    const completedLessons =
        getCompletedLessons();


    let completedCount = 0;


    for (
        let i = 1;
        i <= TOTAL_LESSONS;
        i++
    ) {

        const lessonId =
            "lesson" + i;


        const progressBar =
            document.getElementById(
                lessonId +
                "Progress"
            );


        const progressText =
            document.getElementById(
                lessonId +
                "ProgressText"
            );


        const status =
            document.getElementById(
                lessonId +
                "Status"
            );


        const button =
            document.getElementById(
                lessonId +
                "Button"
            );


        const completed =
            completedLessons.includes(
                lessonId
            );


        if (completed) {

            completedCount++;


            if (progressBar) {

                progressBar.style.width =
                    "100%";

            }


            if (progressText) {

                progressText.textContent =
                    "100% completed";

            }


            if (status) {

                status.textContent =
                    "✓ Completed";

                status.style.color =
                    "#198754";

            }


            if (button) {

                button.textContent =
                    "✓ Completed";

                button.classList.add(
                    "completed"
                );

            }

        }

        else {

            if (progressBar) {

                progressBar.style.width =
                    "0%";

            }


            if (progressText) {

                progressText.textContent =
                    "0% completed";

            }


            if (status) {

                status.textContent =
                    "Not Started";

                status.style.color =
                    "";

            }


            if (button) {

                button.textContent =
                    "▶ Continue Lesson";

                button.classList.remove(
                    "completed"
                );

            }

        }

    }


    /* =====================================
       OVERALL PROGRESS
    ===================================== */

    const overallProgress =
        Math.round(
            (
                completedCount /
                TOTAL_LESSONS
            ) * 100
        );


    const overallBar =
        document.getElementById(
            "overallLessonBar"
        );


    const overallPercent =
        document.getElementById(
            "overallLessonPercent"
        );


    const overallText =
        document.getElementById(
            "overallLessonText"
        );


    if (overallBar) {

        overallBar.style.width =
            overallProgress + "%";

    }


    if (overallPercent) {

        overallPercent.textContent =
            overallProgress + "%";

    }


    if (overallText) {

        overallText.textContent =
            completedCount +
            " / " +
            TOTAL_LESSONS +
            " lessons completed";

    }

}


/* =========================================
   PAGE LOAD
========================================= */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        updateLessonCards();

    }
);
