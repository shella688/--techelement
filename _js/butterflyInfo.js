function showInfoBox(butterfly) {
    document.getElementById("infobox").style.display = "block";
    console.log("Shown!");

    var commonName = document.getElementById("name");
    var scienceName = document.getElementById("species");
    var gifSource = document.getElementById("gifSource")
    var info = document.getElementById("info");

    if (butterfly=="peacock") {
        commonName.innerHTML = "Peacock";
        scienceName.innerHTML = "Aglais io"
        gifSource.href = "https://www.3danimatedgifs.com/3d-butterfly-animations"
        info.innerHTML = "The peacock butterfly, or the \
        European peacock, is my favourite butterfly! It lays its \
        eggs on nettles and that's about all I can tell you \
        without reading the Wikipedia article for it first." + "<br><br>" + " \
        It's a common butterfly, found across Europe and \
        temperate Asia."
    } else if (butterfly=="monarch") {
        commonName.innerHTML = "Monarch";
        scienceName.innerHTML = "Danaus plexippus";
        gifSource.href = "https://www.butterflypictures.net/animated-butterfly.html"
        info.innerHTML = "I've never seen a monarch butterfly in real \
        life, due to them being native to North America. One time \
        some monarch butterflies were raised from pupae onboard the ISS."
    } else if (butterfly=="smallWhite") {
        commonName.innerHTML = "Cabbage white";
        scienceName.innerHTML = "Pieris rapae";
        gifSource.href = "https://images.squarespace-cdn.com/content/v1/64a596451c0331183c83ca7f/e9458939-03f9-4db8-ba68-84827e7e72df/large+white+butterfly.png";
        info.innerHTML = "This isn't a gif, because few gif creators \
        seem to care for the humble cabbage white. Technically, \
        this is the small white, not to be confused with the \
        large white (Pieris brassicae)." + "<br><br>" + "It is \
        found across Europe and Asia, and got \
        accidently introduced to North Africa, North America, and Australia."
    } else if (butterfly=="redAdmiral") {
        commonName.innerHTML = "Red admiral";
        scienceName.innerHTML = "Vanessa atalanta";
        gifSource.href = "https://davidbentleyhart.substack.com/p/on-butterflies-and-being";
        info.innerHTML = "Red admirals always surprise me with how big \
        they are. They might not even be that large, I don't \
        exactly go around measuring butterflies, but they \
        do let you get quite close before flying off." + "<a style='color: aliceblue;' href='https://www.youtube.com/watch?v=MMiKyfd6hA0'> \
        Are they large, or close up?</a>" + "<br><br>" +
        "They form part of the trifecta of butterflies which aren't \
        <em>that</em> similar, but I do get mixed up, alongside \
        painted ladies and tortoiseshells."
    }

}

function hideInfoBox() {
    document.getElementById("infobox").style.display = "none";
    console.log("Hidden!");
}