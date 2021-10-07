import Saludador from "./Saludador";
const s: Saludador = new Saludador('Julián');
s.saludar();

// Error de variable inexistente
const user1 = {
    name1: "Daniel",
    age1: 26,

};

user1.location1;




// Solución
const user = {
    name: "Daniel",
    age: 26,
    location: "Cali",
};

user.location;


const anuncio = "hello world";

anuncios.toLocaleLowerCase();
anuncio.toLocaleLowerCase();

function flipCoin(){

    return Math.random () < 0.5;

}

function rect(number: number, number2: number, number3: number, number4: number) {

}

const coin = rect(20,20,20,20);
coin.flipCoin();

const value = Math.random() < 0.5 ? "a" : "b";
if (value !== "a") {
    // ...
} else if (value === "b") {
}
// Solución
// El ejemplo anterior da un error porque tanto "a" como "b" son falsos.

const value1 = Math.random() < 0.5 ? "a" : "b";
if (value1 == "a") {
    // ...
} else if (value1 === "b") {
}

// Duda
const value2 = Math.random() < 0.5 ? "a" : "b";
if (value2 !== "a") {
    // ...
} else if (value2 == "b") {
}




