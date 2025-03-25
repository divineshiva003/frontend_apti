// Array of questions and options
const questions = [
    //     {
    //         question: "What is the capital of France?",
    //         options: ["London", "Berlin", "Paris", "Rome"],
    //         correct: 2
    //     },
    //     {
    //         question: "What is the largest planet in our solar system?",
    //         options: ["Jupiter", "Mars", "Earth", "Venus"],
    //         correct: 0
    //     },
    //     {
    //         question: "Which element has the chemical symbol 'O'?",
    //         options: ["Oxygen", "Gold", "Helium", "Silver"],
    //         correct: 0
    //     },
        // Add more questions as needed
        {question: "Logical Reasoning: John can speak English and French. If someone can speak English, they can speak Spanish. Can John speak Spanish? ", 
            options: [ "(a) Yes, definitely ",  "(b) No, definitely ",  "(c) Maybe ",  "(d) Cannot be determined "], correct: 2},
        {question: "Data Analysis: A company's sales increase every year. There is a positive correlation between sales and marketing budget. Can we conclude that increasing the marketing budget will always increase sales? ", 
            options: [ "(a) Yes ",  "(b) No, correlation doesn't imply causation ",  "(c) Maybe ",  "(d) Need more data "], correct: 1},
        {question: "Analogy: Cup is to saucer as spoon is to: ", 
            options: [ "(a) Soup ",  "(b) Fork ",  "(c) Plate ",  "(d) Knife "], correct: 2},
        {question: "Series Completion: 2, 4, 8, 16, ... What is the next number in the series? ", 
            options: [ "(a) 20 ",  "(b) 24 ",  "(c) 32 ",  "(d) 40 "], correct: 2},
        {question: "Coding Decoding: If APPLE is coded as 11110000, how is CAT coded? ", 
            options: [ "(a) 030120 ",  "(b) 100001 ",  "(c) 000100 ",  "(d) 110001 "], correct: 0},
        {question: "Statement and Assumption: Statement: All programmers drink coffee. Assumption: John is a programmer. Does the assumption imply the statement is true? ", 
            options: [ "(a) Yes ",  "(b) No ",  "(c) Maybe ",  "(d) Need more information "], correct: 1},
        {question: "Statement and Argument: Statement: We should invest in cybersecurity training. Argument: Hackers are becoming more sophisticated. Does the argument support the statement? ", 
            options: [ "(a) Yes ",  "(b) No ",  "(c) Maybe ",  "(d) Need more information "], correct: 0},
        {question: "Strengthening Arguments: Which answer choice strengthens the argument: 'We should use cloud storage. It's more secure.' ", 
            options: [ "(a) Cloud storage is cheaper than traditional storage. ",  "(b) Security breaches are on the rise. ",  "(c) Everyone else is using cloud storage. ",  "(d) There are many different cloud storage providers. "], correct:1},
        {question: "Weakening Arguments: Which answer choice weakens the argument: 'Self-driving cars are safer. They don't get distracted.' ", 
            options: [ "(a) Self-driving cars are still under development. ",  "(b) Human drivers can be reckless. ",  "(c) Self-driving cars are expensive. ",  "(d) There are no traffic laws for self-driving cars. "], correct: 0},
        {question: "Syllogism: All programmers are logical thinkers. Some logical thinkers are mathematicians. Thus, some mathematicians are programmers. Is the conclusion valid? ", 
            options: [ "(a) Yes ",  "(b) No "], correct: 1},
        {question: "Odd One Out: In a group of shapes: circle, square, triangle, pentagon, rectangle. Which one doesn't belong?", 
            options: [ "(a) Circle ",  "(b) Square ",  "(c) Triangle ",  "(d) Pentagon "], correct: 0},
        {question: "Blood Relations: If A is the father of B, and B is the sister of C, how is A related to C? ", 
            options: [ "(a) Uncle ",  "(b) Brother ",  "(c) Father ",  "(d) Cousin "], correct: 0},
        {question: "Direction Sense: You are facing north. You turn 135 degrees to the right. What direction are you facing now? ", 
            options: [ "(a) North-west ",  "(b) West ",  "(c) South-west ",  "(d) South-east "], correct: 2},
        {question: "Calendar and Time: If today is Wednesday, what day will it be 10 days from now? ", 
            options: [ "(a) Friday ",  "(b) Saturday ",  "(c) Sunday ",  "(d) Monday "], correct: 0},
        {question: "Work and Wages: If 6 people can paint a room in 4 hours, how many people can paint the same room in 2 hours? ", 
            options: [ "(a) 3 ",  "(b) 8 ",  "(c) 12 ",  "(d) Cannot be determined with the given information "], correct: 2},
        {question: "Four defensive football players are chasing the opposing wide receiver, who has the ball. Calvin is directly behind the ball carrier. Jenkins and Burton are side by side behind Calvin. Zeller is behind Jenkins and Burton. Calvin tries for the tackle but misses and falls. Burton trips. Which defensive player tackles the receiver?", 
            options: [ "(a) Burton ",  "(b) Zeller ",  "(c) Jenkins ",  "(d) Calvin"], correct:2},
        {question: "Ms. Forest likes to let her students choose who their partners will be; however, no pair of students may work together more than seven class periods in a row. Adam and Baxter have studied together seven class periods in a row. Carter and Dennis have worked together three class periods in a row. Carter does not want to work with Adam. Who should be assigned to work with Baxter? ", 
            options: [ "(a) Carter ",  "(b) Adam ",  "(c) Dennis ",  "(d) Forest"], correct: 0},
        {question: "Coding Logic: A function takes an integer as input and returns twice the number. If the function is called with the number 5, what is the output?", 
            options: [ "(a) 2 ",  "(b) 5 ",  "(c) 10 ",  "(d) Cannot be determined "], correct:2},
        {question: "Data Sufficiency: Is the information sufficient to determine the average age of a group of 5 people if the total age is 150 years?", 
            options: [ "(a) Yes ",  "(b) No "], correct: 1},
        {question: "Analogy: Bug is to software as: ", 
            options: [ "(a) Disease is to body ",  "(b) Error is to program ",  "(c) Key is to lock ",  "(d) Wrench is to tool "], correct: 1},
        {question: "Series Completion: 2, 5, 8, 11, ... What is the next number in the series?", 
            options: [ "(a) 13 ",  "(b) 14 ",  "(c) 15 ",  "(d) 16 "], correct: 2},
        {question: "Statement and Assumption: Statement: All web developers can write code. Assumption: John is a web developer. Does the assumption imply the statement is true?", 
            options: [ "(a) Yes ",  "(b) No ",  "(c) Maybe ",  "(d) Need more information"], correct: 1},
        {question: "Statement and Argument: Statement: Companies should invest in cybersecurity training for employees. Argument: Cyberattacks are becoming more sophisticated. Does the argument support the statement?", 
            options: [ "(a) Yes ",  "(b) No ",  "(c) Maybe ",  "(d) Need more information "], correct: 0},
        {question: "Strengthening Arguments: Which answer choice strengthens the argument: 'We should use cloud storage. It's more scalable.'", 
            options: [  "(a) Cloud storage is cheaper than traditional storage. ",  "(b) Data breaches are on the rise. ",  "(c) Everyone else is using cloud storage. ",  "(d) There are many different cloud storage providers. "], correct: 0},
        {question: "Weakening Arguments: Which answer choice weakens the argument: 'Self-driving cars are safer. They don't get distracted.'", 
            options: [ "(a) Self-driving cars are still under development. ",  "(b) Human drivers can be reckless. ",  "(c) Self-driving cars are expensive. ",  "(d) There are no traffic laws for self-driving cars."], correct: 0},
        {question: "Syllogism: All programmers are logical thinkers. Some logical thinkers are mathematicians. Thus, some mathematicians are programmers. Is the conclusion valid?", 
            options: [ "(a) Yes ",  "(b) No "], correct: 1},
        {question: "Odd One Out: In a group of words: bug, feature, update, fix, crash. Which one doesn't belong? ", 
            options: [ "(a) Bug ",  "(b) Feature ",  "(c) Update ",  "(d) Crash"], correct: 3},
        {question: "Blood Relations: If Sarah is the daughter of Michael, and Michael is the brother of David, how is David related to Sarah?", 
            options: [ "(a) Uncle ",  "(b) Brother ",  "(c) Father ",  "(d) Cousin "], correct: 0},
        {question: "Direction Sense: You are facing south. You turn 180 degrees to the right. What direction are you facing now?", 
            options: [ "(a) North ",  "(b) East ",  "(c) South ",  "(d) West "], correct: 1},
        {question: "Calendar and Time: If today is Monday, what day will it be 3 days from now?", 
            options: [ "(a) Wednesday ",  "(b) Thursday ",  "(c) Friday ",  "(d) Saturday "], correct: 2},
        {question: "Strengthening Arguments: Which answer choice strengthens the argument: 'We should use code reviews. They help identify bugs.' ", 
            options: [ "(a) Code reviews are time-consuming. ",  "(b) Bugs can cause security vulnerabilities. ",  "(c) Debuggers are already available. ",  "(d) Unit testing can also find bugs. "], correct: 1},
        {question: "Logical Reasoning: A company's website traffic increases during weekends. There is a positive correlation between website traffic and online sales. Can we conclude that online sales will always be higher on weekends? ", 
            options: [ "(a) Yes ",  "(b) No, correlation doesn't imply causation ",  "(c) Maybe ",  "(d) Need more information "], correct: 1},
        {question: "Series Completion: 2, 5, 8, 11, ... What is the next number in the series? ", 
            options: [ "(a) 13 ",  "(b) 14 ",  "(c) 15 ",  "(d) 16 "], correct: 2},
        {question: "Analogy: Key is to lock as password is to: ", 
            options: [ "(a) Website ",  "(b) Account ",  "(c) Security ",  "(d) Encryption "], correct: 1},
        {question: "Syllogism: All web developers can write code. Some programmers can write code. Thus, some programmers are web developers. Is the conclusion valid?", 
            options: [ "(a) Yes ",  "(b) No "], correct: 1},
        {question: "Blood Relations: If John is the brother of Mary, and Mary is the daughter of Sarah, how is John related to Sarah? ", 
            options: [ "(a) Uncle ",  "(b) Son ",  "(c) Grandson ",  "(d) Nephew "], correct: 3},
        {question: "Direction Sense: You are facing west. You turn 180 degrees to the right. What direction are you facing now? ", 
            options: [ "(a) North ",  "(b) East ",  "(c) South ",  "(d) West "], correct: 0},
        {question: "Work and Rates: If 3 painters can paint a room in 2 hours, how many painters can paint the same room in 1 hour? ", 
            options: [ "(a) 2 ",  "(b) 4 ",  "(c) 6 ",  "(d) Cannot be determined with the given information "], correct: 2},
        {question: "Coding Decoding: In a certain code language,'CAT' is written as 'XZG' & 'DOG' is written as 'PLT'. How is 'MAT' written in that code language ? ", 
            options: [ "(a) ZGL",  "(b) ZGO",  "(c) ZLP",  "(d) ZPL"], correct: 0},
        {question: "Fact 1: All drink mixes are beverages. Fact 2: All beverages are drinkable. Fact 3: Some beverages are red. If the first three statements are facts, which of the following statements must also be a fact? I: Some drink mixes are red. II: All beverages are drink mixes. III: All red drink mixes are drinkable.", 
            options: [ "(a) I and II only  ",  "(b) II only ",  "(c) I and III only ",  "(d) III only "], correct: 3},
    ]
    // Dynamically create questions
    const quizContainer = document.getElementById('quizContainer');
    
    questions.forEach((q, index) => {
        // Create a div for each question
        const questionDiv = document.createElement('div');
        questionDiv.classList.add('quiz-container');
    
        // Add the question text
        const questionText = document.createElement('h2');
        questionText.innerText = (index + 1) + ". " + q.question;
        questionDiv.appendChild(questionText);
    
        // Create a form for the question
        const form = document.createElement('form');
        form.id = `quizForm${index + 1}`;
    
        // Add options as radio buttons
        q.options.forEach((option, optIndex) => {
            const label = document.createElement('label');
            const input = document.createElement('input');
            input.type = 'radio';
            input.name = `question${index + 1}`;
            input.value = optIndex === q.correct ? 'correct' : 'wrong';
            input.onclick = () => checkAnswer(input);
    
            label.appendChild(input);
            label.appendChild(document.createTextNode(option));
            form.appendChild(label);
            form.appendChild(document.createElement('br'));
        });
    
        questionDiv.appendChild(form);
        quizContainer.appendChild(questionDiv);
    });