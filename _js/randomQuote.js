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
       "Doctor Who: Lungbarrow <br>by Marc Platt"],
      ["The city's a heart, I said, and in that a heart and a city were sutured into a third thing, a heartish city, and cities are heart-stained, and hearts are city-stained too.",
       "Embassytown <br>by China Miéville"],
      ["Just look, look at all the people just going about the business of being alive and surviving being human. Look at them all! Look at them acting normal, like it is normal to live, and be alive on an ordinary Saturday morning.",
       "Mrs Death Misses Death <br>by Salena Godden"],
      ["Where lies the strangling fruit that came from the hand of the sinner I shall bring forth the seeds of the dead to share with the worms that gather in the darkness and surround the world with the power of their lives while from the dimlit halls of other places forms that never were and never could be writhe for the impatience of the few who never saw what could have been.",
       "Annihilation <br>by Jeff VanderMeer"],
      ["There, then, he sat, holding up that imbecile candle in the heart of that almighty forlornness. There, then, he sat, the sign and symbol of a man without faith, hopelessly holding up hope in the midst of despair.",
       "Moby Dick: Or, the Whale <br>by Herman Melville"],
      ["And how magical this was, this feeling of seeing the things you read about were real, this having things you'd only taken on trust appear to you so solidly, as proof of themselves, confirmed as true in front of your own eyes.",
       "Escape Routes <br>by Naomi Ishiguro"],
      ["HUMANS NEED FANTASY TO BE HUMAN. TO BE THE PLACE WHERE THE FALLING ANGEL MEETS THE RISING APE.",
       "Hogfather <br>by Terry Pratchett"],
      ["It's very hard to talk quantum using a language originally designed to tell other monkeys where the ripe fruit is.",
       "Night Watch <br>by Terry Pratchett"],
      ["And the new day was a great big fish.",
       "Monstrous Regiment <br>by Terry Pratchett"],
      ["But in the end, joy cannot fend off evil.<br>Joy can only remind you why you fight,",
       "Dead Astronauts <br>by Jeff VanderMeer"],
      ["But, if it is true that the act of observing changes the thing which is observed, it's even more true that it changes the observer.",
       "Soul Music <br>by Terry Pratchett"],
      ["I hope that it mattered, having someone beside you in the dark.",
       "I am in Eskew <br>episode 30: The Boy Who Saw Cracks in the World"],
      ["This is all you have, but it's still something. Streets and sodium lights. The sky, the world. You're still alive.",
       "Disco Elysium"],
      ["We walk on, with a rough and tarnished hope, and a tangled, ruined love. We hope that against all odds, we will find more than just another lonely ending in the darkness. We hope that those who come after us will make it further than we could.",
       "The Silt Verses <br>Chapter 45: Of Love, and Gods' Defeat (part two)"],
      ["Didn't anybody ever tell you? Other people are all there is!",
       "Wooden Overcoats <br>s4 e10: A Funn Farewell"],
      ["Do the stars feel heavier now?",
       "Writing Prompt <br>by Michael Torres"],
      ["And remember, 'Patience, Patience' is the watchword of a sage<br>Not to-day nor yet to-morrow can complete a perfect age.",
       "The Old Astronomer to his Pupil <br>by Sarah Williams"], 
      ["later beneath the blueness of the trees the future falls out of place: something always happens: draw nearer my dear: never fear: the world spins nightly toward its brightness and we are on it",
       "Crescent <br>by C.D. Wright"],
      ["'Twas brillig, and the slithy toves<br>\tDid gyre and gimble in the wabe:<br>All mimsy were the borogoves,<br>\tAnd the mome raths outgrabe.",
       "Jabberwocky <br>by C.S. Lewis"],
      ["Don't you ever feel<br>like you're just<br>a story someone is telling<br>about someone like you?",
       "What the Dragon Said: A Love Story <br>by Cathrynne M. Valente"],
      ["Think about me when you're living your life one day after another, all in a neat pattern. Think about the homeless traveler and his old police box, with his days like crazy paving.",
       "Doctor Who <br>season 24, Dragonfire"],
      ["There are worlds out there where the sky is burning, and the sea's asleep, and the rivers dream; people made of smoke and cities made of song. Somewhere there's danger, somewhere there's injustice, and somewhere else the tea's getting cold. <br>Come on, Ace. We've got work to do!",
       "Doctor Who <br>season 26, Survival"],
      ["I may talk like a fool, but I always know what I'm talking like a fool about.",
       "Doctor Who: Caedroia <br>by Lloyd Rose"],
      ["Outside, in the passageway, was the unsafe fascination of love, the liquid reality of a future where people did stupid things because the rules changed all the time and you had to feel your way through life.",
       "Doctor Who: The Turing Test <br>by Paul Leonard"],
      ["Come to me, said the world.<br>This is not to say<br>it spoke in exact sentences<br>but that I perceived beauty in this manner.",
       "October <br>by Louise Glück"],
      ["All this happened, more or less.",
       "Slaughterhouse-Five <br>by Kurt Vonnegut"],
      ["We all just want to be people, and none of us know what that really means.",
       "Borne <br>by Jeff VanderMeer"]
    ];

    let i = Math.floor(Math.random() * quoteArray.length);

    let chosenQuote = quoteArray[i][0];
    let quoteAuthor = quoteArray[i][1];

    console.log(chosenQuote + " " + quoteAuthor)

    document.getElementById("quote").innerHTML = chosenQuote;
    document.getElementById("quoteAuthor").innerHTML = quoteAuthor;
}

window.onload(randomQuote())
