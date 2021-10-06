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

