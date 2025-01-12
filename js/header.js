class Header extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <header role="header">
                <div class="container">
                    <!-- logo -->

                    <h1>
                        <a href="index.html" title="AgrMayank"><img style="width: 50%; min-width: 96px"
                            src="images/AgrMayank Logo V01T.png" title="AgrMayank Logo" alt="AgrMayank Logo" />
                        </a>
                    </h1>

                    <!-- logo -->

                    <!-- nav -->

                    <nav role="header-nav" class="navy">
                        <ul>
                        <!--<li class="nav-active">
                            <a href="index.html" title="Home"><i class="fa fa-home" aria-hidden="true"></i> Home</a>
                        </li>-->
                        <li>
                            <a href="work.html" title="Work Experience"><i class="fa fa-briefcase" aria-hidden="true"></i> Work Experience</a>
                        </li>
                        <li>
                            <a href="blog.html" title="Blog"><i class="fa fa-newspaper-o" aria-hidden="true"></i> Blog (Articles)</a>
                        </li>
                        <li>
                            <a href="projects.html" title="Projects"><i class="fa fa-git" aria-hidden="true"></i> Open Source Projects</a>
                        </li>
                        <hr style="border: 2px dashed;" />
                        <li>
                            <a href="cv/Resume - Mayank Raj.pdf" title="Resume" target="_blank">
                            <i class="fa fa-download" aria-hidden="true"></i> Download Resume (CV)
                            </a>
                        </li>
                        </ul>
                    </nav>

                    <!-- nav -->
                </div>
            </header>
        `;
    }
}

customElements.define('header-component', Header);