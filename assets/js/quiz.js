/* =========================================================
   Unique EduZone
   Quiz JavaScript
   Lesson 1 + Lesson 2 + Lesson 3
========================================================= */


/* =========================================================
   GET LESSON NUMBER
========================================================= */

const urlParams =
    new URLSearchParams(
        window.location.search
    );

const lessonNumber =
    urlParams.get("lesson") || "1";


/* =========================================================
   LESSON 1 QUESTIONS
========================================================= */

const lesson1Questions = [

    {
        question:
            "ව්‍යාපාරයක් යනු කුමක්ද?",

        options: [
            "මිනිස් අවශ්‍යතා හා වුවමනා සපුරාලීම සඳහා භාණ්ඩ හා සේවා සපයන ආර්ථික ක්‍රියාකාරකම් සමූහයකි.",
            "රජයේ පමණක් සිදු කරන ක්‍රියාවලියකි.",
            "ලාභයක් නොමැතිව සිදු කරන සෑම ක්‍රියාවක්ම වේ.",
            "පවුලක පමණක් සිදු කරන කටයුත්තකි."
        ],

        answer: 0
    },


    {
        question:
            "ව්‍යාපාරයක වැදගත් අරමුණක් වන්නේ කුමක්ද?",

        options: [
            "පාරිභෝගිකයන් අඩු කිරීම",
            "ලාභ ඉපයීම",
            "භාණ්ඩ නිෂ්පාදනය නතර කිරීම",
            "සේවකයන් අඩු කිරීම"
        ],

        answer: 1
    },


    {
        question:
            "ජීවත්වීමට අනිවාර්යයෙන්ම සපුරා ගත යුතු දෑ හඳුන්වන්නේ කෙසේද?",

        options: [
            "වුවමනා",
            "වෙළඳපොළ",
            "අවශ්‍යතා",
            "සේවා"
        ],

        answer: 2
    },


    {
        question:
            "පහත සඳහන් දෑ අතරින් වුවමනාවකට උදාහරණයක් වන්නේ කුමක්ද?",

        options: [
            "වාතය",
            "නිවාස",
            "ආහාර",
            "විලාසිතා ඇඳුම්"
        ],

        answer: 3
    },


    {
        question:
            "පහත සඳහන් දෑ අතරින් නිෂ්පාදන සාධකයක් නොවන්නේ කුමක්ද?",

        options: [
            "භූමිය",
            "ශ්‍රමය",
            "ප්‍රාග්ධනය",
            "පාරිභෝගිකයා"
        ],

        answer: 3
    },


    {
        question:
            "ස්වභාවධර්මයෙන් ලැබෙන සම්පත් අයත් වන්නේ කුමන නිෂ්පාදන සාධකයටද?",

        options: [
            "භූමිය",
            "ශ්‍රමය",
            "ප්‍රාග්ධනය",
            "ව්‍යවසාය"
        ],

        answer: 0
    },


    {
        question:
            "නිෂ්පාදන කටයුතු සඳහා මිනිසා විසින් ලබා දෙන කායික හා මානසික දායකත්වය හඳුන්වන්නේ කෙසේද?",

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
            "ව්‍යාපාරයකට අවශ්‍ය අමුද්‍රව්‍ය හා වෙනත් සම්පත් සපයන පාර්ශ්වය කවුද?",

        options: [
            "ගනුදෙනුකරුවන්",
            "තරඟකරුවන්",
            "සැපයුම්කරුවන්",
            "ප්‍රජාව"
        ],

        answer: 2
    },


    {
        question:
            "ව්‍යාපාරයෙන් භාණ්ඩ හා සේවා ලබා ගන්නා පාර්ශ්වය කවුද?",

        options: [
            "ගනුදෙනුකරුවන්",
            "රජය",
            "සැපයුම්කරුවන්",
            "හිමිකරුවන්"
        ],

        answer: 0
    },


    {
        question:
            "පහත සඳහන් කුමන පාර්ශ්වයකට සාධාරණ වැටුප් හා රැකියා සුරක්ෂිතතාව වැදගත් බලාපොරොත්තුවක්ද?",

        options: [
            "ගනුදෙනුකරුවන්",
            "සේවකයන්",
            "සැපයුම්කරුවන්",
            "තරඟකරුවන්"
        ],

        answer: 1
    }

];


