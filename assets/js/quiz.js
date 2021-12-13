// wait for the DOM content to load
document.addEventListener("DOMContentLoaded", function () {
    startQuiz();
    console.log("loaded");
});

// define list of questions and answers as an array of objects

let quizQuestions = [{
        question: "Don't tell me the moon is shining; show me the glint of light on broken glass.",
        option1: 'Fyodor Dostoyevsky',
        option2: 'Anton Chekhov',
        option3: 'Leo Tolstoy',
        option4: 'Vladimir Nabokov',
        answer: '2',
    },
    {
        question: 'Everyone is a moon, and has a dark side which he never shows to anybody.',
        option1: 'E.E. Cummings',
        option2: 'Robert Frost',
        option3: 'Mark Twain',
        option4: 'John Lennon',
        answer: '3',
    },
    {
        question: 'The moon is friend for the lonesome to talk to.',
        option1: 'Carl Sandburg',
        option2: 'William Shakespeare',
        option3: 'Khalil Gibran',
        option4: 'Paulo Coelho',
        answer: '1',
    },
    {
        question: 'Do not swear by the moon, for she changes constantly. Then your love would also change.',
        option1: 'Virginia Woolf',
        option2: 'Sylvia Plath',
        option3: 'Paul Brandt',
        option4: 'William Shakespeare',
        answer: '4',
    },
    {
        question: "Tape the sound of the moon fading at dawn. Give it to your mother to listen to when she’s in sorrow.",
        option1: 'John Lennon',
        option2: 'Sylvia Plath',
        option3: 'Yoko Ono',
        option4: 'Virginia Woolf',
        answer: '3',
    },
    {
        question: "Don't tell me the sky is the limit when there are footprints on the Moon.",
        option1: 'John Lennon',
        option2: 'Paul Brandt',
        option3: 'Buzz Aldrin',
        option4: 'Neil Armstrong',
        answer: '2',
    },
];

// get and declare constant elements from DOM

const questionText = document.getElementById("moonq");

// create an array from the answers and store in a variable
const options = Array.from(document.getElementsByClassName("answer-text"));

const score = document.getElementById("score");
let scoreValue = score.innerText;
const finalScore = document.getElementById("final-score");

let availableQuestions = quizQuestions;
let currentQuestion = {};
let selectionPossible = true;
let initialScore = 0;
let questionCount = 0;


// set max. number of questions and score per correct answer for the quiz
const maxNumberOfQuestions = 5;
const correctAnswPoints = 20;

// modals
const endOverlay = document.getElementById("overlay");
const endModal = document.getElementById("end-modal");
const modalBtn = document.getElementById("modal-btn");

// end game actions
const playAgainBtn = document.getElementById("play-again");
const goHomeBtn = document.getElementById("go-home");

// for this part of the code I refered to video tutorials by Brian Design and Web Dev Simplified, and adapted the code to my needs. It is mentioned in the README as well

/**display a random question from quizQuestions*/
function setNewQuestion() {

    if (questionCount === maxNumberOfQuestions) {

        //show game over modal 
        gameOver();

        //stop showing new questions and show game over page
        return;
    }

    questionCount++;

    // update question count and progress

    updateQCount();
    showProgress();


    //get a random question from quizQuestions and write back to DOM

    const randomQIndex = Math.floor(Math.random() * availableQuestions.length);
    console.log(randomQIndex);
    currentQuestion = availableQuestions[randomQIndex];
    questionText.innerText = currentQuestion.question;

    //keep track of selected option and write option to DOM 

    options.forEach(function (option) {
        const number = option.dataset.choice;
        option.innerText = currentQuestion['option' + number];
    });

    //remove used question from the available questions list at the random question index
    availableQuestions.splice(randomQIndex, 1);
    console.log(availableQuestions);

    selectionPossible = true;
}

//loop through all options and add event listener for a click and store which option was selected by the user

options.forEach(function (option) {
    option.addEventListener('click', function highlightCorrect(event) {
        console.log("answer button clicked");

        if (!selectionPossible) return;

        selectionPossible = false;

        //stores info about the target that was clicked

        let selectedOption = event.target;
        console.log(selectedOption);

        //determines the reference of the data-choice on that target and stores it

        let userSelected = selectedOption.dataset.choice;
        console.log(userSelected);
        console.log(currentQuestion.answer);

        //compare user's choice and correct answer to the current question and add a class correct/incorrect-answer depending on the result to change the color

        let classToAdd = userSelected == currentQuestion.answer ? 'correct-answer' : 'incorrect-answer';
        console.log(classToAdd);
        selectedOption.parentElement.classList.add(classToAdd);
        selectedOption.parentElement.classList.add("selected");

        //if selected answer is correct, increment score by 25 - correct answer points 

        if (classToAdd === "correct-answer") {
            incrementScore(correctAnswPoints);
        }

        //remove class color after 2.5 seconds

        setTimeout(removeHighlight, 2500);

        function removeHighlight() {
            selectedOption.parentElement.classList.remove(classToAdd);
            selectedOption.parentElement.classList.remove("selected");

            //get another random question
            setNewQuestion();
        }
    });
});

/**start the quiz */
function startQuiz() {
    console.log('quiz started');
    initialScore = 0;
    questionCount = 0;
    setNewQuestion();
}

/**increment score */
function incrementScore() {
    let total = parseInt(score.innerText) + correctAnswPoints;
    score.innerText = total;
}

/**update progress with current question number and total number of question */
function updateQCount() {
    document.getElementById("progress-text").innerText = `Question ${questionCount} of ${maxNumberOfQuestions}`;
}

/**update progress bar */
function showProgress() {
    const q1 = document.getElementById("q1");
    const q2 = document.getElementById("q2");
    const q3 = document.getElementById("q3");
    const q4 = document.getElementById("q4");
    const q5 = document.getElementById("q5");

// toggle visibility of the progress icons 

    if (questionCount === 1) {
        q1.style.visibility = "visible";
    } else if (questionCount === 2) {
        q2.style.visibility = "visible";
    } else if (questionCount === 3) {
        q3.style.visibility = "visible";
    } else if (questionCount === 4) {
        q4.style.visibility = "visible";
    } else if (questionCount === 5) {
        q5.style.visibility = "visible";
    }
}

/**show end modal */
function gameOver() {
    endOverlay.style.display = "block";
    endModal.style.display = "block";
    finalScore.innerText = score.innerText;
}

//close game over modal when x close button is clicked

modalBtn.addEventListener("click", function () {
    endOverlay.style.display = "none";
    endModal.style.display = "none";

});

//close modal when clicked anywhere on window

window.onclick = function (event) {
    if (event.target === endOverlay) {
        endOverlay.style.display = "none";
        endModal.style.display = "none";
    }
};

//takes user back to quiz start
playAgainBtn.addEventListener("click", function () {
    return location.assign("./quiz.html");
});


goHomeBtn.addEventListener("click", function () {
    return location.assign("./index.html");
});
