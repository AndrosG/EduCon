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
                        user.asignaturas_clase = res;
                        return true;
                    })
                    .catch(function (err) {
                        console.log(err);
                    })
            }
        },
        getNotasAlumno: function (id_alumno) {
            if (id_alumno !== undefined) {
                $http.post(SERVERURL + '/notas_alumno', { id_alumno: id_alumno })
                    .then(function (res) {
                        user.notas_alumno = res;
                        return true;
                    })
                    .catch(function (err) {
                        console.log(err);
                    })
            }
        },
        getClasesProfesor: function (id_profesor) {
            if (id_profesor !== undefined) {
                $http.post(SERVERURL + '/clases_profesor', { id_profesor: id_profesor })
                    .then(function (res) {
                        user.clases_profesor = res;
                        return true;
                    })
                    .catch(function (err) {
                        console.log(err);
                    })
            }
        },

        //Es muy probable que necesites un contador para recorres los alumnos de una clase.
        getAlumnosClase: function (id_clase/*, contador*/) {
            if (id_clase !== undefined) {
                $http.post(SERVERURL + '/alumnos_clase', { id_clase: id_clase })
                    .then(function (res) {
                        user.alumnos_clase/*[contador]*/ = res;
                        return true;
                    })
                    .catch(function (err) {
                        console.log(err);
                    })
            }
        },
    };








}
