document.addEventListener(
    "DOMContentLoaded",
    function () {

        /*
         * Lesson 1 Quiz
         */

        const questions = [

            {
                question:
                    "ව්‍යාපාරයක මූලික කාර්යයක් ලෙස සැලකිය හැක්කේ කුමක්ද?",

                options: [
                    "භාණ්ඩ හා සේවා සැපයීම",
                    "මුදල් පමණක් ගබඩා කිරීම",
                    "බදු පමණක් ගෙවීම",
                    "ගිණුම් පොත් පමණක් තැබීම"
                ],

                answer: 0
            },


            {
                question:
                    "පහත සඳහන් කුමක් මිනිසාගේ මූලික අවශ්‍යතාවයකට උදාහරණයකි?",

                options: [
                    "ආහාර",
                    "සුඛෝපභෝගී ඔරලෝසුව",
                    "අලංකාර භාණ්ඩයක්",
                    "විලාසිතා භාණ්ඩයක්"
                ],

                answer: 0
            },


            {
                question:
                    "මිනිස් අවශ්‍යතා හා වුවමනා සපුරාලීම සඳහා භාවිත කළ හැකි ද්‍රව්‍යමය දේ හඳුන්වන්නේ කෙසේද?",

                options: [
                    "සේවා",
                    "භාණ්ඩ",
                    "ශ්‍රමය",
                    "ප්‍රාග්ධනය"
                ],

                answer: 1
            },


            {
                question:
                    "පහත සඳහන් කුමක් සේවාවකට උදාහරණයක්ද?",

                options: [
                    "ඇඳුමක්",
                    "ගෘහ භාණ්ඩයක්",
                    "බැංකු සේවාවක්",
                    "ආහාර පැකට්ටුවක්"
                ],

                answer: 2
            },


            {
                question:
                    "පහත සඳහන් කුමක් නිෂ්පාදන සාධකයකි?",

                options: [
                    "භූමිය",
                    "පාරිභෝගිකයා",
                    "වෙළඳ දැන්වීම",
                    "තරඟකරු"
                ],

                answer: 0
            },


            {
                question:
                    "නිෂ්පාදනය සඳහා යොදවන කායික හා මානසික දායකත්වය හඳුන්වන්නේ කුමක් ලෙසද?",

                options: [
                    "භූමිය",
                    "ශ්‍රමය",
                    "ප්‍රාග්ධනය",
                    "ව්‍යවසායකත්වය"
                ],

                answer: 1
            },


            {
                question:
                    "නිෂ්පාදනය සඳහා භාවිත කරන මිනිසා විසින් නිපදවන සම්පත් හඳුන්වන්නේ කුමක් ලෙසද?",

                options: [
                    "භූමිය",
                    "ශ්‍රමය",
                    "ප්‍රාග්ධනය",
                    "පාරිභෝගිකයා"
                ],

                answer: 2
            },


            {
                question:
                    "ව්‍යාපාරයකට අවශ්‍ය අමුද්‍රව්‍ය හෝ වෙනත් සම්පත් සපයන පාර්ශ්වය කවුද?",

                options: [
                    "පාරිභෝගිකයා",
                    "සැපයුම්කරු",
                    "තරඟකරු",
                    "සේවකයා"
                ],

                answer: 1
            },


            {
                question:
                    "ව්‍යාපාරයේ භාණ්ඩ හා සේවා මිලදී ගන්නා පාර්ශ්වය කවුද?",

                options: [
                    "පාරිභෝගිකයා",
                    "සැපයුම්කරු",
                    "රජය",
                    "ණයහිමියා"
                ],

                answer: 0
            },


            {
                question:
                    "පහත සඳහන් කුමක් ව්‍යාපාරයේ ඇල්මැති පාර්ශ්වයක් ලෙස සැලකිය හැකිද?",

                options: [
                    "පාරිභෝගිකයා",
                    "සේවකයා",
                    "රජය",
                    "ඉහත සියල්ල"
                ],

                answer: 3
            }

        ];


        /*
         * Quiz Variables
         */

        let currentQuestion = 0;

        let score = 0;

        let selectedAnswer = null;

        let timeLeft = 60;

        let quizFinished = false;


        /*
         * HTML Elements
         */

        const questionBox =
            document.getElementById(
                "questionBox"
            );


        const optionsBox =
            document.getElementById(
                "optionsBox"
            );


        const nextButton =
            document.getElementById(
                "nextButton"
            );


        const quizTimer =
            document.getElementById(
                "quizTimer"
            );


        const quizProgress =
            document.getElementById(
                "quizProgress"
            );


        /*
         * Show Question
         */

        function showQuestion() {

            selectedAnswer = null;


            const question =
                questions[currentQuestion];


            questionBox.innerHTML =

                "<h2>" +
                "Question " +
                (currentQuestion + 1) +
                " / " +
                questions.length +
                "</h2>" +

                "<p>" +
                question.question +
                "</p>";


            optionsBox.innerHTML = "";


            question.options.forEach(
                function (option, index) {

                    const label =
                        document.createElement(
                            "label"
                        );


                    label.className =
                        "quiz-option";


                    label.innerHTML =

                        "<input " +
                        "type='radio' " +
                        "name='answer' " +
                        "value='" +
                        index +
                        "'>" +

                        "<span>" +
                        option +
                        "</span>";


                    label.addEventListener(
                        "click",
                        function () {

                            selectedAnswer =
                                index;

                        }
                    );


                    optionsBox.appendChild(
                        label
                    );

                }
            );


            /*
             * Progress Bar
             */

            const progress =
                Math.round(
                    (currentQuestion /
                        questions.length) *
                    100
                );


            if (quizProgress) {

                quizProgress.style.width =
                    progress + "%";

            }


            /*
             * Last Question Button
             */

            if (
                currentQuestion ===
                questions.length - 1
            ) {

                nextButton.textContent =
                    "Finish Quiz";

            }

            else {

                nextButton.textContent =
                    "Next";

            }

        }


        /*
         * Next Question
         */

        window.nextQuestion =
            function () {


                if (quizFinished) {

                    return;

                }


                /*
                 * Check Answer
                 */

                if (
                    selectedAnswer ===
                    questions[
                        currentQuestion
                    ].answer
                ) {

                    score++;

                }


                /*
                 * Last Question
                 */

                if (
                    currentQuestion ===
                    questions.length - 1
                ) {

                    finishQuiz();

                    return;

                }


                currentQuestion++;

                showQuestion();

            };


        /*
         * Finish Quiz
         */

        function finishQuiz() {

            if (quizFinished) {

                return;

            }


            quizFinished = true;


            /*
             * Percentage
             */

            const totalQuestions =
                questions.length;


            const percentage =
                Math.round(
                    (score /
                        totalQuestions) *
                    100
                );


            /*
             * Pass / Fail
             */

            const passMark = 50;


            let status;


            if (
                percentage >=
                passMark
            ) {

                status =
                    "Pass";

            }

            else {

                status =
                    "Fail";

            }


            /*
             * Save Score
             */

            localStorage.setItem(
                "uez_last_score",
                percentage
            );


            localStorage.setItem(
                "uez_last_quiz_correct",
                score
            );


            localStorage.setItem(
                "uez_last_quiz_total",
                totalQuestions
            );


            localStorage.setItem(
                "uez_last_quiz_percentage",
                percentage
            );


            localStorage.setItem(
                "uez_quiz_status",
                "Completed"
            );


            localStorage.setItem(
                "uez_quiz_pass_fail",
                status
            );


            /*
             * Quiz Count
             */

            let quizCount =
                Number(
                    localStorage.getItem(
                        "uez_quiz_count"
                    )
                ) || 0;


            quizCount++;


            localStorage.setItem(
                "uez_quiz_count",
                quizCount
            );


            /*
             * Mark Lesson 1 Completed
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
                !completedLessons.includes(
                    "lesson1"
                )
            ) {

                completedLessons.push(
                    "lesson1"
                );

            }


            localStorage.setItem(
                "uez_completed_lessons",
                JSON.stringify(
                    completedLessons
                )
            );


            /*
             * Go to Results
             */

            window.location.href =
                "results.html";

        }


        /*
         * Auto Submit - Time Up
         */

        function autoSubmitQuiz() {

            if (quizFinished) {

                return;

            }


            quizFinished = true;


            const totalQuestions =
                questions.length;


            const percentage =
                Math.round(
                    (score /
                        totalQuestions) *
                    100
                );


            /*
             * Save Time Up Status
             */

            localStorage.setItem(
                "uez_last_score",
                percentage
            );


            localStorage.setItem(
                "uez_last_quiz_correct",
                score
            );


            localStorage.setItem(
                "uez_last_quiz_total",
                totalQuestions
            );


            localStorage.setItem(
                "uez_last_quiz_percentage",
                percentage
            );


            localStorage.setItem(
                "uez_quiz_status",
                "Time Up"
            );


            localStorage.setItem(
                "uez_quiz_pass_fail",
                percentage >= 50
                    ? "Pass"
                    : "Fail"
            );


            /*
             * Go to Results
             */

            window.location.href =
                "results.html";

        }


        /*
         * Countdown Timer
         */

        function updateTimer() {

            const minutes =
                Math.floor(
                    timeLeft / 60
                );


            const seconds =
                timeLeft % 60;


            if (quizTimer) {

                quizTimer.textContent =

                    String(minutes)
                        .padStart(2, "0") +

                    ":" +

                    String(seconds)
                        .padStart(2, "0");

            }


            if (timeLeft <= 0) {

                clearInterval(
                    timerInterval
                );


                autoSubmitQuiz();


                return;

            }


            timeLeft--;

        }


        const timerInterval =
            setInterval(
                updateTimer,
                1000
            );


        /*
         * Start Quiz
         */

        showQuestion();

        updateTimer();

    }
);
