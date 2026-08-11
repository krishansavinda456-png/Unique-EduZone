/*
 * ============================================
 * Unique EduZone
 * Lesson 1 Quiz
 * ============================================
 */


/*
 * Quiz Questions
 *
 * Based on Lesson 1:
 * ව්‍යාපාර පිළිබඳ මූලික පදනම
 */

const questions = [

    {
        question:
            "ව්‍යාපාරයක මූලික කාර්යය වඩාත් නිවැරදිව දැක්වෙන්නේ කුමක්ද?",

        options: [

            "මුදල් පමණක් එකතු කිරීම",

            "මිනිස් අවශ්‍යතා හා වුවමනා සපුරාලීමට භාණ්ඩ හා සේවා සැපයීම",

            "සේවකයන් පමණක් බඳවා ගැනීම",

            "රජයට බදු ගෙවීම"

        ],

        answer: 1
    },


    {
        question:
            "පහත සඳහන් කුමක් අවශ්‍යතාවක් සඳහා හොඳම උදාහරණයක්ද?",

        options: [

            "නවතම Smartphone එක",

            "මිල අධික සුවඳ විලවුන්",

            "ආහාර",

            "Designer ඇඳුම"

        ],

        answer: 2
    },


    {
        question:
            "වුවමනාවලට අදාළ ලක්ෂණයක් වන්නේ කුමක්ද?",

        options: [

            "සියලු දෙනාටම සමාන වීම",

            "ජීවත්වීමට අනිවාර්ය වීම",

            "නිර්මාණය කළ හැකි වීම",

            "සීමිත වීම"

        ],

        answer: 2
    },


    {
        question:
            "පහත සඳහන් කුමක් භාණ්ඩ නිෂ්පාදන ව්‍යාපාරයකට අදාළ වේද?",

        options: [

            "බැංකුව",

            "රක්ෂණ ආයතනය",

            "ගෘහ භාණ්ඩ නිෂ්පාදකයෙකු",

            "අධ්‍යාපන ආයතනය"

        ],

        answer: 2
    },


    {
        question:
            "පහත සඳහන් කුමක් සේවා සැපයීමේ ව්‍යාපාරයක් නොවේද?",

        options: [

            "බැංකුව",

            "රක්ෂණ ආයතනය",

            "රූපලාවණ්‍ය ආයතනය",

            "ගෘහ භාණ්ඩ නිෂ්පාදන ආයතනය"

        ],

        answer: 3
    },


    {
        question:
            "ස්වභාවධර්මයෙන් ලැබෙන සම්පත් අයත් වන්නේ කුමන නිෂ්පාදන සාධකයටද?",

        options: [

            "ශ්‍රමය",

            "ප්‍රාග්ධනය",

            "භූමිය",

            "ව්‍යවසාය"

        ],

        answer: 2
    },


    {
        question:
            "මිනිසා විසින් ව්‍යාපාරයකට ලබා දෙන කායික හා මානසික දායකත්වය හඳුන්වන්නේ කුමක්ද?",

        options: [

            "භූමිය",

            "ශ්‍රමය",

            "ප්‍රාග්ධනය",

            "ව්‍යවසාය"

        ],

        answer: 1
    },


    {
        question:
            "පහත සඳහන් කුමක් ව්‍යාපාරයක ඇල්මැති පාර්ශ්වයක් ලෙස සැලකිය හැකිද?",

        options: [

            "ගනුදෙනුකරුවෙකු",

            "කාලගුණය",

            "ගොඩනැගිල්ලක්",

            "යන්ත්‍රයක්"

        ],

        answer: 0
    },


    {
        question:
            "ව්‍යාපාරයක හිමිකරුවන්ගේ ප්‍රධාන බලාපොරොත්තුවක් වන්නේ කුමක්ද?",

        options: [

            "ප්‍රමාණවත් ප්‍රතිලාභයක් ලබා ගැනීම",

            "සේවකයන් වැඩි කිරීම පමණක්",

            "තරඟකරුවන් නැති කිරීම",

            "රජයේ කටයුතු පාලනය කිරීම"

        ],

        answer: 0
    },


    {
        question:
            "නිෂ්පාදන සාධක හතර නිවැරදිව දැක්වෙන්නේ කුමන පිළිතුරේද?",

        options: [

            "භූමිය, ශ්‍රමය, ප්‍රාග්ධනය, ව්‍යවසාය",

            "මුදල්, බැංකුව, ගනුදෙනුකරුවන්, රජය",

            "භාණ්ඩ, සේවා, වෙළඳපොළ, මිල",

            "හිමිකරු, සේවකයා, ගනුදෙනුකරු, තරඟකරු"

        ],

        answer: 0
    }

];



/*
 * ============================================
 * Quiz Variables
 * ============================================
 */

let current = 0;

let score = 0;

let selectedAnswer = null;

let quizFinished = false;

let timerSeconds = 60;

let timerInterval = null;



/*
 * ============================================
 * DOM Elements
 * ============================================
 */

const questionBox =
    document.getElementById("questionBox");

const optionsBox =
    document.getElementById("optionsBox");

const nextButton =
    document.getElementById("nextButton");

const quizProgress =
    document.getElementById("quizProgress");

const questionNumber =
    document.getElementById("questionNumber");

const quizTimer =
    document.getElementById("quizTimer");

const quizMessage =
    document.getElementById("quizMessage");



/*
 * ============================================
 * Render Question
 * ============================================
 */

