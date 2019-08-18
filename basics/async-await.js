/**
 *  Async Await
 */


// let getNombre = async() => {

//     return 'Fernando';
// };

let getNombre = () => {
    return new Promise((resolve, reject) => {

        setTimeout(() => {

            resolve('Fernando');

        }, 3000);

    });
}


let saludo = async() => {

    let nombre = await getNombre();

    //al usar el await no ahorramos abrir un then() y hacer el saludo dentro del callback


    return `Hola ${ nombre }`;

}

let aja = async function(){
    return await saludo()
}


aja().then(mensaje => {
    console.log(mensaje);
})