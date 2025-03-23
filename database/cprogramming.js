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
        {question: "When we mention the prototype of a function?", 
            options: ["(a) Defining",  "(b) Declaring",  "(c)	Prototyping",  "(d)	Calling"], correct: 0},
        {question: "Point out the error in the following program (if it is compiled with Turbo C compiler). img src", 
            options: ["(a)	No error",  "(b) display() doesn't get invoked",  "(c) display() is called before it is defined",  "(d)	None of these"], correct: 2},
        {question: "Point out the error in the following program.", 
            options: ["(a) Error: Declaration syntax error 'v' (or) Size of v is unknown or zero.",  "(b) Program terminates abnormally.",  "(c)	No error.",  "(d) None of these."], correct: 0},
        {question: "A long double can be used if range of a double is not enough to accommodate a real number.", 
            options: [ "(a) True",  "(b)	False"], correct: 0},
        {question: "A float is 4 bytes wide, whereas a double is 8 bytes wide.", 
            options: [ "(a) True", "(b)	False"], correct: 0},
        {question: "Size of short integer and long integer can be verified using the sizeof() operator.", 
            options: [ "(a)	True",  "(b) False"], correct: 0},
        {question: "Which of the following is the correct order of evaluation for the below expression? z = x + y * z / 4 % 2-1", 
            options: [ "(a)	* / % +=",  "(b) = * / % + -",  "(c) / * %+ =",  "(d) * % /+ ="], correct: 0},
        {question: "Which of the following are unary operators in C ? 1. !   2.	sizeof  3.	~   4.	&&", 
            options: [ "(a) 1, 2",  "(b)	1, 3",  "(c) 2, 4",  "(d) 1, 2, 3"], correct: 3},
        {question: "In which order do the following gets evaluated 1. Relational  2. Arithmetic  3.	Logical 4. Assignment", 
            options: [ "(a) 2134",  "(b) 1234",  "(c) 4321",  "(d) 3214"], correct: 0},
        {question: "Operators: What is the output of the following code snippet? int x = 5; printf('%d\n', x++); ", 
            options: [ "(a) 4 ",  "(b) 5 ",  "(c)	Compilation Error ",  "(d) Unexpected Behavior "], correct: 1},
        {question: "Pointers: What does the following code do? int *ptr; ptr = &x; *ptr = 10; ", 
            options: [ "(a) Assigns 10 to x ",  "(b)	Creates an array ",  "(c) Assigns the address of x to ptr ",  "(d) None of the above "], correct: 2},
        {question: "Arrays: How can you access the third element of an array named data with 10 elements? ", 
            options: [ "(a) data[2] ",  "(b)	data(3) ",  "(c) data.3",  "(d)	None of the above "], correct: 0},
        {question: "Loops: What is an infinite loop in C? ",
            options: [  "(a) for (int i = 0; i < 10; i++) { } ",  "(b) while (true) { } ",  "(c) do { } while (false); ",  "(d) for (int i = 10; i > 0; i--) { } "], correct: 1},
        {question: "Functions: What is the purpose of a function prototype? ", 
            options: [ "(a) To declare a variable ",  "(b)	To define a function body ",  "(c) To declare a function's signature ",  "(d) To call a function "], correct: 2},
        {question: "String Manipulation: What function is used to print a string to the console? ", 
            options: [  "(a) getline() ",  "(b) scanf() ",  "(c) printf() ",  "(d)	strlen() "], correct: 2},
        {question: "Preprocessor Directives: What does #include <stdio.h> do in C code? ", 
            options: [ "(a) Defines a macro ",  "(b) Includes the standard input/output library ",  "(c) Declares a variable ",  "(d) Starts a comment block "], correct: 1},
        {question: "Memory Management: How can you allocate memory dynamically in C? ", 
            options: [ "(a) Using arrays ",  "(b)	Using malloc() ",  "(c)	Using variables ",  "(d) Using free()"], correct: 1},
        {question: "Output: Which code snippet will print 'Hello, World!'? ", 
            options: [ "(a) printf('Hello, World!'); ",  "(b) cout << 'Hello, World!'; ",  "(c) int main() { ... } ",  "(d) #include <stdio.h>"], correct: 0},
        {question: "Data Types: What is the size of an int variable in C on a 32-bit system? ", 
            options: [ "(a) 1 byte ",  "(b) 2 bytes ",  "(c) 4 bytes ",  "(d) 8 bytes"], correct: 1},
        {question: "Arrays: How do you access the third element of an array named numbers with 10 elements? ", 
            options: [ "(a) numbers[2] ",  "(b) numbers(3) ", "(c) 3[numbers] ",  "(d) getnumbers(2);"], correct: 0},
        {question: "Pointers: What does the following code print: int x = 5; int *ptr = &x; printf('%d', *ptr); ", 
            options: [ "(a) Memory address of x",  "(b) Compilation error",  "(c) Garbage value",  "(d) 5"], correct: 3},
        {question: "Functions: What is the purpose of the return statement in a function? ", 
            options: [ "(a) To declare variables ",  "(b) To define a function ",  "(c) To control program flow and optionally return a value ",  "(d) To access global variables"], correct: 2},
        {question: "Loops: What will the following code print: for (int i = 0; i < 5; i++) { printf('%d', i); } ", 
            options: [ "(a) 0 1 2 3 4 ",  "(b) 1 2 3 4 5 ",  "(c) 5 4 3 2 1 ",  "(d) Infinite loop"], correct: 0},
        {question: "Strings: How do you declare a character array to store the string 'Hello'? ", 
            options: [ "(a) char message = 'Hello'; ",  "(b) char message[] = 'Hello'; ",  "(c) string message = 'Hello'; ",  "(d) int message[5] = {'H', 'e', 'l', 'l', 'o'};"], correct: 1},
        {question: "Input/Output: How do you read an integer from the user in C? ", 
            options: [  "(a) int num = scanf('%d'); ",  "(b) int num = getchar(); ",  "(c) cin >> num; ", "(d) int num = input('%d'); "], correct: 3},
        {question: "Operators: What is the output of 5 % 2? ", 
            options: [ "(a) 0 ",  "(b) 2 ",  "(c) 3 ",  "(d) Compile Error"], correct: 0},
        {question: "Conditional Statements: What does the if statement check for? ", 
            options: [  "(a) Loop condition ",  "(b) Function call ",  "(c) Conditional execution based on a boolean expression ",  "(d) Variable declaration"], correct: 2},
        {question: "Bitwise Operators: What is the result of 10 & 7 (bitwise AND)? ",
            options: [  "(a) 3 ",  "(b) 10 ",  "(c) 7 ",  "(d) 17"], correct: 0},
        {question: "Structures: What is the purpose of structures in C? ", 
            options: [ "(a) To define arrays ",  "(b) To group related variables under a single name ",  "(c) To define functions ",  "(d) To perform memory allocation"], correct: 1},
        {question: "Recursion: What is recursion? ", 
            options: [ "(a) A function calling itself ",  "(b) A loop that iterates a fixed number of times ",  "(c) A way to define constants ",  "(d) A method for memory management"], correct: 0},
        {question: "Preprocessor Directives: What does #include <stdio.h> do? ", 
            options: [ "(a) Declares user-defined functions ",  "(b) Includes standard input/output library ",  "(c) Defines a macro ",  "(d) Starts the main function"], correct:1},
        {question: "Memory Management: How do you allocate memory dynamically in C? ", 
            options: [ "(a) Using new keyword",  "(b) By declaring a variable",  "(c) Using malloc function ",  "(d) Through inheritance"], correct: 2},
        {question: "What is the output of the following code snippet? image", 
            options: [  "(a) x is 10  ",  "(b) x is not 10  ",  "(c) Compiler Error  ",  "(d) Runtime Error  "], correct: 0},
        {question: "What is the result of sizeof(char) in C?", 
            options: [  "(a) 1 ",  "(b) 2 ",  "(c) 4 ",  "(d) Depends on the compiler "], correct: 0},
        {question: "Which of the following is not a valid variable name in C?", 
            options: [ "(a) my_var  ",  "(b) _myVar  ",  "(c) 1st_variable  ",  "(d) myVar2  "], correct: 2},
        {question: "What is the output of the following code snippet? image", 
            options: [ "(a) 5, 7  ",  "(b) 5, 6  ",  "(c) 6, 7  ",  "(d) 6, 6  "], correct: 2},
        {question: "What will be the output of the following code? image", 
            options: [ "(a) Hello  ",  "(b) Compiler Error  ",  "(c) Undefined behavior  ",  "(d) Null character  "], correct: 3},
        {question: "What is the value of *(ptr + 2) where ptr is an integer pointer pointing to the base address of an integer array?", 
            options: [  "(a) Value at the third element of the array  ",  "(b) Address of the third element of the array  ",  "(c) Value at the address stored in the third element  ",  "(d) Address of the array  "], correct: 0},
        {question: "Which of the following is not a valid way to declare a structure in C?", 
            options: [  "(a) struct point { int x, y; };  ",  "(b) typedef struct { int x, y; } Point;  ",  "(c) typedef { int x, y; } Point;  ",  "(d) struct { int x, y; } point;  "], correct: 2},
        {question: "What does the fgets() function in C do?", 
            options: [  "(a) Reads a string from standard input  ",  "(b) Reads an integer from standard input  ",  "(c) Reads a character from standard input  ",  "(d) Reads a line from a file  "], correct: 0},
        {question: "What is the output of the following code snippet? image", 
            options: [ "(a) 5 6 7  ",  "(b) 7 6 5  ",  "(c) 6 7 5  ",  "(d) Compiler Error  "], correct: 2},
        {question: "What is the result of 2 << 2 in C?", 
            options: [  "(a) 4  ",  "(b) 8  ",  "(c) 2  ",  "(d) 16  "], correct: 1},
        {question: "Which of the following is a correct way to define a macro in C?", 
            options: [  "(a) #define MAX(a, b) { a > b ? a : b }  ",  "(b) #define MAX(a, b) (a > b ? a : b)  ",  "(c) #define MAX(a, b) if (a > b) a else b  ",  "(d) #define MAX(a, b) [a > b ? a : b]  "], correct: 1},
        {question: "What is the output of the following code snippet? image", 
            options: [  "(a) 0 1 2 3 4  ",  "(b) 0 1 2 3  ", "(c) 1 2 3 4 5  ",  "(d) Infinite loop  "], correct: 0},
        {question: "Which of the following is true about NULL in C?", 
            options: [  "(a) It represents an empty character  ",  "(b) It is equivalent to an empty string  ", "(c) It is used to indicate that a pointer does not point to a valid object  ",  "(d) It is a keyword for an undefined value  "], correct: 2},
        {question: "What does the sizeof operator return in C?", 
            options: [ "(a) Size of a variable  ",  "(b) Size of a function  ",  "(c) Size of a structure  ",  "(d) Size of a type  "], correct: 3},
        {question: "What is the correct way to allocate memory dynamically for an integer in C?", 
            options: [  "(a) malloc(int)  ",  "(b) malloc(sizeof(int))  ",  "(c) malloc(4)  ",  "(d) malloc(sizeof(int*)) "], correct: 2},
        {question: "What will be the output of the following code? image ", 
            options: [  "(a) 1  ",  "(b) 2  ", "(c) 3  ",  "(d) 4  "], correct: 2},
        {question: "What is the output of the following code snippet? image", 
            options: [ "(a) 0  ",  "(b) 10  ",  "(c) Address of x  ",  "(d) Compiler Error  "], correct: 1},
        {question: "Which of the following is not a valid way to declare a function pointer in C?", 
            options: [  "(a) int (*funcPtr)(int, int);  ",  "(b) int *funcPtr(int, int);  ",  "(c) int (*funcPtr[])(int, int);  ",  "(d) typedef int (*funcPtr)(int, int);  "], correct: 1},
        {question: "What is the output of the following code snippet? image", 
            options: [ "(a) H  ",  "(b) e  ",  "(c) Hello  ",  "(d) Compiler Error  "], correct: 0},
        {question: "What is the correct way to declare a constant pointer to an integer in C?",
            options: [  "(a) const int *ptr;  ", "(b) int * const ptr;  ",  "(c) const int * const ptr;  ",  "(d) const int * const *ptr;  "], correct: 1},
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