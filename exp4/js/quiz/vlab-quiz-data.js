/*
 * 
 * Author: P K JANA
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
            "q": "A 12 Ω resister,a 40uF capacitor and an 8mH coil are in series across an ac source.The resonant frequency is,",
            "a": [
                {"option": "28.1 Hz", "correct": false},
                {"option": "2810 Hz", "correct": false},
                {"option": "281 Hz", "correct": true},
                {"option": "10 KHz", "correct": false} // no comma here
            ],
            "correct": "<p><span>Good Job!</span> You must be very observant!</p>",
            "incorrect": "<p>Try again.</p>" // no comma here
        },
	
	{// Question 2
            "q": "The impedance at resonant frequency of a series RLC circuit with L=20mH, C=0.02uF and R=90 Ω",
            "a": [
                {"option": "0 Ω", "correct": false},
				{"option": "20 Ω", "correct": false},
                {"option": "40 Ω", "correct": false},
                {"option": "90 Ω", "correct": true} // no comma here
            ],
            "correct": "<p><span>Good Job!</span> You must be very observant!</p>",
            "incorrect": "<p><span>ERRRR!</span> What planet Earth are <em>you</em> living on?!?</p>" // no comma here
        },
		{// Question 3
            "q": "In a series RLC circuit the phase difference between the current in the capacitor and in the resistor is,",
            "a": [
                {"option": "90^0", "correct": false},
                {"option": "0^0", "correct": true},
				{"option": "180^0", "correct": false},
                {"option": "None", "correct": false} // no comma here
            ],
            "correct": "<p><span>Good Job!</span> You must be very observant!</p>",
            "incorrect": "<p><span>ERRRR!</span> What planet Earth are <em>you</em> living on?!?</p>" // no comma here
        },
		{// Question 4
            "q": "In a series RLC circuit the phase difference between the current in the circuit and in the voltage across the resistor is,",
            "a": [
                {"option": "90^0", "correct": false},
                {"option": "0^0", "correct": true},
				{"option": "180^0", "correct": false},
                {"option": "360^0", "correct": false} // no comma here
            ],
            "correct": "<p><span>Good Job!</span> You must be very observant!</p>",
            "incorrect": "<p><span>ERRRR!</span> What planet Earth are <em>you</em> living on?!?</p>" // no comma here
        },
		
        {// Question 5
            "q": "In a series RLC circuit the phase difference between the current in the circuit and in the voltage across the inductor is,",
            "a": [
                {"option": "0^0", "correct": false},
                {"option": "90^0", "correct": true},
				{"option": "180^0", "correct": false},
                {"option": "45^0", "correct": false} // no comma here
            ],
            "correct": "<p><span>Good Job!</span> You must be very observant!</p>",
            "incorrect": "<p><span>ERRRR!</span> What planet Earth are <em>you</em> living on?!?</p>" // no comma here
        },







   ]
};
