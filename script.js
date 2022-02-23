// RD . 2022
// API link data https://pokeapi.co/

const url = "https://pokeapi.co/api/v2/";
const category = "pokemon";
const form = document.querySelector("form");
const input = document.querySelector("input");

const name = document.querySelector("#name");
const img = document.querySelector("#image");
const type = document.querySelector("#type");
const height = document.querySelector("#height");
const weight = document.querySelector("#weight");
const abilities = document.querySelector("#abilities");

let apiURL = `${url}${category}/mewtwo`;

function populate(apiURL) {
    fetch(apiURL)
        .then(blob => blob.json())
        .then(data => format(data))

    const format = (data) => {
        let abilitiesArr = data.abilities.map((ability, i) =>
            ability.ability.name.replace("-", " ")).join(", ");

        name.textContent = `${(data.name).replace('-', ' ')}`;
        image.innerHTML = `<img src=${data.sprites.front_default}>`;
        type.textContent = `${data.types[0].type.name}`;
        height.textContent = `${Math.round(data.height / 3)}'`;
        weight.textContent = `${Math.round(data.weight / 4)}lbs`;
        abilities.textContent = `${abilitiesArr}`;
    }
}

function search(e) {
    e.preventDefault();
    let name = input.value.toLowerCase().trim().replace('.', '').replace(' ','-');

    apiURL = `${url}${category}/${name}`;

    this.reset();
    populate(apiURL);
}

form.addEventListener('submit', search)

populate(apiURL);
