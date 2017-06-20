angular.module('starter')
    .factory('ObtenerDatosSrv', obtenerDatos);

function obtenerDatos($http) {
    var SERVERURL = 'http://80.49.113.168:9095';
    var user = {};

    return {
        user: user,
        getAsignaturasClase: function (id_clase) {
            if (id_clase !== undefined) {
                $http.post(SERVERURL + '/asignaturas_clase', { id_clase: id_clase })
                    .then(function (res) {
                        user.asignaturas_clase = res.data;
                        return res.data;
                    })
                    .catch(function (err) {
                        console.log(err);
                    });
            }
        },
        getAsignaturasProfesor: function (id_profesor) {
            if (id_profesor !== undefined) {
                $http.post(SERVERURL + '/asignaturas_profesor', { id_profesor: id_profesor })
                    .then(function (res) {
                        user.asignaturas_profesor = res.data;
                        return res.data;
                    })
                    .catch(function (err) {
                        console.log(err);
                    });
            }
        },
        getHorarioClase: function (id_clase) {
            if (id_clase !== undefined) {
                $http.post(SERVERURL + '/horario_clase', { id_clase: id_clase })
                    .then(function (res) {
                        user.horario_clase = res.data;
                        return res.data;
                    })
                    .catch(function (err) {
                        console.log(err);
                    });
            }
        },
        getNotasAlumno: function (id_alumno) {
            if (id_alumno !== undefined) {
                $http.post(SERVERURL + '/notas_alumno', { id_alumno: id_alumno })
                    .then(function (res) {
                        user.notas_alumno = res.data;
                        return res.data;
                    })
                    .catch(function (err) {
                        console.log(err);
                    });
            }
        },
        getEventosAlumno: function (id_alumno) {
            if (id_alumno !== undefined) {
                $http.post(SERVERURL + '/eventos_alumno', { id_alumno: id_alumno })
                    .then(function (res) {
                        user.eventos_alumno = res.data;
                        return res.data;
                    })
                    .catch(function (err) {
                        console.log(err);
                    });
            }
        },
        getClasesProfesor: function (id_profesor) {
            if (id_profesor !== undefined) {
                $http.post(SERVERURL + '/clases_profesor', { id_profesor: id_profesor })
                    .then(function (res) {
                        user.clases_profesor = res.data;
                        return res.data;
                    })
                    .catch(function (err) {
                        console.log(err);
                    });
            }
        },
        getEventosProfesor: function (id_prof) {
            if (id_prof !== undefined) {
                $http.post(SERVERURL + '/eventos_profesor', { id_prof: id_prof })
                    .then(function (res) {
                        user.eventos_prof = res.data;
                        return res.data;
                    })
                    .catch(function (err) {
                        console.log(err);
                    });
            }
        },
        //Es muy probable que necesites un contador para recorres los alumnos de una clase.
        getAlumnosClase: function (id_clase/*, contador*/) {
            if (id_clase !== undefined) {
                $http.post(SERVERURL + '/alumnos_clase', { id_clase: id_clase })
                    .then(function (res) {
                        user.alumnos_clase/*[contador]*/ = res.data;
                        return res.data;
                    })
                    .catch(function (err) {
                        console.log(err);
                    });
            }
        },

        insertarNota: function (id_alumno, id_asignatura, nombre, nota, observaciones) {
            if (id_alumno !== undefined && id_asignatura !== undefined && nombre !== undefined
                && nota !== undefined && observaciones !== undefined) {
                $http.post(SERVERURL + '/insertar_nota'
                    , {
                        id_alumno: id_alumno,
                        id_asignatura: id_asignatura,
                        nombre: nombre,
                        nota: nota,
                        observaciones: observaciones
                    })
                    .then(function (res) {
                        console.log(res.data);
                        return res.data;
                    })
                    .catch(function (err) {
                        console.log(err);
                    });
            }
        },

        insertarEvento: function (id_alumno, id_profesor, sesion, tipo, descripcion) {
            if ((id_alumno !== undefined || id_profesor !== undefined) && sesion !== undefined && tipo !== undefined) {
                $http.post(SERVERURL + '/insertar_evento'
                    , {
                        id_alumno: id_alumno,
                        id_prof: id_profesor,
                        sesion: sesion,
                        tipo: tipo,
                        descripcion: descripcion
                    })
                    .then(function (res) {
                        console.log(res);
                        return res;
                    })
                    .catch(function (err) {
                        console.log(err);
                    });
            }
        },
        /*
        *   cambiarContrasena
        *
        *   codigo: 0 para alumno, 1 para profesor. Indica la tabla a la que afectará esta función.
        *
        */
        cambiarContrasena: function (codigo, id, contra, nuevaContra) {
            if (codigo !== undefined && id !== undefined && nuevaContra !== undefined) {
                $http.post(SERVERURL + '/cambiarContrasena', { codigo: codigo, id: id, contra: contra, nuevaContra: nuevaContra })
                    .then(function (res) {
                        return res;
                    })
                    .catch(function (err) {
                        console.log(err);
                    });
            }
        },

        /*
        *   cambiarEvento
        *
        *   visible: 0 para ocultar, 1 para mostrar. Indica si el evento afectado se podrá mostrar o no.
        *
        */
        cambiarEvento: function (id_evento, visible) {
            if (id_evento !== undefined && visible !== undefined) {
                $http.post(SERVERURL + '/cambiarEvento', { id_evento: id_evento, visible: visible })
                    .then(function (res) {
                        return res;
                    })
                    .catch(function (err) {
                        console.log(err);
                    });
            }
        },

        cambiarNota: function (nota) {
            if (nota.id_nota !== undefined && nota.id_asignatura !== undefined && nota.id_alumno !== undefined
                && nota.nombre !== undefined && nota.nota !== undefined) {
                $http.post(SERVERURL + '/cambiarNota', { nota: nota })
                    .then(function (res) {
                        return res;
                    })
                    .catch(function (err) {
                        console.log(err);
                    });
            }
        }
    };
}
