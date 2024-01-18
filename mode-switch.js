var icon = document.getElementById("mode-switch-icon");

icon.onclick = function () {
    var footer = document.querySelector("footer");
    var tables = document.querySelectorAll(".wrapper .table");
    var linksTitle = document.querySelectorAll(".links-title");
    var copyright = document.querySelector(".copyright");
    var copyrightH3 = document.querySelector(".copyright h3");
    var navbarLogo = document.querySelector("navbar img"); // assuming the img is directly under navbar

    document.body.classList.toggle("dark-mode");
    document.documentElement.style.setProperty("--primary-text-color", "#ffffff");
    document.documentElement.style.setProperty("--secondary-text-color", "#ffffff");

    if (document.body.classList.contains("dark-mode")) {
        document.body.style.backgroundColor = "#111111";
        document.documentElement.style.setProperty("--primary-text-color", "#ffffff");
        document.documentElement.style.setProperty("--secondary-text-color", "#ffffff");
        footer.style.backgroundColor = "#242525";
        tables.forEach(function(table) {
            table.style.backgroundColor = "#242426";
        });
        linksTitle.forEach(function(link) {
            link.style.color = "#ffffff";
        });
        copyright.style.backgroundColor = "#232325";
        copyrightH3.style.color = "#ffffff";
        navbarLogo.src = "./assets/asset 45.png";
    } else {
        document.body.style.backgroundColor = "#ffffff";
        document.documentElement.style.setProperty("--primary-text-color", "#183b56");
        document.documentElement.style.setProperty("--secondary-text-color", "#577592");
        footer.style.backgroundColor = "#ebf2fa";
        tables.forEach(function(table) {
            table.style.backgroundColor = "#e9ebff";
        });
        linksTitle.forEach(function(link) {
            link.style.color = "rgb(33, 28, 28)";
        });
        copyright.style.backgroundColor = "#d6d9fd";
        copyrightH3.style.color = "rgb(33, 28, 28)";
        navbarLogo.src = "./assets/asset 41.png";
    }
};