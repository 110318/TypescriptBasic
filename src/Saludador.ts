export default class Saludador{
    nombre:string

    constructor(nombre:string) {
        this.nombre=nombre;
    }
    saludar(){
        console.log("Hola"+ this.nombre);
    }
}