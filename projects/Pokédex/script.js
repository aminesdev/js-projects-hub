async function fetchData() {
    try {
        const pokemonName = document.getElementById("pokemonName").value.toLowerCase();
        if (!pokemonName) {
            throw new Error("Please enter a Pokémon name");
        }

        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
        if (!response.ok) {
            throw new Error("Pokémon not found");
        }

        const data = await response.json();
        displayPokemon(data);

    } catch (error) {
        const errorElement = document.getElementById("errorMessage");
        errorElement.textContent = error.message;
        errorElement.classList.remove("hidden");

        const cardElement = document.getElementById("pokemonCard");
        cardElement.classList.add("hidden");
    }
}

function displayPokemon(pokemon) {
    document.getElementById("errorMessage").classList.add("hidden");
    const cardElement = document.getElementById("pokemonCard");
    cardElement.classList.remove("hidden");

    document.getElementById("pokemonNameDisplay").textContent = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);
    document.getElementById("pokemonId").textContent = `#${pokemon.id.toString().padStart(3, '0')}`;

    document.getElementById("pokemonSprite").src = pokemon.sprites.other["official-artwork"].front_default || pokemon.sprites.front_default;
    const typesContainer = document.getElementById("pokemonTypes");
    typesContainer.innerHTML = "";
    pokemon.types.forEach(type => {
        const typeElement = document.createElement("span");
        typeElement.className = `type ${type.type.name}`;
        typeElement.textContent = type.type.name;
        typesContainer.appendChild(typeElement);
    });

    const statsContainer = document.getElementById("pokemonStats");
    statsContainer.innerHTML = "";
    pokemon.stats.forEach(stat => {
        const statRow = document.createElement("div");
        statRow.className = "stat-row";

        const statName = document.createElement("div");
        statName.className = "stat-name";
        statName.textContent = stat.stat.name.replace("-", " ");

        const statValue = document.createElement("div");
        statValue.className = "stat-value";
        statValue.textContent = stat.base_stat;

        const statBarContainer = document.createElement("div");
        statBarContainer.className = "stat-bar-container";

        const statBar = document.createElement("div");
        statBar.className = "stat-bar";
        statBar.style.width = `${Math.min(100, stat.base_stat)}%`;

        statBarContainer.appendChild(statBar);
        statRow.appendChild(statName);
        statRow.appendChild(statValue);
        statRow.appendChild(statBarContainer);
        statsContainer.appendChild(statRow);
    });

    document.getElementById("pokemonHeight").textContent = (pokemon.height / 10).toFixed(1);
    document.getElementById("pokemonWeight").textContent = (pokemon.weight / 10).toFixed(1);

    const abilities = pokemon.abilities.map(ability => {
        return ability.ability.name.split('-').map(word =>
            word.charAt(0).toUpperCase() + word.slice(1)
        ).join(' ');
    }).join(', ');
    document.getElementById("pokemonAbilities").textContent = abilities;
}

document.getElementById("pokemonName").addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
        fetchData();
    }
});