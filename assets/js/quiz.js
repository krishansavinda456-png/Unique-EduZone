const questions = [

    {
        question: "What is a business?",

        options: [
            "An organization that provides goods or services",
            "A sport",
            "A computer program"
        ],

        answer: 0
    },


    {
        question: "Which is a factor of production?",

        options: [
            "Land",
            "Website",
            "Advertisement"
        ],

        answer: 0
    },


    {
        question: "What is income?",

        options: [
            "Money received by a business",
            "Money spent only",
            "A business building"
        ],

        answer: 0
    }

];



/*
    Quiz Variables
*/

let currentQuestion = 0;

let score = 0;

let answered = false;


/*
    Timer
*/

let timeRemaining = 60;

let timerInterval = null;


/*
    Load Question
*/

function loadQuestion() {

    const question =
        questions[currentQuestion];


    document.getElementById(
        "questionBox"
    ).textContent =
        question.question;


    const optionsBox =
        document.getElementById(
            "optionsBox"
        );


    optionsBox.innerHTML = "";


    answered = false;


    question.options.forEach(
        (option, index) => {

            const button =
                document.createElement(
                    "button"
                );


            button.className =
                "option";


            button.textContent =
                option;


            button.onclick =
                function () {

                    selectAnswer(index);

                };


            optionsBox.appendChild(
                button
            );

        }
    );


    updateProgress();

}


/*
    Select Answer
*/

function selectAnswer(index) {

    if (answered) {

        return;

    }


    answered = true;


    const correctAnswer =
        questions[
            currentQuestion
        ].answer;


    if (index === correctAnswer) {

        score++;

    }


    const buttons =
        document.querySelectorAll(
            ".option"
        );


    buttons.forEach(
        button => {

            button.disabled = true;

        }
    );

}


/*
    Next Question
*/

function nextQuestion() {

    if (!answered) {

        alert(
            "Please select an answer."
        );

        return;

    }


    currentQuestion++;


    if (
        currentQuestion >=
        questions.length
    ) {

        finishQuiz();

        return;

    }


    loadQuestion();

}


/*
    Finish Quiz
*/

function finishQuiz() {

    stopTimer();


    const total =
        questions.length;


    const percentage =
        Math.round(
            (score / total) * 100
        );


    /*
        Save Score
    */

    localStorage.setItem(
        "uez_last_score",
        percentage
    );

    /*
        Save Quiz Status
    */

       localStorage.setItem(
        "uez_quiz_status",
        "Completed"
    );



    /*
        Quiz Count
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
        Save Details
    */

    localStorage.setItem(
        "uez_last_total",
        total
    );


    localStorage.setItem(
        "uez_last_correct",
        score
    );


    localStorage.setItem(
        "uez_last_quiz_date",
        new Date().toLocaleString()
    );


    /*
        Go to Results
    */

    window.location.href =
        "results.html";

}


/*
    Timer Start
*/

function startTimer() {

    updateTimerDisplay();


    timerInterval =
        setInterval(
            function () {

                timeRemaining--;


                updateTimerDisplay();


                /*
                    Time Over
                */

                if (
                    timeRemaining <= 0
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
    Timer Display
*/

function updateTimerDisplay() {

    const timer =
        document.getElementById(
            "quizTimer"
        );


    if (!timer) {

        return;

    }


    const minutes =
        Math.floor(
            timeRemaining / 60
        );


    const seconds =
        timeRemaining % 60;


    timer.textContent =
        String(minutes).padStart(
            2,
            "0"
        )
        +
        ":"
        +
        String(seconds).padStart(
            2,
            "0"
        );


    /*
        Warning
    */

    if (
        timeRemaining <= 10
    ) {

        timer.classList.add(
            "timer-warning"
        );

    }

}


/*
    Auto Submit
*/

function autoSubmitQuiz() {

    /*
        Calculate current result
    */

    const total =
        questions.length;


    const percentage =
        Math.round(
            (score / total) * 100
        );


    /*
        Save Score
    */

    localStorage.setItem(
        "uez_last_score",
        percentage
    );


    /*
        Save Quiz Status
    */

    localStorage.setItem(
        "uez_quiz_status",
        "Time Up"
    );


    /*
        Quiz Count
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
        Save Details
    */

    localStorage.setItem(
        "uez_last_total",
        total
    );


    localStorage.setItem(
        "uez_last_correct",
        score
    );


    localStorage.setItem(
        "uez_last_quiz_date",
        new Date().toLocaleString()
    );


    /*
        Mark as Time Up
    */

    localStorage.setItem(
        "uez_quiz_status",
        "Time Up"
    );


    /*
        Open Results
    */

    window.location.href =
        "results.html";

}


/*
    Stop Timer
*/

function stopTimer() {

    if (timerInterval) {

        clearInterval(
            timerInterval
        );

        timerInterval = null;

    }

}


/*
    Progress
*/

function updateProgress() {

    const progress =
        Math.round(
            (
                currentQuestion /
                questions.length
            ) * 100
        );


    const progressBar =
        document.getElementById(
            "quizProgress"
        );


    if (progressBar) {

        progressBar.style.width =
            progress + "%";

    }

}


/*
    Start Quiz
*/

loadQuestion();

startTimer();