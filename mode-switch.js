document.addEventListener('DOMContentLoaded', () => {
  const switchCheckbox = document.getElementById('switch');
  const currentTheme = localStorage.getItem('theme');
  var nav = document.getElementById("main_navbar") 
  var footer = document.querySelector("footer");
  var tables = document.querySelectorAll(".wrapper .table");
  var linksTitle = document.querySelectorAll(".links-title");
  var copyright = document.querySelector(".copyright");
  var copyrightH3 = document.querySelector(".copyright h3");
  var companyLogo = document.querySelector(".company-logo img");
  var footerLogo = document.querySelector(".footer-logo img");
  var currentPage = document.querySelector(".current-page");
  var automaticChangeDiv = document.getElementById("automatic-change");
  var featuresHeadingText = document.querySelector(".features-heading-text");
  var h3Elements = document.querySelectorAll("h3");
  var h4Elements = document.querySelectorAll("h4");
  var usefulLinks = document.querySelectorAll(".useful-links");

  function applyDarkModeStyles() {
    document.body.classList.remove('light-mode');
    document.body.classList.add('dark-mode');
    document.body.style.backgroundColor = "#111111";
    nav.style.backgroundColor = "#38373743";
    nav.style.backdropFilter = "blur(100px)"; 
    companyLogo.style = "-webkit-filter: invert(100%);";
    footer.style.backgroundColor = "#242525";
    tables.forEach(function (table) {
      table.style.backgroundColor = "#242426";
    });
    linksTitle.forEach(function (link) {
      link.style.color = "#ffffff";
    });
    copyright.style.backgroundColor = "#232325";
    copyrightH3.style.color = "#ffffff";
    companyLogo.src = "./assets/asset 45.png";
    footerLogo.src = "./assets/asset 45.png";
    currentPage.style.color = "#cfe2f3";
    currentPage.style.borderColor = "#6fa8dc";
    automaticChangeDiv.style.color = "#cfe2f3";
    automaticChangeDiv.style.textShadow = "2px 2px 2px #000000";
    featuresHeadingText.style.color = "#cfe2f3";
    featuresHeadingText.style.textShadow = "2px 2px 2px #000000";
    h3Elements.forEach(function (h3) {
      h3.style.color = "#cfe2f3";
      h3.style.textShadow = "2px 2px 2px #000000";
    });
    h4Elements.forEach(function (h4) {
      h4.style.color = "#cfe2f3";
      h4.style.textShadow = "2px 2px 2px #000000";
    });
    usefulLinks.forEach(function (link) {
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
    nav.style.backgroundColor = "#ffffff";
    nav.style.backdropFilter = "none";
    companyLogo.style = "fill: black;";
    footer.style.backgroundColor = "#ebf2fa";
    tables.forEach(function (table) {
      table.style.backgroundColor = "#e9ebff";
    });
    linksTitle.forEach(function (link) {
      link.style.color = "rgb(33, 28, 28)";
    });
    copyright.style.backgroundColor = "#d6d9fd";
    copyrightH3.style.color = "rgb(33, 28, 28)";
    companyLogo.src = "./assets/asset 41.png";
    footerLogo.src = "./assets/asset 41.png";
    currentPage.style.color = "#4d006b";
    currentPage.style.borderColor = "rgb(0, 30, 94)";
    automaticChangeDiv.style.color = "";
    automaticChangeDiv.style.textShadow = "";
    featuresHeadingText.style.color = "";
    featuresHeadingText.style.textShadow = "";
    h3Elements.forEach(function (h3) {
      h3.style.color = "";
      h3.style.textShadow = "";
    });
    h4Elements.forEach(function (h4) {
      h4.style.color = "";
      h4.style.textShadow = "";
    });
    usefulLinks.forEach(function (link) {
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
document.addEventListener('DOMContentLoaded', () => {
  const switchCheckbox = document.getElementById('switch');
  const currentTheme = localStorage.getItem('theme');
  var nav = document.getElementById("main_navbar") 
  var footer = document.querySelector("footer");
  var tables = document.querySelectorAll(".wrapper .table");
  var linksTitle = document.querySelectorAll(".links-title");
  var copyright = document.querySelector(".copyright");
  var copyrightH3 = document.querySelector(".copyright h3");
  var companyLogo = document.querySelector(".company-logo img");
  var footerLogo = document.querySelector(".footer-logo img");
  var currentPage = document.querySelector(".current-page");
  var automaticChangeDiv = document.getElementById("automatic-change");
  var featuresHeadingText = document.querySelector(".features-heading-text");
  var h3Elements = document.querySelectorAll("h3");
  var h4Elements = document.querySelectorAll("h4");
  var usefulLinks = document.querySelectorAll(".useful-links");

  function applyDarkModeStyles() {
    document.body.classList.remove('light-mode');
    document.body.classList.add('dark-mode');
    document.body.style.backgroundColor = "#111111";
    nav.style.backgroundColor = "#38373743";
    nav.style.backdropFilter = "blur(100px)"; 
    companyLogo.style = "-webkit-filter: invert(100%);";
    footer.style.backgroundColor = "#242525";
    tables.forEach(function (table) {
      table.style.backgroundColor = "#242426";
    });
    linksTitle.forEach(function (link) {
      link.style.color = "#ffffff";
    });
    copyright.style.backgroundColor = "#232325";
    copyrightH3.style.color = "#ffffff";
    companyLogo.src = "./assets/asset 45.png";
    footerLogo.src = "./assets/asset 45.png";
    currentPage.style.color = "#cfe2f3";
    currentPage.style.borderColor = "#6fa8dc";
    automaticChangeDiv.style.color = "#cfe2f3";
    automaticChangeDiv.style.textShadow = "2px 2px 2px #000000";
    featuresHeadingText.style.color = "#cfe2f3";
    featuresHeadingText.style.textShadow = "2px 2px 2px #000000";
    h3Elements.forEach(function (h3) {
      h3.style.color = "#cfe2f3";
      h3.style.textShadow = "2px 2px 2px #000000";
    });
    h4Elements.forEach(function (h4) {
      h4.style.color = "#cfe2f3";
      h4.style.textShadow = "2px 2px 2px #000000";
    });
    usefulLinks.forEach(function (link) {
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
    nav.style.backgroundColor = "#ffffff";
    nav.style.backdropFilter = "none";
    companyLogo.style = "fill: black;";
    footer.style.backgroundColor = "#ebf2fa";
    tables.forEach(function (table) {
      table.style.backgroundColor = "#e9ebff";
    });
    linksTitle.forEach(function (link) {
      link.style.color = "rgb(33, 28, 28)";
    });
    copyright.style.backgroundColor = "#d6d9fd";
    copyrightH3.style.color = "rgb(33, 28, 28)";
    companyLogo.src = "./assets/asset 41.png";
    footerLogo.src = "./assets/asset 41.png";
    currentPage.style.color = "#4d006b";
    currentPage.style.borderColor = "rgb(0, 30, 94)";
    automaticChangeDiv.style.color = "";
    automaticChangeDiv.style.textShadow = "";
    featuresHeadingText.style.color = "";
    featuresHeadingText.style.textShadow = "";
    h3Elements.forEach(function (h3) {
      h3.style.color = "";
      h3.style.textShadow = "";
    });
    h4Elements.forEach(function (h4) {
      h4.style.color = "";
      h4.style.textShadow = "";
    });
    usefulLinks.forEach(function (link) {
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
