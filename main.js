class navbar extends HTMLElement {
    connectedCallback(){
        this.innerHTML = `
        <header>
            <nav class='navbar'>
                <ul>
                    <li><a href="/index.html">HOME</a></li>
                    <li><a href="../pages/code.html">CODE</a></li>
                    <li><a href="../pages/artwork.html">ARTWORK</a></li>
                    <li><a href="../pages/resume.html">RESUME</a></li>
                    <li><a href="../pages/contact.html">CONTACT</a></li>
                </ul>
            </nav>
        </header>
        `
    }
}

customElements.define('my-navbar', navbar)


class footer extends HTMLElement {
    connectedCallback(){
        this.innerHTML = `
        <div class = 'footer-container'>
            <div class='footer'>
                <div class="icons-container">
                    <a href='https://www.linkedin.com/in/jenny-baek-b82028247/'>
                        <i style = "color:white;" class='bi-linkedin'></i>
                    </a>
                    <a href='https://github.com/jen-baek'>
                        <i style = "color:white;" class='bi-github'></i>
                    </a>
                    <a href='mailto:jenny.baek02@gmail.com'>
                        <i style = "color:white;" class='bi-envelope'></i>
                    </a>
                </div>
                <p class="footer-text">
                © 2024 Jen Baek<br>
                Made with GitHub Pages
                </p>
            </div>
        </div>
        `
    }
}

customElements.define('my-footer', footer)