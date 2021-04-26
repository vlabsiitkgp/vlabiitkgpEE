/*
 * 
 * Author: Piyali Chattopadhyay
 * IIT Kharagpur
 * 
 * Setup your quiz text and questions here
 * NOTE: pay attention to commas, IE struggles with those bad boys
 * 
 */

var quizJSON2 = {
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
        {// Question 1
            "q": "Which filter type is called a flat-flat filter?",
            "a": [
                {"option": "`Butterworth filter`", "correct": true},
                {"option": "`Cauer filter`", "correct": false},
                {"option": "`Band-reject filter`", "correct": false},
                {"option": "`Chebyshev filter`", "correct": false} // no comma here
            ],
            "correct": "<p><span>Good Job!</span> You must be very observant!</p>",
            "incorrect": "<p>Try again.</p>" // no comma here
        },
	{// Question 2
            "q": "In which filter the output and input voltages are equal in amplitude for all frequencies?",
            "a": [
                {"option": "`All pass filter`", "correct": true},
                {"option": "`High pass filter`", "correct": false},
                {"option": "`Low pass filter`", "correct": false},
                {"option": "`none`", "correct": false} // no comma here
            ],
            "correct": "<p><span>Good Job!</span> You must be very observant!</p>",
            "incorrect": "<p><span>ERRRR!</span> What planet Earth are <em>you</em> living on?!?</p>" // no comma here
        },
	{// Question 3
            "q": "Determine the order of the filter used,when the gain increases at the rate of 60dB/decade?",
            "a": [
                {"option": "Second order low pass", "correct": false},
                {"option": "Third order High pass", "correct": true},
                {"option": "First order low pass", "correct": false},
                {"option": "None", "correct": false} // no comma here
            ],
            "correct": "<p><span>Good Job!</span> You must be very observant!</p>",
            "incorrect": "<p><span>ERRRR!</span> What planet Earth are <em>you</em> living on?!?</p>" // no comma here
        },
		{// Question 4
            "q": "Name the filter that has two stop bands?",
            "a": [
                {"option": "Band pass filter", "correct": true},
                {"option": "Low pass filter", "correct": false},
				{"option": "Band reject filter", "correct": false},
                {"option": "High pass filter", "correct": false} // no comma here
            ],
            "correct": "<p><span>Good Job!</span> You must be very observant!</p>",
            "incorrect": "<p><span>ERRRR!</span> What planet Earth are <em>you</em> living on?!?</p>" // no comma here
        },
		{// Question 5
            "q": "A bandstop filter is sometimes called a",
            "a": [
                {"option": "Snubber", "correct": false},
                {"option": "Phase shifter", "correct": false},
				{"option": "Time-Delay circuit", "correct": false},
                {"option": "Notch filter", "correct": true} // no comma here
            ],
            "correct": "<p><span>Good Job!</span> You must be very observant!</p>",
            "incorrect": "<p><span>ERRRR!</span> What planet Earth are <em>you</em> living on?!?</p>" // no comma here
        },
		
		
    ]
};
