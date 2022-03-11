var startEl = document.querySelector("#start");
var ansEls = document.querySelector("#answer-btn")
var ansEl1 = document.querySelector("#ansBtn1")
var ansEl2 = document.querySelector("#ansBtn2")
var ansEl3 = document.querySelector("#ansBtn3")
var ansEl4 = document.querySelector("#ansBtn4")
var timeEl = document.querySelector("#temp")
var recordEl = document.querySelector(".input")
var createPEl = document.createElement("h3");

createPEl.setAttribute("style", "font-size:15px")
var timeLeft = 15;
correctAnswers = 0;

//console.log(startEl)
startEl.addEventListener("click", function() {

    startEl.classList.add('hide');
    ansEls.classList.remove('hide');
    timeEl.classList.remove('hide')
    document.getElementById("question").innerHTML = questions[0].question;
    document.getElementById("ansBtn1").innerHTML = questions[0].answers[0];
    document.getElementById("ansBtn2").innerHTML = questions[0].answers[1];
    document.getElementById("ansBtn3").innerHTML = questions[0].answers[2];
    document.getElementById("ansBtn4").innerHTML = questions[0].answers[3];
    timer ();
})
var i = 0
ansEls.addEventListener("click", function(event) {

    createPEl.innerHTML = "";
        var answer = event.target;
    if (answer.textContent == questions[i].correct){
        //add to correct answer total
        correctAnswers ++;
       ansEls.append(createPEl)
        createPEl.textContent = "Correct! The answer is " + questions[i].correct;
        console.log(createPEl.textContent)
    }
   if (answer.textContent !== questions[i].correct){
       ansEls.append(createPEl)
        createPEl.textContent = "Incorrect! The answer is " + questions[i].correct;
        console.log(createPEl.textContent)
        timeLeft = timeLeft - 5;
    }
    if (i < (questions.length -1)) {
        var quest = questions[i];
    i = i + 1;
    document.getElementById("question").innerHTML = questions[i].question;
    document.getElementById("ansBtn1").innerHTML = questions[i].answers[0];
    document.getElementById("ansBtn2").innerHTML = questions[i].answers[1];
    document.getElementById("ansBtn3").innerHTML = questions[i].answers[2];
    document.getElementById("ansBtn4").innerHTML = questions[i].answers[3];
 }
 else {

   endQuiz();
 }
 })

 var timerEl = document.getElementById('timer');

 function timer() {
    var timeInterval = setInterval(function () {
      if (timeLeft > 0) {
        timerEl.textContent = timeLeft + ' seconds remaining';
        timeLeft--;
      } else {
        timerEl.textContent = '0';
        clearInterval(timeInterval);
        endQuiz();
      }
    }, 1000);
  }

  var endQuiz = function() {
    window.alert('you have reached the end of the quiz!, your score is' + "  " + (correctAnswers * 25) + '!')
    ansEls.classList.add('hide');
    document.getElementById("question").innerHTML = "";
    document.getElementById("welcome").innerHTML = "Thank you for taking this quiz! Please enter your initials below";
    timeLeft = 0;
    timeEl.innerHTML = '';
    recordEl.classList.remove('hide')

  }
  var submitEl = document.querySelector("#submit-init")
  var nameEl = document.querySelector("#your-name")


  submitEl.addEventListener('click', function() {
 var initials = nameEl.value;
 var yourScore = {
   initials: initials,
   score: (correctAnswers * 25)
 }
 localStorage.setItem("name", yourScore.initials);
    localStorage.setItem("score", yourScore.score);
  })


var questions = [
    {
        question:'Which of the following is considered a loop?', 
        answers: ['console.log','while','command line','if' ],
     correct: 'while'
    },
    {
        question:'What is an example of conditional statement?', 
        answers: ['if','loop','event.target','return' ],
     correct: 'if'
    },
    {
        question:'What of the following is a correct way to define a function?', 
        answers: ['Function = var ()','function() {}','function {} ()','var function [{}]' ],
     correct: 'function() {}'
    },
    {
    question:'What does the following command do: createPEl.innerHTML = "Hello";', 
    answers: ['gets an html element from the web','Prints "Hello" to the console','Creates an html element','Creates an element in the DOM' ],
 correct: 'Creates an element in the DOM'
},

]
