/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */




/*
 * 
 * Author: P K JANA
 * IIT Kharagpur
 * 
 */

var i = 0;
var resultArray = [];
var questionCount = 0;

function quizInitializeAllQuestion2() {
    document.getElementById("vpqt-start").style.display = "none";    
    var ansCount = 0;
    var questionOptions = "<form name=\"prequiz\" method=\"post\" id=\"prequiz\" onsubmit=\"return false\"><ul class=\"questionList\">";
    questionCount = quizJSON2.questions.length;
    for (var qc = 0; qc < questionCount; qc++) {
        ansCount = quizJSON2.questions[qc].a.length;
        questionOptions = questionOptions + "<li id=\"prequestion" + qc + "\" style=\"font-weight:bold;padding-top:20px;text-align:justify\">" + (qc + 1) + ". " + quizJSON2.questions[qc].q + "<ul>";
        for (var j = 0; j < ansCount; j++) {
            questionOptions = questionOptions + "<li><input type = \"radio\" name = \"ans" + qc + "\" value = \"" + j + "\">" + quizJSON2.questions[qc].a[j].option + "</li>";
        }
        questionOptions = questionOptions + "</ul></li>";
    }
    questionOptions = questionOptions + "</ul><button class=\"submit\" onclick=\"return prequizSubmit();\" type=\"submit\">Submit</button></form>";
    document.getElementById("vlab-prequiz-question-answer-options").innerHTML = questionOptions;
    dynamicMathConveter();
}

function prequizSubmit() {
    for (var i = 0; i < questionCount; i++) {
        var radios = document.getElementsByName("ans" + i);
        for (var j = 0; j < radios.length; j++) {
            var radio = radios[j];
            if (radio.checked) {
                document.getElementById("prequestion" + i).classList.remove("cross");
                document.getElementById("prequestion" + i).classList.remove("tick");
                if (quizJSON2.questions[i].a[radio.value].correct === true) {
                    document.getElementById("prequestion" + i).classList.add("tick");
                } else {
                    document.getElementById("prequestion" + i).classList.add("cross");
                }
            }
        }
    }
}

function quizInitialize2() {
    document.getElementById("vpqt-start").style.display = "none";
    document.getElementById("vqt-next").style.display = "block";
    questionCount = quizJSON2.questions.length;
    if (i >= questionCount) {
        showResult();
        return;
    }
    var ansCount = quizJSON2.questions[i].a.length;
    var questionOptions = "<p style=\"font-weight:bold;\">" + (i + 1) + ". " + quizJSON2.questions[i].q + "</p>";
    for (var j = 0; j < ansCount; j++) {
        questionOptions = questionOptions + "<p><input type = \"radio\" name = \"ans\" value = \"" + j + "\"><label>" + quizJSON2.questions[i].a[j].option + "</label></p>";
    }
    document.getElementById("vlab-prequiz-question-answer-options").innerHTML = questionOptions;
    dynamicMathConveter();
}
function quizNext() {
    resultArray[i] = document.querySelector('input[name="ans"]:checked').value;
    i = i + 1;
    quizInitialize2();
}

function showResult() {
    document.getElementById("vlab-prequiz-question-answer-options").style.display = "none";
    document.getElementById("vlab-quiz-result").style.display = "block";
    document.getElementById("vqt-next").style.display = "none";
    document.getElementById("vqt-try-again").style.display = "block";
    var resultCount = 0;
    var level = "";
    var fullresult = "";
    for (var i = 0; i < questionCount; i++) {
        fullresult = fullresult + "<p><b>" + (i + 1) + ". " + quizJSON2.questions[i].q + "</b></p>";
        var ansCount = quizJSON2.questions[i].a.length;
        var k = -1;
        for (var j = 0; j < ansCount; j++) {
            fullresult = fullresult + "<p>(" + String.fromCharCode(97 + j) + ") " + quizJSON2.questions[i].a[j].option + "</p>";
            if (quizJSON2.questions[i].a[j].correct === true)
                k = j;
        }
        if (quizJSON2.questions[i].a[resultArray[i]].correct === true) {
            resultCount++;
            fullresult = fullresult + "<p> You have choosen option (" + String.fromCharCode(97 + parseInt(resultArray[i])) + "). The answer is correct." + quizJSON2.questions[i].correct;
        } else {
            fullresult = fullresult + "<p> You have choosen option (" + String.fromCharCode(97 + parseInt(resultArray[i])) + "). The answer is incorrect. The correct option is (" + String.fromCharCode(97 + k) + ")." + quizJSON2.questions[i].incorrect;
        }
    }
    var resultPercent = (resultCount / questionCount) * 100;
    if (resultPercent >= 75) {
        level = quizJSON2.info.level1;
    } else if (resultPercent >= 60) {
        level = quizJSON2.info.level2;
    } else if (resultPercent >= 50) {
        level = quizJSON2.info.level3;
    } else if (resultPercent >= 40) {
        level = quizJSON2.info.level4;
    } else {
        level = quizJSON2.info.level5;
    }
    document.getElementById("vlab-quiz-result").innerHTML = "<p> You have scored " + resultCount + " out of " + questionCount + ".</p><p>Your level is: " + level + "</p>" + fullresult;
    dynamicMathConveter()
}

function tryAgain() {
    document.getElementById("vlab-prequiz-question-answer-options").style.display = "block";
    document.getElementById("vlab-quiz-result").style.display = "none";
    document.getElementById("vqt-next").style.display = "block";
    document.getElementById("vqt-try-again").style.display = "none";
    i = 0;
    resultArray = [];
    quizInitialize2();
}
function dynamicMathConveter() {
    MathJax.Hub.Queue(["Typeset", MathJax.Hub]);
}