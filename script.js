let questions = [
    {
        "question" : "Das Wort \"Eiforbibbsch\" oder der Ausspruch:<br> \"(Nu) Ei verbibbsch noch a mal\" ist Sächsisch und bedeutet...",
        "answer_1" : "...\"(Na) Das ist wunderschön!\"",
        "answer_2" : "...\"(Na) Das ist ein faules Ei!\"",
        "answer_3" : "...\"(Na) Sieh mal einer an!\"",
        "answer_4" : "...\"(Na) Das ist aber ein mieses Wetter!\"",
        "right_answer" : 3
    },
    {
        "question" : "Die sogenannten \"Krätzchensänger\" bezeichnen...",
        "answer_1" : "...hessische Interpreten",
        "answer_2" : "...berlinerische Interpreten",
        "answer_3" : "...schwäbische Interpreten",
        "answer_4" : "...rheinische Interpreten",
        "right_answer" : 4
    },
    {
        "question" : "\"Noh de Arwet bin ich immer so bibb.\" Was könnte dies wohl bedeuten und welcher Region ordnen Sie diesen Satz zu?",
        "answer_1" : "Ich bin immer sehr schnell verliebt",
        "answer_2" : "Saarländisch für \"Ich bin nach der Arbeit immer so müde\"",
        "answer_3" : "Ruhrdeutsch für \"Ich bin nach der Arbeit immer so beseelt\"",
        "answer_4" : "Bairisch für \"Ich bin immer gleich aufgeregt\"",
        "right_answer" : 2
    },
    {
        "question" : "Was ist bloß mit \"Klönschnack\" gemeint?",
        "answer_1" : "Eine traditionell hamburgische Fischspezialität",
        "answer_2" : "Eine norddeutsche Plauderei",
        "answer_3" : "Eine typisch kölsche Bierverkostung",
        "answer_4" : "Eine badische Süßspeise",
        "right_answer" : 2
    },
    {
        "question" : "Wenn der Berliner mal ein bisschen direkter wird, kann schon einmal dieser Satz fallen: \"Wat sind Sie denn für een Blaffke?\" Was ist nun aber bloß mit \"Blaffke\" gemeint?",
        "answer_1" : "Ein Wichtigtuer, ein Besserwisser, ein eitler Mensch",
        "answer_2" : "Eine sehr naive Person",
        "answer_3" : "Ein Scherzkeks",
        "answer_4" : "Eine schlecht gelaunte Person",
        "right_answer" : 1
    },
    {
        "question" : "\"Aadöbfl\" ist Fränkisch. Aber was könnte das wohl bedeuten?",
        "answer_1" : "Ein Küchenutensil",
        "answer_2" : "Einen Berufseinsteiger",
        "answer_3" : "Eine Kartoffel",
        "answer_4" : "Einen Chef oder Vorgesetzten",
        "right_answer" : 3
    },
    {
        "question" : "Mmh. Wie lecker! In großen Teilen Ostdeutschlands sagt man zu Pfannkuchen",
        "answer_1" : "...Semmeln",
        "answer_2" : "...Krapfen",
        "answer_3" : "...Bemme",
        "answer_4" : "...Eierkuchen",
        "right_answer" : 4
    },
    {
        "question" : "Wenn man in Thüringen von einer \"Dehmse\" spricht, meint man eine ...",
        "answer_1" : "... belegte Brotscheibe",
        "answer_2" : "... Sommerhitze",
        "answer_3" : "... freche Frau",
        "answer_4" : "... Gartenanlage oder einen Schrebergarten",
        "right_answer" : 2
    },
    {
        "question" : "Plattdeutsch: Wer oder was ist ein \"Hotschefiedel\"?",
        "answer_1" : "Meint einen Geigenkasten",
        "answer_2" : "Meint einen Schulanfänger",
        "answer_3" : "Meint ein kleines Auto",
        "answer_4" : "Meint eine plattdeutsche Kaffeespezialität",
        "right_answer" : 3
    },
    {
        "question" : "\"Dit find ick knorke!\" könnte man im Berliner und Brandenburger Raum hören. Was ist damit gemeint?",
        "answer_1" : "Etwas als ausgezeichnet empfinden",
        "answer_2" : "Etwas als unwahrscheinlich schlecht empfinden",
        "answer_3" : "Etwas als geschmacklos empfinden",
        "answer_4" : "Etwas als zu teuer empfinden",
        "right_answer" : 1
    }
];

