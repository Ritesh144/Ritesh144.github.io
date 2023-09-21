const questions=[
    {
        question: "Which is larget animal in the world",
        answers:[
            {text: "Shark",correct: false},
            {text: "Blue whale",correct: true},
            {text: "Elephant",correct: false},
            {text: "Giraffe",correct: false},
        ]
    },

    {   question: "Which is the smallest continent in the world?",
        answers: [
        
        {text: "Asia",correct: false},
        {text: "Australia" ,correct: true},
        {text: "Arctic",correct: false},
        {text: "Africa",correct: false},
        ]
    },

    {
        question: "What is the primary purpose of Python?",
        answers:[
            {text: "Data analysis",correct: false},
            {text: "Web development",correct: false},
            {text: "Machine learning",correct: false},
            {text: "All of the above",correct: true},
        ]
    },

    {
        question: "Which of the following is NOT a valid Python data type?",
        answers:[
            {text: "Integer",correct: false},
            {text: "Float",correct: false},
            {text: "String",correct: false},
            {text: "Character",correct: true},
        ]
    },

    {
        question: " In Python, how do you define a function?",
        answers:[
            {text: "def my_function()",correct: true},
            {text: "function my_function()",correct: false},
            {text: "define my_function()",correct: false},
            {text: "function = my_function()",correct: false},
        ]
    },

    {
        question: "Which of the following is used for multiline comments in Python?",
        answers:[
            {text: "// This is a comment",correct: false},
            {text: "/* This is a comment */",correct: false},
            {text: " ''' This is a comment ''' ",correct: true},
            {text: "# This is a comment",correct: false},
        ]
    },

    {
        question: "How do you create an empty list in Python?",
        answers:[
            {text: "list()",correct: false},
            {text: "[]",correct: true},
            {text: "empty_list()",correct: false},
            {text: "create_list()",correct: false},
        ]
    },

    {
        question: "What is the result of the expression 5 + 3 * 2 in Python?",
        answers:[
            {text: "10",correct: false},
            {text: "16",correct: false},
            {text: "11",correct: true},
            {text: "26",correct: false},
        ]
    },

    {
        question: "Which of the following is used to exit a loop prematurely in Python?",
        answers:[
            {text: "stop",correct: false},
            {text: "end",correct: false},
            {text: "break",correct: ture},
            {text: "Elephant",correct: false},
        ]
    },


    {
        question: "How do you open a file named example.txt for reading in Python?",
        answers:[
            {text: "Sopen example.txt, r",correct: ture},
            {text: "read example.txt" ,correct: false},
            {text: " file_open example.txt, read",correct: false},
            {text: "fopen example.txt",correct: false},
        ]
    },

    {
        question: "What is the output of print ('Hello, ' + 'world!') in Python?",
        answers:[
            {text: "Hello, world!",correct: ture},
            {text: "Hello + world!",correct: false},
            {text: "HelloWorld!",correct: false},
            {text: "Error: unsupported operand type(s) for +: 'str' and 'str'",correct: false},
        ]
    },

    {
        question: "In Python, what does the len() function do?",
        answers: [
            { text: "alculate logarithms",correct: false},
            { text: "Find the length of a list or string",correct: true}, 
            { text: "onvert to lowercaset",correct: false},
            { text: "Calculate exponentials",correct: false}, 
        ]
    }
];


const questionElement = document.getE1ementById( " question " );
const answerButtons = document.getE1ementById("answer-buttons");
const nextButton = document.getE1ementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML ="Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;


    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(and)
        button.addEventListener("click", selectAnswer);    
    });
}

function resetState(){
    nextButton.style.display = "none";
    while (answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

startQuiz(); 