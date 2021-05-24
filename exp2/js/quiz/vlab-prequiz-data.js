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
        {// Question 1
            "q": "A sine wave whose frequency is some integer multiple of a fundamental sine wave is called,",
            "a": [
                {"option": "`Complex wave`", "correct": false},
                {"option": "`Square wave`", "correct": false},
                {"option": "`Harmonic`", "correct": true},
                {"option": "`Digital pulses`", "correct": false} // no comma here
            ],
            "correct": "<p><span>Good Job!</span> You must be very observant!</p>",
            "incorrect": "<p>Try again.</p>" // no comma here
        },
	{// Question 2
            "q": "What is he duty cycle of a square wave with equal durations positive and negative alterations?",
            "a": [
                {"option": "`50%`", "correct": true},
                {"option": "`100%`", "correct": false},
                {"option": "`200%`", "correct": false},
                {"option": "`25%`", "correct": false} // no comma here
            ],
            "correct": "<p><span>Good Job!</span> You must be very observant!</p>",
            "incorrect": "<p><span>ERRRR!</span> What planet Earth are <em>you</em> living on?!?</p>" // no comma here
        },
	{// Question 3
            "q": "What is the frequency of the 7th harmonic of a 2KHz sine wave?",
            "a": [
                {"option": "9KHz", "correct": false},
                {"option": "14KHz", "correct": true},
                {"option": "5KHz", "correct": false},
                {"option": "None", "correct": false} // no comma here
            ],
            "correct": "<p><span>Good Job!</span> You must be very observant!</p>",
            "incorrect": "<p><span>ERRRR!</span> What planet Earth are <em>you</em> living on?!?</p>" // no comma here
        },
		{// Question 4
            "q": "What is the peak value of 5th harmonic if the square wave has a peak voltage of 3V and a frequency of 48KHz?",
            "a": [
                {"option": "0.76", "correct": true},
                {"option": "0.74", "correct": false},
				{"option": "0.52", "correct": false},
                {"option": "1.34", "correct": false} // no comma here
            ],
            "correct": "<p><span>Good Job!</span> You must be very observant!</p>",
            "incorrect": "<p><span>ERRRR!</span> What planet Earth are <em>you</em> living on?!?</p>" // no comma here
        },
		{// Question 5
            "q": "Which instrument produces frequency domain information?",
            "a": [
                {"option": "Oscilloscope", "correct": false},
                {"option": "Frequency divider", "correct": false},
				{"option": "Beam analyzer", "correct": false},
                {"option": "Spectrum analyzer", "correct": true} // no comma here
            ],
            "correct": "<p><span>Good Job!</span> You must be very observant!</p>",
            "incorrect": "<p><span>ERRRR!</span> What planet Earth are <em>you</em> living on?!?</p>" // no comma here
        },
		
		
    ]
};
