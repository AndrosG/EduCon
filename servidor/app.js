/**
 * Created by mra on 08/05/2017.
 */

'use strict'

// Requires (librerías)
var express = require('express'),
    bodyParser = require('body-parser'),
    app = express();

const PORT = 9095;

let alumnos = [];

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.set('modelos', require('./sequelize'));
var modelos = app.get('modelos');

app.get( '/arr_alumnos', function(req, res, next) {
    return res.json(devolverAlumnos());
});

cargarDatos()
arrancarServicio()

function arrancarServicio() {
    var server = http.createServer(app);
    server.listen(PORT);
    console.log('Servidor escuchando en puerto ' + PORT)
    console.log(models);
}

function cargarDatos() {
    //Conexión Sequelize
    modelos.sequelize
        .authenticate()
        .then(function () {
            console.log('Conexión con éxito a la base de datos.');
        }, function (err) {
            console.log('No se ha podido conectar a la base de datos. Error:', err);
        });
    cargarAlumnos();
}

function cargarAlumnos() {
    return modelos.alumnos.findAll()
        .then(function (res) {
            let aux = []
            res.forEach(function (item) {
                aux.push(item.toJSON());
            })
            alumnos = aux;
            console.log('Alumnos obtenidos');
            console.log(alumnos);
        })
        .catch(function (err) {
            console.log(err);
        })
}

function devolverAlumnos() {
    return alumnos;
}