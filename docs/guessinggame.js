let maxnum = prompt("Please enter a maximum number for the game:");

while (!(maxnum > 0)) {
    if (isNaN(maxnum)) {
        alert("That number is not a number!");
        maxnum = prompt("Please enter a maximum number for the game:");
    } else {
        alert("That number is not in range, try again.");
        maxnum = prompt("Please enter a maximum number for the game:");
    }
}

let validMaxNum = Math.ceil(maxnum);

let div = document.querySelector(".container");
let oldNode = document.querySelector(".change");
let newNode = document.createElement("p");
newNode.innerHTML = "Guess a number between 1 and " + validMaxNum;
div.replaceChild(newNode, oldNode);

let num = Math.floor(Math.random() * validMaxNum) + 1;

console.log(num);

let history = [];

function do_guess() {

    let guess = Number(document.getElementById("guess").value);

    let message = document.getElementById("gMessage");

    if (isNaN(guess)) {
        message.innerHTML = "Error: That is not a number! Your last guess was " + guess + ".";
    } else if (guess < 1 || guess > validMaxNum) {
        message.innerHTML = "Error: That number is not in range, try again. Your last guess was " + guess + ".";
    } else if (history.includes(" " + guess)) {
        message.innerHTML = "That number was already guessed. Please try again. Your last guess was " + guess + ".";
    } else if (guess == num) {
        history.push(" " + guess);
        message.innerHTML = "You got it! It took you " + history.length + " tries and your guesses were" + history.toString();
    }
    else if (guess > num) {
        message.innerHTML = "No, try a lower number. Your last guess was " + guess + ".";
        history.push(" " + guess);
        console.log(history);
    }
    else {
        message.innerHTML = "No, try a higher number. Your last guess was " + guess + ".";
        history.push(" " + guess);
        console.log(history);
    }
}
