var startTime, tOut, totTime, num1, num2=null;

function init() {
    startTime = new Date();

    num1 =  Math.random();
    num2 = Math.random();
    document.getElementById("equation").innerHTML = num1 + " * " + num2 + " = "

}

function trackTime() {

    var clickTime = new Date();
    totTime = clickTime - startTime;

    submitForm();
}

function submitForm() {
    var actualAns = num1*num2;
    var userAns = document.getElementById("ans").value;

    if (userAns == actualAns && totTime < 1000) {
        alert("Correct! Close this popup for your reward");
        window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
    } else if (userAns == actualAns && totTime > 1000) {
        alert("Too slow!");
    } else {
        alert("You answered: " + userAns + "\nCorrect answer: " + actualAns);
        
    }


    // document.getElementById("timeTaken").innerHTML = "You clicked the button " + (totTime/1000) +"s after the page had loaded";
    console.log("You clicked the button " + (totTime/1000) +"s after the page had loaded")
}

