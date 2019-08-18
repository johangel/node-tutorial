// function sumar(a, b) {
//     return a + b
// }

// let sumar = (a,b)=>{
//     return a +b
// }

// let sumar = (a,b) => a + b;
// console.log(sumar(1, 2));

// let saludar = nombre => `hola ${nombre}`

// console.log(saludar('johangel'));

let deadpool = {
    nombre: "wade",
    apellido: "winstons",
    poder: "regeneracion",
    getNombre(){
        return `${this.nombre} ${this.apellido} - poder: ${this.poder}`
    }
}

console.log(deadpool.getNombre());