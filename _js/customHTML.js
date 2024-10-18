const backNavTemplate = document.createElement('template');

backNavTemplate.innerHTML = `
<style>
@import "../_css/back-style.css";
</style>

<div class="sidenav">
            <a href="../index.html"><- Back to main site</a>
            <a href="index.html">What?</a>
            <a href="sickbeats.html">Sick Beats</a>
            <a href="game.html">Games Corner</a>
            <a href="reverse-captcha.html">Reverse Bear CAPTCHA</a>
            <a href="butterfly.html">Butterfly Room</a>
</div>
`

class BackNavbar extends HTMLElement {
    constructor() {
        super(); 
        
    }

    connectedCallback() {
        const shadowRootNav = this.attachShadow({mode: 'open'});
        shadowRootNav.appendChild(backNavTemplate.content);
    }
}


customElements.define('back-navbar', BackNavbar);