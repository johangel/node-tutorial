const fs = require('fs');
const colors = require('colors');
const colorsSafe = require('colors/safe');


let listarTabla = (base, limite) => {

    return new Promise((resolve, reject) => {
        if (!Number(base) || !Number(limite)) {
            reject(`los parametos deben ser numeros`)
            return;
        }

        console.log('=========================='.green);
        console.log(`      Tablas de ${base}   `.green);
        console.log('=========================='.green);
        for (let i = 1; i <= limite; i++) {
            console.log(`valor de ${base} * ${i} : ${base * i}`);
        }
        resolve(`lista ejecutada con exito`)

    })
}

crearArchivo = (base, limite= 10) => {

    return new Promise((resolve, reject) => {

        if (!Number(base) || !Number(limite)) {
            reject(`uno de los valores ${base} o ${limite} no corresponde a un numero`);
            return
        }

        let data = ''
        for (let i = 1; i <= limite; i++) {
            data += `${i} * ${base} : ${base * i} \n`;
        }
        fs.writeFile(`./tablas/tabla-del-numero-${base}.txt`, data, err => {
            if (err) reject(err);
            resolve(`tabla de numero ${base} con limite ${limite}`)
        })
    })

}

module.exports = {
    crearArchivo,
    listarTabla
}