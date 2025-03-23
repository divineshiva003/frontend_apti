const questions = [
    {
      "question": "What does 'break down' mean?",
      "options": ["To stop working", "To leave", "To improve", "To explain"],
      "answer": "To stop working",
      "correct": 0
    },
    {
      "question": "What is the meaning of 'give up'?",
      "options": ["To quit", "To continue", "To support", "To start"],
      "answer": "To quit",
      "correct": 0
    },
    {
      "question": "Choose the correct meaning of 'run out of'.",
      "options": ["To start", "To have none left", "To hide", "To save"],
      "answer": "To have none left",
      "correct": 1
    },
    {
      "question": "What does 'look after' mean?",
      "options": ["To ignore", "To search", "To take care of", "To criticize"],
      "answer": "To take care of",
      "correct": 2
    },
    {
      "question": "Pick the correct meaning of 'turn up'.",
      "options": ["To lower", "To arrive", "To cancel", "To improve"],
      "answer": "To arrive",
      "correct": 1
    },
    {
      "question": "What is the meaning of 'take off'?",
      "options": ["To remove", "To land", "To arrive", "To put on"],
      "answer": "To remove",
      "correct": 0
    },
    {
      "question": "What does 'put up with' mean?",
      "options": ["To endure", "To accept", "To reject", "To complain"],
      "answer": "To endure",
      "correct": 0
    },
    {
      "question": "Choose the correct meaning of 'look forward to'.",
      "options": ["To anticipate", "To look at", "To be afraid", "To regret"],
      "answer": "To anticipate",
      "correct": 0
    },
    {
      "question": "What does 'give in' mean?",
      "options": ["To refuse", "To surrender", "To persist", "To argue"],
      "answer": "To surrender",
      "correct": 1
    },
    {
      "question": "Pick the correct meaning of 'bring up'.",
      "options": ["To lower", "To raise a child", "To abandon", "To push down"],
      "answer": "To raise a child",
      "correct": 1
    },
    {
      "question": "What does 'call off' mean?",
      "options": ["To cancel", "To continue", "To ask for help", "To call someone"],
      "answer": "To cancel",
      "correct": 0
    },
    {
      "question": "Choose the correct meaning of 'get away'.",
      "options": ["To escape", "To arrive", "To get together", "To return"],
      "answer": "To escape",
      "correct": 0
    },
    {
      "question": "What does 'run into' mean?",
      "options": ["To avoid", "To encounter unexpectedly", "To exit", "To destroy"],
      "answer": "To encounter unexpectedly",
      "correct": 1
    },
    {
      "question": "Pick the correct meaning of 'pick up'.",
      "options": ["To drop", "To lift", "To receive", "To destroy"],
      "answer": "To lift",
      "correct": 1
    },
    {
      "question": "What is the meaning of 'get along'?",
      "options": ["To fight", "To argue", "To have a good relationship", "To ignore"],
      "answer": "To have a good relationship",
      "correct": 2
    },
    {
      "question": "What does 'put off' mean?",
      "options": ["To delay", "To begin", "To encourage", "To end"],
      "answer": "To delay",
      "correct": 0
    },
    {
      "question": "Choose the correct meaning of 'make up'.",
      "options": ["To create", "To break", "To invent", "To forget"],
      "answer": "To invent",
      "correct": 2
    },
    {
      "question": "What does 'set off' mean?",
      "options": ["To stop", "To start a journey", "To rest", "To delay"],
      "answer": "To start a journey",
      "correct": 1
    },
    {
      "question": "Pick the correct meaning of 'turn down'.",
      "options": ["To accept", "To increase", "To reject", "To put on"],
      "answer": "To reject",
      "correct": 2
    },
    {
      "question": "What is the meaning of 'go over'?",
      "options": ["To review", "To ignore", "To go under", "To jump over"],
      "answer": "To review",
      "correct": 0
    },
    {
      "question": "What does 'hold on' mean?",
      "options": ["To let go", "To continue", "To pause", "To wait"],
      "answer": "To wait",
      "correct": 3
    },
    {
      "question": "Choose the correct meaning of 'back out'.",
      "options": ["To support", "To withdraw", "To approve", "To enter"],
      "answer": "To withdraw",
      "correct": 1
    },
    {
      "question": "What does 'take over' mean?",
      "options": ["To surrender", "To take control", "To reject", "To lose"],
      "answer": "To take control",
      "correct": 1
    },
    {
      "question": "Pick the correct meaning of 'look into'.",
      "options": ["To avoid", "To investigate", "To forget", "To finish"],
      "answer": "To investigate",
      "correct": 1
    },
    {
      "question": "What does 'break into' mean?",
      "options": ["To enter illegally", "To fix", "To create", "To stop"],
      "answer": "To enter illegally",
      "correct": 0
    },
    {
      "question": "Choose the correct meaning of 'cut down'.",
      "options": ["To increase", "To reduce", "To remove", "To add"],
      "answer": "To reduce",
      "correct": 1
    },
    {
      "question": "What does 'go through' mean?",
      "options": ["To bypass", "To review", "To endure", "To create"],
      "answer": "To endure",
      "correct": 2
    },
    {
      "question": "Pick the correct meaning of 'work out'.",
      "options": ["To fail", "To exercise", "To quit", "To stop"],
      "answer": "To exercise",
      "correct": 1
    },
    {
      "question": "What is the meaning of 'put down'?",
      "options": ["To insult", "To lift", "To praise", "To record"],
      "answer": "To insult",
      "correct": 0
    },
    {
      "question": "What does 'get by' mean?",
      "options": ["To manage", "To stop", "To lose", "To ignore"],
      "answer": "To manage",
      "correct": 0
    }
]  
    
    // Dynamically create questions
    const quizContainer = document.getElementById('quizContainer');

    questions.forEach((q, index) => {
      
        const questionDiv = document.createElement('div');
        questionDiv.classList.add('quiz-container');
    
       
        const questionText = document.createElement('h2');
        questionText.innerText = (index + 1) + ". " + q.question;
        questionDiv.appendChild(questionText);
    
       
        const form = document.createElement('form');
        form.id = `quizForm${index + 1}`;
       
    
    
       
        q.options.forEach((option, optIndex) => {
            const label = document.createElement('label');
            const input = document.createElement('input');
            input.type = 'radio';
            input.name = `question${index + 1}`;
            input.value = optIndex === q.correct ? 'correct' : 'wrong';
            input.onclick = () => checkAnswer(input,q.correct,q.answer,index);
            
            label.appendChild(input);
            label.appendChild(document.createTextNode(option));
            form.appendChild(label);
            
            form.appendChild(document.createElement('br'));
            
        });
        const button=document.createElement('button');
            button.innerText="answer";
            button.id=`btn${index+1}`;
            button.classList.add('button');
        questionDiv.appendChild(form);
        quizContainer.appendChild(questionDiv);
    
        questionDiv.appendChild(button);
    });