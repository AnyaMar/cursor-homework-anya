const button = document.querySelector('#button');
const button1 = document.querySelector('#button1');
const next = document.querySelector('#next');

const container = document.querySelector('#container0');
const container1 = document.querySelector('#container1');

const BASE_URL = 'https://swapi.dev/api/';

async function getUsers() {
  const request = await fetch (`${BASE_URL}/films/2/`);
  const data = await request.json();
  const characters = data.characters;
  for (let i = 0; i < characters.length; i++) {
    const request = await fetch(characters[i]);
    const data = await request.json();
    container.innerHTML += `
        <h2>${data.name}</h2>
        <p>Birth: ${data.birth_year}</p>
        <p>Gender: ${data.gender}</p>`;
};
button.disabled = true;
};

async function getPlanets() {
  const request = await fetch (`${BASE_URL}/planets/`);
  const data = await request.json();
  for(let i = 0; i < data.results.length; i++) {
    container1.innerHTML += `
    <h2>${data.results[i].name}</h2>`
  };
 button1.disabled = true;
}

let counter = 2;
async function getNextPlanets() {
    const request = await fetch (`${BASE_URL}/planets/?page=${counter}`);
    const data = await request.json();
    
    container1.innerHTML = '';
    for(let i = 0; i < data.results.length; i++) {
      container1.innerHTML += `
      <h2>${data.results[i].name}</h2>`
    }
    counter++;
}

button.addEventListener('click', getUsers);
button1.addEventListener('click', getPlanets);
next.addEventListener('click', getNextPlanets);
