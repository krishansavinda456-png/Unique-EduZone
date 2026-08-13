/*
 * =========================================
 * UNIQUE EDUZONE
 * QUIZ SYSTEM
 * LESSON 01 - LESSON 10
 * =========================================
 */


/*
 * =========================================
 * QUIZ SETTINGS
 * =========================================
 */

const QUIZ_TIME = 10 * 60;

let timeLeft = QUIZ_TIME;

let timerInterval = null;

let currentLesson = 1;

let quizQuestions = [];



/*
 * =========================================
 * LESSON NAMES
 * =========================================
 */

const lessonNames = {

    1: "Introduction to Business Studies",

    2: "Business Environment",

    3: "Business Ownership",

    4: "Accounting",

    5: "Accounting Equation",

    6: "Financial Statements",

    7: "Marketing",

    8: "Human Resource Management",

    9: "Business Finance",

    10: "Entrepreneurship"

};



/*
 * =========================================
 * QUESTIONS
 * =========================================
 *
 * answer = correct option index
 * 0 = first option
 * 1 = second option
 * 2 = third option
 * 3 = fourth option
 */

const quizData = {


    "1": [

        {
            question: "ව්‍යාපාරයක් යනු කුමක්ද?",
            options: [
                "අධ්‍යාපන ආයතනයක් පමණි",
                "භාණ්ඩ හා සේවා නිෂ්පාදනය හා බෙදාහැරීමේ ක්‍රියාවලියකි",
                "රාජ්‍ය ආයතනයක් පමණි",
                "පවුලක් පමණි"
            ],
            answer: 1
        },

        {
            question: "ව්‍යාපාරයක ප්‍රධාන අරමුණක් වන්නේ?",
            options: [
                "ලාභ ඉපයීම",
                "පාසල් පැවැත්වීම",
                "නීති සම්පාදනය",
                "ඡන්ද පැවැත්වීම"
            ],
            answer: 0
        },

        {
            question: "භාණ්ඩයක් යනු?",
            options: [
                "ස්පර්ශ කළ හැකි නිෂ්පාදනයකි",
                "සේවාවකි",
                "බදු වර්ගයකි",
                "ණයක්"
            ],
            answer: 0
        },

        {
            question: "සේවාවක ලක්ෂණයක් වන්නේ?",
            options: [
                "සෑම විටම ගබඩා කළ හැක",
                "ස්පර්ශ කළ හැක",
                "අස්පෘශ්‍ය විය හැක",
                "සෑම විටම භාණ්ඩයකි"
            ],
            answer: 2
        },

        {
            question: "ව්‍යාපාරයකට අවශ්‍ය මූලික සම්පතක් වන්නේ?",
            options: [
                "මානව සම්පත්",
                "වර්ණ",
                "වෙළඳ දැන්වීම් පමණි",
                "විවේකය"
            ],
            answer: 0
        },

        {
            question: "පාරිභෝගිකයා යනු?",
            options: [
                "භාණ්ඩ හෝ සේවා භාවිතා කරන්නා",
                "නිෂ්පාදකයා පමණි",
                "රජය පමණි",
                "සේවකයා පමණි"
            ],
            answer: 0
        },

        {
            question: "ව්‍යාපාරයක ආදායම ලැබෙන්නේ?",
            options: [
                "විකුණුම් මඟින්",
                "වියදම් මඟින්",
                "ණය ගෙවීමෙන්",
                "වත්කම් විනාශ කිරීමෙන්"
            ],
            answer: 0
        },

        {
            question: "ව්‍යාපාරික අවදානම යනු?",
            options: [
                "අනාගත ප්‍රතිඵල පිළිබඳ අවිනිශ්චිතතාව",
                "නිශ්චිත ලාභය",
                "සේවක වැටුප",
                "භාණ්ඩ මිල"
            ],
            answer: 0
        },

        {
            question: "ව්‍යාපාරයක පාර්ශ්වකරුවෙකු වන්නේ?",
            options: [
                "පාරිභෝගිකයා",
                "ගසක්",
                "මාර්ගයක්",
                "ගොඩනැගිල්ලක්"
            ],
            answer: 0
        },

        {
            question: "ව්‍යාපාර අධ්‍යයනයේ ප්‍රධාන අවධානයක් වන්නේ?",
            options: [
                "ව්‍යාපාර ක්‍රියාකාරකම් අවබෝධ කර ගැනීම",
                "ගණිතය පමණක්",
                "ක්‍රීඩා පමණක්",
                "භාෂාව පමණක්"
            ],
            answer: 0
        }

    ],


    "2": [

        {
            question: "ව්‍යාපාර පරිසරය යනු?",
            options: [
                "ව්‍යාපාරයට බලපාන අභ්‍යන්තර හා බාහිර සාධක",
                "ව්‍යාපාර ගොඩනැගිල්ල පමණි",
                "සේවකයින් පමණි",
                "මුදල් පමණි"
            ],
            answer: 0
        },

        {
            question: "අභ්‍යන්තර පරිසර සාධකයක් වන්නේ?",
            options: [
                "සේවකයින්",
                "දේශපාලනය",
                "කාලගුණය",
                "ආර්ථික තත්ත්වය"
            ],
            answer: 0
        },

        {
            question: "බාහිර පරිසර සාධකයක් වන්නේ?",
            options: [
                "සේවකයින්",
                "කළමනාකරණය",
                "තාක්ෂණික වෙනස්කම්",
                "සංවිධාන සංස්කෘතිය"
            ],
            answer: 2
        },

        {
            question: "දේශපාලන පරිසරය බලපාන්නේ?",
            options: [
                "ව්‍යාපාරයට",
                "ගස්වලට පමණි",
                "ක්‍රීඩා පිටියට පමණි",
                "පවුලකට පමණි"
            ],
            answer: 0
        },

        {
            question: "තාක්ෂණික වෙනස්කම් මඟින්?",
            options: [
                "ව්‍යාපාරයට අවස්ථා හා අභියෝග ඇති විය හැක",
                "කිසිදු බලපෑමක් නැත",
                "ව්‍යාපාරය අවසන් වේ",
                "නීති අහෝසි වේ"
            ],
            answer: 0
        },

        {
            question: "ආර්ථික පරිසරයට අයත් වන්නේ?",
            options: [
                "උද්ධමනය",
                "සේවක නම",
                "ගොඩනැගිල්ලේ වර්ණය",
                "නිල ඇඳුම"
            ],
            answer: 0
        },

        {
            question: "ව්‍යාපාර පරිසරය වෙනස් වන්නේ?",
            options: [
                "කාලයත් සමඟ",
                "කිසිදා නොවේ",
                "සෑම විටම එකම ආකාරයෙන්",
                "පමණක් රාත්‍රියේ"
            ],
            answer: 0
        },

        {
            question: "තරඟකරුවන් අයත් වන්නේ?",
            options: [
                "බාහිර පරිසරයට",
                "අභ්‍යන්තර පරිසරයට පමණි",
                "ගිණුම් පොතට",
                "වත්කම්වලට"
            ],
            answer: 0
        },

        {
            question: "ව්‍යාපාරයක් පරිසරය පිළිබඳ අවධානය යොමු කළ යුත්තේ?",
            options: [
                "තීරණ ගැනීම සඳහා",
                "වෙළඳසැල වසා දැමීමට",
                "සේවකයින් ඉවත් කිරීමට පමණි",
                "ගිණුම් පොත් විනාශ කිරීමට"
            ],
            answer: 0
        },

        {
            question: "නීතිමය පරිසරය සම්බන්ධ වන්නේ?",
            options: [
                "නීති හා රෙගුලාසි",
                "කාලගුණය",
                "වර්ණ",
                "සේවක විනෝදය"
            ],
            answer: 0
        }

    ],


    "3": [

        {
            question: "තනි පුද්ගල ව්‍යාපාරයක හිමිකරු කී දෙනෙකුද?",
            options: [
                "එක් අයෙකි",
                "දෙදෙනෙකි",
                "දස දෙනෙකි",
                "කිසිවෙකු නැත"
            ],
            answer: 0
        },

        {
            question: "හවුල් ව්‍යාපාරයක හිමිකරුවන්?",
            options: [
                "පුද්ගලයන් දෙදෙනෙකු හෝ වැඩි දෙනෙකු",
                "එක් අයෙකු පමණි",
                "රජය පමණි",
                "පාරිභෝගිකයන් පමණි"
            ],
            answer: 0
        },

        {
            question: "රාජ්‍ය අංශයේ ව්‍යාපාරයක ප්‍රධාන හිමිකරු?",
            options: [
                "රජය",
                "පාරිභෝගිකයා",
                "සේවකයා",
                "තරඟකරුවා"
            ],
            answer: 0
        },

        {
            question: "පෞද්ගලික අංශයේ ව්‍යාපාරයක හිමිකාරිත්වය?",
            options: [
                "පෞද්ගලික පුද්ගලයන් හෝ ආයතන",
                "රජය පමණි",
                "පාසල",
                "බැංකුව පමණි"
            ],
            answer: 0
        },

        {
            question: "තනි පුද්ගල ව්‍යාපාරයක වාසියක්?",
            options: [
                "තීරණ ගැනීම පහසු වීම",
                "හිමිකරුවන් දහස් ගණනක් වීම",
                "සෑම විටම විශාල ප්‍රාග්ධනයක් තිබීම",
                "රජයේ හිමිකාරිත්වය"
            ],
            answer: 0
        },

        {
            question: "හවුල් ව්‍යාපාරයක ප්‍රධාන ලක්ෂණයක්?",
            options: [
                "ලාභ හා වගකීම් බෙදා ගැනීම",
                "රජය පමණක් පාලනය කිරීම",
                "එක් පුද්ගලයෙකු පමණක් සිටීම",
                "පාරිභෝගිකයා හිමිකරු වීම"
            ],
            answer: 0
        },

        {
            question: "සමාගමක හිමිකාරිත්වය නිරූපණය කරන්නේ?",
            options: [
                "කොටස් හිමියන්",
                "පාරිභෝගිකයන්",
                "රියදුරන්",
                "සැපයුම්කරුවන් පමණි"
            ],
            answer: 0
        },

        {
            question: "රාජ්‍ය අංශයේ ප්‍රධාන අරමුණක්?",
            options: [
                "මහජන සේවය",
                "ලාභය පමණක්",
                "තරඟකරුවන් ඉවත් කිරීම",
                "වෙළඳපොළ වසා දැමීම"
            ],
            answer: 0
        },

        {
            question: "ව්‍යාපාර හිමිකාරිත්වය තීරණය වන්නේ?",
            options: [
                "ව්‍යාපාරයේ නීතිමය හා සංවිධාන ආකාරය අනුව",
                "වර්ණය අනුව",
                "වෙළඳසැලේ ප්‍රමාණය අනුව පමණි",
                "භාණ්ඩ ගණන අනුව පමණි"
            ],
            answer: 0
        },

        {
            question: "ව්‍යාපාර සංවිධාන ආකාරයක් වන්නේ?",
            options: [
                "තනි පුද්ගල ව්‍යාපාරය",
                "පාසල් ක්‍රීඩා",
                "පවුලේ සාමාජිකයා",
                "මාර්ගය"
            ],
            answer: 0
        }

    ],


    "4": [

        {
            question: "ගිණුම්කරණය යනු?",
            options: [
                "මූල්‍ය ගනුදෙනු හඳුනාගෙන වාර්තා කිරීමේ ක්‍රියාවලිය",
                "භාණ්ඩ නිෂ්පාදනය පමණි",
                "වෙළඳ දැන්වීම් කිරීම",
                "සේවකයින් බඳවා ගැනීම පමණි"
            ],
            answer: 0
        },

        {
            question: "වත්කමක් යනු?",
            options: [
                "ව්‍යාපාරයට අනාගත ආර්ථික ප්‍රතිලාභ ලබාදිය හැකි සම්පතක්",
                "ව්‍යාපාරයේ ණයක්",
                "වියදමක් පමණි",
                "ආදායමක් පමණි"
            ],
            answer: 0
        },

        {
            question: "වගකීමක් යනු?",
            options: [
                "ව්‍යාපාරයේ බාහිර පාර්ශ්වයන්ට ගෙවිය යුතු බැඳීමක්",
                "මුදල් වත්කමක්",
                "ලාභයක්",
                "භාණ්ඩයක්"
            ],
            answer: 0
        },

        {
            question: "හිමිකම යනු?",
            options: [
                "ව්‍යාපාරයේ වත්කම්වල හිමිකරුගේ අයිතිය",
                "බැංකු ණය",
                "වියදම",
                "ගෙවිය යුතු මුදල"
            ],
            answer: 0
        },

        {
            question: "මුදල් යනු කුමන වත්කමක්ද?",
            options: [
                "ජංගම වත්කමක්",
                "ස්ථාවර වගකීමක්",
                "වියදමක්",
                "හිමිකමක්"
            ],
            answer: 0
        },

        {
            question: "ණයහිමියන් යනු?",
            options: [
                "ව්‍යාපාරයට මුදල් හෝ භාණ්ඩ ණයට ලබාදෙන පාර්ශ්වයන්",
                "ව්‍යාපාර හිමිකරු",
                "පාරිභෝගිකයා පමණි",
                "සේවකයන්"
            ],
            answer: 0
        },

        {
            question: "විකුණුම් ආදායමක්ද?",
            options: [
                "ඔව්",
                "නැත",
                "වත්කමක් පමණි",
                "වගකීමක් පමණි"
            ],
            answer: 0
        },

        {
            question: "වැටුප් යනු?",
            options: [
                "වියදමක්",
                "වත්කමක්",
                "වගකීමක් පමණි",
                "හිමිකමක්"
            ],
            answer: 0
        },

        {
            question: "ගනුදෙනුවක් යනු?",
            options: [
                "ව්‍යාපාරයේ මූල්‍ය තත්ත්වයට බලපාන ආර්ථික සිදුවීමක්",
                "පාරිභෝගික නමක්",
                "වෙළඳ දැන්වීමක්",
                "භාණ්ඩ නාමයක්"
            ],
            answer: 0
        },

        {
            question: "ගිණුම්කරණයේ ප්‍රධාන ප්‍රයෝජනයක්?",
            options: [
                "තීරණ ගැනීමට අවශ්‍ය මූල්‍ය තොරතුරු ලබාදීම",
                "භාණ්ඩ නිෂ්පාදනය",
                "සේවකයින් බඳවා ගැනීම",
                "වෙළඳසැලේ වර්ණය තීරණය කිරීම"
            ],
            answer: 0
        }

    ],


    "5": [

        {
            question: "ගිණුම්කරණ සමීකරණය කුමක්ද?",
            options: [
                "වත්කම් = වගකීම් + හිමිකම",
                "වත්කම් = ආදායම් + වියදම්",
                "වගකීම් = වත්කම් + ආදායම්",
                "හිමිකම = වියදම් + වත්කම්"
            ],
            answer: 0
        },

        {
            question: "ව්‍යාපාරයක් රු.100,000 ක මුදල් යොදවා ආරම්භ කළ විට වත්කම් වැඩි වන්නේ?",
            options: [
                "රු.100,000",
                "රු.50,000",
                "රු.10,000",
                "කිසිවක් නැත"
            ],
            answer: 0
        },

        {
            question: "රු.50,000 ක භාණ්ඩ ණයට මිලදී ගත් විට?",
            options: [
                "වත්කම් හා වගකීම් දෙකම වැඩි වේ",
                "වත්කම් පමණක් අඩු වේ",
                "හිමිකම පමණක් වැඩි වේ",
                "වගකීම් අඩු වේ"
            ],
            answer: 0
        },

        {
            question: "ව්‍යාපාර හිමිකරු මුදල් රු.20,000 ක් ආපසු ලබා ගත්තේ නම්?",
            options: [
                "වත්කම් සහ හිමිකම අඩු වේ",
                "වත්කම් වැඩි වේ",
                "වගකීම් වැඩි වේ",
                "ආදායම වැඩි වේ"
            ],
            answer: 0
        },

        {
            question: "ව්‍යාපාරයට ආදායමක් ලැබුණු විට සාමාන්‍යයෙන් හිමිකමට බලපාන්නේ?",
            options: [
                "වැඩි වේ",
                "අඩු වේ",
                "කිසිදු බලපෑමක් නැත",
                "වගකීමක් වේ"
            ],
            answer: 0
        },

        {
            question: "ව්‍යාපාර වියදමක් ගෙවූ විට සාමාන්‍යයෙන් හිමිකම?",
            options: [
                "අඩු වේ",
                "වැඩි වේ",
                "කිසිදු වෙනසක් නැත",
                "වත්කමක් වේ"
            ],
            answer: 0
        },

        {
            question: "වත්කම් රු.200,000 හා වගකීම් රු.80,000 නම් හිමිකම?",
            options: [
                "රු.120,000",
                "රු.280,000",
                "රු.80,000",
                "රු.200,000"
            ],
            answer: 0
        },

        {
            question: "වත්කම් = රු.500,000 සහ හිමිකම = රු.300,000 නම් වගකීම්?",
            options: [
                "රු.200,000",
                "රු.800,000",
                "රු.300,000",
                "රු.500,000"
            ],
            answer: 0
        },

        {
            question: "ගිණුම්කරණ සමීකරණයේ දෙපස?",
            options: [
                "සමාන විය යුතුය",
                "කිසිදා සමාන නොවේ",
                "එක් පැත්තක් පමණක් තිබේ",
                "වගකීම් පමණක් පෙන්වයි"
            ],
            answer: 0
        },

        {
            question: "ගිණුම්කරණ සමීකරණය භාවිතයෙන් පෙන්වන්නේ?",
            options: [
                "ව්‍යාපාරයේ වත්කම්, වගකීම් හා හිමිකම අතර සම්බන්ධතාවය",
                "වෙළඳ දැන්වීම් පමණි",
                "සේවක වැටුප් පමණි",
                "විකුණුම් පමණි"
            ],
            answer: 0
        }

    ],


    /*
     * Lessons 6 - 10
     * Temporary basic questions.
     * Later these can be replaced with textbook-specific questions.
     */

    "6": [

        {
            question: "මූල්‍ය ප්‍රකාශනයක ප්‍රධාන අරමුණක් වන්නේ?",
            options: [
                "මූල්‍ය තොරතුරු ඉදිරිපත් කිරීම",
                "භාණ්ඩ නිෂ්පාදනය",
                "සේවකයින් බඳවා ගැනීම",
                "වෙළඳ දැන්වීම් කිරීම"
            ],
            answer: 0
        }

    ],

    "7": [

        {
            question: "අලෙවිකරණයේ ප්‍රධාන අවධානයක් වන්නේ?",
            options: [
                "පාරිභෝගික අවශ්‍යතා හඳුනාගැනීම",
                "ගිණුම් පොත් විනාශ කිරීම",
                "සේවකයින් ඉවත් කිරීම",
                "ණය ගැනීම පමණි"
            ],
            answer: 0
        }

    ],

    "8": [

        {
            question: "මානව සම්පත් යනු?",
            options: [
                "ව්‍යාපාරයේ සේවය කරන පුද්ගලයන්",
                "යන්ත්‍ර පමණි",
                "මුදල් පමණි",
                "ගොඩනැගිලි පමණි"
            ],
            answer: 0
        }

    ],

    "9": [

        {
            question: "ව්‍යාපාර මූල්‍යය සම්බන්ධ වන්නේ?",
            options: [
                "ව්‍යාපාරයේ මුදල් කළමනාකරණය",
                "භාණ්ඩවල වර්ණය",
                "සේවක නිල ඇඳුම",
                "වෙළඳසැලේ නම"
            ],
            answer: 0
        }

    ],

    "10": [

        {
            question: "ව්‍යවසායකයෙකුගේ වැදගත් ලක්ෂණයක් වන්නේ?",
            options: [
                "අවදානම් භාරගැනීම",
                "කිසිදු තීරණයක් නොගැනීම",
                "වගකීම් නොගැනීම",
                "ව්‍යාපාරය වසා දැමීම"
            ],
            answer: 0
        }

    ]

};



