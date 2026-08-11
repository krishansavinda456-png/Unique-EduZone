const TOTAL_LESSONS = 4;


function getCompletedLessons() {

    const saved =
        localStorage.getItem(
            "uez_completed_lessons"
        );

    if (!saved) {
        return [];
    }

    return JSON.parse(saved);
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


    updateLessonButtons();

}



function updateLessonButtons() {

    const completedLessons =
        getCompletedLessons();


    completedLessons.forEach(
        function (lessonId) {

            const button =
                document.getElementById(
                    lessonId + "Button"
                );


            if (button) {

                button.textContent =
                    "✓ Completed";

                button.disabled =
                    true;

            }

        }
    );

}



document.addEventListener(
    "DOMContentLoaded",
    function () {

        updateLessonButtons();

    }
);