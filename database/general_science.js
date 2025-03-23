const questions = [
    {
        "question": "What is the chemical symbol for water?",
        "options": ["H2O", "O2", "CO2", "HO2"],
        "answer": "H2O",
        "correct": 0
    },
    {
        "question": "What is the powerhouse of the cell?",
        "options": ["Nucleus", "Mitochondria", "Ribosome", "Golgi Apparatus"],
        "answer": "Mitochondria",
        "correct": 1
    },
    {
        "question": "Which gas is most abundant in the Earth's atmosphere?",
        "options": ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
        "answer": "Nitrogen",
        "correct": 2
    },
    {
        "question": "What is the basic unit of life?",
        "options": ["Atom", "Cell", "Molecule", "Organism"],
        "answer": "Cell",
        "correct": 1
    },
    {
        "question": "Which organ is responsible for filtering blood in the human body?",
        "options": ["Liver", "Heart", "Kidney", "Lung"],
        "answer": "Kidney",
        "correct": 2
    },
    {
        "question": "What is the most common element in the universe?",
        "options": ["Helium", "Oxygen", "Hydrogen", "Carbon"],
        "answer": "Hydrogen",
        "correct": 2
    },
    {
        "question": "What type of energy is stored in food?",
        "options": ["Kinetic Energy", "Potential Energy", "Chemical Energy", "Nuclear Energy"],
        "answer": "Chemical Energy",
        "correct": 2
    },
    {
        "question": "What is the speed of light?",
        "options": ["300,000 km/s", "150,000 km/s", "600,000 km/s", "750,000 km/s"],
        "answer": "300,000 km/s",
        "correct": 0
    },
    {
        "question": "Which planet is known for having a ring system?",
        "options": ["Earth", "Mars", "Jupiter", "Saturn"],
        "answer": "Saturn",
        "correct": 3
    },
    {
        "question": "What is the chemical formula for table salt?",
        "options": ["NaCl", "KCl", "CaCO3", "MgO"],
        "answer": "NaCl",
        "correct": 0
    },
    {
        "question": "What is the hardest natural substance on Earth?",
        "options": ["Gold", "Iron", "Diamond", "Quartz"],
        "answer": "Diamond",
        "correct": 2
    },
    {
        "question": "What is the main function of red blood cells?",
        "options": ["Transport nutrients", "Fight infections", "Carry oxygen", "Clot blood"],
        "answer": "Carry oxygen",
        "correct": 2
    },
    {
        "question": "What is the process by which plants make their own food?",
        "options": ["Respiration", "Photosynthesis", "Fermentation", "Digestion"],
        "answer": "Photosynthesis",
        "correct": 1
    },
    {
        "question": "Which vitamin is produced when a person is exposed to sunlight?",
        "options": ["Vitamin A", "Vitamin B12", "Vitamin C", "Vitamin D"],
        "answer": "Vitamin D",
        "correct": 3
    },
    {
        "question": "What is the study of living organisms called?",
        "options": ["Chemistry", "Biology", "Physics", "Geology"],
        "answer": "Biology",
        "correct": 1
    },
    {
        "question": "What is the most abundant gas in the Earth's atmosphere?",
        "options": ["Oxygen", "Nitrogen", "Carbon Dioxide", "Argon"],
        "answer": "Nitrogen",
        "correct": 1
    },
    {
        "question": "What part of the plant is responsible for photosynthesis?",
        "options": ["Roots", "Stem", "Leaves", "Flowers"],
        "answer": "Leaves",
        "correct": 2
    },
    {
        "question": "What is the pH level of pure water?",
        "options": ["7", "5", "10", "0"],
        "answer": "7",
        "correct": 0
    },
    {
        "question": "What gas do animals exhale?",
        "options": ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
        "answer": "Carbon Dioxide",
        "correct": 1
    },
    {
        "question": "Which part of the brain controls balance?",
        "options": ["Cerebrum", "Cerebellum", "Brainstem", "Thalamus"],
        "answer": "Cerebellum",
        "correct": 1
    },
    {
        "question": "What is the boiling point of water?",
        "options": ["0°C", "50°C", "100°C", "200°C"],
        "answer": "100°C",
        "correct": 2
    },
    {
        "question": "Which type of radiation has the longest wavelength?",
        "options": ["Gamma rays", "Ultraviolet rays", "Infrared rays", "Radio waves"],
        "answer": "Radio waves",
        "correct": 3
    },
    {
        "question": "What is the main gas found in the sun?",
        "options": ["Oxygen", "Helium", "Hydrogen", "Carbon Dioxide"],
        "answer": "Hydrogen",
        "correct": 2
    },
    {
        "question": "What is the primary function of the liver?",
        "options": ["Detoxification", "Digestion", "Respiration", "Circulation"],
        "answer": "Detoxification",
        "correct": 0
    },
    {
        "question": "Which phenomenon causes a rainbow?",
        "options": ["Reflection", "Refraction", "Diffraction", "Absorption"],
        "answer": "Refraction",
        "correct": 1
    },
    {
        "question": "What is the smallest unit of matter?",
        "options": ["Atom", "Molecule", "Element", "Compound"],
        "answer": "Atom",
        "correct": 0
    },
    {
        "question": "What is the chemical formula for glucose?",
        "options": ["C6H12O6", "C2H5OH", "NaCl", "H2O"],
        "answer": "C6H12O6",
        "correct": 0
    },
    {
        "question": "What is the most widely used language in the world?",
        "options": ["Spanish", "English", "Mandarin", "Hindi"],
        "answer": "Mandarin",
        "correct": 2
    },
    {
        "question": "Which type of energy is associated with motion?",
        "options": ["Potential Energy", "Kinetic Energy", "Chemical Energy", "Nuclear Energy"],
        "answer": "Kinetic Energy",
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