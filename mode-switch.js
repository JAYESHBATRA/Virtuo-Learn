var icon = document.getElementById("mode-switch-icon");

icon.onclick = function () {
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

  document.body.classList.toggle("dark-mode");
  document.documentElement.style.setProperty("--primary-text-color", "#ffffff");
  document.documentElement.style.setProperty(
    "--secondary-text-color",
    "#ffffff"
  );

  if (document.body.classList.contains("dark-mode")) {
    document.body.style.backgroundColor = "#111111";
    document.documentElement.style.setProperty(
      "--primary-text-color",
      "#ffffff"
    );
    document.documentElement.style.setProperty(
      "--secondary-text-color",
      "#ffffff"
    );
    footer.style.backgroundColor = "#242525";
    tables.forEach(function (table) {
      table.style.backgroundColor = "#242426";
    });
    linksTitle.forEach(function (link) {
      link.style.color = "#ffffff";
    });
    copyright.style.backgroundColor = "#232325";
    copyrightH3.style.color = "#ffffff";
    companyLogo.src = "./assets/asset 45.png"; // change to asset 45 in dark mode
    footerLogo.src = "./assets/asset 45.png"; // change to asset 45 in dark mode
    currentPage.style.color = "#cfe2f3"; // change to #fffee0 in dark mode
    currentPage.style.borderColor = "#6fa8dc"; // change to #9fc5e8 in dark mode
    icon.src = "./assets/asset 44.png"; // change to asset 44 in dark mode
    automaticChangeDiv.style.color = "#cfe2f3"; // change to #cfe2f3 in dark mode
    automaticChangeDiv.style.textShadow = "2px 2px 2px #000000"; // add text shadow in dark mode
    featuresHeadingText.style.color = "#cfe2f3"; // change to #cfe2f3 in dark mode
    featuresHeadingText.style.textShadow = "2px 2px 2px #000000"; // add text shadow in dark mode
    h3Elements.forEach(function (h3) {
      h3.style.color = "#cfe2f3"; // change to #cfe2f3 in dark mode
      h3.style.textShadow = "2px 2px 2px #000000"; // add text shadow in dark mode
    });
    h4Elements.forEach(function (h4) {
      h4.style.color = "#cfe2f3"; // change to #cfe2f3 in dark mode
      h4.style.textShadow = "2px 2px 2px #000000"; // add text shadow in dark mode
    });
    usefulLinks.forEach(function (link) {
      link.style.color = "#cfe2f3"; // change to #cfe2f3 in dark mode
      link.style.textShadow = "2px 2px 2px #000000"; // add text shadow in dark mode
    });
  } else {
    document.body.style.backgroundColor = "#ffffff";
    document.documentElement.style.setProperty(
      "--primary-text-color",
      "#183b56"
    );
    document.documentElement.style.setProperty(
      "--secondary-text-color",
      "#577592"
    );
    footer.style.backgroundColor = "#ebf2fa";
    tables.forEach(function (table) {
      table.style.backgroundColor = "#e9ebff";
    });
    linksTitle.forEach(function (link) {
      link.style.color = "rgb(33, 28, 28)";
    });
    copyright.style.backgroundColor = "#d6d9fd";
    copyrightH3.style.color = "rgb(33, 28, 28)";
    companyLogo.src = "./assets/asset 41.png"; // change back to asset 41 in light mode
    footerLogo.src = "./assets/asset 41.png"; // change back to asset 41 in light mode
    currentPage.style.color = "#4d006b"; // change back to #4d006b in light mode
    currentPage.style.borderColor = "rgb(0, 30, 94)"; // change back to rgb(0, 30, 94) in light mode
    icon.src = "./assets/asset 43.png"; // change back to asset 43 in light mode
    automaticChangeDiv.style.color = ""; // change back to original color in light mode
    automaticChangeDiv.style.textShadow = ""; // remove text shadow in light mode
    featuresHeadingText.style.color = ""; // change back to original color in light mode
    featuresHeadingText.style.textShadow = ""; // remove text shadow in light mode
    h3Elements.forEach(function (h3) {
      h3.style.color = ""; // change back to original color in light mode
      h3.style.textShadow = ""; // remove text shadow in light mode
    });
    h4Elements.forEach(function (h4) {
      h4.style.color = ""; // change back to original color in light mode
      h4.style.textShadow = ""; // remove text shadow in light mode
    });
    usefulLinks.forEach(function (link) {
      link.style.color = ""; // change back to original color in light mode
      link.style.textShadow = ""; // remove text shadow in light mode
    });
  }
};
