
const questions = [

    {question: " Percentages : A product is discounted by 20%. If the discounted price is $120, what was the original price? ",
        options: [
            "(a) $100 ", 
            "(b) $144 ", 
            "(c) $150 ", 
            "(d) $160"
        ],
        answer:"(d) $160",
        correct:3
    },
    {question: "Ratios : If there are 3 red balls and 7 blue balls in a bag, what is the ratio of red balls to blue balls? ",
        options:[
            "(a) 3:10 ",
            "(b) 1:7 ",
            "(c) 3:7 ",
            "(d) 7:3"
        ],
        answer:"(c) 3:7 ",
        correct:2
        },
    {question: "Averages : The average score of 5 students is 80. What is the total score of all 5 students? ",
        options:[
            "(a) 320 ", 
            "(b) 350 ", 
            "(c) 400 ", 
            "(d) 480"
        ],
        answer: "(c) 400 ",
        correct:2
    },
    {question: "Time & Speed : A car travels 200 km in 4 hours. What is the speed of the car in km/h? ", 
       options:[ 
            "(a) 30 ", 
            "(b) 40 ",
            "(c) 50 ",
            "(d) 60"
        ],
        answer: "(c) 50 ",
        correct:2
        },
    {question: "Work & Time : If A can complete a job in 6 hours and B can complete the same job in 8 hours, how long will it take them to complete the job if they work together? ", 
        options:[ 
            "(a) 2.4 hours ",
            "(b) 3 hours ", 
            "(c) 4 hours", 
            "(d) 4.8 hours"
        ],
        answer:"(d) 4.8 hours",
        correct:3
        },
    {question: "Number Properties : If a number is divisible by both 4 and 6, what can you conclude about the divisibility of that number by 12? ", 
       options:[ 
        "(a) Not necessarily divisible " ,
        "(b) Divisible only if even ", 
        "(c) Divisible only if odd ",
        "(d) Always divisible",
    ],
    answer: "(d) Always divisible",
    correct:3
    },
    {question: "Probability : A bag contains 2 red balls, 3 blue balls, and 1 yellow ball. What is the probability of drawing a red ball? ", 
        options:[ 
            "(a) 1/3",
            "(b) 1/2 ", 
            "(c) 2/6 ",
            "(d) 3/5"
        ],
        answer:"(d) 3/5",
        correct:2
    },
    {question: "Algebra : Solve for x in the equation 2x + 5 = 11 ", 
       options:[ 
        "(a) x = 2 ",
        "(b) x = 3 ", 
        "(c) x = 3 ",
        "(d) x = 4"
    ],
    answer:"(c) x = 3 ",
    correct:2
},
    {question: "Geometry : The area of a rectangle is 30 cm^2. If the length is 6 cm, what is the width? ", 
      options:[ 
        "(a) 2 cm ",
        "(b) 4 cm ", 
        "(c) 5 cm ", 
        "(d) 7 cm"
    ],
    answer: "(c) 5 cm ",
    correct:2
},
    {question: "Permutations : In how many ways can you arrange 4 distinct letters? ", 
       options:[ 
        "(a) 4 ",
        "(b) 8 ", 
        "(c) 12 ", 
        "(d) 24"
    ],
    answer:"(d) 24",
    correct:3
},
    {question: "Combinations : In how many ways can you choose 2 items from a set of 5 distinct ", 
        options:[
            "(a) 5 ", 
            "(b) 10 ",
            "(c) 15 ",
            "(d) 10"
        ],
        answer:"(d) 10",
        correct:3
    },
    {question: "LCM & HCF : What is the least common multiple (LCM) of 12 and 18? ", 
        options:[
            "(a) 24 ", 
            "(b) 34 ", 
            "(c) 36 ",
            "(d) 72"
        ],
        answer: "(c) 36 ",
        correct:2
    },
    {question: "Data Interpretation : A bar chart shows the sales of different products over a month. How can you determine the product with the highest sales? ", 
        options:[
            "(a) Identify the smallest bar ",
            "(b) Identify the tallest bar ",
            "(c) Calculate the average sales ",
            "(d) Subtract the lowest sales from the highest"
        ],
        answer: "(b) Identify the tallest bar ",
        correct:1
    },
    {question: "Series Completion : What is the next number in the sequence 2, 5, 8, 11? ", 
       options:[ 
        "(a) 13 ",
        "(b) 16 ",
        "(c) 14 ",
        "(d) 15"
    ],
    answer:"(c) 14 ",
    correct:2
},
    {question: "Percentages: A software company increases its sales by 20% from $100,000. What is the new sales figure? ", 
       options:[
        "(a) $110,000 ", 
        "(b) $120,000", 
        "(c) $130,000", 
        "(d) $140,000"
    ],
    answer: "(a) $110,000 ", 
    correct:0
},
    {question: "Ratios: If a team of 6 developers can complete a project in 12 weeks, how many weeks would it take 8 developers to complete the same project? ", 
       options :[ 
        "(a) 8 weeks",
        "(b) 9 weeks", 
        "(c) 10 weeks", 
        "(d) 11 weeks", 
       ],
       answer: "(a) 8 weeks",
        correct: 0
    },
    {question: "Averages: A server's average response time over 5 requests is 200 milliseconds. If the first 4 requests had an average response time of 180 milliseconds, what was the response time for the 5th request? ", 
        options :[ 
            "(a) 220 milliseconds ", 
            "(b) 230 milliseconds", 
            "(c) 240 milliseconds", 
            "(d) 250 milliseconds", 
        ],
        answer:"(a) 220 milliseconds ", 
        correct: 0
    },
    {question: "Work and Time: Pipe A can fill a tank in 8 hours, and Pipe B can fill it in 12 hours. Working together, how long will it take them to fill the tank?", 
        options:[ 
            "(a) 4 hours ", 
            "(b) 4.8 hours", 
            "(c) 5.3 hours", 
            "(d) 6 hours", 
        ],
        answer: "(a) 4 hours ", 
        correct: 0
    },
    {question: "Profit and Loss: A company buys a laptop for $800 and sells it at a 10% profit. What is the selling price?", 
        options: [
            "(a) $880 ", 
            "(b) $890", 
            "(c) $900", 
            "(d) $910",],
            answer:"(a) $880 ",
            correct: 0},
    {question: "Number Systems: Convert the binary number 1011 to decimal.", 
        options: ["(a) 8 ",  "(b) 9",  "(c) 10",  "(d) 11",],answer:"(a) 8 ", correct: 0},
    {question: "Algebra: Solve for x in the equation 2x + 5 = 11", 
        options: ["(a) x  = 2 ",  "(b) x = 3", "(c) x = 4",  "(d) x = 5"],answer:"(a) x  = 2 ", correct: 0},
    {question: "Probability: A bag contains 3 red balls, 2 blue balls, and 1 green ball. What is the probability of drawing a blue ball?", 
        options: ["(a) 1/3 ",  "(b) 1/4",  "(c) 1/5",  "(d) 1/6"],answer:"(a) 1/3 ", correct: 0},
    {question: "Data Interpretation: A line graph shows the website traffic for an online store over a week. How can you determine the busiest day?", 
        options: ["(a) Identify the point with the highest y-axis value. ",  "(b) Calculate the average traffic for the week.",  "(c) Find the slope of the line.",  "(d) Analyze the pattern of the line."],answer:"(a) Identify the point with the highest y-axis value. ", correct: 0},
    {question: "Time and Distance: A car travels 200 km at a speed of 80 km/h. How long does the journey take?", 
        options: ["(a) 2.5 hours ",  "(b) 3 hours",  "(c) 3.5 hours",  "(d) 4 hours"],answer:"(a) 2.5 hours ", correct: 0},
    {question: "Permutations: How many unique arrangements (permutations) are there for the letters in the word 'CODE'? ", 
        options: ["(a) 4! = 24 ",  "(b) 3! = 6",  "(c) 2! = 2",  "(d) 1"],answer:"(a) 4! = 24 ", correct: 0},
    {question: "Combinations: How many ways can you choose 2 items from a set of 5 different books?", 
        options: ["(a) 5! / 3!2! = 10 ",  "(b) 5! = 120",  "(c) 4! = 24",  "(d) 3! = 6"],answer:"(a) 5! / 3!2! = 10 ", correct: 0},
    {question: "Percentages: A software company offers a 10% discount on their product that originally costs $150. What is the final price after the discount? ", 
        options: ["(a) $135 ", "(b) $120 ",  "(c) $105 ",  "(d) $90 "],answer: "(d) $90 ", correct: 3},
    {question: "Ratios: If a web developer can write 5 lines of code in 2 minutes, how many lines can they write in 10 minutes? ", 
        options: ["(a) 10 ",  "(b) 15 ",  "(c) 25 ",  "(d) 50"],answer:"(d) 50", correct: 3},
    {question: "Averages: There are 4 servers in a data center with average temperatures of 40°C, 45°C, 50°C, and 35°C. What is the average temperature of all servers? ", 
        options: ["(a) 40°C ",  "(b) 42.5°C ",  "(c) 45°C ",  "(d) 170°C "],answer: "(b) 42.5°C ", correct: 1},
    {question: "Time and Work: If 2 painters can paint a room in 6 hours, how long would it take 3 painters to paint the same room? ", 
        options: ["(a) 4 hours ",  "(b) 5 hours ",  "(c) 8 hours ",  "(d) 12 hours  "],answer:"(a) 4 hours ", correct: 0},
    {question: "Speed and Distance: A car travels 200 km in 4 hours. What is the car's average speed? ", 
        options: ["(a) 40 km/h ", "(b) 50 km/h ",  "(c) 60 km/h ",  "(d) 80 km/h  "],answer:"(b) 50 km/h ", correct: 1},
    {question: "Probability: In a bag of 10 candies, there are 3 chocolates and 7 lollipops. What is the probability of picking a chocolate candy? ", 
        options: ["(a) 0.3 ",  "(b) 0.4 ",  "(c) 0.6 ",  "(d) 0.7 "],answer:"(a) 0.3 ", correct: 0},
    {question: "Number Systems: Convert the binary number 1010 (base 2) to decimal. ", 
        options: ["(a) 5 ",  "(b) 8 ",  "(c) 10 ",  "(d) 12 "],answer:"(a) 5 ", correct: 0},
    {question: "Data Sufficiency: Is the information sufficient to calculate the total cost of 7 books if the cost of one book is $10? ",
        options: ["(a) Yes ",  "(b) No "],answer:"(a) Yes ", correct: 0},
    {question: "Algebra: Solve for x in the equation: 2x + 5 = 11 ", 
        options: ["(a) x = 2 ",  "(b) x = 3 ",  "(c) x = 4 ",  "(d) x = 5  "],answer:"(b) x = 3 ",  correct: 1},
    {question: "Permutations: How many unique ways can you arrange 3 letters (A, B, C)? ", 
        options: ["(a) 3 ",  "(b) 6 ", "(c) 9 ","(d) 12 "],answer: "(b) 6 ", correct: 1,},
    {question: "Combinations: How many ways can you choose 2 people from a group of 5 friends to go for lunch? ", 
        options: ["(a) 5 ",  "(b) 10 ",  "(c) 15 ",  "(d) 20 "],answer:"(c) 15 ", correct: 2},
    {question: "LCM (Least Common Multiple): Find the least common multiple of 12 and 18. ", 
        options: ["(a) 24 ",  "(b) 36 ", "(c) 54 ",  "(d) 72 "],answer: "(c) 54 ", correct: 2},
    {question: "HCF (Highest Common Factor): Find the highest common factor of 20 and 30. ", 
        options: ["(a) 5 ", "(b) 10 ",  "(c) 15 ",  "(d) 20"],answer:"(a) 5 ", correct: 0},
    {question: "Find out the wrong number in the series : 7, 8, 18, 57, 228, 1165, 6996. ", 
        options: ["(a) 8 ", "(b) 18 ",  "(c) 57 ", "(d) 228"],answer: "(d) 228",correct: 3},

]


// Dynamically create questions
// const quizContainer = document.getElementById('quizContainer');

// questions.forEach((q, index) => {
//     // Create a div for each question
//     const questionDiv = document.createElement('div');
//     questionDiv.classList.add('quiz-container');

//     // Add the question text
//     const questionText = document.createElement('h2');
//     questionText.innerText = (index + 1) + ". " + q.question;
//     questionDiv.appendChild(questionText);

//     // Create a form for the question
//     const form = document.createElement('form');
//     form.id = `quizForm${index + 1}`;

//     // Add options as radio buttons
//     q.options.forEach((option, optIndex) => {
//         const label = document.createElement('label');
//         const input = document.createElement('input');
//         input.type = 'radio';
//         input.name = `question${index + 1}`;
//         input.value = optIndex === q.correct ? 'correct' : 'wrong';
//         input.onclick = () => checkAnswer(input);

//         label.appendChild(input);
//         label.appendChild(document.createTextNode(option));
//         form.appendChild(label);
//         form.appendChild(document.createElement('br'));
//     });

//     questionDiv.appendChild(form);
//     quizContainer.appendChild(questionDiv);
// });

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