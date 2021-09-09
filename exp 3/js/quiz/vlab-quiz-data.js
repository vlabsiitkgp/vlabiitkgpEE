/*
 * 
 * Author: Piyali Chattopadhyay
 * IIT Kharagpur
 * 
 * Setup your quiz text and questions here
 * NOTE: pay attention to commas, IE struggles with those bad boys
 * 
 */

var quizJSON = {
    "info": {
        "name": "Test Your Knowledge!!",
        "main": "<p>Think you're smart enough to be on Jeopardy? Find out with this super crazy knowledge quiz!</p>",
        "results": "<p>Learn More.</p>",
        "level1": "Jeopardy Ready",
        "level2": "Jeopardy Contender",
        "level3": "Jeopardy Amateur",
        "level4": "Jeopardy Newb",
        "level5": "Stay in school, kid..." // no comma here
    },
    "questions": [
        {// Question 1 - Multiple Choice, Single True Answer
            "q": " A  voltage doubler circuit is suitable for the voltage upto ",
            "a": [
                {"option": " 2", "correct": false},
                {"option": "4", "correct": true},
                {"option": "10", "correct": false},
                {"option": "8", "correct": false} // no comma here
            ],
           "correct": "<p><span></span> </p>",
            "incorrect": "<p><span></span> </p>"
        },
        {// Question 2 - Multiple Choice, Multiple True Answers, Select Any
            "q": " For measurement of ripple voltage in dc system,the condition to be satisfied is,",
            "a": [
                {"option": "WCR<<1", "correct": false},
                {"option": "WCR=1", "correct": false},
                {"option": "WCR>>1", "correct": true},
                {"option": "None", "correct": false} // no comma here
            ],
           "correct": "<p><span></span> </p>",
            "incorrect": "<p><span></span> </p>"
        },
        {// Question 3 - Multiple Choice, Multiple True Answers, Select All
            "q": " A voltage doubler circuit is fed by a voltage Vm Sin ωt. The output voltage will be nearly 2 Vm only if",
            "a": [
                {"option": "load resistance is small", "correct": false},
                {"option": "load resistance is large", "correct": true},
                {"option": "load resistance neither small nor large", "correct": false},
                {"option": "None of these", "correct": false} // no comma here
            ],
            "correct": "<p><span></span> </p>",
            "incorrect": "<p><span></span> </p>"
        },
        {// Question 4
            "q": "  Which rectifier requires four diodes?",
            "a": [
                {"option": "half-wave voltage doubler", "correct": false},
                {"option": " full-wave voltage doubler", "correct": false},
                {"option": "full-wave bridge circuit", "correct": true},
                {"option": "voltage quadrupler", "correct": false}// no comma here
            ],
            "correct": "<p><span></span> </p>",
            "incorrect": "<p><span></span> </p>"
        },
        
		{// Question 5
            "q": " A voltage tripler circuit uses",
            "a": [
                {"option": "2 diodes and 2 capacitors", "correct": false},
                {"option": " 2 diodes and 3 capacitors", "correct": false},
                {"option": "3 diodes and 3 capacitors", "correct": true},
                {"option": "3 diodes and 2 capacitors", "correct": false}// no comma here
            ],
            "correct": "<p><span></span> </p>",
            "incorrect": "<p><span></span> </p>"
        },
		
		
		{// Question 6
            "q": " In a rectifier, larger the value of shunt capacitor filter",
            "a": [
                {"option": "larger the peak-to-peak value of ripple voltage", "correct": false},
                {"option": "longer the time that current pulse flows through the diode", "correct": false},
                {"option": "larger the peak current in the rectifying diode", "correct": true},
                {"option": "smaller the dc voltage across the load", "correct": false}// no comma here
            ],
            "correct": "<p><span></span> </p>",
            "incorrect": "<p><span></span> </p>"
        },
		
		{// Question 7
            "q": "  A half wave rectifier is equivalent to",
            "a": [
                {"option": "clamper circuit", "correct": false},
                {"option": "a clamper circuit with negative bias", "correct": false},
                {"option": " a clipper circuit", "correct": true},
                {"option": "a clamper circuit with positive bias", "correct": false}// no comma here
            ],
            "correct": "<p><span></span> </p>",
            "incorrect": "<p><span></span> </p>"
        },
		
		
		
		
          
    ]
};