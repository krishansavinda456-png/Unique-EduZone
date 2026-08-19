/*
 * =========================================
 * UNIQUE EDUZONE
 * GRADE 11 QUIZ SYSTEM
 * BUSINESS & ACCOUNTING STUDIES
 * =========================================
 *
 * FILE:
 * grade11-quiz.js
 *
 * CURRENTLY:
 * Lesson 01 only
 *
 * FUTURE:
 * Lesson 02 - Lesson 08 can be added
 * without changing the quiz system.
 * =========================================
 */


/*
 * =========================================
 * QUIZ SETTINGS
 * =========================================
 */

const GRADE11_QUIZ_TIME = 10 * 60;

let grade11TimeLeft = GRADE11_QUIZ_TIME;

let grade11TimerInterval = null;

let grade11CurrentLesson = 1;

let grade11QuizQuestions = [];


/*
 * =========================================
 * LESSON NAMES
 * =========================================
 */

const grade11LessonNames = {

    1: "වෙළෙඳාම සහ උපකාරක සේවා",

    // ඉදිරියේදී එකතු කරන්න

    // 2: "කළමණාකරණය",
    // 3: "අලෙවිකරණය",
    // 4: "ව්‍යාපාරයක මූල්‍ය ප්‍රකාශන",
    // 5: "ගැලපුම් සහිත මූල්‍ය ප්‍රකාශන",
    // 6: "ලාභ අරමුණු කර නොගත් සංවිධාන",
    // 7: "නිෂ්පාදන පිරිවැය ප්‍රකාශය",
    // 8: "ආයෝජන"

};


/*
 * =========================================
 * QUIZ DATA
 * =========================================
 *
 * answer:
 *
 * 0 = පළමු පිළිතුර
 * 1 = දෙවන පිළිතුර
 * 2 = තෙවන පිළිතුර
 * 3 = සිව්වන පිළිතුර
 *
 * ඉදිරියේදී මෙහි
 *
 * "2": [ ... ],
 * "3": [ ... ],
 *
 * ලෙස පාඩම් එකතු කළ හැක.
 * =========================================
 */

