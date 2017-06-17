/**
 * Created by mra on 08/05/2017.
 */

'use strict';

// Requires (librerías)
var express = require('express'),
    http = require('http'),
    bodyParser = require('body-parser'),
    app = express();

const PORT = 9095;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));



app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.set('modelos', require('./sequelize'));

var modelos = app.get('modelos');

conectaraBD();
cargarRutas();
arrancarServicio();

function cargarRutas() {
    app.post('/alumnos', function (req, res, next) {
        if (req.body.id !== undefined) {
            modelos.v_alumno.findOne({ where: { id: req.body.id } })
                .then(function (result) {
                    if (result.contra === req.body.contra) {
                        console.log('Enviado alumno.');
                        return res.json(result);
                    }
                })
                .catch(function (err) {
                    console.log(err);
                })
        }
    });

    app.post('/asignaturas_clase', function (req, res, next) {
        if (req.body.id_clase === undefined) {
            modelos.asignaturas.findAll({ where: { id_clase: req.body.id_clase }})
                .then(function (result) {
                    let aux = []
                    result.forEach(function (item) {
                        aux.push(item.toJSON());
                    })
                    return res.json(aux);
                })
                .catch(function (err) {
                    console.log(err);
                })
        }
    });

    app.post('/notas_alumno', function (req, res, next) {
        if (req.body.id_alumno !== undefined) {
            modelos.v_notas_alumno.findAll({ where: { id_alumno: req.body.id_alumno} })
                .then(function (result) {
                    let aux = []
                    result.forEach(function (item) {
                        aux.push(item.toJSON());
                    })
                    return res.json(aux);
                })
                .catch(function (err) {
                    console.log(err);
                })
        }
    });

    app.post('/profesores', function (req, res, next) {
        if (req.body.usuario !== undefined) {
            modelos.profesores.findOne({ where: { usuario: req.body.usuario } })
                .then(function (result) {
                    if (result.contra === req.body.contra) {
                        console.log('Enviado profesor.');
                        return res.json(result);
                    }
                })
                .catch(function (err) {
                    console.log(err);
                })
        }
    });

    app.post('/clases_profesor', function (req, res, next) {
        if (req.body.id_profesor === undefined) {
            modelos.v_clases_profesor.findAll({ where: { id_profesor: req.body.id_profesor } })
                .then(function (result) {
                    let aux = []
                    result.forEach(function (item) {
                        aux.push(item.toJSON());
                    })
                    return res.json(aux);
                })
                .catch(function (err) {
                    console.log(err);
                })
        }
    });

    app.post('/alumnos_clase', function (req, res, next) {
        if (req.body.id_clase !== undefined) {
            modelos.v_alumno.findAll({ where: { clase_id: req.body.id_clase } })
                .then(function (result) {
                    return res.json(result);
                })
                .catch(function (err) {
                    console.log(err);
                })
        }
    });

    app.post('/test', function (req, res, next) {
        return res.json({ message: 'Conexión funciona.' });
    });
}

function arrancarServicio() {
    var server = http.createServer(app);
    server.listen(PORT);
    console.log('Servidor escuchando en puerto ' + PORT);
    console.log(modelos);
}

function conectaraBD() {
    //Conexión Sequelize
    modelos.sequelize
        .authenticate()
        .then(function () {
            console.log('Conexión con éxito a la base de datos.');
        }, function (err) {
            console.log('No se ha podido conectar a la base de datos. Error:', err);
        });
}