// Get and declare constant elements from DOM

const questionText = document.getElementById("moonq");
const answerText = document.getElementsByClassName("answer-text");
const score = document.getElementById("score");

let availableQuestions = quizQuestions;
let initialScore = 0;
let questionCount = 0;


function startQuiz() {
    
}

function setNewQuestion() {

}

function selectAnswer() {

}

function checkAnswer() {

}

function incrementScore() {

}

// define list of questions and answers

let quizQuestions = [
    {
        question: "Don't tell me the moon is shining; show me the glint of light on broken glass.",
        option1: 'Fyodor Dostoyevsky',
        option2: 'Anton Chekhov',
        option3: 'Leo Tolstoy',
        option4: 'Vladimir Nabokov',
        answer: 'Anton Chekhov',
    },
    {
        question: 'Everyone is a moon, and has a dark side which he never shows to anybody.',
        option1: 'E.E. Cummings',
        option2: 'Robert Frost',
        option3: 'Mark Twain',
        option4: 'John Lennon',
        answer: 'Mark Twain',
    },
    {
        question: 'The moon is friend for the lonesome to talk to.',
        option1: 'Carl Sandburg',
        option2: 'William Shakespeare',
        option3: 'Khalil Gibran',
        option4: 'Paulo Coelho',
        answer: 'Carl Sandburg',
    },
    {
        question: 'Do not swear by the moon, for she changes constantly. Then your love would also change.',
        option1: 'Virginia Woolf',
        option2: 'Sylvia Plath',
        option3: 'Paul Brandt',
        option4: 'William Shakespeare',
        answer: 'William Shakespeare',
    }
]