function renderQuestion() {

    selectedAnswer = null;

    nextButton.disabled = true;

    quizMessage.textContent =
        "පිළිතුරක් තෝරා Next ඔබන්න.";


    const question =
        questions[current];


    /*
     * Question Number
     */

    questionNumber.textContent =
        "Question " +
        (current + 1) +
        " of " +
        questions.length;



    /*
     * Question
     */

    questionBox.textContent =
        question.question;



    /*
     * Progress Bar
     */

    const progress =
        ((current) /
            questions.length) *
        100;


    quizProgress.style.width =
        progress + "%";



    /*
     * Clear Options
     */

    optionsBox.innerHTML = "";



    /*
     * Create Options
     */

    question.options.forEach(
        function (option, index) {

            const button =
                document.createElement("button");


            button.type =
                "button";


            button.className =
                "option";


            button.textContent =
                option;


            button.onclick =
                function () {

                    selectAnswer(
                        index,
                        button
                    );

                };


            optionsBox.appendChild(
                button
            );

        }
    );

}



/*
 * ============================================
 * Select Answer
 * ============================================
 */

function selectAnswer(
    index,
    selectedButton
) {

    if (quizFinished) {

        return;

    }


    selectedAnswer =
        index;


    /*
     * Remove previous selection
     */

    const allOptions =
        optionsBox.querySelectorAll(
            ".option"
        );


    allOptions.forEach(
        function (button) {

            button.style.border =
                "";

            button.style.background =
                "";

        }
    );



    /*
     * Highlight selected answer
     */

    selectedButton.style.border =
        "2px solid gold";

    selectedButton.style.background =
        "#333";



    /*
     * Enable Next
     */

    nextButton.disabled =
        false;


    quizMessage.textContent =
        "පිළිතුර තෝරාගෙන ඇත. Next ඔබන්න.";

}



/*
 * ============================================
 * Next Question
 * ============================================
 */

function nextQuestion() {

    if (quizFinished) {

        return;

    }


    /*
     * No answer selected
     */

    if (selectedAnswer === null) {

        quizMessage.textContent =
            "කරුණාකර පිළිතුරක් තෝරන්න.";

        return;

    }



    /*
     * Check Answer
     */

    if (
        selectedAnswer ===
        questions[current].answer
    ) {

        score++;

    }



    /*
     * Move to next question
     */

    current++;



    /*
     * Quiz Finished
     */

    if (
        current >=
        questions.length
    ) {

        finishQuiz();

        return;

    }



    renderQuestion();

}



/*
 * ============================================
 * Finish Quiz
 * ============================================
 */

function finishQuiz() {

    if (quizFinished) {

        return;

    }


    quizFinished = true;


    stopTimer();



    /*
     * Calculate Percentage
     */

    const total =
        questions.length;


    const percentage =
        Math.round(
            (score / total) * 100
        );



    /*
     * Save Score
     */

    localStorage.setItem(
        "uez_last_score",
        percentage
    );



    /*
     * Save Correct Answers
     */

    localStorage.setItem(
        "uez_last_correct",
        score
    );



    /*
     * Save Total Questions
     */

    localStorage.setItem(
        "uez_last_total",
        total
    );



    /*
     * Normal Quiz Completion
     */

    localStorage.setItem(
        "uez_quiz_status",
        "Completed"
    );



    /*
     * Save Quiz Date
     */

    const quizDate =
        new Date().toLocaleString();


    localStorage.setItem(
        "uez_last_quiz_date",
        quizDate
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
     * Go to Results
     */

    window.location.href =
        "results.html";

}



/*
 * ============================================
 * Auto Submit - Time Up
 * ============================================
 */

function autoSubmitQuiz() {

    if (quizFinished) {

        return;

    }


    quizFinished = true;


    stopTimer();



    /*
     * Calculate Percentage
     */

    const total =
        questions.length;


    const percentage =
        Math.round(
            (score / total) * 100
        );



    /*
     * Save Score
     */

    localStorage.setItem(
        "uez_last_score",
        percentage
    );



    /*
     * Save Correct Answers
     */

    localStorage.setItem(
        "uez_last_correct",
        score
    );



    /*
     * Save Total Questions
     */

    localStorage.setItem(
        "uez_last_total",
        total
    );



    /*
     * IMPORTANT:
     * Time Up Status
     */

    localStorage.setItem(
        "uez_quiz_status",
        "Time Up"
    );



    /*
     * Save Quiz Date
     */

    const quizDate =
        new Date().toLocaleString();


    localStorage.setItem(
        "uez_last_quiz_date",
        quizDate
    );



    /*
     * Count Quiz Attempt
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
     * Go to Results
     */

    window.location.href =
        "results.html";

}



/*
 * ============================================
 * Timer
 * ============================================
 */

function startTimer() {

    timerInterval =
        setInterval(
            function () {

                timerSeconds--;


                updateTimer();



                if (
                    timerSeconds <= 0
                ) {

                    clearInterval(
                        timerInterval
                    );

                    autoSubmitQuiz();

                }

            },
            1000
        );

}



/*
 * ============================================
 * Update Timer Display
 * ============================================
 */

function updateTimer() {

    const minutes =
        Math.floor(
            timerSeconds / 60
        );


    const seconds =
        timerSeconds % 60;


    quizTimer.textContent =
        String(minutes).padStart(2, "0") +
        ":" +
        String(seconds).padStart(2, "0");

}



/*
 * ============================================
 * Stop Timer
 * ============================================
 */

function stopTimer() {

    if (timerInterval !== null) {

        clearInterval(
            timerInterval
        );

        timerInterval = null;

    }

}



/*
 * ============================================
 * Start Quiz
 * ============================================
 */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        renderQuestion();

        updateTimer();

        startTimer();

    }
);
