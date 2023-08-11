let my_number = 10;
let my_second_number = 5;

console.log("Suma: ", my_number + my_second_number);
console.log("Resta: ", my_number - my_second_number);
console.log("Multiplicación: ", my_number * my_second_number);
console.log("Módulo: ", my_number % my_second_number);
console.log("Potencia: ", my_number ** my_second_number);
if (my_second_number != 0) {
    console.log("División: ", my_number / my_second_number);
} else {
    console.log("Error");
}

var name = "Juan Carlos";
let last_name = "Contreras";
const second_lastname = "Candia";

const full_name = name + " " + last_name + " " + second_lastname;
let age = 23;

console.log(`Hola soy ${full_name} y tengo ${age} años`);

console.log(typeof full_name);
console.log(typeof age);

let negative_age = -age;
console.log("Edad negativa", negative_age);
