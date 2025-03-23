// Array of questions and options
const questions = [
    {
        "question": "Who is the current President of the United States?",
        "options": ["Joe Biden", "Donald Trump", "Barack Obama", "George W. Bush"],
        "answer": "Joe Biden",
        "correct": 0
    },
    {
        "question": "Which country recently hosted the G20 summit?",
        "options": ["India", "Germany", "Japan", "Brazil"],
        "answer": "India",
        "correct": 0
    },
    {
        "question": "What is the name of the recent space mission launched by NASA to explore Mars?",
        "options": ["Perseverance", "Curiosity", "Voyager", "Apollo"],
        "answer": "Perseverance",
        "correct": 0
    },
    {
        "question": "Which country withdrew from the Paris Climate Agreement in 2020?",
        "options": ["United States", "China", "India", "Russia"],
        "answer": "United States",
        "correct": 0
    },
    {
        "question": "What is the capital of Ukraine?",
        "options": ["Kyiv", "Moscow", "Warsaw", "Bucharest"],
        "answer": "Kyiv",
        "correct": 0
    },
    {
        "question": "Who won the Nobel Peace Prize in 2023?",
        "options": ["Malala Yousafzai", "Abiy Ahmed", "World Food Programme", "Ales Bialiatski"],
        "answer": "Ales Bialiatski",
        "correct": 3
    },
    {
        "question": "Which major sporting event was held in Tokyo in 2021?",
        "options": ["World Cup", "Olympics", "Euro Cup", "Commonwealth Games"],
        "answer": "Olympics",
        "correct": 1
    },
    {
        "question": "What is the main focus of the United Nations Sustainable Development Goals (SDGs)?",
        "options": ["Economic growth", "Environmental protection", "Social justice", "All of the above"],
        "answer": "All of the above",
        "correct": 3
    },
    {
        "question": "Who is the current Prime Minister of the United Kingdom?",
        "options": ["Rishi Sunak", "Boris Johnson", "Theresa May", "David Cameron"],
        "answer": "Rishi Sunak",
        "correct": 0
    },
    {
        "question": "Which virus caused the global pandemic that started in 2020?",
        "options": ["H1N1", "Ebola", "COVID-19", "Zika"],
        "answer": "COVID-19",
        "correct": 2
    },
    {
        "question": "What is the name of the largest tech company in terms of market capitalization as of 2023?",
        "options": ["Apple", "Microsoft", "Amazon", "Alphabet"],
        "answer": "Apple",
        "correct": 0
    },
    {
        "question": "Which climate change conference was held in Glasgow in 2021?",
        "options": ["COP25", "COP26", "COP27", "COP28"],
        "answer": "COP26",
        "correct": 1
    },
    {
        "question": "What is the primary currency used in the European Union?",
        "options": ["Dollar", "Yen", "Euro", "Pound"],
        "answer": "Euro",
        "correct": 2
    },
    {
        "question": "What is the primary aim of NATO?",
        "options": ["Trade agreements", "Military alliance", "Cultural exchange", "Environmental protection"],
        "answer": "Military alliance",
        "correct": 1
    },
    {
        "question": "Which country recently held elections resulting in a new government in 2023?",
        "options": ["Brazil", "Germany", "Australia", "India"],
        "answer": "Brazil",
        "correct": 0
    },
    {
        "question": "What is the focus of the 'Green New Deal' proposed in various countries?",
        "options": ["Social welfare", "Economic recovery", "Climate change", "All of the above"],
        "answer": "All of the above",
        "correct": 3
    },
    {
        "question": "Which country is known for its 'One Belt, One Road' initiative?",
        "options": ["China", "India", "Japan", "Russia"],
        "answer": "China",
        "correct": 0
    },
    {
        "question": "What major global event was postponed in 2020 due to the COVID-19 pandemic?",
        "options": ["FIFA World Cup", "Summer Olympics", "Euro Cup", "World Expo"],
        "answer": "Summer Olympics",
        "correct": 1
    },
    {
        "question": "Who is the current Secretary-General of the United Nations?",
        "options": ["António Guterres", "Ban Ki-moon", "Kofi Annan", "Boris Johnson"],
        "answer": "António Guterres",
        "correct": 0
    },
    {
        "question": "Which country became the first to grant legal rights to nature?",
        "options": ["Ecuador", "Bolivia", "New Zealand", "India"],
        "answer": "Ecuador",
        "correct": 0
    },
    {
        "question": "Which international agreement aims to combat climate change?",
        "options": ["Kyoto Protocol", "Paris Agreement", "Montreal Protocol", "Rio Declaration"],
        "answer": "Paris Agreement",
        "correct": 1
    },
    {
        "question": "Who was the first woman to win a Nobel Prize in 1903?",
        "options": ["Marie Curie", "Rosalind Franklin", "Ada Lovelace", "Virginia Woolf"],
        "answer": "Marie Curie",
        "correct": 0
    },
    {
        "question": "What does the acronym BRICS stand for?",
        "options": ["Brazil, Russia, India, China, South Africa", "Bangladesh, Russia, India, China, South Africa", "Brazil, Romania, India, China, South Africa", "Brazil, Russia, Italy, China, South Africa"],
        "answer": "Brazil, Russia, India, China, South Africa",
        "correct": 0
    },
    {
        "question": "Which major tech company announced a significant job cut in 2023?",
        "options": ["Facebook", "Twitter", "Google", "Amazon"],
        "answer": "Google",
        "correct": 2
    },
    {
        "question": "What is the primary purpose of the International Monetary Fund (IMF)?",
        "options": ["To provide loans to developing countries", "To promote international trade", "To provide humanitarian aid", "To monitor international security"],
        "answer": "To provide loans to developing countries",
        "correct": 0
    },
    {
        "question": "What global issue was highlighted by the COVID-19 pandemic?",
        "options": ["Healthcare inequality", "Economic recession", "Climate change", "All of the above"],
        "answer": "All of the above",
        "correct": 3
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