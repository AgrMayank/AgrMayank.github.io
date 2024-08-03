class NavBar extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <footer role="footer" style="padding-top: 0;">

                <!-- nav -->

                <nav role="footer-nav" style="padding-bottom: 0%;">
                <ul>
                    <li>
                    <a href="work.html" title="Work Experience" style="font-size: larger"><i class="fa fa-briefcase" aria-hidden="true"></i>
                        <b> Work Experience</b>
                    </a>
                    </li>
                    <li>
                    <a href="cv/Resume - Mayank Raj.pdf" title="Resume" target="_blank" style="font-size: larger">
                        <i class="fa fa-download" aria-hidden="true"></i>
                        <b> Resume</b>
                    </a>
                    </li>
                    <li>
                    <a href="blog.html" title="Publications" style="font-size: larger"><i class="fa fa-newspaper-o"
                        aria-hidden="true"></i>
                        <b> Publications</b>
                    </a>
                    </li>
                    <li>
                    <a href="projects.html" title="Projects" style="font-size: larger"><i class="fa fa-git"
                        aria-hidden="true"></i>
                        <b> Open Source</b>
                    </a>
                    </li>
                </ul>
                </nav>

                <!-- nav -->

            </footer>
        `;
    }
}

customElements.define('navbar-component', NavBar);