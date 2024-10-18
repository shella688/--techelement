function getPreviousTheme() {
    var theme = document.getElementById("theme");
    var url = window.location.pathname;

    var cssLink = ""
    if (url.includes("/blog")) {
        cssLink = "../" + cssLink;
    }
    if (url.includes("posts/")) {
        cssLink = "../" + cssLink;
    }

    var prevTheme = localStorage.getItem('theme');


    if (prevTheme == "magic") {
        theme.setAttribute("href", cssLink+"_css/magic.css");
        if(document.getElementById("skylanders-element") != null) {
            document.getElementById("skylanders-element").innerHTML = "Skylanders of the Magic element are stronger in this zone";
        }
    } else if (prevTheme == "tech") {
        // turn off dark mode
        theme.setAttribute("href", cssLink+"_css/tech.css");
        if(document.getElementById("skylanders-element") != null) {
            document.getElementById("skylanders-element").innerHTML = "Skylanders of the Tech element are stronger in this zone";
        }
    } else if (prevTheme == "life") {
        theme.setAttribute("href", cssLink+"_css/life.css");
        if(document.getElementById("skylanders-element") != null) {
            document.getElementById("skylanders-element").innerHTML = "Skylanders of the Life element are stronger in this zone";
        }
    } else if (prevTheme == "undead") {
        theme.setAttribute("href", cssLink+"_css/undead.css");
        if(document.getElementById("skylanders-element") != null) {
            document.getElementById("skylanders-element").innerHTML = "Skylanders of the Undead element are stronger in this zone";
        }
    } else if (prevTheme == "fire") {
        theme.setAttribute("href", cssLink+"_css/fire.css");
        if(document.getElementById("skylanders-element") != null) {
            document.getElementById("skylanders-element").innerHTML = "Skylanders of the Fire element are stronger in this zone";
        }
    } else if (prevTheme == "water") {
        theme.setAttribute("href", cssLink+"_css/water.css");
        if(document.getElementById("skylanders-element") != null) {
            document.getElementById("skylanders-element").innerHTML = "Skylanders of the Water element are stronger in this zone";
        }
    } else if (prevTheme == "air") {
        theme.setAttribute("href", cssLink+"_css/air.css");
        if(document.getElementById("skylanders-element") != null) {
            document.getElementById("skylanders-element").innerHTML = "Skylanders of the Air element are stronger in this zone";
        }
    } else if (prevTheme == "earth") {
        theme.setAttribute("href", cssLink+"_css/earth.css");
        if(document.getElementById("skylanders-element") != null) {
            document.getElementById("skylanders-element").innerHTML = "Skylanders of the Earth element are stronger in this zone";
        }
    } else if (prevTheme == "light") {
        theme.setAttribute("href", cssLink+"_css/light.css");
        if(document.getElementById("skylanders-element") != null) {
            document.getElementById("skylanders-element").innerHTML = "Skylanders of the Light element are stronger in this zone";
        }
    } else if (prevTheme == "dark") {
        theme.setAttribute("href", cssLink+"_css/dark.css");
        if(document.getElementById("skylanders-element") != null) {
            document.getElementById("skylanders-element").innerHTML = "Skylanders of the Dark element are stronger in this zone";
        }
    }
}


document.getElementById("themeDropdown").addEventListener("onclick", function(){changeTheme()});



function changeTheme() {
    var theme = document.getElementById("theme");
    var url = window.location.pathname;

    var cssLink = ""
    if (url.includes("/blog")) {
        cssLink = "../" + cssLink;
    }
    if (url.includes("posts/")) {
        cssLink = "../" + cssLink;
    }

    var chosenTheme = document.getElementById("themeDropdown").themeSelected[themeDropdown.themeSelected.selectedIndex].text;
    console.log(chosenTheme + " is clicked word");

    if (chosenTheme == "Magic") {
        theme.setAttribute("href", cssLink+"_css/magic.css");
        localStorage.setItem('theme', 'magic');

        if(document.getElementById("skylanders-element") != null) {
            document.getElementById("skylanders-element").innerHTML = "Skylanders of the Magic element are stronger in this zone";
        }
    } else if (chosenTheme == "Tech" ) {
        theme.setAttribute("href", cssLink+"_css/tech.css");
        localStorage.setItem('theme', 'tech');

        if(document.getElementById("skylanders-element") != null) {
            document.getElementById("skylanders-element").innerHTML = "Skylanders of the Tech element are stronger in this zone";
        }
    } else if (chosenTheme == "Life") {
        theme.setAttribute("href", cssLink+"_css/life.css");
        localStorage.setItem('theme', 'life');

        if(document.getElementById("skylanders-element") != null) {
            document.getElementById("skylanders-element").innerHTML = "Skylanders of the Life element are stronger in this zone";
        }
    } else if (chosenTheme == "Undead") {
        theme.setAttribute("href", cssLink+"_css/undead.css");
        localStorage.setItem('theme', 'undead');

        if(document.getElementById("skylanders-element") != null) {
            document.getElementById("skylanders-element").innerHTML = "Skylanders of the Undead element are stronger in this zone";
        }
    } else if (chosenTheme == "Fire") {
        theme.setAttribute("href", cssLink+"_css/fire.css");
        localStorage.setItem('theme', 'fire');

        if(document.getElementById("skylanders-element") != null) {
            document.getElementById("skylanders-element").innerHTML = "Skylanders of the Fire element are stronger in this zone";
        }
    } else if (chosenTheme == "Water") {
        theme.setAttribute("href", cssLink+"_css/water.css");
        localStorage.setItem('theme', 'water');

        if(document.getElementById("skylanders-element") != null) {
            document.getElementById("skylanders-element").innerHTML = "Skylanders of the Water element are stronger in this zone";
        }
    } else if (chosenTheme == "Air") {
        theme.setAttribute("href", cssLink+"_css/air.css");
        localStorage.setItem('theme', 'air');

        if(document.getElementById("skylanders-element") != null) {
            document.getElementById("skylanders-element").innerHTML = "Skylanders of the Air element are stronger in this zone";
        }
    } else if (chosenTheme == "Earth") {
        theme.setAttribute("href", cssLink+"_css/earth.css");
        localStorage.setItem('theme', 'earth');

        if(document.getElementById("skylanders-element") != null) {
            document.getElementById("skylanders-element").innerHTML = "Skylanders of the Earth element are stronger in this zone";
        }
    } else if (chosenTheme == "Light") {
        theme.setAttribute("href", cssLink+"_css/light.css");
        localStorage.setItem('theme', 'light');

        if(document.getElementById("skylanders-element") != null) {
            document.getElementById("skylanders-element").innerHTML = "Skylanders of the Light element are stronger in this zone";
        }
    } else if (chosenTheme == "Dark") {
        theme.setAttribute("href", cssLink+"_css/dark.css");
        localStorage.setItem('theme', 'dark');

        if(document.getElementById("skylanders-element") != null) {
            document.getElementById("skylanders-element").innerHTML = "Skylanders of the Dark element are stronger in this zone";
        }
    }

}
