let empleado = [{
    id: 1,
    nombre: 'johangel'
},
{
    id: 2,
    nombre: 'ross'
}, {
    id: 3,
    nombre: 'john'
}]

let salarios = [{
    id: 1,
    salario: 100
},
{
    id: 2,
    salario: 200
}]


let getEmpleados = (id) => {

    return new Promise((resolve, reject) => {

        let empleadoDb = empleado.find(empleado => empleado.id === id)

        if (empleadoDb) {
            resolve(empleadoDb)
        } else {
            reject(`No existe empleado con el iD ${id}`)
        }
    });
}

let getSalario = (empleado) => {
    salarioDb = salarios.find(salario => salario.id === empleado.id)

    return new Promise((resolve, reject)=>{
        
        if (salarioDb) {
            resolve({
                nombre: empleado.nombre,
                salario: salarioDb.salario,
                id: empleado.id
            })
        } else {
            reject(`No exsite el salario para el usuario: ${empleado.nombre}`)
        }
    })

}

getEmpleados(10).then((empleado) => {
    return getSalario(empleado)
})
.then(Response=>{
    console.log(`El salario es de ${Response.salario}`);
})
.catch(err=>{
    console.log(err);
})