/* =========================================================
   LESSON 2 QUESTIONS
   ව්‍යාපාර පරිසරය
========================================================= */

const lesson2Questions = [

    {
        question:
            "ව්‍යාපාර පරිසරය යන්නෙන් අදහස් කරන්නේ කුමක්ද?",

        options: [
            "ව්‍යාපාරය තුළ සහ ව්‍යාපාරයෙන් පිටත පවතින ව්‍යාපාරයට බලපාන සාධක හා තත්ත්වයන්ගේ එකතුවයි.",
            "ව්‍යාපාරයේ ගොඩනැගිල්ල පමණි.",
            "ව්‍යාපාරයේ සේවකයන් පමණි.",
            "ව්‍යාපාරයේ භාණ්ඩ පමණි."
        ],

        answer: 0
    },


    {
        question:
            "ව්‍යාපාර පරිසරය ප්‍රධාන වශයෙන් කුමන කොටස් දෙකකට බෙදිය හැකිද?",

        options: [
            "කුඩා හා විශාල පරිසරය",
            "අභ්‍යන්තර හා බාහිර පරිසරය",
            "දේශීය හා පෞද්ගලික පරිසරය",
            "නිෂ්පාදන හා සේවා පරිසරය"
        ],

        answer: 1
    },


    {
        question:
            "ව්‍යාපාරයේ අභ්‍යන්තර පරිසරයට අයත් වන්නේ කුමක්ද?",

        options: [
            "ව්‍යාපාරයේ සේවකයන් හා කළමනාකරණය",
            "රජයේ නීති",
            "උද්ධමනය",
            "තාක්ෂණික වෙනස්කම්"
        ],

        answer: 0
    },


    {
        question:
            "පහත සඳහන් කුමක් බාහිර පරිසර සාධකයකට උදාහරණයක්ද?",

        options: [
            "සේවකයන්ගේ දක්ෂතා",
            "කළමනාකරණ හැකියාව",
            "රජයේ නීති හා රෙගුලාසි",
            "ව්‍යාපාරයේ අභ්‍යන්තර සංවිධාන ව්‍යුහය"
        ],

        answer: 2
    },


    {
        question:
            "නව තාක්ෂණය ව්‍යාපාරයකට බලපාන්නේ කෙසේද?",

        options: [
            "ව්‍යාපාරයට කිසිදු බලපෑමක් නොකරයි.",
            "නිෂ්පාදන හා සේවා ක්‍රියාවලීන් වැඩිදියුණු කිරීමට හැකියාව ලබා දෙයි.",
            "ව්‍යාපාරයේ සියලු කටයුතු නතර කරයි.",
            "පාරිභෝගිකයන්ගේ අවශ්‍යතා ඉවත් කරයි."
        ],

        answer: 1
    },


    {
        question:
            "ආර්ථික පරිසරයට අදාළ සාධකයක් වන්නේ කුමක්ද?",

        options: [
            "උද්ධමනය",
            "සේවකයන්ගේ පෞද්ගලික රුචිකත්වය",
            "කාර්යාලයේ වර්ණය",
            "භාණ්ඩ ගබඩාවේ ප්‍රමාණය"
        ],

        answer: 0
    },


    {
        question:
            "ගෝලීය පරිසරය ව්‍යාපාරයකට බලපාන අවස්ථාවක් වන්නේ කුමක්ද?",

        options: [
            "ජාත්‍යන්තර වෙළඳාම හා විදේශීය වෙළඳපොළ සමඟ සම්බන්ධ වීම",
            "කාර්යාලයේ මේස ගණන වැඩි කිරීම පමණි.",
            "සේවකයන්ගේ පැමිණීම සටහන් කිරීම පමණි.",
            "ගබඩාවේ භාණ්ඩ සකස් කිරීම පමණි."
        ],

        answer: 0
    },


    {
        question:
            "ව්‍යාපාර පරිසරය අධ්‍යයනය කිරීමේ වැදගත්කමක් වන්නේ කුමක්ද?",

        options: [
            "ව්‍යාපාරයට බලපාන වෙනස්කම් හඳුනාගෙන සුදුසු තීරණ ගැනීමට හැකි වීම",
            "ව්‍යාපාරයේ සියලු අවදානම් ඉවත් කිරීම",
            "තරඟකරුවන් සියලු දෙනා ඉවත් කිරීම",
            "පාරිභෝගිකයන්ගේ අවශ්‍යතා අඩු කිරීම"
        ],

        answer: 0
    },


    {
        question:
            "SWOT විශ්ලේෂණයේ 'S' යන්නෙන් අදහස් කරන්නේ කුමක්ද?",

        options: [
            "Sales",
            "Strengths",
            "Services",
            "Suppliers"
        ],

        answer: 1
    },


    {
        question:
            "SWOT විශ්ලේෂණයේ අභ්‍යන්තර පරිසරයට සම්බන්ධ වන සාධක දෙක කුමක්ද?",

        options: [
            "අවස්ථා හා තර්ජන",
            "ශක්තීන් හා දුර්වලතා",
            "තාක්ෂණය හා ගෝලීයකරණය",
            "උද්ධමනය හා තරඟය"
        ],

        answer: 1
    }

];


