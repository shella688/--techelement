function showText(id) {
    var b = document.getElementById(id);

    if (b.style.display == "none") {
        b.style.display = "block";
        console.log("Shown!");
    } else {
        b.style.display = "none";
        console.log("Hidden!");
    }


}