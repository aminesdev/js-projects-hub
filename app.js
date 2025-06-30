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
        }, {
            name: 'Weather',
            path: 'projects/Weather/index.html',
            icon: 'mdi:weather-cloudy'
        }
    ];

    const navItems = document.querySelector('.nav-items');
    const projectContainer = document.getElementById('projectContainer');

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

        document.getElementById('backButton').addEventListener('click', () => {
            showWelcomeScreen();
        });

        document.querySelector('.project-frame').focus();
    }

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

    function setActiveNavItem(item) {
        document.querySelectorAll('.nav-item').forEach(navItem => {
            navItem.classList.remove('active');
        });
        item.classList.add('active');
    }

    function clearActiveNavItem() {
        document.querySelectorAll('.nav-item').forEach(navItem => {
            navItem.classList.remove('active');
        });
    }

    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && !projectContainer.querySelector('.welcome-message')) {
            showWelcomeScreen();
        }
    });
});