/* =========================================================
   LESSON 3 QUESTIONS
   හිමිකාරිත්වය අනුව ව්‍යාපාර සංවිධාන
========================================================= */

const lesson3Questions = [

    {
        question:
            "හිමිකාරිත්වය අනුව ව්‍යාපාර සංවිධාන ප්‍රධාන වශයෙන් කුමන අංශ දෙකකට බෙදිය හැකිද?",

        options: [
            "දේශීය හා විදේශීය අංශය",
            "පෞද්ගලික අංශය හා රාජ්‍ය අංශය",
            "කුඩා හා මධ්‍ය පරිමාණ අංශය",
            "නිෂ්පාදන හා සේවා අංශය"
        ],

        answer: 1
    },


    {
        question:
            "පෞද්ගලික අංශයේ ව්‍යාපාර සංවිධානවල හිමිකාරිත්වය ප්‍රධාන වශයෙන් දරන්නේ කවුද?",

        options: [
            "රජය පමණි",
            "රජයේ දෙපාර්තමේන්තු පමණි",
            "පෞද්ගලික පුද්ගලයන් හෝ පෞද්ගලික ආයතන",
            "විදේශීය රජයන් පමණි"
        ],

        answer: 2
    },


    {
        question:
            "රාජ්‍ය අංශයේ ව්‍යාපාර සංවිධානවල හිමිකාරිත්වය ප්‍රධාන වශයෙන් දරන්නේ කවුද?",

        options: [
            "පෞද්ගලික පුද්ගලයන්",
            "රජය",
            "පාරිභෝගිකයන්",
            "සැපයුම්කරුවන්"
        ],

        answer: 1
    },


    {
        question:
            "පහත සඳහන් කුමක් රාජ්‍ය අංශයට අයත් විය හැකි ආයතනයක් ලෙස හඳුනාගත හැකිද?",

        options: [
            "පෞද්ගලික වෙළඳසැලක්",
            "පෞද්ගලික හෝටලයක්",
            "රජයේ දෙපාර්තමේන්තුවක්",
            "පෞද්ගලික සමාගමක්"
        ],

        answer: 2
    },


    {
        question:
            "රජයේ දෙපාර්තමේන්තු හිමිකාරිත්වය අනුව අයත් වන්නේ කුමන අංශයටද?",

        options: [
            "පෞද්ගලික අංශයට",
            "රාජ්‍ය අංශයට",
            "විදේශීය අංශයට",
            "පෞද්ගලික හා විදේශීය අංශයට පමණි"
        ],

        answer: 1
    },


    {
        question:
            "හිමිකාරිත්වය අනුව ව්‍යාපාර සංවිධාන වර්ගීකරණය කිරීමේදී සලකා බලන ප්‍රධාන කරුණ කුමක්ද?",

        options: [
            "ව්‍යාපාර ගොඩනැගිල්ලේ වර්ණය",
            "ව්‍යාපාරයේ භාණ්ඩවල ප්‍රමාණය පමණි",
            "ව්‍යාපාරයේ හිමිකාරිත්වය",
            "සේවකයන්ගේ වයස"
        ],

        answer: 2
    },


    {
        question:
            "පහත සඳහන් කුමක් පෞද්ගලික අංශයට අයත් ව්‍යාපාරයක ලක්ෂණයක් ලෙස දැක්විය හැකිද?",

        options: [
            "රජය විසින් පමණක් හිමිකාරිත්වය දැරීම",
            "පෞද්ගලික හිමිකරුවන් විසින් හිමිකාරිත්වය දැරීම",
            "රජයේ දෙපාර්තමේන්තුවක් වීම",
            "රජයේ පාලනය යටතේ පමණක් ක්‍රියාත්මක වීම"
        ],

        answer: 1
    },


    {
        question:
            "පහත සම්බන්ධතා අතරින් නිවැරදි සම්බන්ධතාවය කුමක්ද?",

        options: [
            "පෞද්ගලික අංශය — රජයේ දෙපාර්තමේන්තු",
            "රාජ්‍ය අංශය — පෞද්ගලික වෙළඳසැල් පමණි",
            "රාජ්‍ය අංශය — රජයේ දෙපාර්තමේන්තු",
            "පෞද්ගලික අංශය — රජයේ අමාත්‍යාංශ"
        ],

        answer: 2
    },


    {
        question:
            "පෞද්ගලික අංශය සහ රාජ්‍ය අංශය අතර ප්‍රධාන වෙනසක් වන්නේ කුමක්ද?",

        options: [
            "භාණ්ඩවල වර්ණය",
            "හිමිකාරිත්වය සහ පාලනය",
            "කාර්යාලයේ ප්‍රමාණය",
            "සේවකයන්ගේ ඇඳුම්"
        ],

        answer: 1
    },


    {
        question:
            "පහත සඳහන් කුමන ප්‍රකාශය නිවැරදිද?",

        options: [
            "රාජ්‍ය අංශයට රජයේ දෙපාර්තමේන්තු ඇතුළත් නොවේ.",
            "පෞද්ගලික අංශයේ සියලු ආයතන රජය සතුය.",
            "රාජ්‍ය අංශයට රජයේ හිමිකාරිත්වය හා පාලනය යටතේ පවතින සංවිධාන ඇතුළත් වේ.",
            "පෞද්ගලික හා රාජ්‍ය අංශ අතර කිසිදු වෙනසක් නොමැත."
        ],

        answer: 2
    }

];


