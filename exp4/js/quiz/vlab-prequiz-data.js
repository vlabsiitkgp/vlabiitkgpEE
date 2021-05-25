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
            "q": "If the value of C in a series RLC circuit is decreased,the resonant frequency,",
            "a": [
                {"option": "`Is not affected`", "correct": false},
                {"option": "`Increases`", "correct": true},
                {"option": "`Is reduced to zero`", "correct": false},
                {"option": "`Decreases`", "correct": false} // no comma here
            ],
            "correct": "<p><span>Good Job!</span> You must be very observant!</p>",
            "incorrect": "<p>Try again.</p>" // no comma here
        },
	{// Question 2
            "q": "A series resonant circuit is commonly called a tank circuit",
            "a": [
                {"option": "`False`", "correct": true},
                {"option": "`True`", "correct": false}
                 // no comma here
            ],
            "correct": "<p><span>Good Job!</span> You must be very observant!</p>",
            "incorrect": "<p><span>ERRRR!</span> What planet Earth are <em>you</em> living on?!?</p>" // no comma here
        },
	{// Question 3
            "q": "In a series RLC circuit that is operating above resonant frequency,the current,",
            "a": [
                {"option": "Is zero", "correct": false},
                {"option": "lags the applied voltage", "correct": true},
                {"option":"Leads the applied voltage", "correct": false},
                {"option": "None", "correct": false} // no comma here
            ],
            "correct": "<p><span>Good Job!</span> You must be very observant!</p>",
            "incorrect": "<p><span>ERRRR!</span> What planet Earth are <em>you</em> living on?!?</p>" // no comma here
        },
		{// Question 4
            "q": "In a series RLC circuit the phase difference between the current in the Inductor and in the resistor is,",
            "a": [
                {"option": "90^0", "correct": false},
                {"option": "0^0", "correct": true},
				{"option": "180^0", "correct": false},
                {"option": "None", "correct": false} // no comma here
            ],
            "correct": "<p><span>Good Job!</span> You must be very observant!</p>",
            "incorrect": "<p><span>ERRRR!</span> What planet Earth are <em>you</em> living on?!?</p>" // no comma here
        },
		{// Question 5
            "q": "In a series RLC circuit the phase difference between the current in the capacitor and in the inductor is,",
            "a": [
                {"option": "90^0", "correct": false},
                {"option": "0^0", "correct": true},
				{"option": "180^0", "correct": false},
                {"option": "None", "correct": false} // no comma here
            ],
            "correct": "<p><span>Good Job!</span> You must be very observant!</p>",
            "incorrect": "<p><span>ERRRR!</span> What planet Earth are <em>you</em> living on?!?</p>" // no comma here
        },
		
		
    ]
};
