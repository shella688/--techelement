function toggleBlinkie() {
    var div = document.getElementById("blinkies");

    if (div.style.display == "none") {
        div.style.display = "block";
    } else {
        div.style.display = "none";
    }
}