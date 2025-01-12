document.addEventListener("DOMContentLoaded", function () {
    var lazyloadElements = document.querySelectorAll(".lazyload");

    function loadIframe(iframe) {
        iframe.src = iframe.getAttribute("data-src");
        iframe.classList.remove("lazyload");
    }

    if ("IntersectionObserver" in window) {
        var observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    loadIframe(entry.target);
                    observer.unobserve(entry.target);
                }
            });
        });

        lazyloadElements.forEach(function (iframe) {
            observer.observe(iframe);
        });
    } else {
        // Fallback for older browsers
        var throttleTimeout;

        function lazyload() {
            if (throttleTimeout) {
                clearTimeout(throttleTimeout);
            }

            throttleTimeout = setTimeout(function () {
                var scrollTop = window.pageYOffset;
                lazyloadElements.forEach(function (iframe) {
                    if (iframe.offsetTop < window.innerHeight + scrollTop) {
                        loadIframe(iframe);
                    }
                });
                if (lazyloadElements.length === 0) {
                    removeListeners();
                }
            }, 200);
        }

        function removeListeners() {
            document.removeEventListener("scroll", lazyload);
            window.removeEventListener("resize", lazyload);
            window.removeEventListener("orientationChange", lazyload);
        }

        document.addEventListener("scroll", lazyload);
        window.addEventListener("resize", lazyload);
        window.addEventListener("orientationChange", lazyload);
    }
});
