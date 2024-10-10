document.addEventListener('DOMContentLoaded', () => {
    // Create the switch container
    const switchContainer = document.createElement('div');
    switchContainer.className = 'switch-container';

    // Create the checkbox
    const switchCheckbox = document.createElement('input');
    switchCheckbox.type = 'checkbox';
    switchCheckbox.id = 'switch';
    switchCheckbox.className = 'switch-checkbox';

    // Create the label
    const switchLabel = document.createElement('label');
    switchLabel.htmlFor = 'switch';
    switchLabel.className = 'switch-label';

    // Create the switch button
    const switchButton = document.createElement('div');
    switchButton.className = 'switch-button';

    // Create the sun icon
    const sunIcon = document.createElement('span');
    sunIcon.className = 'material-icons sun-icon';
    sunIcon.textContent = 'wb_sunny';


    const moonIcon = document.createElement('span');
    moonIcon.className = 'material-icons moon-icon';
    moonIcon.textContent = 'brightness_2';

    
    switchButton.appendChild(sunIcon);
    switchButton.appendChild(moonIcon);


    switchLabel.appendChild(switchButton);

 
    switchContainer.appendChild(switchCheckbox);
    switchContainer.appendChild(switchLabel);

  
    document.getElementById('Dark-mode-button-container').appendChild(switchContainer);


    if (localStorage.getItem('theme') === 'dark') {
        switchCheckbox.checked = true;
        document.body.classList.add('dark-mode');
    }

    switchCheckbox.addEventListener('change', () => {
        if (switchCheckbox.checked) {
            document.body.classList.add('dark-mode');
            localStorage.setItem('theme', 'dark');
        } else {
            document.body.classList.remove('dark-mode');
            localStorage.setItem('theme', 'light');
        }
    });
});
