class Footer extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <footer role="footer">

            <!-- logo -->

            <h1>
            <a href="index.html" title="AgrMayank"><img style="width: 50%; min-width: 72px"
                src="images/AgrMayank Logo V01T.png" title="AgrMayank Logo" alt="AgrMayank Logo" /></a>
            </h1>

            <!-- logo -->

            <!-- nav -->

            <nav role="footer-nav">
            <ul>
                <li class="nav-active">
                    <a href="index.html" title="Home" style="font-size: larger"><i class="fa fa-home" aria-hidden="true"></i>
                        <b>Home</b>
                    </a>
                </li>
                <li>
                    <a href="work.html" title="Work Experience" style="font-size: larger"><i class="fa fa-briefcase"
                        aria-hidden="true"></i>
                        <b>Work Experience</b>
                    </a>
                </li>
                <li>
                    <a href="cv/Resume - Mayank Raj.pdf" title="Resume" target="_blank" style="font-size: larger">
                        <i class="fa fa-download" aria-hidden="true"></i>
                        <b>Resume</b>
                    </a>
                </li>
            </ul>
            <br />
            <ul>
                <li>
                    <a href="blog.html" title="Blog" style="font-size: larger"><i class="fa fa-newspaper-o"
                        aria-hidden="true"></i>
                        <b>Blog</b>
                    </a>
                </li>
                <li>
                    <a href="projects.html" title="Projects" style="font-size: larger"><i class="fa fa-git"
                        aria-hidden="true"></i>
                        <b>Open Source</b>
                    </a>
                </li>
            </ul>
            </nav>

            <!-- nav -->

            <ul role="social-icons">
            <li>
                <a href="mailto:hello@agrmayank.com?subject=[what-do-you-want-to-talk-about]&body=Hi, My name is [name] and I am reaching out about [matter]"
                target="_blank"><i class="fa fa-envelope"></i></a>
            </li>
            <li>
                <a href="https://linkedin.com/in/AgrMayank/" target="_blank"><i class="fa fa-linkedin"></i></a>
            </li>
            <li>
                <a href="https://github.com/AgrMayank" target="_blank"><i class="fa fa-github"></i></a>
            </li>
            <li>
                <a href="https://www.youtube.com/@agrmayank" target="_blank"><i class="fa fa-youtube-play"></i></a>
            </li>
            <li>
                <a href="https://instagram.com/myid.mayank/" target="_blank"><i class="fa fa-instagram"></i></a>
            </li>
            <li>
                <a href="https://facebook.com/myid.mayank" target="_blank"><i class="fa fa-facebook"></i></a>
            </li>
            <li>
                <a href="https://twitter.com/myid_mayank" target="_blank"><i class="fa fa-twitter"></i></a>
            </li>
            </ul>

            <p class="copy-right">
            &copy;
            <script>
                document.write(new Date().getFullYear());
            </script>Mayank Raj
            | Theme by Avana LLC.
            </p>
        </footer>
        `;
    }
}

customElements.define('footer-component', Footer);