let currentQuestion = 0;
let rightAnswers = 0;
let sound_success = new Audio('/sounds/success.mp3');
let sound_fail = new Audio('/sounds/fail.mp3');


function init() {
    document.getElementById('question-counter').innerHTML = `<b>${currentQuestion+1}</b> von <b>${questions.length}</b> Fragen`;

    showQuestion();
}

function showQuestion() {
    if(currentQuestion >= questions.length) {
        // Show End Screen
        document.getElementById('endscreen').style = '';
        document.getElementById('question-body').style = 'display: none';
        document.getElementById('header-img').src = '/img/A-endscreen.png';
        document.getElementById('rightAnswers').innerHTML = `Du hast <b style="color:#FF66C4">${rightAnswers}</b> von <b style="color:#FF66C4">${questions.length}</b> Fragen<br> richtig beantwortet.`;
        document.getElementById('progress-bar').style = `display: none`;
    } else {
        let question = questions[currentQuestion];
    
        document.getElementById('question-text').innerHTML = `${question['question']}`;
        document.getElementById('answer_1').innerHTML = `${question['answer_1']}`;
        document.getElementById('answer_2').innerHTML = `${question['answer_2']}`;
        document.getElementById('answer_3').innerHTML = `${question['answer_3']}`;
        document.getElementById('answer_4').innerHTML = `${question['answer_4']}`;
    }
    enableAnswers();

}

// function answer(selection) {
//     let rightAnswer = `answer_${question['right_answer']}`;
//     if(question[selection] == question[rightAnswer]) {
//         document.getElementById(selection).classList.add('green');
//     } else {
//         document.getElementById(selection).classList.add('pink');
//         document.getElementById(rightAnswer).classList.add('green');
//     }

//     document.getElementById('next-button').removeAttribute('disabled');
//     document.getElementById('answer_1').classList.add('no-click');
//     document.getElementById('answer_2').classList.add('no-click');
//     document.getElementById('answer_3').classList.add('no-click');
//     document.getElementById('answer_4').classList.add('no-click');
// }

function answer(selection) {
    let question = questions[currentQuestion];
    let selectedQuestionNumber = selection.slice(-1);
    let idOfTheRightAnswer = `answer_${question['right_answer']}`;

    if(selectedQuestionNumber == question['right_answer']) {
        document.getElementById(selection).classList.add('green');
        sound_success.play();
        rightAnswers++;

    } else {
        document.getElementById(selection).classList.add('pink');
        document.getElementById(idOfTheRightAnswer).classList.add('green');
        sound_fail.play();
    }

    document.getElementById('next-button').disabled = false;
    disableAnswers();
}

function nextQuestion() {
    currentQuestion++;
    let progress = currentQuestion / questions.length ;
    progress = Math.round(progress * 100);
    document.getElementById('next-button').disabled = true;
    document.getElementById('progress-bar').style = `width : ${progress}%; transition: width 1s`;
    document.getElementById('progress-bar').innerHTML = `${progress}%`;
    progress = progress + 10;

    if(currentQuestion == questions.length) {
        setTimeout(init,1500);
        resetAnswerButtons();
    } else {
        init();
        resetAnswerButtons();
    }
}

function resetAnswerButtons() {
    document.getElementById('answer_1').classList.remove('pink');
    document.getElementById('answer_1').classList.remove('green');
    document.getElementById('answer_2').classList.remove('pink');
    document.getElementById('answer_2').classList.remove('green');
    document.getElementById('answer_3').classList.remove('pink');
    document.getElementById('answer_3').classList.remove('green');
    document.getElementById('answer_4').classList.remove('pink');
    document.getElementById('answer_4').classList.remove('green');
}

function restartQuiz() {
    currentQuestion = 0;
    rightAnswers = 0;

    document.getElementById('header-img').src = '/img/A.png'; // Bild zurücksetzen
    document.getElementById('question-body').style = ''; // question-body wieder einblenden
    document.getElementById('endscreen').style = `display: none`; // endscreen ausblenden

    init();
}

function disableAnswers() {
    document.getElementById('answer_1').disabled = true;
    document.getElementById('answer_2').disabled = true;
    document.getElementById('answer_3').disabled = true;
    document.getElementById('answer_4').disabled = true;
}

function enableAnswers() {
    document.getElementById('answer_1').disabled = false;
    document.getElementById('answer_2').disabled = false;
    document.getElementById('answer_3').disabled = false;
    document.getElementById('answer_4').disabled = false;

}