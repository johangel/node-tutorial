// setTimeout(() => {
//     console.log('hola mundo');
// }, 3000);

//se definio un metodo con un callback como parametro

let getUsuarioById = (id, callback) => {

    let usuario = {
        nombre: 'johangel',
        id
    }

    if (20 === id) {
        callback(`El usuario con id ${id} no existe en la bd`)
    }else{
        callback(null, usuario)
    }

    // callback(usuario)

}

// se invoca al metodo con callback y se utilizan los parametos que retorna como se quiera en la funcion

getUsuarioById(10, (err,usuario)=>{

    if(err){
        return console.log(err);
    }

    console.log(`Usuario de base de datos `, usuario);
})

getUsuarioById(20, (err,usuario)=>{

    if(err){
        return console.log(err);
    }

    console.log(`Usuario de base de datos `, usuario);
})

