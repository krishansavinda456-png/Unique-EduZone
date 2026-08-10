document.addEventListener(
    "DOMContentLoaded",
    function () {


        const form =
            document.getElementById(
                "profileForm"
            );


        const nameInput =
            document.getElementById(
                "studentName"
            );


        const gradeInput =
            document.getElementById(
                "studentGrade"
            );


        const subjectInput =
            document.getElementById(
                "studentSubject"
            );


        const message =
            document.getElementById(
                "saveMessage"
            );


        /*
         * Load saved profile
         */

        nameInput.value =
            localStorage.getItem(
                "uez_student_name"
            ) || "";


        gradeInput.value =
            localStorage.getItem(
                "uez_student_grade"
            ) || "";


        subjectInput.value =
            localStorage.getItem(
                "uez_student_subject"
            ) || "";


        /*
         * Save profile
         */

        form.addEventListener(
            "submit",
            function (event) {

                event.preventDefault();


                const name =
                    nameInput.value.trim();


                const grade =
                    gradeInput.value;


                const subject =
                    subjectInput.value.trim();


                /*
                 * Save to Local Storage
                 */

                localStorage.setItem(
                    "uez_student_name",
                    name
                );


                localStorage.setItem(
                    "uez_student_grade",
                    grade
                );


                localStorage.setItem(
                    "uez_student_subject",
                    subject
                );


                /*
                 * Message
                 */

                message.textContent =
                    "Profile saved successfully.";


            }
        );

    }
);