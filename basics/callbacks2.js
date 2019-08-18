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

let getEmpleados = (id, callback) => {
    let empleadoDb = empleado.find(empleado => empleado.id === id)

    if (empleadoDb) {
        callback(null, empleadoDb)
    } else {
        callback(`No existe empleado con el iD ${id}`)
    }
}

let getSalario = (empleado, callback) => {
    salarioDb = salarios.find(salario => salario.id === empleado.id)

    if (salarioDb) {
        callback(null,{
            nombre:empleado.nombre,
            salario:salarioDb.salario,
            id:empleado.id
        })
    } else { 
        callback(`No exsite el salario para el usuario: ${empleado.nombre}`)
    }
}

getEmpleados(3, (err, empleado) => {

    if (err) {
        return console.log(err);
    }

    getSalario(empleado, (err, res) => {
        if (err) {
            return console.log(err);
        } else {
            console.log(`El salario de ${res.nombre} es de ${res.salario}`);
        }
    })
})


