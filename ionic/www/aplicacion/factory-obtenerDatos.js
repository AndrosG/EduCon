angular.module('starter')
  .factory('ObtenerDatosSrv', obtenerDatos);

function obtenerDatos($http) {
  var SERVERURL = 'http://80.49.113.168:9095';

  return {
    user: {},
    getAsignaturasClase: asignaturasClase(),
    getNotasAlumno: notasAlumno(),
    getClasesProfesor: clasesProfesor(),
    getAlumnosClase: alumnosClase()
  };

  function asignaturasClase() {
    $http.post(SERVERURL + '/asignaturas_clase')
      .then(function (res) {
        return res;
      })
      .catch(function (err) {
        console.log(err);
      })
  }

  function notasAlumno() {
    $http.post(SERVERURL + '/notas_alumno')
      .then(function (res) {
        return res;
      })
      .catch(function (err) {
        console.log(err);
      })
  }

  function clasesProfesor() {
    $http.post(SERVERURL + '/clases_profesor')
      .then(function (res) {
        return res;
      })
      .catch(function (err) {
        console.log(err);
      })
  }

  function alumnosClase() {
    $http.post(SERVERURL + '/alumnos_clase')
      .then(function (res) {
        return res;
      })
      .catch(function (err) {
        console.log(err);
      })
  }
}
