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

    const navLinks = document.querySelectorAll('.nav-menu li a');
    navLinks.forEach(link => {
      link.style.color = '#ffffff';
    });

    const currentPage = document.querySelector('.current-page');
    if (currentPage) {
      currentPage.style.color = "#ffffff";
      currentPage.style.borderColor = "#6fa8dc";
    }

    const header = document.querySelector('.header');
    if (header) {
      header.style.backgroundColor = "#111111";
      header.querySelector('.head-txt').style.color = "#ffffff";
    }

    const cards = document.querySelectorAll('.course');
    cards.forEach(card => {
      card.style.backgroundColor = "#242426";
      card.querySelectorAll('h6, h2').forEach(textElement => {
        textElement.style.color = "#ffffff";
      });
    });

    const footer = document.querySelector('footer');
    if (footer) {
      footer.style.backgroundColor = "#242525";
      const footerLogo = footer.querySelector('img');
      if (footerLogo) {
        footerLogo.src = "./assets/asset 45.png";
      }
    }

    const companyLogo = document.querySelector('.company-logo img');
    if (companyLogo) {
      companyLogo.style.filter = "invert(100%)";
      companyLogo.src = "./assets/asset 45.png";
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

    const navLinks = document.querySelectorAll('.nav-menu li a');
    navLinks.forEach(link => {
      link.style.color = 'rgb(33, 28, 28)';
    });

    const currentPage = document.querySelector('.current-page');
    if (currentPage) {
      currentPage.style.color = "#4d006b";
      currentPage.style.borderColor = "rgb(0, 30, 94)";
    }

    const header = document.querySelector('.header');
    if (header) {
      header.style.backgroundColor = "#ffffff";
      header.querySelector('.head-txt').style.color = "#183b56";
    }

    const cards = document.querySelectorAll('.course');
    cards.forEach(card => {
      card.style.backgroundColor = "#e9ebff";
      card.querySelectorAll('h6, h2').forEach(textElement => {
        textElement.style.color = "#183b56";
      });
    });

    const footer = document.querySelector('footer');
    if (footer) {
      footer.style.backgroundColor = "#ebf2fa";
      const footerLogo = footer.querySelector('img');
      if (footerLogo) {
        footerLogo.src = "./assets/asset 41.png";
      }
    }

    const companyLogo = document.querySelector('.company-logo img');
    if (companyLogo) {
      companyLogo.style.filter = "none";
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
