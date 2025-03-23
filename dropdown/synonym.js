const questions = [
    {
      "question": "Choose the synonym for 'happy'.",
      "options": ["Sad", "Joyful", "Angry", "Tired"],
      "answer": "Joyful",
      "correct": 1
    },
    {
      "question": "What is a synonym for 'beautiful'?",
      "options": ["Ugly", "Pretty", "Rude", "Dull"],
      "answer": "Pretty",
      "correct": 1
    },
    {
      "question": "Pick the synonym for 'intelligent'.",
      "options": ["Dull", "Smart", "Lazy", "Forgetful"],
      "answer": "Smart",
      "correct": 1
    },
    {
      "question": "Select the synonym for 'difficult'.",
      "options": ["Easy", "Simple", "Tough", "Quick"],
      "answer": "Tough",
      "correct": 2
    },
    {
      "question": "Choose the synonym for 'angry'.",
      "options": ["Calm", "Furious", "Happy", "Excited"],
      "answer": "Furious",
      "correct": 1
    },
    {
      "question": "Identify the synonym for 'start'.",
      "options": ["End", "Begin", "Stop", "Pause"],
      "answer": "Begin",
      "correct": 1
    },
    {
      "question": "Which word is a synonym for 'calm'?",
      "options": ["Nervous", "Tranquil", "Anxious", "Excited"],
      "answer": "Tranquil",
      "correct": 1
    },
    {
      "question": "Pick the synonym for 'fast'.",
      "options": ["Slow", "Quick", "Heavy", "Late"],
      "answer": "Quick",
      "correct": 1
    },
    {
      "question": "Choose the synonym for 'tired'.",
      "options": ["Exhausted", "Energized", "Awake", "Alert"],
      "answer": "Exhausted",
      "correct": 0
    },
    {
      "question": "What is a synonym for 'honest'?",
      "options": ["Deceitful", "Sincere", "Untruthful", "Cunning"],
      "answer": "Sincere",
      "correct": 1
    },
    {
      "question": "Select the synonym for 'important'.",
      "options": ["Trivial", "Significant", "Minor", "Little"],
      "answer": "Significant",
      "correct": 1
    },
    {
      "question": "Which word is a synonym for 'brave'?",
      "options": ["Cowardly", "Fearless", "Timid", "Afraid"],
      "answer": "Fearless",
      "correct": 1
    },
    {
      "question": "Choose the synonym for 'large'.",
      "options": ["Small", "Tiny", "Big", "Short"],
      "answer": "Big",
      "correct": 2
    },
    {
      "question": "Pick the synonym for 'quick'.",
      "options": ["Slow", "Rapid", "Lazy", "Heavy"],
      "answer": "Rapid",
      "correct": 1
    },
    {
      "question": "Select the synonym for 'gloomy'.",
      "options": ["Bright", "Sad", "Cheerful", "Joyful"],
      "answer": "Sad",
      "correct": 1
    },
    {
      "question": "Choose the synonym for 'funny'.",
      "options": ["Serious", "Hilarious", "Grave", "Dull"],
      "answer": "Hilarious",
      "correct": 1
    },
    {
      "question": "Identify the synonym for 'wealthy'.",
      "options": ["Poor", "Rich", "Broke", "Needy"],
      "answer": "Rich",
      "correct": 1
    },
    {
      "question": "Which word is a synonym for 'bright'?",
      "options": ["Dark", "Dim", "Shiny", "Gloomy"],
      "answer": "Shiny",
      "correct": 2
    },
    {
      "question": "Pick the synonym for 'beautiful'.",
      "options": ["Ugly", "Pretty", "Foul", "Rude"],
      "answer": "Pretty",
      "correct": 1
    },
    {
      "question": "Select the synonym for 'simple'.",
      "options": ["Difficult", "Hard", "Easy", "Complex"],
      "answer": "Easy",
      "correct": 2
    },
    {
      "question": "What is a synonym for 'huge'?",
      "options": ["Small", "Tiny", "Massive", "Little"],
      "answer": "Massive",
      "correct": 2
    },
    {
      "question": "Choose the synonym for 'ancient'.",
      "options": ["Modern", "Old", "Recent", "Contemporary"],
      "answer": "Old",
      "correct": 1
    },
    {
      "question": "Identify the synonym for 'graceful'.",
      "options": ["Clumsy", "Elegant", "Awkward", "Rough"],
      "answer": "Elegant",
      "correct": 1
    },
    {
      "question": "Pick the synonym for 'dangerous'.",
      "options": ["Safe", "Risky", "Secure", "Harmless"],
      "answer": "Risky",
      "correct": 1
    },
    {
      "question": "Which word is a synonym for 'lazy'?",
      "options": ["Industrious", "Active", "Idle", "Energetic"],
      "answer": "Idle",
      "correct": 2
    },
    {
      "question": "Select the synonym for 'careful'.",
      "options": ["Reckless", "Cautious", "Hasty", "Careless"],
      "answer": "Cautious",
      "correct": 1
    },
    {
      "question": "What is a synonym for 'generous'?",
      "options": ["Mean", "Selfish", "Kind", "Greedy"],
      "answer": "Kind",
      "correct": 2
    },
    {
      "question": "Pick the synonym for 'brilliant'.",
      "options": ["Dull", "Dumb", "Smart", "Shiny"],
      "answer": "Smart",
      "correct": 2
    },
    {
      "question": "Identify the synonym for 'famous'.",
      "options": ["Obscure", "Popular", "Unknown", "Hidden"],
      "answer": "Popular",
      "correct": 1
    },
    {
      "question": "Choose the synonym for 'mysterious'.",
      "options": ["Obvious", "Clear", "Enigmatic", "Known"],
      "answer": "Enigmatic",
      "correct": 2
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