const grade11QuizData = {


    /*
     * =====================================
     * LESSON 01
     * වෙළෙඳාම සහ උපකාරක සේවා
     * =====================================
     */

    "1": [

        {
            question: "ව්‍යාපාරයක් යනු කුමක්ද?",

            options: [
                "මිනිස් අවශ්‍යතා හා වුවමනා සපුරාලීම සඳහා භාණ්ඩ හා සේවා සැපයීමේ ක්‍රියාවලියකි",
                "මුදල් තැන්පත් කිරීම පමණි",
                "භාණ්ඩ ගබඩා කිරීම පමණි",
                "බදු එකතු කිරීම පමණි"
            ],

            answer: 0
        },


        {
            question: "ලාභ අපේක්ෂිත ව්‍යාපාරයක ප්‍රධාන අරමුණක් වන්නේ කුමක්ද?",

            options: [
                "ලාභ ඉපයීම",
                "බදු ගෙවීම පමණි",
                "භාණ්ඩ ගබඩා කිරීම පමණි",
                "සේවකයන් පාලනය කිරීම පමණි"
            ],

            answer: 0
        },


        {
            question: "වාණිජ්‍යය යනු ප්‍රධාන වශයෙන් කුමක්ද?",

            options: [
                "වෙළෙඳාම හා වෙළෙඳාමට උපකාර වන සේවා ඇතුළත් ක්‍රියාකාරකම් සමූහයකි",
                "භාණ්ඩ නිෂ්පාදනය පමණි",
                "භාණ්ඩ පරිභෝජනය පමණි",
                "සේවකයන් බඳවා ගැනීම පමණි"
            ],

            answer: 0
        },


        {
            question: "වෙළෙඳාම යනු කුමක්ද?",

            options: [
                "භාණ්ඩ හා සේවා මිලදී ගැනීම හා විකිණීම සම්බන්ධ ක්‍රියාවලියකි",
                "භාණ්ඩ නිෂ්පාදනය කිරීම පමණි",
                "මුදල් ඉතිරි කිරීම පමණි",
                "සේවකයන් පුහුණු කිරීම පමණි"
            ],

            answer: 0
        },


        {
            question: "දේශීය වෙළෙඳාම යනු කුමක්ද?",

            options: [
                "එක් රටක් තුළ සිදු වන වෙළෙඳාම",
                "රටවල් දෙකක් අතර සිදු වන වෙළෙඳාම",
                "මුදල් හුවමාරුව පමණි",
                "භාණ්ඩ නිෂ්පාදනය පමණි"
            ],

            answer: 0
        },


        {
            question: "සිල්ලර වෙළෙඳාම යනු කුමක්ද?",

            options: [
                "භාණ්ඩ අවසාන පාරිභෝගිකයන්ට සාමාන්‍යයෙන් කුඩා ප්‍රමාණවලින් විකිණීම",
                "නිෂ්පාදකයන්ගෙන් භාණ්ඩ විශාල ප්‍රමාණවලින් මිලදී ගැනීම පමණි",
                "රටවල් අතර භාණ්ඩ හුවමාරුව පමණි",
                "භාණ්ඩ නිෂ්පාදනය කිරීම පමණි"
            ],

            answer: 0
        },


        {
            question: "තොග වෙළෙඳාමක ප්‍රධාන ලක්ෂණයක් වන්නේ කුමක්ද?",

            options: [
                "භාණ්ඩ විශාල ප්‍රමාණවලින් මිලදීගෙන නැවත විකිණීම",
                "අවසාන පාරිභෝගිකයාට එක් භාණ්ඩයක් පමණක් විකිණීම",
                "භාණ්ඩ පරිභෝජනය කිරීම",
                "භාණ්ඩ නිෂ්පාදනය කිරීම පමණි"
            ],

            answer: 0
        },


        {
            question: "සිල්ලර වෙළෙන්දා ප්‍රධාන වශයෙන් භාණ්ඩ විකුණන්නේ කාටද?",

            options: [
                "අවසාන පාරිභෝගිකයාට",
                "නිෂ්පාදකයාට පමණි",
                "රජයට පමණි",
                "බැංකුවට පමණි"
            ],

            answer: 0
        },


        {
            question: "විදේශීය වෙළෙඳාම යනු කුමක්ද?",

            options: [
                "රටවල් අතර සිදු වන වෙළෙඳාම",
                "එක් ගමක් තුළ සිදු වන වෙළෙඳාම",
                "එක් වෙළඳසැලක් තුළ සිදු වන ගනුදෙනු",
                "භාණ්ඩ ගබඩා කිරීම"
            ],

            answer: 0
        },


        {
            question: "ආනයන වෙළෙඳාම යනු කුමක්ද?",

            options: [
                "විදේශ රටකින් භාණ්ඩ හෝ සේවා රට තුළට ගෙන ඒම",
                "රට තුළ නිෂ්පාදනය කළ භාණ්ඩ විදේශයට යැවීම",
                "රට තුළ භාණ්ඩ ගබඩා කිරීම",
                "භාණ්ඩ පරිභෝජනය කිරීම"
            ],

            answer: 0
        },


        {
            question: "අපනයන වෙළෙඳාම යනු කුමක්ද?",

            options: [
                "රට තුළ නිෂ්පාදනය කළ භාණ්ඩ හෝ සේවා විදේශ රටකට විකිණීම",
                "විදේශයෙන් භාණ්ඩ රට තුළට ගෙන ඒම",
                "රට තුළ භාණ්ඩ ගබඩා කිරීම",
                "භාණ්ඩ පරිභෝජනය කිරීම"
            ],

            answer: 0
        },


        {
            question: "වෙළෙඳාමට උපකාර වන සේවාවක් වන්නේ කුමක්ද?",

            options: [
                "බැංකු සේවා",
                "භාණ්ඩ පරිභෝජනය",
                "භාණ්ඩ විනාශ කිරීම",
                "ගබඩාව වසා දැමීම"
            ],

            answer: 0
        },


        {
            question: "ප්‍රවාහන සේවාවේ ප්‍රධාන වැදගත්කමක් වන්නේ කුමක්ද?",

            options: [
                "භාණ්ඩ එක් ස්ථානයක සිට තවත් ස්ථානයකට ගෙන යාම",
                "භාණ්ඩවල මිල තීරණය කිරීම පමණි",
                "මුදල් මුද්‍රණය කිරීම",
                "සේවකයන් බඳවා ගැනීම"
            ],

            answer: 0
        },


        {
            question: "රක්ෂණ සේවාව මඟින් ව්‍යාපාරයකට ලැබෙන ප්‍රධාන ප්‍රයෝජනයක් වන්නේ?",

            options: [
                "අවදානම්වලින් සිදුවිය හැකි මූල්‍ය අලාභයට ආරක්ෂාව ලබාදීම",
                "භාණ්ඩ නිෂ්පාදනය කිරීම",
                "වෙළඳසැලේ මිල තීරණය කිරීම",
                "බදු අහෝසි කිරීම"
            ],

            answer: 0
        },


        {
            question: "බැංකු සේවාවක් ව්‍යාපාරයට වැදගත් වන්නේ ඇයි?",

            options: [
                "මුදල් තැන්පත් කිරීම, ගෙවීම් කිරීම හා මූල්‍ය පහසුකම් ලබාගැනීමට හැකි වීම",
                "භාණ්ඩ නිෂ්පාදනය කිරීම සඳහා පමණි",
                "භාණ්ඩ ප්‍රවාහනය කිරීම සඳහා පමණි",
                "වෙළඳ දැන්වීම් සකස් කිරීම සඳහා පමණි"
            ],

            answer: 0
        }

    ]


    /*
     * =====================================
     * FUTURE LESSONS
     * =====================================
     *
     * Lesson 02 එකතු කරන විට:
     *
     * ,
     *
     * "2": [        {
            question: "ව්‍යාපාර ක්‍රියාකාරකම්වලදී වෙළෙඳාම සිදු කිරීමේ ප්‍රධාන අරමුණ කුමක්ද?",

            options: [
                "භාණ්ඩ හා සේවා මිලදී ගැනීම හා විකිණීම සිදු කිරීම",
                "භාණ්ඩ විනාශ කිරීම",
                "සේවකයන් පමණක් පුහුණු කිරීම",
                "මුදල් මුද්‍රණය කිරීම"
            ],

            answer: 0
        },


        {
            question: "තොග වෙළෙන්දෙකු සහ සිල්ලර වෙළෙන්දෙකු අතර ප්‍රධාන වෙනස කුමක්ද?",

            options: [
                "තොග වෙළෙන්දා සාමාන්‍යයෙන් විශාල ප්‍රමාණවලින් භාණ්ඩ මිලදී ගෙන නැවත විකුණයි",
                "සිල්ලර වෙළෙන්දා කිසිවිටෙක භාණ්ඩ විකුණන්නේ නැත",
                "තොග වෙළෙන්දා පාරිභෝගිකයන්ට පමණක් සේවා සපයයි",
                "සිල්ලර වෙළෙන්දා නිෂ්පාදන කර්මාන්තයක් පමණක් පවත්වාගෙන යයි"
            ],

            answer: 0
        },


        {
            question: "වෙළෙඳාමට උපකාර වන ප්‍රවාහන සේවාවකින් සිදු කරන්නේ කුමක්ද?",

            options: [
                "භාණ්ඩ නිෂ්පාදකයාගෙන් හෝ වෙළෙන්දාගෙන් වෙනත් ස්ථානයකට ගෙන යාම",
                "භාණ්ඩවල අයිතිය අහෝසි කිරීම",
                "භාණ්ඩවල ගුණාත්මකභාවය පමණක් පරීක්ෂා කිරීම",
                "බැංකු ගිණුම් විවෘත කිරීම"
            ],

            answer: 0
        },


        {
            question: "රක්ෂණ සේවාව ව්‍යාපාරයකට විශේෂයෙන් වැදගත් වන්නේ කුමන අවස්ථාවකදීද?",

            options: [
                "අවදානමක් හේතුවෙන් සිදුවිය හැකි මූල්‍ය අලාභයකින් ආරක්ෂාව ලබා ගැනීමට",
                "භාණ්ඩ නිෂ්පාදනය වැඩි කිරීමට පමණි",
                "භාණ්ඩවල මිල අනිවාර්යයෙන් අඩු කිරීමට",
                "සේවකයන්ට වැටුප් ගෙවීම නතර කිරීමට"
            ],

            answer: 0
        },


        {
            question: "විදේශීය වෙළෙඳාමට අදාළ ගනුදෙනුවක් වන්නේ කුමක්ද?",

            options: [
                "ශ්‍රී ලංකාවේ ව්‍යාපාරයක් විදේශ රටක ව්‍යාපාරයකින් භාණ්ඩ මිලදී ගැනීම",
                "එකම නගරයක වෙළඳසැල් දෙකක් අතර ගනුදෙනුවක්",
                "පවුලක් තම නිවසේ භාණ්ඩ පරිභෝජනය කිරීම",
                "ව්‍යාපාරයක් තම ගබඩාව පිරිසිදු කිරීම"
            ],

            answer: 0
        },


        {
            question: "ශ්‍රී ලංකාවට විදේශ රටකින් මෝටර් රථ ගෙන්වීම කුමන වෙළෙඳාමකට උදාහරණයක්ද?",

            options: [
                "ආනයන වෙළෙඳාම",
                "අපනයන වෙළෙඳාම",
                "දේශීය සිල්ලර වෙළෙඳාම",
                "දේශීය තොග වෙළෙඳාම"
            ],

            answer: 0
        },


        {
            question: "ශ්‍රී ලංකාවේ නිෂ්පාදිත තේ විදේශ රටකට විකිණීම කුමක් ලෙස හැඳින්වේද?",

            options: [
                "අපනයන වෙළෙඳාම",
                "ආනයන වෙළෙඳාම",
                "දේශීය වෙළෙඳාම",
                "සිල්ලර වෙළෙඳාම"
            ],

            answer: 0
        },


        {
            question: "සිල්ලර වෙළෙන්දෙකුගේ ප්‍රධාන පාරිභෝගිකයා කවුද?",

            options: [
                "අවසාන පාරිභෝගිකයා",
                "භාණ්ඩ නිෂ්පාදකයා පමණි",
                "රක්ෂණ සමාගම පමණි",
                "ප්‍රවාහන සමාගම පමණි"
            ],

            answer: 0
        },


        {
            question: "ව්‍යාපාරයක මුදල් ගනුදෙනු සඳහා බැංකුවක් භාවිත කිරීමේ ප්‍රයෝජනයක් වන්නේ කුමක්ද?",

            options: [
                "මුදල් තැන්පත් කිරීම සහ ගෙවීම් පහසු කිරීම",
                "භාණ්ඩ නිෂ්පාදනය කිරීම",
                "භාණ්ඩවල ප්‍රමාණය වෙනස් කිරීම",
                "වෙළෙඳසැලේ භාණ්ඩ පරිභෝජනය කිරීම"
            ],

            answer: 0
        },


        {
            question: "වෙළෙඳාමට උපකාර වන සේවා අතරට ඇතුළත් වන්නේ කුමක්ද?",

            options: [
                "බැංකු, රක්ෂණ හා ප්‍රවාහන සේවා",
                "භාණ්ඩ පරිභෝජනය පමණි",
                "භාණ්ඩ විනාශ කිරීම පමණි",
                "නිෂ්පාදන භාවිතා කිරීම පමණි"
            ],

            answer: 0
        }

};



/*
 * =========================================
 * GET SELECTED LESSON
 * =========================================
 */

function getGrade11SelectedLesson() {

    const params =
        new URLSearchParams(
            window.location.search
        );

    const lesson =
        parseInt(
            params.get("lesson")
        );


    if (
        lesson >= 1 &&
        lesson <= 8
    ) {

        return lesson;

    }


    return 1;

}



/*
 * =========================================
 * TIMER
 * =========================================
 */

function updateGrade11Timer() {

    const timer =
        document.getElementById(
            "timer"
        );


    if (!timer) {
        return;
    }


    const minutes =
        Math.floor(
            grade11TimeLeft / 60
        );


    const seconds =
        grade11TimeLeft % 60;


    timer.textContent =
        String(minutes).padStart(2, "0") +
        ":" +
        String(seconds).padStart(2, "0");


    if (
        grade11TimeLeft <= 60
    ) {

        timer.style.color =
            "red";

    }


    if (
        grade11TimeLeft <= 0
    ) {

        clearInterval(
            grade11TimerInterval
        );


        submitGrade11Quiz(
            true
        );


        return;

    }


    grade11TimeLeft--;

}



/*
 * =========================================
 * START TIMER
 * =========================================
 */

function startGrade11Timer() {

    clearInterval(
        grade11TimerInterval
    );


    grade11TimeLeft =
        GRADE11_QUIZ_TIME;


    updateGrade11Timer();


    grade11TimerInterval =
        setInterval(
            updateGrade11Timer,
            1000
        );

}



/*
 * =========================================
 * LOAD QUIZ
 * =========================================
 */

function loadGrade11Quiz() {

    grade11CurrentLesson =
        getGrade11SelectedLesson();


    grade11QuizQuestions =
        grade11QuizData[
            String(grade11CurrentLesson)
        ] || [];


    const title =
        document.getElementById(
            "quizTitle"
        );


    const lessonName =
        document.getElementById(
            "lessonName"
        );


    const container =
        document.getElementById(
            "questionsContainer"
        );


    const progress =
        document.getElementById(
            "quizProgress"
        );


    if (title) {

        title.textContent =
            "📝 Grade 11 - Lesson " +
            grade11CurrentLesson +
            " Quiz";

    }


    if (lessonName) {

        lessonName.textContent =
            grade11LessonNames[
                grade11CurrentLesson
            ] ||
            "Lesson " +
            grade11CurrentLesson;

    }


    if (!container) {

        return;

    }


    container.innerHTML = "";


    if (
        grade11QuizQuestions.length === 0
    ) {

        container.innerHTML =
            `
            <p>
                මෙම පාඩම සඳහා Quiz ප්‍රශ්න
                තවම ඇතුළත් කර නොමැත.
            </p>
            `;

        return;

    }


    grade11QuizQuestions.forEach(
        function (
            item,
            index
        ) {

            const card =
                document.createElement(
                    "div"
                );


            card.className =
                "question-card";


            let optionsHTML = "";


            item.options.forEach(
                function (
                    option,
                    optionIndex
                ) {

                    optionsHTML +=
                        `
                        <label class="option">

                            <input
                                type="radio"
                                name="question${index}"
                                value="${optionIndex}"
                            >

                            ${option}

                        </label>
                        `;

                }
            );


            card.innerHTML =
                `
                <div class="question-number">
                    QUESTION ${index + 1}
                </div>

                <div class="question-text">
                    ${item.question}
                </div>

                ${optionsHTML}
                `;


            container.appendChild(
                card
            );

        }
    );


    if (progress) {

        progress.textContent =
            "Question 1 / " +
            grade11QuizQuestions.length;

    }


    startGrade11Timer();

}



/*
 * =========================================
 * SUBMIT QUIZ
 * =========================================
 */

function submitGrade11Quiz(
    autoSubmit
) {

    if (
        !grade11QuizQuestions ||
        grade11QuizQuestions.length === 0
    ) {

        return;

    }


    clearInterval(
        grade11TimerInterval
    );


    let score = 0;


    grade11QuizQuestions.forEach(
        function (
            item,
            index
        ) {

            const selected =
                document.querySelector(
                    `input[name="question${index}"]:checked`
                );


            if (
                selected &&
                Number(
                    selected.value
                ) === item.answer
            ) {

                score++;

            }

        }
    );


    const percentage =
        Math.round(
            (
                score /
                grade11QuizQuestions.length
            ) * 100
        );


    /*
     * =====================================
     * SAVE GENERAL QUIZ DATA
     * =====================================
     */

    localStorage.setItem(
        "uez_grade11_last_score",
        percentage
    );


    const oldCount =
        Number(
            localStorage.getItem(
                "uez_grade11_quiz_count"
            )
        ) || 0;


    localStorage.setItem(
        "uez_grade11_quiz_count",
        oldCount + 1
    );


    /*
     * =====================================
     * SAVE LESSON SCORE
     * =====================================
     */

    localStorage.setItem(
        "uez_grade11_lesson" +
        grade11CurrentLesson +
        "_score",
        percentage
    );


    /*
     * =====================================
     * COMPLETED LESSONS
     * =====================================
     */

    let completedLessons = [];


    try {

        completedLessons =
            JSON.parse(
                localStorage.getItem(
                    "uez_grade11_completed_lessons"
                )
            ) || [];

    } catch (error) {

        completedLessons = [];

    }


    if (
        !Array.isArray(
            completedLessons
        )
    ) {

        completedLessons = [];

    }


    const lessonId =
        "lesson" +
        grade11CurrentLesson;


    if (
        !completedLessons.includes(
            lessonId
        )
    ) {

        completedLessons.push(
            lessonId
        );

    }


    localStorage.setItem(
        "uez_grade11_completed_lessons",
        JSON.stringify(
            completedLessons
        )
    );


    /*
     * =====================================
     * SHOW RESULT
     * =====================================
     */

    const resultCard =
        document.getElementById(
            "resultCard"
        );


    const resultScore =
        document.getElementById(
            "resultScore"
        );


    const resultMessage =
        document.getElementById(
            "resultMessage"
        );


    const quizForm =
        document.getElementById(
            "quizForm"
        );


    if (quizForm) {

        quizForm.style.display =
            "none";

    }


    if (resultCard) {

        resultCard.style.display =
            "block";

    }


    if (resultScore) {

        resultScore.textContent =
            percentage + "%";

    }


    if (resultMessage) {

        if (
            percentage >= 75
        ) {

            resultMessage.textContent =
                "විශිෂ්ටයි! Grade 11 Lesson " +
                grade11CurrentLesson +
                " සාර්ථකව සම්පූර්ණ කර ඇත. 🎉";

        }

        else if (
            percentage >= 50
        ) {

            resultMessage.textContent =
                "හොඳ ප්‍රගතියක්! Grade 11 Lesson " +
                grade11CurrentLesson +
                " සම්පූර්ණ කර ඇත. 👍";

        }

        else {

            resultMessage.textContent =
                "Quiz එක සම්පූර්ණ කර ඇත. නැවත පුහුණු වී ඔබේ ලකුණු වැඩි කරගන්න. 💪";

        }


        if (autoSubmit) {

            resultMessage.textContent +=
                " කාලය අවසන් වූ බැවින් Quiz එක ස්වයංක්‍රීයව Submit කරන ලදී.";

        }

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

        loadGrade11Quiz();


        const quizForm =
            document.getElementById(
                "quizForm"
            );


        if (quizForm) {

            quizForm.addEventListener(
                "submit",
                function (event) {

                    event.preventDefault();


                    submitGrade11Quiz(
                        false
                    );

                }
            );

        }

    }
);
