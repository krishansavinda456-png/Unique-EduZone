document.addEventListener(
    "DOMContentLoaded",
    function () {

        /*
         * =========================================
         * UNIQUE EDUZONE QUIZ SYSTEM
         * LESSON 1 - 4
         * =========================================
         */


        /* =========================================
           GET SELECTED LESSON
        ========================================= */

        const urlParams =
            new URLSearchParams(
                window.location.search
            );

        const lesson =
            urlParams.get("lesson") || "1";


        /* =========================================
           QUIZ DATA
        ========================================= */

        const quizData = {

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

            ],

            "5": [
            
                {
                    question:
                        "ගිණුම්කරණ සමීකරණය නිවැරදිව දැක්වෙන්නේ කෙසේද?",
            
                    options: [
                        "වත්කම් = හිමිකම + වගකීම්",
                        "වත්කම් = ආදායම + වියදම",
                        "හිමිකම = වත්කම් + වගකීම්",
                        "වගකීම් = වත්කම් + හිමිකම"
                    ],
            
                    answer: 0
            },
        
        
            {
                question:
                    "ගිණුම්කරණ සමීකරණයේ වත්කම් යනු කුමක්ද?",
        
                options: [
                    "ව්‍යාපාරයට අයත් ආර්ථික වටිනාකමක් ඇති සම්පත්",
                    "ව්‍යාපාරය ගෙවිය යුතු සියලුම මුදල්",
                    "හිමිකරු විසින් ලබාගත් ණය",
                    "ව්‍යාපාරයේ වියදම් පමණි"
                ],
        
                answer: 0
            },
        
        
            {
                question:
                    "ව්‍යාපාරයේ හිමිකම රු. 100,000 ක් සහ වගකීම් රු. 50,000 ක් නම් වත්කම් ප්‍රමාණය කොපමණද?",
        
                options: [
                    "රු. 50,000",
                    "රු. 100,000",
                    "රු. 150,000",
                    "රු. 200,000"
                ],
        
                answer: 2
            },
        
        
            {
                question:
                    "ව්‍යාපාරයක වත්කම් රු. 250,000 ක් සහ වගකීම් රු. 100,000 ක් නම් හිමිකම කොපමණද?",
        
                options: [
                    "රු. 100,000",
                    "රු. 150,000",
                    "රු. 250,000",
                    "රු. 350,000"
                ],
        
                answer: 1
            },
        
        
            {
                question:
                    "හිමිකරු විසින් ව්‍යාපාරයට රු. 200,000 ක් මුදලින් යෙදවූ විට සිදුවන්නේ කුමක්ද?",
        
                options: [
                    "වත්කම් වැඩිවන අතර හිමිකම වැඩිවේ",
                    "වත්කම් අඩුවන අතර හිමිකම අඩුවේ",
                    "වගකීම් පමණක් වැඩිවේ",
                    "වියදම් පමණක් වැඩිවේ"
                ],
        
                answer: 0
            },
        
        
            {
                question:
                    "ව්‍යාපාරය රු. 50,000 ක භාණ්ඩ තොගයක් ණයට මිලදී ගත් විට?",
        
                options: [
                    "වත්කම් වැඩිවේ, වගකීම් වැඩිවේ",
                    "වත්කම් අඩුවේ, වගකීම් වැඩිවේ",
                    "වත්කම් වැඩිවේ, හිමිකම අඩුවේ",
                    "වත්කම් හා වගකීම් දෙකම අඩුවේ"
                ],
        
                answer: 0
            },
        
        
            {
                question:
                    "ව්‍යාපාරය රු. 20,000 ක ගෙවිය යුතු මුදලක් මුදලින් ගෙවූ විට?",
        
                options: [
                    "වත්කම් හා වගකීම් දෙකම අඩුවේ",
                    "වත්කම් හා වගකීම් දෙකම වැඩිවේ",
                    "වත්කම් වැඩිවේ, වගකීම් අඩුවේ",
                    "හිමිකම පමණක් වැඩිවේ"
                ],
        
                answer: 0
            },
        
        
            {
                question:
                    "ව්‍යාපාරය රු. 30,000 ක මුදල් විකිණීමක් සිදු කළ විට, ගනුදෙනුවේදී මුදල් වත්කමට සිදුවන්නේ කුමක්ද?",
        
                options: [
                    "රු. 30,000 කින් වැඩිවේ",
                    "රු. 30,000 කින් අඩුවේ",
                    "වෙනසක් සිදු නොවේ",
                    "රු. 60,000 කින් වැඩිවේ"
                ],
        
                answer: 0
            },
        
        
            {
                question:
                    "ගිණුම්කරණ සමීකරණය සැමවිටම සමතුලිතව පැවතිය යුත්තේ ඇයි?",
        
                options: [
                    "වත්කම් සඳහා හිමිකම හා වගකීම් මගින් මූලාශ්‍රයක් තිබෙන බැවින්",
                    "ආදායම් හා වියදම් සමාන බැවින්",
                    "සියලුම ව්‍යාපාර ලාභ ලබන බැවින්",
                    "සියලුම වත්කම් මුදල් බැවින්"
                ],
        
                answer: 0
            },
        
        
            {
                question:
                    "ව්‍යාපාරයක වත්කම් රු. 500,000 ක් හා හිමිකම රු. 350,000 ක් නම් වගකීම් කොපමණද?",
        
                options: [
                    "රු. 150,000",
                    "රු. 350,000",
                    "රු. 500,000",
                    "රු. 850,000"
                ],
        
                answer: 0
            }
        
        ]

        };


        /* =========================================
           QUESTIONS
        ========================================= */

        const questions =
            quizData[lesson] ||
            quizData["1"];


        /* =========================================
           VARIABLES
        ========================================= */

        let currentQuestion = 0;

        let score = 0;

        let answered = false;

        let timeLeft = 600;

        let timerInterval = null;


        /* =========================================
           HTML ELEMENTS
        ========================================= */

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

        const questionCounter =
            document.getElementById(
                "questionCounter"
            );

        const timerElement =
            document.getElementById(
                "timer"
            );

        const quizCard =
            document.getElementById(
                "quizCard"
            );

        const quizResult =
            document.getElementById(
                "quizResult"
            );


        /* =========================================
           LESSON TITLES
        ========================================= */

        const lessonTitles = {

            "1":
                "Lesson 01 - Introduction to Business Studies",

            "2":
                "Lesson 02 - Business Environment",

            "3":
                "Lesson 03 - Business Ownership",

            "4":
                "Lesson 04 - Accounting",

            "5":
                "Lesson 05 - Accounting Equation"

        };


        /* =========================================
           SELECTED LESSON GOLD COLOR
        ========================================= */

        document
            .querySelectorAll(
                ".lesson-select"
            )
            .forEach(
                function (link) {

                    if (
                        link.dataset.lesson ===
                        lesson
                    ) {

                        link.classList.add(
                            "selected"
                        );

                    }

                }
            );


        /* =========================================
           SHOW LESSON TITLE
        ========================================= */

        const titleElement =
            document.getElementById(
                "quizLessonTitle"
            );

        if (titleElement) {

            titleElement.textContent =
                lessonTitles[lesson] ||
                "Lesson 01";

        }


        /* =========================================
           TIMER
        ========================================= */

        function startTimer() {

            clearInterval(
                timerInterval
            );

            timeLeft = 600;

            updateTimer();


            timerInterval =
                setInterval(
                    function () {

                        timeLeft--;

                        updateTimer();


                        if (
                            timeLeft <= 0
                        ) {

                            clearInterval(
                                timerInterval
                            );

                            finishQuiz(
                                true
                            );

                        }

                    },
                    1000
                );

        }


        function updateTimer() {

            if (!timerElement) {

                return;

            }


            const minutes =
                Math.floor(
                    timeLeft / 60
                );


            const seconds =
                timeLeft % 60;


            timerElement.textContent =
                String(minutes)
                    .padStart(2, "0") +
                ":" +
                String(seconds)
                    .padStart(2, "0");


            if (
                timeLeft <= 60
            ) {

                timerElement.classList.add(
                    "warning"
                );

            }

            else {

                timerElement.classList.remove(
                    "warning"
                );

            }

        }


        /* =========================================
           LOAD QUESTION
        ========================================= */

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


            questionElement.textContent =
                (
                    currentQuestion + 1
                ) +
                ". " +
                question.question;


            questionCounter.textContent =
                "Question " +
                (
                    currentQuestion + 1
                ) +
                " of " +
                questions.length;


            optionsElement.innerHTML =
                "";


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


                    optionsElement.appendChild(
                        button
                    );

                }
            );


            nextButton.disabled =
                true;


            updateScore();

        }


        /* =========================================
           SELECT ANSWER
        ========================================= */

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
                            "#fff";

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
                    "#fff";

            }

            else {

                button.style.background =
                    "#dc3545";

                button.style.color =
                    "#fff";

            }


            nextButton.disabled =
                false;


            updateScore();

        }


        /* =========================================
           NEXT QUESTION
        ========================================= */

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


        /* =========================================
           SCORE
        ========================================= */

        function updateScore() {

            scoreElement.textContent =
                "Score: " +
                score +
                " / " +
                questions.length;

        }


        /* =========================================
           COMPLETE LESSON
        ========================================= */

        function markLessonCompleted() {

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


            const lessonId =
                "lesson" + lesson;


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

        }


        /* =========================================
           FINISH QUIZ
        ========================================= */

        function finishQuiz(
            timeExpired = false
        ) {

            clearInterval(
                timerInterval
            );


            const percentage =
                Math.round(
                    (
                        score /
                        questions.length
                    ) * 100
                );


            /* Save general result */

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
                "uez_last_score",
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


            /* Save lesson result */

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


            /* Quiz count */

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
             * Lesson is completed only
             * if all questions were answered
             * or quiz was completed normally.
             */

            if (!timeExpired) {

                markLessonCompleted();

            }


            /* Show result */

            quizCard.style.display =
                "none";


            quizResult.style.display =
                "block";


            const resultPercentage =
                document.getElementById(
                    "resultPercentage"
                );


            const resultMessage =
                document.getElementById(
                    "resultMessage"
                );


            resultPercentage.textContent =
                percentage + "%";


            if (timeExpired) {

                resultMessage.textContent =
                    "⏰ කාලය අවසන් විය. ඔබ ලබාගත් ලකුණු: " +
                    score +
                    " / " +
                    questions.length;

            }

            else if (
                percentage >= 50
            ) {

                resultMessage.textContent =
                    "🎉 සුභ පැතුම්! ඔබ Quiz එක සමත් වී ඇත. " +
                    score +
                    " / " +
                    questions.length;

            }

            else {

                resultMessage.textContent =
                    "ඔබගේ ලකුණු " +
                    score +
                    " / " +
                    questions.length +
                    " කි. නැවත උත්සාහ කරන්න.";

            }

        }


        /* =========================================
           START
        ========================================= */

        loadQuestion();

        updateScore();

        startTimer();

    }
);
