// wait for the DOM content to load
document.addEventListener("DOMContentLoaded", function() {
    startQuiz();
})

// define list of questions and answers

let quizQuestions = [
    {
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
        question: 'Tape the sound of the moon fading at dawn. Give it to your mother to listen to when she’s in sorrow.',
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
]

// Get and declare constant elements from DOM

const questionText = document.getElementById("moonq");

// Create an array from the answers and store in a variable
const options = Array.from(document.getElementsByClassName("answer-text"));

const score = document.getElementById("score");

let availableQuestions = quizQuestions;
let currentQuestion = {};
let initialScore = 0;
let questionCount = 0;

// Set max. number of questions and score per correct answer for the quiz
const maxNumberOfQuestions = 5;
const correctAnswPoints = 20;

/**display a random question from quizQuestions*/
function setNewQuestion() {
   
    if (questionCount >= maxNumberOfQuestions){
        console.log('max questions reached!')
    }

    questionCount++;

    //get a random question from quizQuestions and write back to DOM
    const randomQIndex = Math.floor(Math.random() * availableQuestions.length);
    console.log(randomQIndex);
    currentQuestion = availableQuestions[randomQIndex];
    questionText.innerText = currentQuestion.question;

   
    //keep track of selected option and write option to DOM 

    options.forEach(function(option) {
        const number = option.dataset.choice;
        option.innerText = currentQuestion['option' + number];
    })

    //remove used question from the available questions list at the random question index
   availableQuestions.splice(randomQIndex, 1);
   console.log(availableQuestions);

   //loop through all options and add event listener for a click and store which option was selected by the user
   options.forEach(function(option) {
       option.addEventListener('click', function highlightCorrect(event) {
           console.log("answer button clicked");
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
           
       })
});

}

/**start the quiz */
function startQuiz() {
    console.log('quiz started');
    setNewQuestion();
}

function selectAnswer() {

}

function checkAnswer() {

}

function incrementScore() {

}