/* =========================================================
   SELECT QUESTIONS
========================================================= */

let questions;


if (lessonNumber === "2") {

    questions = lesson2Questions;

}

else if (lessonNumber === "3") {

    questions = lesson3Questions;

}

else {

    questions = lesson1Questions;

}


/* =========================================================
   QUIZ VARIABLES
========================================================= */

let currentQuestion = 0;

let score = 0;

let selectedAnswer = null;

let timeRemaining = 60;

let timerInterval;


/* =========================================================
   DOM ELEMENTS
========================================================= */

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

const quizProgress =
    document.getElementById(
        "quizProgress"
    );

const quizTimer =
    document.getElementById(
        "quizTimer"
    );


/* =========================================================
   LOAD QUIZ
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        showQuestion();

        startTimer();

    }
);


/* =========================================================
   SHOW QUESTION
========================================================= */

function showQuestion() {

    selectedAnswer = null;


    const question =
        questions[currentQuestion];


    /* Question */

    questionBox.innerHTML =

        "<h2>" +

        "ප්‍රශ්නය " +
        (currentQuestion + 1) +
        " / " +
        questions.length +

        "</h2>" +

        "<p>" +
        question.question +
        "</p>";


    /* Options */

    optionsBox.innerHTML = "";


    question.options.forEach(
        function (option, index) {

            const button =
                document.createElement(
                    "button"
                );


            button.type =
                "button";


            button.className =
                "quiz-option";


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


    /* Progress */

    const progress =
        Math.round(
            (
                currentQuestion /
                questions.length
            ) * 100
        );


    if (quizProgress) {

        quizProgress.style.width =
            progress + "%";

    }


    /* Button */

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


/* =========================================================
   SELECT ANSWER
========================================================= */

function selectAnswer(
    index,
    button
) {

    selectedAnswer =
        index;


    const buttons =
        optionsBox.querySelectorAll(
            ".quiz-option"
        );


    buttons.forEach(
        function (item) {

            item.classList.remove(
                "selected"
            );

        }
    );


    button.classList.add(
        "selected"
    );

}


/* =========================================================
   NEXT QUESTION
========================================================= */

function nextQuestion() {

    if (
        selectedAnswer === null
    ) {

        alert(
            "කරුණාකර පිළිතුරක් තෝරන්න."
        );

        return;

    }


    const correctAnswer =
        questions[
            currentQuestion
        ].answer;


    if (
        selectedAnswer ===
        correctAnswer
    ) {

        score++;

    }


    currentQuestion++;


    if (
        currentQuestion >=
        questions.length
    ) {

        finishQuiz();

        return;

    }


    showQuestion();

}


/* =========================================================
   TIMER
========================================================= */

function startTimer() {

    updateTimer();


    timerInterval =
        setInterval(
            function () {

                timeRemaining--;


                updateTimer();


                if (
                    timeRemaining <= 0
                ) {

                    clearInterval(
                        timerInterval
                    );


                    finishQuiz();

                }

            },
            1000
        );

}


/* =========================================================
   UPDATE TIMER
========================================================= */

function updateTimer() {

    if (!quizTimer) {

        return;

    }


    const minutes =
        Math.floor(
            timeRemaining / 60
        );


    const seconds =
        timeRemaining % 60;


    quizTimer.textContent =

        String(minutes)
            .padStart(2, "0") +

        ":" +

        String(seconds)
            .padStart(2, "0");

}


/* =========================================================
   FINISH QUIZ
========================================================= */

function finishQuiz() {

    clearInterval(
        timerInterval
    );


    /* =====================================
       Percentage
    ===================================== */

    const percentage =
        Math.round(
            (
                score /
                questions.length
            ) * 100
        );


    /* =====================================
       Pass / Fail
    ===================================== */

    const pass =
        percentage >= 50;


    const result =
        pass
            ? "PASS"
            : "FAIL";


    /* =====================================
       Save Last Score
    ===================================== */

    localStorage.setItem(
        "uez_last_score",
        percentage
    );


    /* =====================================
       Quiz Count
    ===================================== */

    const oldCount =
        Number(
            localStorage.getItem(
                "uez_quiz_count"
            )
        ) || 0;


    localStorage.setItem(
        "uez_quiz_count",
        oldCount + 1
    );


    /* =====================================
       Save Lesson Completion
    ===================================== */

    if (pass) {

        saveCompletedLesson(
            lessonNumber
        );

    }


    /* =====================================
       Save Current Quiz Result
    ===================================== */

    localStorage.setItem(
        "uez_quiz_result",
        JSON.stringify({

            lesson:
                lessonNumber,

            score:
                score,

            total:
                questions.length,

            percentage:
                percentage,

            result:
                result

        })
    );


    /* =====================================
       Compatibility Data
       Results Page
    ===================================== */

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
        result
    );


    /* =====================================
       Results Page
    ===================================== */

    window.location.href =
        "results.html" +
        "?lesson=" +
        lessonNumber +
        "&score=" +
        score +
        "&total=" +
        questions.length +
        "&percentage=" +
        percentage +
        "&result=" +
        result;

}


/* =========================================================
   SAVE COMPLETED LESSON
========================================================= */

function saveCompletedLesson(
    lesson
) {

    let completedLessons = [];


    try {

        completedLessons =
            JSON.parse(
                localStorage.getItem(
                    "uez_completed_lessons"
                )
            ) || [];

    }

    catch (error) {

        completedLessons = [];

    }


    if (
        !Array.isArray(
            completedLessons
        )
    ) {

        completedLessons = [];

    }


    const lessonString =
        String(lesson);


    const alreadyCompleted =
        completedLessons.some(
            function (item) {

                return String(item) ===
                    lessonString;

            }
        );


    if (
        !alreadyCompleted
    ) {

        completedLessons.push(
            lessonString
        );

    }


    localStorage.setItem(
        "uez_completed_lessons",
        JSON.stringify(
            completedLessons
        )
    );

}


/* =========================================================
   PREVENT ENTER KEY FROM ACCIDENTALLY SUBMITTING
========================================================= */

document.addEventListener(
    "keydown",
    function (event) {

        if (
            event.key === "Enter"
        ) {

            event.preventDefault();

        }

    }
);
