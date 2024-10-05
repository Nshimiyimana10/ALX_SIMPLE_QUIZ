const choice1 = document.querySelector('#choice1');
const choice2 = document.querySelector('#choice2');
const choice3 = document.querySelector('#choice3');
let feedback = document.getElementById("feedback");
const choice = document.getElementsByName("quiz");

const button = document.getElementById('submit-answer').addEventListener("click", checkAnswer)

function checkAnswer(){
    let correctAnswer = "4";
    let userAnswer = choice1.value;
    if(userAnswer ===correctAnswer){
        feedback.textContent = "Correct! Well done."
    }

    else if(choice2.checked && userAnswer ===correctAnswer){
        feedback.textContent = "Correct! Well done."

    }

    else if(choice3.checked && userAnswer ===correctAnswer){
        feedback.textContent = "Correct! Well done."

    }

    else{
        feedback.textContent = "That's incorrect. Try again!"
    }

}