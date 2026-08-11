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



function completeLesson(lessonId) {

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



function updateLessonCards() {

    const completedLessons =
        getCompletedLessons();


    /*
     * Update each lesson
     */

    for (
        let i = 1;
        i <= TOTAL_LESSONS;
        i++
    ) {

        const lessonId =
            "lesson" + i;


        const progressBar =
            document.getElementById(
                lessonId + "Progress"
            );


        const progressText =
            document.getElementById(
                lessonId + "ProgressText"
            );


        const status =
            document.getElementById(
                lessonId + "Status"
            );


        const button =
            document.getElementById(
                lessonId + "Button"
            );


        const completed =
            completedLessons.includes(
                lessonId
            );


        if (completed) {

            /*
             * Completed lesson
             */

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

            /*
             * Not completed
             */

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



    /*
     * Overall Lesson Progress
     */

    const completedCount =
        completedLessons.length;


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



document.addEventListener(
    "DOMContentLoaded",
    function () {

        updateLessonCards();

    }
);
