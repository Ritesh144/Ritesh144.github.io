const questions =
    [
        {
            "question": "Which is larget animal in the world",
            "answer": "Blue whale",
            "options":
                [
                    {
                        "text": "Shark"
                    },
                    {
                        "text": "Blue whale"
                    },
                    {
                        "text": "Elephant"
                    },
                    {
                        "text": "Giraffe"
                    }
                ],
        },
        {
            "question": "Which is the smallest continent in the world?",
            "answer": "Australia",
            "options":
                [
                    {
                        "text": "Asia"
                    },
                    {
                        "text": "Australia"
                    },
                    {
                        "text": "Arctic"
                    },
                    {
                        "text": "Africa"
                    }
                ],
        },
        {
            "question": "What is the primary purpose of Python?",
            "answer": "All of the above",
            "options":
                [
                    {
                        "text": "Data analysis"
                    },
                    {
                        "text": "Web development"
                    },
                    {
                        "text": "Machine learning"
                    },
                    {
                        "text": "All of the above"
                    }
                ],
        },
        {
            "question": "Which of the following is NOT a valid Python data type?",
            "answer": "Character",
            "options":
                [
                    {
                        "text": "Integer"
                    },
                    {
                        "text": "Float"
                    },
                    {
                        "text": "String"
                    },
                    {
                        "text": "Character"
                    }
                ],
            },
                {
                    "question": "In Python, how do you define a function?",
                    "answer": "def my_function()",
                    "options":
                        [
                            {
                                "text": "def my_function()"
                            },
                            {
                                "text": "function my_function()"
                            },
                            {
                                "text": "define my_function()"
                            },
                            {
                                "text": "function = my_function()"
                            }
                        ],
                    },
                    
                    {
                        "question": "Which of the following is used for multiline comments in Python?",
                        "answer": " ''' This is a comment ''' ",
                        "options":
                            [
                                {
                                    "text": "// This is a comment"
                                },
                                {
                                    "text": "/* This is a comment */"
                                },
                                {
                                    "text": " ''' This is a comment ''' "
                                },
                                {
                                    "text": "# This is a comment"
                                }
                            ],
                        },

                        {
                            "question": "How do you create an empty list in Python?",
                            "answer": "def my_function()",
                            "options":
                                [
                                    {
                                        "text": "list()"
                                    },
                                    {
                                        "text": "[]"
                                    },
                                    {
                                        "text": "empty_list()"
                                    },
                                    {
                                        "text": "create_list()"
                                    }
                                ],
                            },
                            {
                                "question": "What is the result of the expression 5 + 3 * 2 in Python?",
                                "answer": "11",
                                "options":
                                    [
                                        {
                                            "text": "10"
                                        },
                                        {
                                            "text": "16"
                                        },
                                        {
                                            "text": "11"
                                        },
                                        {
                                            "text": "26"
                                        }
                                    ],
                                },
                                {
                                    "question": "Which of the following is used to exit a loop prematurely in Python?",
                                    "answer": "11",
                                    "options":
                                        [
                                            {
                                                "text": "stop"
                                            },
                                            {
                                                "text": "end"
                                            },
                                            {
                                                "text": "break"
                                            },
                                            {
                                                "text": "Elephant"
                                            }
                                        ],
                                    }                 
                
];


const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;


startQuiz();

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    //resetState();
    let currentQuestion = questions[currentQuestionIndex];

    // console.log("show quetion "+ JSON.stringify(questions[1]));

    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    let lenghOfAnswers = currentQuestion.options.length;


    for (let index = 0; index < lenghOfAnswers; index++) {
        const button = document.createElement("button");
        button.classList.add("btn");
        button.innerText = currentQuestion.options[index].text;
        button.addEventListener("click", selectAnswer);
        answerButtons.appendChild(button);
    }
}



function selectAnswer(e) {
    const selectedBtn = e.target;

    if (selectedBtn.innerHTML === questions[currentQuestionIndex].answer) {
        // alert("Correct!");
        selectedBtn.classList.add("correct");
        score++;
        // TODO: block other click events buttons
        
    }
    else {
        // TODO: block other click events buttons
        
        selectedBtn.classList.add("incorrect");
    }
    
    Array.from(answerButtons.children).forEach(button =>{
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    // nextButton.style.display="block";
}

function removeAllButtons() {
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function NextQuestion() {
    removeAllButtons();

    currentQuestionIndex++;


    if (currentQuestionIndex >= questions.length) {
        showScoreResults();
    }
    else {
        showQuestion();
    }

    if (nextButton.innerHTML === "Reset") {
        nextButton.innerHTML = "Reseting...";

        setInterval(() => {
            location.reload();
        }, 3000);
    }
}

function showScoreResults() {

    // hide next button
    // 
    questionElement.innerHTML = "Your Score is: " + score;
    nextButton.innerHTML = "Reset";
}

