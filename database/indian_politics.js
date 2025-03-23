const questions = [
    {
        "question": "What is the supreme law of India?",
        "options": ["The Constitution", "The Preamble", "The Directive Principles", "The Fundamental Rights"],
        "answer": "The Constitution",
        "correct": 0
    },
    {
        "question": "Who is known as the 'Father of the Indian Constitution'?",
        "options": ["B. R. Ambedkar", "Mahatma Gandhi", "Jawaharlal Nehru", "Sardar Patel"],
        "answer": "B. R. Ambedkar",
        "correct": 0
    },
    {
        "question": "Which party has been the ruling party in India for the most years since independence?",
        "options": ["BJP", "INC", "CPI", "SP"],
        "answer": "INC",
        "correct": 1
    },
    {
        "question": "What is the minimum age to contest in Lok Sabha elections?",
        "options": ["18 years", "21 years", "25 years", "30 years"],
        "answer": "25 years",
        "correct": 2
    },
    {
        "question": "Who is the current Prime Minister of India? (as of 2024)",
        "options": ["Rahul Gandhi", "Narendra Modi", "Amit Shah", "Manmohan Singh"],
        "answer": "Narendra Modi",
        "correct": 1
    },
    {
        "question": "What is the main function of the Rajya Sabha?",
        "options": ["Represent the people", "Pass laws", "Advise the President", "Represent states"],
        "answer": "Represent states",
        "correct": 3
    },
    {
        "question": "How many members are there in the Lok Sabha?",
        "options": ["250", "543", "500", "300"],
        "answer": "543",
        "correct": 1
    },
    {
        "question": "Which amendment of the Constitution granted the right to vote to all citizens?",
        "options": ["61st", "73rd", "86th", "42nd"],
        "answer": "61st",
        "correct": 0
    },
    {
        "question": "What is the role of the President of India?",
        "options": ["Head of State", "Head of Government", "Commander-in-Chief", "All of the above"],
        "answer": "All of the above",
        "correct": 3
    },
    {
        "question": "Which article of the Constitution deals with the Fundamental Rights?",
        "options": ["Article 12", "Article 14", "Article 21", "Article 32"],
        "answer": "Article 12",
        "correct": 0
    },
    {
        "question": "Which body is responsible for conducting elections in India?",
        "options": ["Election Commission", "Parliament", "Supreme Court", "President"],
        "answer": "Election Commission",
        "correct": 0
    },
    {
        "question": "Which party is symbolized by a lotus?",
        "options": ["INC", "BJP", "CPI", "NCP"],
        "answer": "BJP",
        "correct": 1
    },
    {
        "question": "What is the term for the highest court of appeal in India?",
        "options": ["High Court", "District Court", "Supreme Court", "Family Court"],
        "answer": "Supreme Court",
        "correct": 2
    },
    {
        "question": "Who was the first woman Prime Minister of India?",
        "options": ["Indira Gandhi", "Sonia Gandhi", "Pratibha Patil", "Sarojini Naidu"],
        "answer": "Indira Gandhi",
        "correct": 0
    },
    {
        "question": "Which is the longest-serving Chief Minister in India?",
        "options": ["Nitish Kumar", "Mamata Banerjee", "Pawan Chamling", "J. Jayalalithaa"],
        "answer": "Pawan Chamling",
        "correct": 2
    },
    {
        "question": "What is the main purpose of the Planning Commission?",
        "options": ["Make laws", "Develop plans for economic development", "Advise the President", "Oversee elections"],
        "answer": "Develop plans for economic development",
        "correct": 1
    },
    {
        "question": "Which Article allows the President to declare a national emergency?",
        "options": ["Article 352", "Article 356", "Article 360", "Article 370"],
        "answer": "Article 352",
        "correct": 0
    },
    {
        "question": "What is the fundamental duty of every citizen as per the Constitution?",
        "options": ["Right to Education", "Right to Equality", "To uphold the Constitution", "To pay taxes"],
        "answer": "To uphold the Constitution",
        "correct": 2
    },
    {
        "question": "Who has the power to dissolve the Lok Sabha?",
        "options": ["Prime Minister", "President", "Chief Justice", "Parliament"],
        "answer": "President",
        "correct": 1
    },
    {
        "question": "Which body recommends the distribution of funds between the Union and the States?",
        "options": ["Finance Commission", "Planning Commission", "NITI Aayog", "Election Commission"],
        "answer": "Finance Commission",
        "correct": 0
    },
    {
        "question": "What is the minimum age to vote in India?",
        "options": ["16 years", "18 years", "21 years", "25 years"],
        "answer": "18 years",
        "correct": 1
    },
    {
        "question": "Which schedule of the Constitution contains the list of the states and Union territories?",
        "options": ["First Schedule", "Second Schedule", "Seventh Schedule", "Eighth Schedule"],
        "answer": "First Schedule",
        "correct": 0
    },
    {
        "question": "Who appoints the Governor of a state?",
        "options": ["Chief Minister", "President", "Prime Minister", "Legislative Assembly"],
        "answer": "President",
        "correct": 1
    },
    {
        "question": "What does 'Satyagraha' mean?",
        "options": ["Non-violence", "Truth-force", "Civil Disobedience", "Passive Resistance"],
        "answer": "Truth-force",
        "correct": 1
    },
    {
        "question": "What is the role of the Vice President of India?",
        "options": ["Head of the State", "Head of the Rajya Sabha", "Prime Minister's advisor", "Chief Justice"],
        "answer": "Head of the Rajya Sabha",
        "correct": 1
    },
    {
        "question": "Which amendment provided for the reservation of seats for Scheduled Castes and Scheduled Tribes in the Lok Sabha?",
        "options": ["77th", "80th", "84th", "91st"],
        "answer": "84th",
        "correct": 2
    },
    {
        "question": "What is the term for the period between the general elections in India?",
        "options": ["Election Cycle", "Term", "Legislative Session", "Interval"],
        "answer": "Election Cycle",
        "correct": 0
    }
];
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