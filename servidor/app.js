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
                    return res.json('Error en la autetificación.');
                });
        }
    });

    app.post('/asignaturas_clase', function (req, res, next) {
        if (req.body.id_clase !== undefined) {
            modelos.v_asignaturas_clase.findAll({ where: { id_clase: req.body.id_clase } })
                .then(function (result) {
                    return res.json(result);
                })
                .catch(function (err) {
                    console.log(err);
                });
        }
    });

    app.post('/asignaturas_profesor', function (req, res, next) {
        if (req.body.id_profesor !== undefined) {
            modelos.v_asignaturas_clase.findAll({ where: { id_profesor: req.body.id_profesor } })
                .then(function (result) {
                    return res.json(result);
                })
                .catch(function (err) {
                    console.log(err);
                });
        }
    });

    app.post('/horario_clase', function (req, res, next) {
        if (req.body.id_clase !== undefined) {
            modelos.v_horario_clase.findAll({ where: { id_clase: req.body.id_clase } })
                .then(function (result) {
                    return res.json(result);
                })
                .catch(function (err) {
                    console.log(err);
                });
        }
    });

    app.post('/notas_alumno', function (req, res, next) {
        if (req.body.id_alumno !== undefined) {
            modelos.v_notas_alumno.findAll({ where: { id_alumno: req.body.id_alumno } })
                .then(function (result) {
                    return res.json(result);
                })
                .catch(function (err) {
                    console.log(err);
                });
        }
    });

    app.post('/profesores', function (req, res, next) {
        console.log(req.body);
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
                    return res.json('Error en la autetificación.');
                });
        }
    });

    app.post('/clases_profesor', function (req, res, next) {
        if (req.body.id_profesor !== undefined) {
            modelos.v_clases_profesor.findAll({ where: { id_profesor: req.body.id_profesor } })
                .then(function (result) {
                    return res.json(result);
                })
                .catch(function (err) {
                    console.log(err);
                });
        }
    });

    app.post('/alumnos_clase', function (req, res, next) {
        if (req.body.id_clase !== undefined) {
            modelos.v_alumno.findAll({ where: { id_clase: req.body.id_clase } })
                .then(function (result) {
                    return res.json(result);
                })
                .catch(function (err) {
                    console.log(err);
                });
        }
    });

    app.post('/eventos_alumno', function (req, res, next) {
        if (req.body.id_alumno !== undefined) {
            modelos.v_eventos.findAll({ where: { id_alumno: req.body.id_alumno } })
                .then(function (result) {
                    return res.json(result);
                })
                .catch(function (err) {
                    console.log(err);
                });
        }
    });

    app.post('/eventos_profesor', function (req, res, next) {
        if (req.body.id_prof !== undefined) {
            modelos.v_eventos.findAll({ where: { id_prof: req.body.id_prof } })
                .then(function (result) {
                    return res.json(result);
                })
                .catch(function (err) {
                    console.log(err);
                });
        }
    });

    app.post('/test', function (req, res, next) {
        return res.json({ message: 'Conexión funciona.' });
    });

    app.post('/insertar_nota', function (req, res, next) {
        if (req.body.id_alumno !== undefined && req.body.nota !== undefined
            && req.body.nombre !== undefined && req.body.observaciones && req.body.id_asignatura !== undefined) {
            return modelos.sequelize.transaction(function (t) {
                // chain all your queries here. make sure you return them.
                return modelos.notas.create({
                    alumno: req.body.id_alumno,
                    asignatura: req.body.id_asignatura,
                    nombre: req.body.nombre,
                    nota: req.body.nota,
                    observaciones: req.body.observaciones
                }, { transaction: t })
                    .then(function (result) {
                        console.log("Inserción de nota con éxito.");
                        console.log(result);
                        res.json({ message: "Inserción con éxito." });
                    }).catch(function (err) {
                        console.log("Fallo en la inserción. Rollback.");
                        res.json({ message: "Fallo en la inserción. Rollback." });
                    });
            });
        }
    });

    app.post('/insertar_evento', function (req, res, next) {
        console.log(req.body);
        if ((req.body.id_alumno !== undefined || req.body.id_profesor !== undefined)
            && req.body.sesion !== undefined && req.body.tipo !== undefined) {
            return modelos.sequelize.transaction(function (t) {
                // chain all your queries here. make sure you return them.
                return modelos.eventos.create({
                    alumno: req.body.id_alumno,
                    profesor: req.body.id_profesor,
                    sesion: req.body.sesion,
                    tipo: req.body.tipo,
                    descripcion: req.body.descripcion,
                    visible: req.body.visible
                }, { transaction: t })
                    .then(function (result) {
                        console.log(result);
                        res.json({ message: "Inserción con éxito." });
                    }).catch(function (err) {
                        console.log(err);
                        res.json({ message: "Fallo en la inserción. Rollback." });
                    });
            });
        }
    });

    app.post('/cambiarEvento', function (req, res, next) {
        console.log('Cambiando Evento');
        console.log(req.body);
        if (req.body.id_evento !== undefined && req.body.visible !== undefined) {
            return modelos.eventos.update({
                visible: req.body.visible
            }, { where: { id: req.body.id_evento } }
            ).then(function (result) {
                res.json({ message: 'Modificación exitosa.' });
            }).catch(function (err) {
                console.log(err);
                res.json({ message: "Fallo." });
            });     
        }
    });

    app.post('/cambiarNota', function (req, res, next) {
        console.log(req.body);
        if (req.body.nota.id_nota !== undefined && req.body.nota.id_asignatura !== undefined && req.body.nota.id_alumno !== undefined
            && req.body.nota.nombre !== undefined && req.body.nota.nota !== undefined) {
            return modelos.notas.update({
                id_alumno: req.body.id_alumno,
                id_asignatura: req.body.nota.id_asignatura,
                nombre: req.body.nota.nombre,
                nota: req.body.nota.nota,
                observaciones: req.body.nota.observaciones
            }, { where: { id: req.body.nota.id_nota } }
            ).then(function (result) {
                console.log(result);
                res.json({ message: 'Modificación nota exitosa.' });
            }).catch(function (err) {
                console.log(err);
                res.json({ message: "Fallo." });
            });
        }
    });

    app.post('/cambiarContrasena', function (req, res, next) {
        if (req.body.codigo !== undefined && req.body.id !== undefined && req.body.contra !== undefined && req.body.nuevaContra !== undefined) {
            if (req.body.codigo === 0) {
                modelos.alumnos.findOne({ where: { id: req.body.id } })
                    .then(function (result) {
                        if (result.contra === req.body.contra) {
                            return modelos.alumnos.update({
                                contra: req.body.nuevaContra
                            }, { where: { id: req.body.id } }
                            ).then(function (result) {
                                res.json({ message: 'Modificación exitosa.' });
                            });
                        }
                    }).catch(function (err) {
                        console.log(err);
                        res.json({ message: "Fallo." });
                    });
            }
            if (req.body.codigo === 1) {
                modelos.profesores.findOne({ where: { id: req.body.id } })
                    .then(function (result) {
                        if (result.contra === req.body.contra) {
                            return modelos.profesores.update({
                                contra: req.body.nuevaContra
                            }, { where: { id: req.body.id } }
                            ).then(function (result) {
                                res.json({ message: 'Modificación exitosa.' });
                            });
                        }
                    }).catch(function (err) {
                        console.log(err);
                        res.json({ message: "Fallo." });
                    });
            }
        }
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