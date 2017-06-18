angular.module('starter')
  .factory('ObtenerDatosSrv', obtenerDatos);

function obtenerDatos($http) {
  var SERVERURL = 'http://80.49.113.168:9095';

  return {
    user: {},
    getAsignaturasClase: function (id_clase) {
        if (id_clase !== undefined) {
            $http.post(SERVERURL + '/asignaturas_clase', { id_clase: id_clase })
                .then(function (res) {
                    return res;
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
                    return res;
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
                    return res;
                })
                .catch(function (err) {
                    console.log(err);
                })
        }
    },
    getAlumnosClase: function (id_clase) {
        if (id_clase !== undefined) {
            $http.post(SERVERURL + '/alumnos_clase', { id_clase: id_clase })
                .then(function (res) {
                    return res;
                })
                .catch(function (err) {
                    console.log(err);
                })
        }
    }
  };

  

  

  

  
}
