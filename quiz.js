const choice1 = document.querySelector('#choice1');
const choice2 = document.querySelector('#choice2');
const choice3 = document.querySelector('#choice3');
const feedback = document.getElementById("feedback");
const choice = document.querySelector("quiz");
const userAnswer = document.querySelector('input').value.checked;
console.log(userAnswer);

const button = document.getElementById('submit-answer').addEventListener("click", checkAnswer)

function checkAnswer(){
    let correctAnswer = "4";
    if(userAnswer===correctAnswer){
        feedback.textContent = "Correct! Well done."
    }


    else{
        feedback.textContent = "That's incorrect. Try again!"
    }

}