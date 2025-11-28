//  use this quizData in your app.
const quizData = [
    {
    "question": "Which language runs in a web browser?",
    "a": "Java",
    "b": "C",
    "c": "Python",
    "d": "JavaScript",
    "correct": "d",
},
{
    "question": "What does CSS stand for?",
    "a": "Central Style Sheets",
    "b": "Cascading Style Sheets",
    "c": "Cascading Simple Sheets",
    "d": "Cars SUVs Sailboats",
    "correct": "b",
},
{
    "question": "What does HTML stand for?",
    "a": "Hypertext Markup Language",
    "b": "Hypertext Markdown Language",
    "c": "Hyperloop Machine Language",
    "d": "Helicopters Terminals Motorboats Lamborginis",
    "correct": "a",
},
{
    "question": "What year was JavaScript launched?",
    "a": "1996",
    "b": "1995",
    "c": "1994",
    "d": "none of the above",
    "correct": "b",
},
// you can add more quiz here
]
// we are going to create a render function 
// that renders the next component (quiz UI) after every correct answer 

let optionChosen = '' ;
let quizIdx = 0;
window.onload = () => render(quizIdx)
function render(quizIdx){
    if(quizIdx >= quizData.length){
        document.querySelector("#question-text").innerText = "Quiz is Over!!!";
        return ;
    }
    const mainQ = document.querySelector("#question-text");
    const op1 = document.querySelector('label[for="option-1"]');
    const op2 = document.querySelector('label[for="option-2"]');
    const op3 = document.querySelector('label[for="option-3"]');
    // op3.textContent = quizData[0].c; // testing code 
    // console.log(op3); // testing code 
    const op4 = document.querySelector('label[for="option-4"]');
    const selectedOption = document.querySelector('input[name="answer"]:checked');
    if(selectedOption){
        selectedOption.checked = false;
    }
    mainQ.innerText = quizData[quizIdx].question;
    op1.innerText = quizData[quizIdx].a;
    op2.innerText = quizData[quizIdx].b;
    op3.innerText = quizData[quizIdx].c;
    op4.innerText = quizData[quizIdx].d;
    // mainQ.innerText = quizData[quizIdx].question;
    // console.log(mainQ); // testing code 
    optionChosen = '';
}
function chosen_option(val){
     optionChosen = val;
}
function submit(){
    if(optionChosen === ''){
        alert("Please choose one of the options");
        return;
    }
    const correct = quizData[quizIdx].correct ;
    if(optionChosen === correct){
        quizIdx++;
        render(quizIdx);
    }
    else{
        alert("Incorrect answer!!! Try again")
    }
}
