document.addEventListener(
    "DOMContentLoaded",
    function () {

        /*
         * =========================================
         * UNIQUE EDUZONE QUIZ SYSTEM
         * Lesson 1 - Lesson 4
         * =========================================
         */

        const urlParams =
            new URLSearchParams(
                window.location.search
            );

        const lesson =
            urlParams.get("lesson") || "1";


        /*
         * =========================================
         * QUIZ QUESTIONS
         * =========================================
         */

        const quizData = {

            /*
             * =====================================
             * LESSON 1
             * =====================================
             */

            "1": [

                {
                    question:
                        "ව්‍යාපාරයක් යනු කුමක්ද?",

                    options: [
                        "අවශ්‍යතා සපුරාලීම සඳහා භාණ්ඩ හා සේවා සැපයීමේ ක්‍රියාවලියකි.",
                        "විනෝදාස්වාද කටයුත්තකි.",
                        "පාසල් අධ්‍යාපන ක්‍රියාවලියකි.",
                        "පෞද්ගලික විනෝදාංශයකි."
                    ],

                    answer: 0
                },


                {
                    question:
                        "ව්‍යාපාරයක ප්‍රධාන අරමුණක් වන්නේ කුමක්ද?",

                    options: [
                        "ලාභ ඉපයීම",
                        "නිවාඩු ගැනීම",
                        "ක්‍රීඩා කිරීම",
                        "විවේක ගැනීම"
                    ],

                    answer: 0
                },


                {
                    question:
                        "භාණ්ඩ යනු කුමක්ද?",

                    options: [
                        "ස්පර්ශ කළ හැකි දේවල්",
                        "ස්පර්ශ කළ නොහැකි සේවා පමණි",
                        "හැඟීම් පමණි",
                        "අදහස් පමණි"
                    ],

                    answer: 0
                },


                {
                    question:
                        "සේවාවකට උදාහරණයක් වන්නේ කුමක්ද?",

                    options: [
                        "කමිසයක්",
                        "පොතක්",
                        "බස් ප්‍රවාහන සේවාව",
                        "මේසයක්"
                    ],

                    answer: 2
                },


                {
                    question:
                        "ව්‍යාපාරයක පාරිභෝගිකයා යනු කවුද?",

                    options: [
                        "භාණ්ඩ හෝ සේවා ලබාගන්නා පුද්ගලයා",
                        "රජයේ නිලධාරියා",
                        "ව්‍යාපාර හිමිකරු පමණි",
                        "සේවකයා පමණි"
                    ],

                    answer: 0
                },


                {
                    question:
                        "නිෂ්පාදනය යන්නෙන් අදහස් කරන්නේ කුමක්ද?",

                    options: [
                        "භාණ්ඩ හා සේවා නිර්මාණය කිරීම",
                        "භාණ්ඩ විනාශ කිරීම",
                        "මුදල් තබා ගැනීම",
                        "භාණ්ඩ සඟවා තැබීම"
                    ],

                    answer: 0
                },


                {
                    question:
                        "ව්‍යාපාරයක අභ්‍යන්තර පාර්ශ්වයකට උදාහරණයක් වන්නේ?",

                    options: [
                        "පාරිභෝගිකයා",
                        "සේවකයා",
                        "රජය",
                        "බැංකුව"
                    ],

                    answer: 1
                },


                {
                    question:
                        "ව්‍යාපාරයක බාහිර පාර්ශ්වයකට උදාහරණයක් වන්නේ?",

                    options: [
                        "සේවකයා",
                        "කළමනාකරු",
                        "පාරිභෝගිකයා",
                        "අධ්‍යක්ෂ"
                    ],

                    answer: 2
                },


                {
                    question:
                        "ව්‍යාපාරික කටයුතු සඳහා අවශ්‍ය සම්පතක් වන්නේ?",

                    options: [
                        "ශ්‍රමය",
                        "විනෝදය",
                        "නිවාඩුව",
                        "ක්‍රීඩාව"
                    ],

                    answer: 0
                },


                {
                    question:
                        "ව්‍යාපාරයකින් පාරිභෝගිකයාට ලැබෙන ප්‍රධාන ප්‍රතිලාභයක් වන්නේ?",

                    options: [
                        "අවශ්‍යතා හා වුවමනා සපුරා ගැනීම",
                        "බදු වැඩිවීම",
                        "වියදම් වැඩිවීම",
                        "නිෂ්පාදනය අඩුවීම"
                    ],

                    answer: 0
                }

            ],



            /*
             * =====================================
             * LESSON 2
             * =====================================
             */

            "2": [

                {
                    question:
                        "ව්‍යාපාර පරිසරය යනු කුමක්ද?",

                    options: [
                        "ව්‍යාපාරයට බලපාන අභ්‍යන්තර හා බාහිර සාධක එකතුව",
                        "ව්‍යාපාර ගොඩනැගිල්ල පමණි",
                        "සේවකයන් පමණි",
                        "භාණ්ඩ පමණි"
                    ],

                    answer: 0
                },


                {
                    question:
                        "ව්‍යාපාරයක අභ්‍යන්තර පරිසරයට අයත් වන්නේ?",

                    options: [
                        "සේවකයන්",
                        "දේශපාලන තත්ත්වය",
                        "උද්ධමනය",
                        "රජයේ නීති"
                    ],

                    answer: 0
                },


                {
                    question:
                        "ව්‍යාපාරයක බාහිර පරිසර සාධකයකට උදාහරණයක් වන්නේ?",

                    options: [
                        "සේවකයන්",
                        "කළමනාකරණය",
                        "තාක්ෂණික වෙනස්කම්",
                        "ව්‍යාපාර සංස්කෘතිය"
                    ],

                    answer: 2
                },


                {
                    question:
                        "ආර්ථික පරිසරයට අයත් සාධකයක් වන්නේ?",

                    options: [
                        "උද්ධමනය",
                        "සේවක පුහුණුව",
                        "කාර්යාල ගෘහ භාණ්ඩ",
                        "කළමනාකරු"
                    ],

                    answer: 0
                },


                {
                    question:
                        "තාක්ෂණික පරිසරයේ වෙනස්වීමක ප්‍රතිඵලයක් විය හැක්කේ?",

                    options: [
                        "නව නිෂ්පාදන ක්‍රම බිහිවීම",
                        "ව්‍යාපාර සම්පූර්ණයෙන් නතර වීම",
                        "පාරිභෝගිකයන් නැතිවීම පමණි",
                        "මුදල් භාවිතය නැතිවීම"
                    ],

                    answer: 0
                },


                {
                    question:
                        "දේශපාලන පරිසරයට සම්බන්ධ වන්නේ?",

                    options: [
                        "රජයේ ප්‍රතිපත්ති",
                        "සේවක වැටුප පමණි",
                        "භාණ්ඩයේ වර්ණය",
                        "කාර්යාලයේ ප්‍රමාණය"
                    ],

                    answer: 0
                },


                {
                    question:
                        "සමාජ පරිසරයේ වෙනස්වීමක් වන්නේ?",

                    options: [
                        "පාරිභෝගික රුචි අරුචිකම් වෙනස්වීම",
                        "බැංකු ගිණුම",
                        "කාර්යාල මේසය",
                        "යන්ත්‍රයක්"
                    ],

                    answer: 0
                },


                {
                    question:
                        "නීතිමය පරිසරය ව්‍යාපාරයට බලපාන්නේ කෙසේද?",

                    options: [
                        "නීති හා රෙගුලාසි මගින්",
                        "වර්ණ තෝරාගැනීමෙන්",
                        "සේවකයන්ගේ විනෝදාස්වාදයෙන්",
                        "ගබඩාවේ ප්‍රමාණයෙන්"
                    ],

                    answer: 0
                },


                {
                    question:
                        "ව්‍යාපාර පරිසරය නිරන්තරයෙන් වෙනස් වන්නේ ඇයි?",

                    options: [
                        "විවිධ ආර්ථික, සමාජ, තාක්ෂණික හා දේශපාලන වෙනස්කම් නිසා",
                        "කිසිදු හේතුවක් නොමැතිව",
                        "ව්‍යාපාර හිමිකරු නිසා පමණි",
                        "සේවකයන් නිසා පමණි"
                    ],

                    answer: 0
                },


                {
                    question:
                        "ව්‍යාපාරයකට පරිසර වෙනස්කම් හඳුනාගැනීම වැදගත් වන්නේ?",

                    options: [
                        "සුදුසු තීරණ ගැනීමට",
                        "වැඩ නතර කිරීමට",
                        "පාරිභෝගිකයන් ඉවත් කිරීමට",
                        "නිෂ්පාදනය අඩු කිරීමට"
                    ],

                    answer: 0
                }

            ],



            /*
             * =====================================
             * LESSON 3
             * ව්‍යාපාර සංවිධාන
             * =====================================
             */

            "3": [

                {
                    question:
                        "හිමිකාරිත්වය අනුව ව්‍යාපාර සංවිධාන ප්‍රධාන වශයෙන් කුමන කොටස් දෙකට බෙදේද?",

                    options: [
                        "සුළු හා මහා",
                        "පෞද්ගලික හා රාජ්‍ය",
                        "දේශීය හා විදේශීය",
                        "ලාභ හා අලාභ"
                    ],

                    answer: 1
                },


                {
                    question:
                        "පහත සඳහන් කුමක් රාජ්‍ය අංශයට අයත් වේද?",

                    options: [
                        "තනි පුද්ගල ව්‍යාපාර",
                        "හවුල් ව්‍යාපාර",
                        "රජයේ දෙපාර්තමේන්තුව",
                        "පෞද්ගලික සමාගම"
                    ],

                    answer: 2
                },


                {
                    question:
                        "තනි පුද්ගල ව්‍යාපාරයක හිමිකරුගේ වගකීම කෙසේද?",

                    options: [
                        "අසීමිත",
                        "සීමිත",
                        "කිසිදු වගකීමක් නැත",
                        "රජය දරයි"
                    ],

                    answer: 0
                },


                {
                    question:
                        "සමාගමක කොටස් හිමියන්ගේ වගකීම සාමාන්‍යයෙන් කුමක්ද?",

                    options: [
                        "අසීමිත",
                        "සීමිත",
                        "කිසිදු වගකීමක් නැත",
                        "රජය දරයි"
                    ],

                    answer: 1
                },


                {
                    question:
                        "සමූපකාර සමිතියක ප්‍රධාන ලක්ෂණයක් වන්නේ කුමක්ද?",

                    options: [
                        "එක් පුද්ගලයකු පමණක් හිමිකරු වීම",
                        "ප්‍රජාතන්ත්‍රවාදී පාලනය",
                        "අසීමිත වගකීම පමණක් තිබීම",
                        "කොටස් හිමියන් පමණක් සිටීම"
                    ],

                    answer: 1
                },


                {
                    question:
                        "තනි පුද්ගල ව්‍යාපාරයක ලාභය හිමිවන්නේ කාටද?",

                    options: [
                        "රජයට",
                        "සේවකයන්ට",
                        "හිමිකරුට",
                        "පාරිභෝගිකයන්ට"
                    ],

                    answer: 2
                },


                {
                    question:
                        "හවුල් ව්‍යාපාරයක් සඳහා අවම වශයෙන් අවශ්‍ය වන්නේ?",

                    options: [
                        "එක් පුද්ගලයෙකු",
                        "පුද්ගලයන් දෙදෙනෙකු",
                        "රජයේ ආයතන දෙකක්",
                        "එක් සමාගමක්"
                    ],

                    answer: 1
                },


                {
                    question:
                        "සමාගමකට විශේෂයෙන් වැදගත් ලක්ෂණයක් වන්නේ?",

                    options: [
                        "නීතිමය පුද්ගලභාවය",
                        "හිමිකරු එක් අයෙකු වීම",
                        "අසීමිත වගකීම",
                        "අඛණ්ඩ පැවැත්මක් නොමැති වීම"
                    ],

                    answer: 0
                },


                {
                    question:
                        "රාජ්‍ය අංශයට අයත් ආයතනයකට උදාහරණයක් වන්නේ?",

                    options: [
                        "තනි පුද්ගල වෙළඳසැල",
                        "පෞද්ගලික සමාගම",
                        "ශ්‍රී ලංකා දුම්රිය දෙපාර්තමේන්තුව",
                        "පෞද්ගලික හෝටලය"
                    ],

                    answer: 2
                },


                {
                    question:
                        "ව්‍යාපාර ප්‍රමාණය අනුව වර්ග කිරීමේදී සලකා බැලිය හැකි සාධකයක් වන්නේ?",

                    options: [
                        "සේවක සංඛ්‍යාව",
                        "හිමිකරුගේ වයස පමණි",
                        "ගොඩනැගිල්ලේ වර්ණය",
                        "භාණ්ඩයේ නම"
                    ],

                    answer: 0
                }

            ],



            /*
             * =====================================
             * LESSON 4
             * ගිණුම්කරණය
             *
             * NOTE:
             * ගිණුම්කරණ සමීකරණය සහ ඉන් පසු
             * කොටස් Lesson 5 සඳහා තබා ඇත.
             * =====================================
             */

            "4": [

                {
                    question:
                        "ගිණුම්කරණය යනු කුමක්ද?",

                    options: [
                        "ව්‍යාපාරයක මූල්‍ය ගනුදෙනු හඳුනාගෙන, මැන, වාර්තා කර, සාරාංශ කර තොරතුරු ඉදිරිපත් කිරීමේ ක්‍රියාවලිය",
                        "භාණ්ඩ විකිණීම පමණි",
                        "සේවකයන් බඳවා ගැනීම පමණි",
                        "ව්‍යාපාර ප්‍රචාරණය කිරීම පමණි"
                    ],

                    answer: 0
                },


                {
                    question:
                        "ව්‍යාපාරයට අයත් ආර්ථික වටිනාකමක් ඇති සම්පතක් හඳුන්වන්නේ?",

                    options: [
                        "වගකීම",
                        "වත්කම",
                        "වියදම",
                        "ආදායම"
                    ],

                    answer: 1
                },


                {
                    question:
                        "පහත සඳහන් කුමක් ජංගම වත්කමකට උදාහරණයක්ද?",

                    options: [
                        "ගොඩනැගිල්ල",
                        "ඉඩම",
                        "මුදල්",
                        "යන්ත්‍රෝපකරණ"
                    ],

                    answer: 2
                },


                {
                    question:
                        "පහත සඳහන් කුමක් ජංගම නොවන වත්කමකට උදාහරණයක්ද?",

                    options: [
                        "මුදල්",
                        "ණයගැතියන්",
                        "තොග",
                        "ගොඩනැගිල්ල"
                    ],

                    answer: 3
                },


                {
                    question:
                        "ව්‍යාපාරයක් වෙනත් පාර්ශ්වයකට ගෙවිය යුතු මුදල් හෝ බැඳීම් හඳුන්වන්නේ?",

                    options: [
                        "වත්කම්",
                        "වගකීම්",
                        "ආදායම්",
                        "වියදම්"
                    ],

                    answer: 1
                },


                {
                    question:
                        "පහත සඳහන් කුමක් ජංගම වගකීමකට උදාහරණයක්ද?",

                    options: [
                        "බැංකු අයිරාව",
                        "දිගුකාලීන ණය",
                        "ගොඩනැගිල්ල",
                        "යන්ත්‍රෝපකරණ"
                    ],

                    answer: 0
                },


                {
                    question:
                        "පහත සඳහන් කුමක් ජංගම නොවන වගකීමකට උදාහරණයක්ද?",

                    options: [
                        "වෙළෙඳ ගෙවිය යුතු",
                        "කෙටි කාලීන ණය",
                        "දිගුකාලීන බැංකු ණය",
                        "මුදල්"
                    ],

                    answer: 2
                },


                {
                    question:
                        "ව්‍යාපාරයට හිමිකරු විසින් යොදවන මුදල් හඳුන්වන්නේ?",

                    options: [
                        "ආදායම",
                        "වියදම",
                        "හිමිකම",
                        "වගකීම"
                    ],

                    answer: 2
                },


                {
                    question:
                        "භාණ්ඩ හෝ සේවා විකිණීමෙන් ව්‍යාපාරයට ලැබෙන මුදල් හඳුන්වන්නේ?",

                    options: [
                        "ආදායම",
                        "වගකීම",
                        "වත්කම පමණි",
                        "වියදම"
                    ],

                    answer: 0
                },


                {
                    question:
                        "ව්‍යාපාරයේ ආදායම් උපයා ගැනීම සඳහා දරන පිරිවැය හඳුන්වන්නේ?",

                    options: [
                        "හිමිකම",
                        "වියදම",
                        "වගකීම",
                        "වත්කම"
                    ],

                    answer: 1
                }

            ]

        };



        /*
         * =========================================
         * SELECT CURRENT LESSON
         * =========================================
         */

        const questions =
            quizData[lesson] ||
            quizData["1"];

        const lessonNames = {

    "1":
        "Lesson 1 - Introduction to Business Studies",

    "2":
        "Lesson 2 - Business Environment",

    "3":
        "Lesson 3 - Business Ownership",

    "4":
        "Lesson 4 - Accounting"

};


if (lessonTitleElement) {

    lessonTitleElement.textContent =
        lessonNames[lesson] ||
        lessonNames["1"];

}



        /*
         * =========================================
         * QUIZ VARIABLES
         * =========================================
         */

        let currentQuestion = 0;

let score = 0;

let answered = false;


/* ==============================
   QUIZ TIMER
============================== */

let timeLeft = 10 * 60; // 10 minutes

let timerInterval = null;

let quizFinished = false;



        /*
         * =========================================
         * FIND HTML ELEMENTS
         * =========================================
         */

        const questionElement =
            document.getElementById(
                "question"
            );

        const optionsElement =
            document.getElementById(
                "options"
            );

        const nextButton =
            document.getElementById(
                "nextBtn"
            );

        const scoreElement =
            document.getElementById(
                "score"
            );

        const timerElement =
    document.getElementById(
        "quizTimer"
    );

const lessonTitleElement =
    document.getElementById(
        "lessonTitle"
    );



        /*
         * =========================================
         * LOAD QUESTION
         * =========================================
         */

        function loadQuestion() {

            answered = false;


            if (
                currentQuestion >=
                questions.length
            ) {

                finishQuiz();

                return;

            }


            const question =
                questions[
                    currentQuestion
                ];


            if (questionElement) {

                questionElement.textContent =
                    (
                        currentQuestion + 1
                    ) +
                    ". " +
                    question.question;

            }


            if (optionsElement) {

                optionsElement.innerHTML =
                    "";

            }


            question.options.forEach(
                function (
                    option,
                    index
                ) {

                    const button =
                        document.createElement(
                            "button"
                        );


                    button.textContent =
                        option;


                    button.className =
                        "quiz-option";


                    button.addEventListener(
                        "click",
                        function () {

                            selectAnswer(
                                button,
                                index
                            );

                        }
                    );


                    if (optionsElement) {

                        optionsElement.appendChild(
                            button
                        );

                    }

                }
            );


            if (nextButton) {

                nextButton.disabled =
                    true;

            }


            updateQuestionCounter();

        }



        /*
         * =========================================
         * SELECT ANSWER
         * =========================================
         */

        function selectAnswer(
            button,
            selectedIndex
        ) {

            if (answered) {

                return;

            }


            answered = true;


            const correctIndex =
                questions[
                    currentQuestion
                ].answer;


            const optionButtons =
                optionsElement.querySelectorAll(
                    "button"
                );


            optionButtons.forEach(
                function (
                    optionButton,
                    index
                ) {

                    optionButton.disabled =
                        true;


                    if (
                        index ===
                        correctIndex
                    ) {

                        optionButton.style.background =
                            "#198754";

                        optionButton.style.color =
                            "#ffffff";

                    }

                }
            );


            if (
                selectedIndex ===
                correctIndex
            ) {

                score++;


                button.style.background =
                    "#198754";

                button.style.color =
                    "#ffffff";

            }

            else {

                button.style.background =
                    "#dc3545";

                button.style.color =
                    "#ffffff";

            }


            if (nextButton) {

                nextButton.disabled =
                    false;

            }


            updateScore();

        }



        /*
         * =========================================
         * NEXT QUESTION
         * =========================================
         */

        if (nextButton) {

            nextButton.addEventListener(
                "click",
                function () {

                    if (!answered) {

                        return;

                    }


                    currentQuestion++;


                    loadQuestion();

                }
            );

        }



        /*
         * =========================================
         * SCORE
         * =========================================
         */

        function updateScore() {

            if (scoreElement) {

                scoreElement.textContent =
                    "Score: " +
                    score +
                    " / " +
                    questions.length;

            }

        }



        /*
         * =========================================
         * QUESTION COUNTER
         * =========================================
         */

        function updateQuestionCounter() {

            const counter =
                document.getElementById(
                    "questionCounter"
                );


            if (counter) {

                counter.textContent =
                    "Question " +
                    (
                        currentQuestion + 1
                    ) +
                    " of " +
                    questions.length;

            }

        }



        /*
         * =========================================
         * FINISH QUIZ
         * =========================================
         */

        function finishQuiz() {

            const percentage =
                Math.round(
                    (
                        score /
                        questions.length
                    ) *
                    100
                );


            /*
             * =====================================
             * SAVE CURRENT QUIZ RESULT
             * =====================================
             */

            localStorage.setItem(
                "uez_last_quiz_correct",
                score
            );


            localStorage.setItem(
                "uez_last_quiz_total",
                questions.length
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
                percentage >= 50
                    ? "Pass"
                    : "Fail"
            );



            /*
             * =====================================
             * LESSON-SPECIFIC RESULT
             * =====================================
             */

            localStorage.setItem(
                "uez_lesson_" +
                lesson +
                "_score",
                percentage
            );


            localStorage.setItem(
                "uez_lesson_" +
                lesson +
                "_correct",
                score
            );


            localStorage.setItem(
                "uez_lesson_" +
                lesson +
                "_total",
                questions.length
            );



            /*
             * =====================================
             * QUIZ COUNT
             * =====================================
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
             * =====================================
             * LAST SCORE
             * =====================================
             */

            localStorage.setItem(
                "uez_last_score",
                percentage
            );



            /*
             * =====================================
             * REDIRECT
             * =====================================
             */

            window.location.href =
                "results.html";

        }



        /*
         * =========================================
         * START QUIZ
         * =========================================
         */

        loadQuestion();

        updateScore();

    }
);
