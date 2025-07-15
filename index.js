const btn = document.querySelector(".getRandomCharacter")
const name = document.getElementById("name")
const id = document.getElementById("id")
const height = document.getElementById("height")
const type = document.getElementById("type")
const weight = document.getElementById("weight")
const abilities = document.getElementById("abilities")
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