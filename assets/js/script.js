var startEl = document.querySelector("#start");
var ansEls = document.querySelector("#answer-btn")
var ansEl1 = document.querySelector("#ansBtn1")
var ansEl2 = document.querySelector("#ansBtn2")
var ansEl3 = document.querySelector("#ansBtn3")
var ansEl4 = document.querySelector("#ansBtn4")
var timeEl = document.querySelector("#temp")
var createPEl = document.createElement("h3");
createPEl.setAttribute("style", "font-size:15px")

correctAnswers = 0;
//console.log(startEl)
startEl.addEventListener("click", function() {
    startEl.classList.add('hide');
    ansEls.classList.remove('hide');
    timeEl.classList.remove("hide")
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
     window.alert('you have reached the end of the quiz!, your score is' + "  " + (correctAnswers * 25) + '!')
 }
 })
 var timerEl = document.getElementById('timer');
 function timer() {
    var timeLeft = 50;
    // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
    var timeInterval = setInterval(function () {
      // As long as the `timeLeft` is greater than 1
      if (timeLeft > 1) {
        // Set the `textContent` of `timerEl` to show the remaining seconds
        timerEl.textContent = timeLeft + ' seconds remaining';
        // Decrement `timeLeft` by 1
        timeLeft--;
      } else if (timeLeft === 1) {
        // When `timeLeft` is equal to 1, rename to 'second' instead of 'seconds'
        timerEl.textContent = timeLeft + ' second remaining';
        timeLeft--;
      } else {
        // Once `timeLeft` gets to 0, set `timerEl` to an empty string
        timerEl.textContent = '';
        // Use `clearInterval()` to stop the timer
        clearInterval(timeInterval);
        // Call the `displayMessage()` function
        displayMessage();
      }
    }, 1000);
  }

var questions = [
    {
        question:'question 1', 
        answers: ['answer 1','answer 2','answer 3','answer 4' ],
     correct: 'answer 1'
    },
    {
        question:'question 2', 
        answers: ['answer 11','answer 22','answer 3','answer 4' ],
     correct: 'answer 11'
    },
    {
        question:'question 3', 
        answers: ['answer 12','answer 22','answer 3','answer 4' ],
     correct: 'answer 12'
    },
]
