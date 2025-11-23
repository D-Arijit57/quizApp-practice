//  use this quizData in your app.
const quizData = [{
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
function render(){
    const mainQ = document.querySelector("#question-text");
    const op1 = document.querySelector("#option1");
    const op2 = document.querySelector("#option2");
    const op3 = document.querySelector("#option3");
    // op3.textContent = quizData[0].c; // testing code 
    // console.log(op3); // testing code 
    const op4 = document.querySelector("#option4");
    // mainQ.innerText = quizData[idx].question;
    // console.log(mainQ); // testing code 
}
let i = 0;
function submit(){
    do{
        const option = document.querySelector("#")
        render(i);
        i++;
    }while(i < quizData.length)
}

