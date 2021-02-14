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
            "q": "What are Fourier Co-efficients?",
            "a": [
                {"option": "The terms that are present in a Fourier Series", "correct": false},
                {"option": "The terms that are obtained through Fourier Series", "correct": false},
                {"option": "The terms which consist of the fourier series along with their sine or co sine values", "correct": true},
                {"option": "The terms which are of resemblance to fourier transform", "correct": false} // no comma here
            ],
            "correct": "<p><span>Good Job!</span> You must be very observant!</p>",
            "incorrect": "<p>Try again.</p>" // no comma here
        },
	
	{// Question 2
            "q": "Fourier Series is not true for discrete time sigals",
            "a": [
                {"option": "Yes", "correct": false},
                {"option": "No", "correct": true} // no comma here
            ],
            "correct": "<p><span>Good Job!</span> You must be very observant!</p>",
            "incorrect": "<p><span>ERRRR!</span> What planet Earth are <em>you</em> living on?!?</p>" // no comma here
        },
		{// Question 3
            "q": "Fourier Series uses which domain representation of signals?",
            "a": [
                {"option": "Time Domain", "correct": false},
                {"option": "Frequency Domain", "correct": true},
				{"option": "Both", "correct": false},
                {"option": "Neither depends on situaion", "correct": false} // no comma here
            ],
            "correct": "<p><span>Good Job!</span> You must be very observant!</p>",
            "incorrect": "<p><span>ERRRR!</span> What planet Earth are <em>you</em> living on?!?</p>" // no comma here
        },
		{// Question 4
            "q": "How does Fourier Series make it easier to represent periodic signals?",
            "a": [
                {"option": "Harmonically related", "correct": true},
                {"option": "Periodically related", "correct": false},
				{"option": "Sinusoidally", "correct": false},
                {"option": "None of these", "correct": false} // no comma here
            ],
            "correct": "<p><span>Good Job!</span> You must be very observant!</p>",
            "incorrect": "<p><span>ERRRR!</span> What planet Earth are <em>you</em> living on?!?</p>" // no comma here
        },
		
    ]
};
