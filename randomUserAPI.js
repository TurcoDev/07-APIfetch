import fetch from 'node-fetch';
// Promesas utilizando .THEN


export function getUsersExternal(cant = 3) {
  fetch(`https://randomuser.me/ai/?results=${cant}`)
    .then(response => response.json())
    .then(data => {
      console.log("********** PERSONAS ***************")
      console.log(data)
    })
    .catch(error => console.log(error));
}

export function escribirAlgo() {
  console.log("Ese algo");
}

export default function escribirAlgo2() {
  console.log("Ese algo 2");
}



// fetch('https://randomuser.me/api/?results=5')
//   .then(response => response.json())
//   .then(data => console.log(data));