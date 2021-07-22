const startbtn = document.getElementById("start-btn");
const nextButton = document.getElementById("next-btn");
const questionContainerElement = document.getElementById("question-container");
const questionElement = document.getElementById("question");
const answerButtonElement = document.getElementById("answer-btn");


let shuffleQuestion, currentQuestionIndex;

startbtn.addEventListener("click", startGame);
nextButton.addEventListener("click", () => {
    currentQuestionIndex++;
    setNextQuestion();
})

function startGame(){
startbtn.classList.add("hide");
shuffleQuestion = questions.sort(() => Math.random() - .5);
currentQuestionIndex = 0;
questionContainerElement.classList.remove("hide");
setNextQuestion();
}

function setNextQuestion(){
    resetState();
showQuestion(shuffleQuestion[currentQuestionIndex]);
}

function showQuestion(question){
questionElement.innerText = question.question;
question.answers.forEach(answer =>{
    const button = document.createElement("button");
    button.innerText= answer.text;
    button.classList.add("btn");
    if(answer.correct){
        button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer)
    answerButtonElement.appendChild(button);
})
}

function resetState(){
    clearStatusClass(document.body);
    nextButton.classList.add("hide");
    while(answerButtonElement.firstChild){
        answerButtonElement.removeChild(answerButtonElement.firstChild);
    }
}
function selectAnswer(e){
const selectedButton = e.target;
const correct = selectedButton.dataset.correct;
setStatusClass(document.body, correct);
Array.from(answerButtonElement.children).forEach(button =>{
    setStatusClass(button, button.dataset.correct)
})
if(shuffleQuestion.length > currentQuestionIndex + 1){ 
nextButton.classList.remove("hide");
}else{
    startbtn.innerText="Restart";
    startbtn.classList.remove("hide");
}
}

function setStatusClass(element, correct){
    clearStatusClass(element);
    if(correct){
        element.classList.add("correct");
    }else{
        element.classList.add("wrong");
    }
}

function clearStatusClass(element){
    element.classList.remove("correct");
    element.classList.remove("wrong");
}

const questions = [
    {
        question:"What are you?",
        answers: [
            {text:"retard", correct:true},
            {text:"Human", correct:false},
            {text:"Man", correct:false},
            {text:"woman", correct:false},
        ]
    },

    {
        question:"Whats the color of orange",
        answers: [
            {text:"Orange", correct:true},
            {text:"Yellow", correct:false},
            {text:"Red", correct:false},
            {text:"Peach", correct:false},
        ]
    },

    {
        question:"Who is th emost hard-working person?",
        answers: [
            {text:"Elon Musk", correct:true},
            {text:"Bill Gates", correct:false},
            {text:"Richard Branson", correct:false},
            {text:"Vijay Malya", correct:false},
        ]
    },
    {
        question:"Who is the most beautiful women in this planet?",
        answers: [
            {text:"Scarlet Johannson", correct:false},
            {text:"Dani Daniels", correct:false},
            {text:"Aishwarya Rai", correct:true},
            {text:"Ananya from Suth Mumbai", correct:false},
        ]
    }

]