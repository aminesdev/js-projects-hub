document.addEventListener('DOMContentLoaded', function () {
    const projects = [
        {
            name: 'Calculator',
            path: 'projects/Calculator/index.html',
            icon: 'mdi:calculator'
        },
        {
            name: 'Counter',
            path: 'projects/Counter/index.html',
            icon: 'mdi:counter'
        },
        {
            name: 'Dice',
            path: 'projects/DiceRoller/index.html',
            icon: 'mdi:dice-multiple'
        },
        {
            name: 'Clock',
            path: 'projects/DigitalClock/index.html',
            icon: 'mdi:clock-outline'
        },
        {
            name: 'Guess Number',
            path: 'projects/GuesstheNumber/index.html',
            icon: 'mdi:help-box'
        },
        {
            name: 'Password',
            path: 'projects/PasswordGenerator/index.html',
            icon: 'mdi:key'
        },
        {
            name: 'Pokédex',
            path: 'projects/Pokédex/index.html',
            icon: 'mdi:pokeball'
        },
        {
            name: 'Random',
            path: 'projects/RandomNumberGenerator/index.html',
            icon: 'mdi:shuffle-variant'
        },
        {
            name: 'RPS',
            path: 'projects/RockPaperScissors/index.html',
            icon: 'mdi:hand-back-right'
        },
        {
            name: 'Stopwatch',
            path: 'projects/StopWatch/index.html',
            icon: 'mdi:stopwatch'
        },
        {
            name: 'Temp',
            path: 'projects/TemperatureConversion/index.html',
            icon: 'mdi:thermometer'
        }
    ];

    const navItems = document.querySelector('.nav-items');
    const projectContainer = document.getElementById('projectContainer');

    // Create navigation items
    projects.forEach(project => {
        const navItem = document.createElement('a');
        navItem.className = 'nav-item';
        navItem.innerHTML = `
            <iconify-icon icon="${project.icon}"></iconify-icon>
            <span>${project.name.split(' ')[0]}</span>
        `;

        navItem.addEventListener('click', () => {
            loadProject(project.path, project.name);
            setActiveNavItem(navItem);
        });

        navItems.appendChild(navItem);
    });

    // Function to load a project
    function loadProject(path, name) {
        projectContainer.innerHTML = `
            <div class="project-header">
                <button class="back-button" id="backButton">
                    <iconify-icon icon="mdi:arrow-left"></iconify-icon>
                    Back
                </button>
                <h2>${name}</h2>
            </div>
            <div class="project-frame-container">
                <iframe src="${path}" class="project-frame" title="${name}"></iframe>
            </div>
        `;

        // Add back button functionality
        document.getElementById('backButton').addEventListener('click', () => {
            showWelcomeScreen();
        });

        // Focus the iframe for better keyboard navigation
        document.querySelector('.project-frame').focus();
    }

    // Function to show welcome screen
    function showWelcomeScreen() {
        projectContainer.innerHTML = `
            <div class="welcome-message">
                <h1>My Projects Hub</h1>
                <p>Select a project from the navigation below</p><br>
                <p style="font-size: 10rem; color:black ;">{ }</p>
            </div>
        `;
        clearActiveNavItem();
    }

    // Function to set active nav item
    function setActiveNavItem(item) {
        document.querySelectorAll('.nav-item').forEach(navItem => {
            navItem.classList.remove('active');
        });
        item.classList.add('active');
    }

    // Function to clear active nav item
    function clearActiveNavItem() {
        document.querySelectorAll('.nav-item').forEach(navItem => {
            navItem.classList.remove('active');
        });
    }

    // Keyboard navigation support
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && !projectContainer.querySelector('.welcome-message')) {
            showWelcomeScreen();
        }
    });
});