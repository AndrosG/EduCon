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

    app.post('/alumnos_clase', function (req, res, next) {
        if (req.body.id !== undefined) {
            modelos.v_alumno.findAll({ where: { clase_id: req.body.clase_id } })
                .then(function (result) {
                    return res.json(result);
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

    app.post('/asignaturas', function (req, res, next) {
        let arr = undefined;
        if (req.body.id === undefined) {
            modelos.asignaturas.findAll()
                .then(function (result) {
                    let aux = []
                    result.forEach(function (item) {
                        aux.push(item.toJSON());
                    })
                    arr = aux;
                    return res.json(arr);
                })
                .catch(function (err) {
                    console.log(err);
                })
        } else {
            modelos.asignaturas.findOne({ where: { id: req.body.id } })
                .then(function (result) {
                    arr = result;
                    return res.json(arr);
                })
                .catch(function (err) {
                    console.log(err);
                })
        }
    });

    app.post('/cursos', function (req, res, next) {
        let arr = undefined;
        if (req.body.id === undefined) {
            modelos.cursos.findAll()
                .then(function (result) {
                    let aux = []
                    result.forEach(function (item) {
                        aux.push(item.toJSON());
                    })
                    arr = aux;
                    return res.json(arr);
                })
                .catch(function (err) {
                    console.log(err);
                })
        } else {
            modelos.cursos.findOne({ where: { id: req.body.id } })
                .then(function (result) {
                    arr = result;
                    return res.json(arr);
                })
                .catch(function (err) {
                    console.log(err);
                })
        }
    });

    app.post('/notas_alumno', function (req, res, next) {
        if (req.body.alumno !== undefined) {
            modelos.v_notas_alumno.findAll()
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

    app.post('/test', function (req, res, next) {
        return res.json({ message: 'Conexión funciona.' });
    });
    return 1;
}

conectaraBD();
cargarRutas();
arrancarServicio();

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
            return 1;
        }, function (err) {
            console.log('No se ha podido conectar a la base de datos. Error:', err);
            return 0;
        });
}