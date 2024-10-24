import fetch from 'node-fetch';

// Promesas utilizando .THEN
// fetch('https://randomuser.me/api/?results=5')
//   .then(response => response.json())
//   .then(data => console.log(data));


// promesas utilizando AWAIT

async function getUsers() {
  const response = await fetch('https://randomuser.me/api/?results=5');
  const data = await response.json();
  // console.log(data.results);
  const personas = data.results;
  for (let index = 0; index < personas.length; index++) {
    const persona = personas[index];
    if (persona.gender === 'female') {
      console.log('Es mujer');
      console.log(persona.name.last, persona.name.first);
    } else {
      console.log('Es hombre');
      const hombre = {
        nombre: persona.name.last,
        apellido: persona.name.first
      }
      console.log(hombre);
    }
  }
}

// getUsers();



async function getPokemon() {
  const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=10');
  const data = await response.json();
  // console.log(data.results);
  const pokemones = data.results;
  // console.log(pokemones);
  for (let index = 0; index < pokemones.length; index++) {
    const pokemon = pokemones[index];
    const response2 = await fetch(pokemon.url);
    const data2 = await response2.json();
    const pokemon2 = {
      nombre: data2.name,
      peso: data2.weight,
      altura: data2.height,
      imagen: data2.sprites.front_default
    }    
    if (pokemon2.peso > 150) {
      console.log('Este es GORDO');
      console.log(pokemon2);
    }
  }
}

getPokemon();