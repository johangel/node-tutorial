// let nombre ='johangelito';
let nombre2 = 'johangel';

if (true) {
    // let nombre2 = 'johangel2';
    // console.log(`nombre2 dentro de scope ${nombre2}`);
    nombre2 = 'johangel3'
}

//el let no se deja sobre escribir
//si declaramos la misma variabla let en otro scope se apropioa del valor en ese scope

console.log(nombre2);

let i ="jeje"

for (let i = 0; i <5 ; i++) {
   console.log(i);
}

console.log(i);