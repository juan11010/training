// callback
function mostrarPokemon(pokemon) {
    console.log(pokemon);
}

function getPokemon(url, callback) {
    fetch(url)
        .then(response => response.json())
        .then(data => {
            callback(data.name);
        });
}

//getPokemon('https://pokeapi.co/api/v2/pokemon/ditto', mostrarPokemon);

// promise 
function getUser() {
fetch('https://jsonplaceholder.typicode.com/users/1')
    .then((data) => {
        return data.json();
    })
    .then((user) => {
        console.log(`ID: ${user.id}`);
        console.log(`Name: ${user.name}`);
        console.log(`Email: ${user.email}`);
    })
    .catch((error) => {
        console.log(error);
    });
}

getUser();

// async await

async function getToDos() {
    try {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    const data = await response.json();
    console.log(`Taks: ${data.title}`);
    console.log(`Completed: ${data.completed}`);
    } catch (error) {
        console.log("ERROR");
    }
}

// getToDos();

