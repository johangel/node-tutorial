let nombre = 'deadpool';
let real = "wade winston";

console.log(`${nombre} ${real}`);

let nombreCompleto = nombre + ' ' + real
let nombreTemplate = `${nombre} ${real}`

if (nombreCompleto === nombreTemplate) {
    console.log('true');
}


function getNombre(){
    return `${nombre} ${real}`
}

console.log(`El nommbre de ${getNombre()}`);