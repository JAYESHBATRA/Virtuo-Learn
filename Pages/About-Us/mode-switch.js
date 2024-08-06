document.addEventListener('DOMContentLoaded', () => {
    const switchCheckbox = document.getElementById('switch');
    const currentTheme = localStorage.getItem('theme');

    function applyDarkModeStyles() {
        document.body.classList.remove('light-mode');
        document.body.classList.add('dark-mode');
        document.body.style.backgroundColor = "#111111";

        const nav = document.querySelector("nav");
        if (nav) {
            nav.style.backgroundColor = "#38373743";
            nav.style.backdropFilter = "blur(100px)";
        }

        const footer = document.querySelector("footer");
        if (footer) {
            footer.style.backgroundColor = "#242525";
        }

        const textElements = document.querySelectorAll(".text-primary_text_color, .text-secondary_text_color");
        textElements.forEach(element => {
            element.style.color = "#ffffff";
        });

        const currentPage = document.querySelector(".current-page");
        if (currentPage) {
            currentPage.style.color = "#ffffff";
            currentPage.style.borderColor = "#6fa8dc";
        }

        const container = document.querySelector(".container1");
        if (container) {
            const textElements = container.querySelectorAll(".text-primary_text_color, .text-secondary_text_color");
            textElements.forEach(element => {
                element.style.color = "#111111"; // Change to your desired text color
            });
        }

        const companyLogo = document.querySelector(".company-logo img");
        if (companyLogo) {
            companyLogo.style = "-webkit-filter: invert(100%);";
            companyLogo.src = "./assets/asset 45.png";
        }

        const footerLogo = document.querySelector("footer .company-logo img");
        if (footerLogo) {
            footerLogo.style = "-webkit-filter: invert(100%);";
            footerLogo.src = "./assets/asset 45.png";
        }
    }

    function applyLightModeStyles() {
        document.body.classList.remove('dark-mode');
        document.body.classList.add('light-mode');
        document.body.style.backgroundColor = "#ffffff";

        const nav = document.querySelector("nav");
        if (nav) {
            nav.style.backgroundColor = "#ffffff";
        }

        const footer = document.querySelector("footer");
        if (footer) {
            footer.style.backgroundColor = "#ebf2fa";
        }

        const textElements = document.querySelectorAll(".text-primary_text_color, .text-secondary_text_color");
        textElements.forEach(element => {
            element.style.color = "#183b56";
        });

        const currentPage = document.querySelector(".current-page");
        if (currentPage) {
            currentPage.style.color = "#4d006b";
            currentPage.style.borderColor = "rgb(0, 30, 94)";
        }

        const companyLogo = document.querySelector(".company-logo img");
        if (companyLogo) {
            companyLogo.style = "fill: black;";
            companyLogo.src = "./assets/asset 41.png";
        }
    }

    if (currentTheme) {
        if (currentTheme === 'dark-mode') {
            applyDarkModeStyles();
            switchCheckbox.checked = true;
        } else {
            applyLightModeStyles();
        }
    }

    switchCheckbox.addEventListener('change', () => {
        if (switchCheckbox.checked) {
            applyDarkModeStyles();
            localStorage.setItem('theme', 'dark-mode');
        } else {
            applyLightModeStyles();
            localStorage.setItem('theme', 'light-mode');
        }
    });

});