/*
 * =========================================
 * GET SELECTED LESSON
 * =========================================
 */

function getSelectedLesson() {

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
        lesson <= 10
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

function updateTimer() {

    const timer =
        document.getElementById(
            "timer"
        );

    if (!timer) {
        return;
    }


    const minutes =
        Math.floor(
            timeLeft / 60
        );


    const seconds =
        timeLeft % 60;


    timer.textContent =
        String(minutes).padStart(2, "0") +
        ":" +
        String(seconds).padStart(2, "0");


    if (timeLeft <= 60) {

        timer.style.color =
            "red";

    }


    if (timeLeft <= 0) {

        clearInterval(
            timerInterval
        );

        submitQuiz(
            true
        );

        return;

    }


    timeLeft--;

}



/*
 * =========================================
 * START TIMER
 * =========================================
 */

function startTimer() {

    clearInterval(
        timerInterval
    );


    timeLeft =
        QUIZ_TIME;


    updateTimer();


    timerInterval =
        setInterval(
            updateTimer,
            1000
        );

}



/*
 * =========================================
 * LOAD QUESTIONS
 * =========================================
 */

function loadQuiz() {

    currentLesson =
        getSelectedLesson();


    quizQuestions =
        quizData[
            String(currentLesson)
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
            "📝 Lesson " +
            currentLesson +
            " Quiz";

    }


    if (lessonName) {

        lessonName.textContent =
            lessonNames[
                currentLesson
            ] || "Lesson " + currentLesson;

    }


    if (!container) {
        return;
    }


    container.innerHTML = "";


    if (
        quizQuestions.length === 0
    ) {

        container.innerHTML =
            "<p>No questions available for this lesson.</p>";

        return;

    }


    quizQuestions.forEach(
        function (item, index) {

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
            quizQuestions.length;

    }


    startTimer();

}



/*
 * =========================================
 * SUBMIT QUIZ
 * =========================================
 */

function submitQuiz(autoSubmit) {

    if (
        !quizQuestions ||
        quizQuestions.length === 0
    ) {

        return;

    }


    clearInterval(
        timerInterval
    );


    let score = 0;


    quizQuestions.forEach(
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
                quizQuestions.length
            ) * 100
        );


    /*
     * =====================================
     * SAVE QUIZ DATA
     * =====================================
     */

    localStorage.setItem(
        "uez_last_score",
        percentage
    );


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


    /*
     * Save lesson-specific score
     */

    localStorage.setItem(
        "uez_lesson" +
        currentLesson +
        "_score",
        percentage
    );


    /*
     * =====================================
     * COMPLETE LESSON
     * =====================================
     */

    let completedLessons = [];


    try {

        completedLessons =
            JSON.parse(
                localStorage.getItem(
                    "uez_completed_lessons"
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
        currentLesson;


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
        "uez_completed_lessons",
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

        if (percentage >= 75) {

            resultMessage.textContent =
                "Excellent! Lesson " +
                currentLesson +
                " completed successfully. 🎉";

        }

        else if (percentage >= 50) {

            resultMessage.textContent =
                "Good progress! Lesson " +
                currentLesson +
                " has been completed. 👍";

        }

        else {

            resultMessage.textContent =
                "Quiz completed. Keep practicing and improve your knowledge. 💪";

        }


        if (autoSubmit) {

            resultMessage.textContent +=
                " Time is over, so the quiz was submitted automatically.";

        }

    }

}



/*
 * =========================================
 * FORM SUBMIT
 * =========================================
 */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        loadQuiz();


        const quizForm =
            document.getElementById(
                "quizForm"
            );


        if (quizForm) {

            quizForm.addEventListener(
                "submit",
                function (event) {

                    event.preventDefault();

                    submitQuiz(
                        false
                    );

                }
            );

        }

    }
);
