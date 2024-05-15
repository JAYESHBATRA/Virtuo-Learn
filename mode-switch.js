document.addEventListener('DOMContentLoaded', () => {
  const switchCheckbox = document.getElementById('switch');
  const currentTheme = localStorage.getItem('theme');

  function applyDarkModeStyles() {
    document.body.classList.remove('light-mode');
    document.body.classList.add('dark-mode');
    document.body.style.backgroundColor = "#111111";

    const nav = document.getElementById("main_navbar");
    if (nav) {
      nav.style.backgroundColor = "#38373743";
      nav.style.backdropFilter = "blur(100px)";
    }

    const footer = document.querySelector("footer");
    if (footer) {
      footer.style.backgroundColor = "#242525";
    }

    const tables = document.querySelectorAll(".wrapper .table");
    tables.forEach(table => {
      table.style.backgroundColor = "#242426";
    });

    const linksTitle = document.querySelectorAll(".links-title");
    linksTitle.forEach(link => {
      link.style.color = "#ffffff";
    });

    const copyright = document.querySelector(".copyright");
    if (copyright) {
      copyright.style.backgroundColor = "#232325";
    }

    const copyrightH3 = document.querySelector(".copyright h3");
    if (copyrightH3) {
      copyrightH3.style.color = "#ffffff";
    }

    const companyLogo = document.querySelector(".company-logo img");
    if (companyLogo) {
      companyLogo.style = "-webkit-filter: invert(100%);";
      companyLogo.src = "./assets/asset 45.png";
    }

    const footerLogo = document.querySelector(".footer-logo img");
    if (footerLogo) {
      footerLogo.src = "./assets/asset 45.png";
    }

    const currentPage = document.querySelector(".current-page");
    if (currentPage) {
      currentPage.style.color = "#cfe2f3";
      currentPage.style.borderColor = "#6fa8dc";
    }

    const automaticChangeDiv = document.getElementById("automatic-change");
    if (automaticChangeDiv) {
      automaticChangeDiv.style.color = "#cfe2f3";
      automaticChangeDiv.style.textShadow = "2px 2px 2px #000000";
    }

    const featuresHeadingText = document.querySelector(".features-heading-text");
    if (featuresHeadingText) {
      featuresHeadingText.style.color = "#cfe2f3";
      featuresHeadingText.style.textShadow = "2px 2px 2px #000000";
    }

    const h3Elements = document.querySelectorAll("h3");
    h3Elements.forEach(h3 => {
      h3.style.color = "#cfe2f3";
      h3.style.textShadow = "2px 2px 2px #000000";
    });

    const h4Elements = document.querySelectorAll("h4");
    h4Elements.forEach(h4 => {
      h4.style.color = "#cfe2f3";
      h4.style.textShadow = "2px 2px 2px #000000";
    });

    const usefulLinks = document.querySelectorAll(".useful-links");
    usefulLinks.forEach(link => {
      link.style.color = "#cfe2f3";
      link.style.textShadow = "2px 2px 2px #000000";
    });

    document.documentElement.style.setProperty("--primary-text-color", "#ffffff");
    document.documentElement.style.setProperty("--secondary-text-color", "#ffffff");
  }

  function applyLightModeStyles() {
    document.body.classList.remove('dark-mode');
    document.body.classList.add('light-mode');
    document.body.style.backgroundColor = "#ffffff";

    const nav = document.getElementById("main_navbar");
    if (nav) {
      nav.style.backgroundColor = "#ffffff";
      nav.style.backdropFilter = "none";
    }

    const footer = document.querySelector("footer");
    if (footer) {
      footer.style.backgroundColor = "#ebf2fa";
    }

    const tables = document.querySelectorAll(".wrapper .table");
    tables.forEach(table => {
      table.style.backgroundColor = "#e9ebff";
    });

    const linksTitle = document.querySelectorAll(".links-title");
    linksTitle.forEach(link => {
      link.style.color = "rgb(33, 28, 28)";
    });

    const copyright = document.querySelector(".copyright");
    if (copyright) {
      copyright.style.backgroundColor = "#d6d9fd";
    }

    const copyrightH3 = document.querySelector(".copyright h3");
    if (copyrightH3) {
      copyrightH3.style.color = "rgb(33, 28, 28)";
    }

    const companyLogo = document.querySelector(".company-logo img");
    if (companyLogo) {
      companyLogo.style = "fill: black;";
      companyLogo.src = "./assets/asset 41.png";
    }

    const footerLogo = document.querySelector(".footer-logo img");
    if (footerLogo) {
      footerLogo.src = "./assets/asset 41.png";
    }

    const currentPage = document.querySelector(".current-page");
    if (currentPage) {
      currentPage.style.color = "#4d006b";
      currentPage.style.borderColor = "rgb(0, 30, 94)";
    }

    const automaticChangeDiv = document.getElementById("automatic-change");
    if (automaticChangeDiv) {
      automaticChangeDiv.style.color = "";
      automaticChangeDiv.style.textShadow = "";
    }

    const featuresHeadingText = document.querySelector(".features-heading-text");
    if (featuresHeadingText) {
      featuresHeadingText.style.color = "";
      featuresHeadingText.style.textShadow = "";
    }

    const h3Elements = document.querySelectorAll("h3");
    h3Elements.forEach(h3 => {
      h3.style.color = "";
      h3.style.textShadow = "";
    });

    const h4Elements = document.querySelectorAll("h4");
    h4Elements.forEach(h4 => {
      h4.style.color = "";
      h4.style.textShadow = "";
    });

    const usefulLinks = document.querySelectorAll(".useful-links");
    usefulLinks.forEach(link => {
      link.style.color = "";
      link.style.textShadow = "";
    });

    document.documentElement.style.setProperty("--primary-text-color", "#183b56");
    document.documentElement.style.setProperty("--secondary-text-color", "#577592");
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
