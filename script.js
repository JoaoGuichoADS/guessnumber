var msg1 = document.getElementById("message1");
var msg2 = document.getElementById("message2");
var msg3 = document.getElementById("message3");

var answer = Math.floor(Math.random()*100) + 1;
var no_of_guesses = 0;
var guessed_nums = [];

function play(){
    var user_guess = document.getElementById("guess").value;
    if(user_guess < 1 || user_guess > 100){
        alert("Please enter a number between 1 and 100.");
    }
    else{
        guessed_nums.push(user_guess);
        no_of_guesses+= 1;

        if(user_guess < answer){
            msg1.textContent = "Muito Baixo.";
            msg2.textContent = "No. tentativas: " + no_of_guesses;
            msg3.textContent = "Os números adivinhados são: " +
            guessed_nums;
        }
        else if(user_guess > answer){
            msg1.textContent = "Muito Alto.";
            msg2.textContent = "No. tentativas: " + no_of_guesses;
            msg3.textContent = "Os números adivinhados são: " +
            guessed_nums;
        }
        else if(user_guess == answer){
            msg1.textContent = "Parabéns, você ganhou!!";
            msg2.textContent = "O número era: " + answer;
            msg3.textContent = "Você adivinhou com "+ no_of_guesses + " tentativas";
            document.getElementById("my_btn").disabled = true;
        }
    }
}