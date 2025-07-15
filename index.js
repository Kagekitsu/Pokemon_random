const btn = document.querySelector(".getRandomCharacter")
const nameDiv = document.getElementById("name")
const idDiv = document.getElementById("id")
const heightDiv = document.getElementById("height")
const typeDiv = document.getElementById("type")
const weightDiv = document.getElementById("weight")
const abilitiesDiv = document.getElementById("abilities")
const image = document.querySelector("img")

btn.addEventListener("click", (e) => {
    e.preventDefault()
    const randomNumber = Math.ceil(Math.random() * 1025)

    fetch(`https://pokeapi.co/api/v2/pokemon/${randomNumber}`)
        .then(response => response.json())
        .then(character => {
            name.innerHTML = `Name: ${character.name}`
            id.innerHTML = `ID: ${character.id}`
            height.innerHTML = `Height: ${character.height}`
            type.innerHTML = `Type: ${character.types.map(t => t.type.name).join(', ')}`
            weight.innerHTML = `Weight: ${character.weight}`
            abilities.innerHTML = `Abilities: ${character.abilities.map(a => a.ability.name).join(', ')}`
            image.src = character.sprites.front_default

            btn.style.top = "70%";
            btn.style.left = "50%";
            btn.style.transform = "translateX(-50%)";
        })
})