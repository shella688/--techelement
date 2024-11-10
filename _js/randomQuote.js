console.log("randomQuote script running")

function randomQuote() {
    console.log("randomQuote function running")
    // 2D array of quptes and authors
    let quoteArray = [
      ["Ladles and jellyspoons, skinny and stout<br>I'll tell you a tale I know nothing about<br>Admission is free, so pay at the door<br>Pull up a seat, and sit on the floor",
       "Unknown"],
       ["Any sufficiently advanced technology is compatible with magic",
       "Doctor Who: Seeing I <br>by Jonathan Blum and Kate Orman"],
       ["If you choose to believe me, good.",
        "Invisible Cities <br>by Italo Calvino"],
        ["This is how it all works in spirals",
       "Doctor Who: The Blue Angel <br>by Paul Magrs and Jeremy Hoad"],
       ["And we danced, on the brink of an unknown future, to an echo from a vanished past",
        "The Day of the Triffids <br>by John Wyndham"],
        ["And if I didn't exist, you'd have to invent me",
       "Doctor Who: Lungbarrow <br>by Marc Platt"]
    ];

    let i = Math.floor(Math.random() * quoteArray.length);

    let chosenQuote = quoteArray[i][0];
    let quoteAuthor = quoteArray[i][1];

    console.log(chosenQuote + " " + quoteAuthor)

    document.getElementById("quote").innerHTML = chosenQuote;
    document.getElementById("quoteAuthor").innerHTML = quoteAuthor;
}

window.onload(randomQuote())
