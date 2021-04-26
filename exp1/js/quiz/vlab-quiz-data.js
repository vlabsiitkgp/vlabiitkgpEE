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
            "q": "Consider the following specifications and calculate the high cut-off frequency for the circuit given.<br/><p style=\"text-align:center\"><img src=\"./image/P1.png\" style=\"width:450px;height:290px;\"></p>",
            "a": [
                {"option": "`95Hz`", "correct": false},
                {"option": "`48Hz`", "correct": false},
                {"option": "`14Hz`", "correct": false},
                {"option": "`33Hz`", "correct": true} // no comma here
            ],
            "correct": "<p><span>Good Job!</span> You must be very observant!</p>",
            "incorrect": "<p>Try again.</p>" // no comma here
        },
	{// Question 2
            "q": "How can a first order lowpass filter can be converted into second order low pass filter",
            "a": [
                {"option": "`By adding LC network`", "correct": false},
                {"option": "`By adding RC network`", "correct": true},
                {"option": "`By adding RC||LC network`", "correct": false},
                {"option": "`none`", "correct": false} // no comma here
            ],
            "correct": "<p><span>Good Job!</span> You must be very observant!</p>",
            "incorrect": "<p><span>ERRRR!</span> What planet Earth are <em>you</em> living on?!?</p>" // no comma here
        },
	{// Question 3
            "q": "Find the gain and phase angle of the 2nd order low pass filter where, passband gain of the filter is 5.Frequency and high cut-off frequency of the filter are 3000Hz and 1KHz.",
            "a": [
                {"option": "Gain magnitude=-1.03dB,Angle=63.32(in degree)", "correct": false},
                {"option": "Gain magnitude=-5.19dB,Angle=71.56(in degree)", "correct": true},
                {"option": "Gain magnitude=-4.19dB,Angle=90(in degree)", "correct": false},
                {"option": "None", "correct": false} // no comma here
            ],
            "correct": "<p><span>Good Job!</span> You must be very observant!</p>",
            "incorrect": "<p><span>ERRRR!</span> What planet Earth are <em>you</em> living on?!?</p>" // no comma here
        },
		{// Question 4
            "q": "The pass band voltage gain of a second order low pass butter worth filter is",
            "a": [
                {"option": "1.586", "correct": true},
                {"option": "8.32", "correct": false},
				{"option": "0.586", "correct": false},
                {"option": "0.707", "correct": false} // no comma here
            ],
            "correct": "<p><span>Good Job!</span> You must be very observant!</p>",
            "incorrect": "<p><span>ERRRR!</span> What planet Earth are <em>you</em> living on?!?</p>" // no comma here
        },
		{// Question 5
            "q": "Frequency scaling is done using",
            "a": [
                {"option": "Standard Capacior", "correct": true},
                {"option": "Varying Capacitor", "correct": false},
				{"option": "Standard resistance", "correct": false},
                {"option": "None of these", "correct": false} // no comma here
            ],
            "correct": "<p><span>Good Job!</span> You must be very observant!</p>",
            "incorrect": "<p><span>ERRRR!</span> What planet Earth are <em>you</em> living on?!?</p>" // no comma here
        },
		{// Question 6
            "q": "A second order low pass filter is given an input frequency of 30KHz and produce an output having phase angle of 79 degree.Determine the pass band gain of the filter.",
            "a": [
                {"option": "11dB", "correct": false},
                {"option": "89.11dB", "correct": false},
				{"option": "46.78dB", "correct": true},
                {"option": "None", "correct": false} // no comma here
            ],
            "correct": "<p><span>Good Job!</span> You must be very observant!</p>",
            "incorrect": "<p><span>ERRRR!</span> What planet Earth are <em>you</em> living on?!?</p>" // no comma here
        },
		
    ]
};
