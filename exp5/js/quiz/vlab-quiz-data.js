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
            "q": " A circuit that removes positive or negative parts of a waveform is called a ",
            "a": [
                {"option": " Clamper", "correct": false},
                {"option": "Clipper", "correct": true},
                {"option": "Diode clamp", "correct": false},
                {"option": "Limiter", "correct": false} // no comma here
            ],
           "correct": "<p><span></span> </p>",
            "incorrect": "<p><span></span> </p>"
        },
        {// Question 2 - Multiple Choice, Multiple True Answers, Select Any
            "q": " Voltage multipliers are circuits best used to produce",
            "a": [
                {"option": "Low voltage and low current", "correct": false},
                {"option": "Low voltage and high current", "correct": false},
                {"option": "High voltage and high current", "correct": false},
                {"option": "High voltage and low current", "correct": true} // no comma here
            ],
           "correct": "<p><span></span> </p>",
            "incorrect": "<p><span></span> </p>"
        },
        {// Question 3 - Multiple Choice, Multiple True Answers, Select All
            "q": " The small load current in Cockroft – Walton circuit means:",
            "a": [
                {"option": " Voltage drop is very large", "correct": false},
                {"option": " None of these", "correct": false},
                {"option": " Voltage drop is small", "correct": true},
                {"option": "Can’t predict", "correct": false} // no comma here
            ],
            "correct": "<p><span></span> </p>",
            "incorrect": "<p><span></span> </p>"
        },
        {// Question 4
            "q": " The forward voltage drop across a silicon diode is about ______.",
            "a": [
                {"option": " 2.5 V", "correct": false},
                {"option": " 3 V", "correct": false},
                {"option": "0.7 V", "correct": true},
                {"option": "10 V", "correct": false}// no comma here
            ],
            "correct": "<p><span></span> </p>",
            "incorrect": "<p><span></span> </p>"
        },
        
       {// Question 5
            "q": "  Half wave voltage multiplier can provide any degree of voltage multiplication by cascading",
            "a": [
                {"option": "  only doubler", "correct": false},
                {"option": "only tripler", "correct": false},
                {"option": "any multiplication", "correct": true},
                {"option": "none of the above", "correct": false}// no comma here
            ],
            "correct": "<p><span></span> </p>",
            "incorrect": "<p><span></span> </p>"
        }, 
        
         {// Question 6
            "q": " A circuit that adds positive or negative dc voltage to an input sine wave is called",
            "a": [
                {"option": " clipper", "correct": false},
                {"option": "diode clamp", "correct": false},
                {"option": " clamper", "correct": true},
                {"option": "limiter", "correct": false}// no comma here
            ],
            "correct": "<p><span></span> </p>",
            "incorrect": "<p><span></span> </p>"
        }, 
        
        {// Question 7
            "q": " The use of a capacitor filter in a rectifier circuit gives satisfactory performance only when the load ",
            "a": [
                {"option": "current is high", "correct": false},
                {"option": "voltage is high", "correct": false},
                {"option": " current is low", "correct": true},
                {"option": "voltage is low", "correct": false}// no comma here
            ],
            "correct": "<p><span></span> </p>",
            "incorrect": "<p><span></span> </p>"
        }, 
        
        
        
        
          
    ]
};
