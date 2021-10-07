import Saludador from "./Saludador";
const s: Saludador = new Saludador('Julián');
s.saludar();

// Error de variable inexistente
const usuario1 = {
    name1: "Camilo",
    age1: 19,

};

usuario1.location1;

// Solución
const usuario2 = {
    name: "Camilo",
    age: 19,
    location: "Cali",
};

usuario2.location;


// ERROR DE ESCRITURA
const anuncio = "Lina estuvó aquí";

anuncios.toLocaleLowerCase();
anuncio.toLocaleLowerCase(); //--->Solución

//FUNCIONES NO LLAMADAS

function flexiones(){

    return Math.random  < 10;

}
//Solución
function flexiones1(){

    return Math.random () < 10;

}



// ERROR LOGICO BASICO
const value = Math.random() < 10 ? "Pablo" : "Camilo";
if (value !== "Pablo") {

} else if (value === "Camilo") {
}
// Solución
// El ejemplo anterior da un error porque tanto "Pablo" como "Camilo" son falsos.

const value1 = Math.random() < 10 ? "Pablo" : "Camilo";
if (value1 == "Pablo") {

} else if (value1 === "Camilo") {
}

// Duda
const value2 = Math.random() < 10 ? "Pablo" : "Camilo";
if (value2 !== "Pablo") {

} else if (value2 == "Camilo") {
}























