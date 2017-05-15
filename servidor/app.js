/**
 * Created by mra on 08/05/2017.
 */

'use strict'

// Requires (librerías)
let express = require('express');
let app = express();
const PORT = 9095;

let alumnos = [];

app.set('modelos', require('./sequelize'));
var modelos = app.get('modelos');

cargarDatos()
    .then(function () {
        arrancarServicio();
    })


function arrancarServicio() {
    app.listen(PORT);
    console.log('Servidor escuchando en puerto ' + PORT)
}

function cargarDatos() {

    //Conexión Sequelize
    modelos.sequelize
        .authenticate()
        .then(function () {
            console.log('Conexión con éxito ala base de datos.');
        }, function (err) {
            console.log('No se ha podido conectar a la base de datos. Error:', err);
        });

    cargarAlumnos();
}

function cargarAlumnos() {
    return modelos.alumno.findAll()
        .then(function (res) {
            let aux = []
            res.forEach(function (item) {
                aux.push(item.toJSON());
            })
            alumnos = aux;
            console.log('Alumnos obtenidos');
        })
        .catch(function (err) {
            console.log(err);
        })
}