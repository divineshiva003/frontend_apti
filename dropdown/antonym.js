const questions=[
    {
      "question": "What is the antonym of 'happy'?",
      "options": ["Joyful", "Sad", "Excited", "Angry"],
      "answer": "Sad",
      "correct": 1
    },
    {
      "question": "Choose the antonym of 'brave'.",
      "options": ["Fearless", "Cowardly", "Bold", "Courageous"],
      "answer": "Cowardly",
      "correct": 1
    },
    {
      "question": "Pick the antonym of 'hot'.",
      "options": ["Warm", "Cold", "Boiling", "Humid"],
      "answer": "Cold",
      "correct": 1
    },
    {
      "question": "What is the antonym of 'beautiful'?",
      "options": ["Pretty", "Charming", "Ugly", "Graceful"],
      "answer": "Ugly",
      "correct": 2
    },
    {
      "question": "Select the antonym of 'strong'.",
      "options": ["Weak", "Powerful", "Tough", "Energetic"],
      "answer": "Weak",
      "correct": 0
    },
    {
      "question": "Identify the antonym of 'easy'.",
      "options": ["Difficult", "Simple", "Effortless", "Quick"],
      "answer": "Difficult",
      "correct": 0
    },
    {
      "question": "What is the antonym of 'expensive'?",
      "options": ["Cheap", "Costly", "Pricey", "Valuable"],
      "answer": "Cheap",
      "correct": 0
    },
    {
      "question": "Choose the antonym of 'fast'.",
      "options": ["Quick", "Slow", "Swift", "Rapid"],
      "answer": "Slow",
      "correct": 1
    },
    {
      "question": "Pick the antonym of 'dark'.",
      "options": ["Dim", "Bright", "Black", "Shadowy"],
      "answer": "Bright",
      "correct": 1
    },
    {
      "question": "What is the antonym of 'narrow'?",
      "options": ["Slim", "Wide", "Thin", "Sharp"],
      "answer": "Wide",
      "correct": 1
    },
    {
      "question": "Select the antonym of 'polite'.",
      "options": ["Rude", "Kind", "Courteous", "Respectful"],
      "answer": "Rude",
      "correct": 0
    },
    {
      "question": "Identify the antonym of 'full'.",
      "options": ["Empty", "Complete", "Overflowing", "Loaded"],
      "answer": "Empty",
      "correct": 0
    },
    {
      "question": "Choose the antonym of 'deep'.",
      "options": ["Shallow", "Profound", "Heavy", "Immersed"],
      "answer": "Shallow",
      "correct": 0
    },
    {
      "question": "Pick the antonym of 'love'.",
      "options": ["Hate", "Care", "Admire", "Respect"],
      "answer": "Hate",
      "correct": 0
    },
    {
      "question": "What is the antonym of 'noisy'?",
      "options": ["Quiet", "Loud", "Silent", "Clamorous"],
      "answer": "Quiet",
      "correct": 0
    },
    {
      "question": "Select the antonym of 'ancient'.",
      "options": ["Old", "Antique", "Modern", "Primitive"],
      "answer": "Modern",
      "correct": 2
    },
    {
      "question": "Identify the antonym of 'lazy'.",
      "options": ["Diligent", "Idle", "Lethargic", "Inactive"],
      "answer": "Diligent",
      "correct": 0
    },
    {
      "question": "Choose the antonym of 'sharp'.",
      "options": ["Dull", "Pointed", "Keen", "Clear"],
      "answer": "Dull",
      "correct": 0
    },
    {
      "question": "Pick the antonym of 'clear'.",
      "options": ["Vague", "Obvious", "Lucid", "Transparent"],
      "answer": "Vague",
      "correct": 0
    },
    {
      "question": "What is the antonym of 'rich'?",
      "options": ["Wealthy", "Broke", "Affluent", "Generous"],
      "answer": "Broke",
      "correct": 1
    },
    {
      "question": "Select the antonym of 'accept'.",
      "options": ["Reject", "Receive", "Welcome", "Adopt"],
      "answer": "Reject",
      "correct": 0
    },
    {
      "question": "Identify the antonym of 'early'.",
      "options": ["Late", "Prompt", "Punctual", "On time"],
      "answer": "Late",
      "correct": 0
    },
    {
      "question": "Choose the antonym of 'generous'.",
      "options": ["Kind", "Selfish", "Giving", "Helpful"],
      "answer": "Selfish",
      "correct": 1
    },
    {
      "question": "Pick the antonym of 'increase'.",
      "options": ["Grow", "Expand", "Decrease", "Multiply"],
      "answer": "Decrease",
      "correct": 2
    },
    {
      "question": "What is the antonym of 'calm'?",
      "options": ["Peaceful", "Excited", "Relaxed", "Composed"],
      "answer": "Excited",
      "correct": 1
    },
    {
      "question": "Select the antonym of 'weak'.",
      "options": ["Strong", "Fragile", "Shaky", "Feeble"],
      "answer": "Strong",
      "correct": 0
    },
    {
      "question": "Identify the antonym of 'public'.",
      "options": ["Open", "Private", "Famous", "Known"],
      "answer": "Private",
      "correct": 1
    },
    {
      "question": "Choose the antonym of 'blunt'.",
      "options": ["Sharp", "Dull", "Flat", "Pointless"],
      "answer": "Sharp",
      "correct": 0
    },
    {
      "question": "Pick the antonym of 'simple'.",
      "options": ["Easy", "Hard", "Complicated", "Basic"],
      "answer": "Complicated",
      "correct": 2
    },
    {
      "question": "What is the antonym of 'frequent'?",
      "options": ["Constant", "Rare", "Often", "Continuous"],
      "answer": "Rare",
      "correct": 1
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