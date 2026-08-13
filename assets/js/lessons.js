/*
 * =========================================
 * UNIQUE EDUZONE
 * LESSON PROGRESS SYSTEM
 * LESSON 01 - LESSON 10
 * =========================================
 */

const TOTAL_LESSONS = 10;


/*
 * =========================================
 * GET COMPLETED LESSONS
 * =========================================
 */

function getCompletedLessons() {

    const saved =
        localStorage.getItem(
            "uez_completed_lessons"
        );


    if (!saved) {

        return [];

    }


    try {

        const parsed =
            JSON.parse(saved);


        if (!Array.isArray(parsed)) {

            return [];

        }


        return parsed;

    }

    catch (error) {

        return [];

    }

}


/*
 * =========================================
 * COMPLETE LESSON
 * =========================================
 */

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


/*
 * =========================================
 * UPDATE LESSON CARDS
 * =========================================
 */

function updateLessonCards() {

    const completedLessons =
        getCompletedLessons();


    /*
     * =====================================
     * UPDATE EACH LESSON
     * =====================================
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


        /*
         * =================================
         * COMPLETED LESSON
         * =================================
         */

        if (completed) {

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


                button.classList.remove(
                    "locked"
                );

            }

        }


        /*
         * =================================
         * NOT COMPLETED
         * =================================
         */

        else {

            if (progressBar) {

                progressBar.style.width =
                    "0%";

            }


            if (progressText) {

                progressText.textContent =
                    "0% completed";

            }


            /*
             * =================================
             * LESSON 6 - 10
             * CURRENTLY LOCKED
             * =================================
             */

            if (i >= 6) {

                if (status) {

                    status.textContent =
                        "Coming Soon";

                }


                if (button) {

                    button.textContent =
                        "🔒 Coming Soon";


                    button.classList.add(
                        "locked"
                    );


                    button.classList.remove(
                        "completed"
                    );

                }

            }


            /*
             * =================================
             * LESSON 1 - 5
             * AVAILABLE
             * =================================
             */

            else {

                if (status) {

                    status.textContent =
                        "Not Started";

                }


                if (button) {

                    button.classList.remove(
                        "completed"
                    );


                    button.classList.remove(
                        "locked"
                    );


                    /*
                     * Lesson 5
                     */

                    if (i === 5) {

                        button.textContent =
                            "▶ Start Lesson 5";

                    }

                    /*
                     * Lesson 1 - 4
                     */

                    else {

                        button.textContent =
                            "▶ Continue Lesson";

                    }

                }

            }

        }

    }


    /*
     * =========================================
     * OVERALL LESSON PROGRESS
     * =========================================
     */

    const completedCount =
        completedLessons.filter(
            function (lessonId) {

                const number =
                    parseInt(
                        lessonId.replace(
                            "lesson",
                            ""
                        )
                    );


                return (
                    number >= 1 &&
                    number <= TOTAL_LESSONS
                );

            }
        ).length;


    const overallProgress =
        Math.round(
            (
                completedCount /
                TOTAL_LESSONS
            ) *
            100
        );


    /*
     * =========================================
     * OVERALL BAR
     * =========================================
     */

    const overallBar =
        document.getElementById(
            "overallLessonBar"
        );


    if (overallBar) {

        overallBar.style.width =
            overallProgress + "%";

    }


    /*
     * =========================================
     * OVERALL PERCENTAGE
     * =========================================
     */

    const overallPercent =
        document.getElementById(
            "overallLessonPercent"
        );


    if (overallPercent) {

        overallPercent.textContent =
            overallProgress + "%";

    }


    /*
     * =========================================
     * OVERALL TEXT
     * =========================================
     */

    const overallText =
        document.getElementById(
            "overallLessonText"
        );


    if (overallText) {

        overallText.textContent =
            completedCount +
            " / " +
            TOTAL_LESSONS +
            " lessons completed";

    }

}


/*
 * =========================================
 * PAGE LOAD
 * =========================================
 */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        updateLessonCards();

    }
);
