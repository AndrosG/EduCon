angular.module('starter')
    .controller('PasarListaCtrl', controlador);

function controlador($scope, $ionicPopup, $ionicLoading, ObtenerDatosSrv) {
    /*$scope.asignaturasClase = ObtenerDatosSrv.getAsignaturasClase;
    $scope.notasAlumno = ObtenerDatosSrv.getNotasAlumno;
    $scope.clasesProfesor = ObtenerDatosSrv.getClasesProfesor;*/

    ObtenerDatosSrv.getClasesProfesor(1);
    ObtenerDatosSrv.getAlumnosClase(1);
    ObtenerDatosSrv.getNotasAlumno(1);

    $scope.asignaturas = [
      {
        id: 1,
        nombre: 'Matemáticas',
        curso: '1º ESO',
        alumnos: [
          {nombre: 'Jose Maria', apellidos: 'Fsadasdf'},
          {nombre: 'Pepito'},
          {nombre: 'Fulanito'}
        ],
        showAsig: false
      },
      {
        id: 2,
        nombre: 'Matemáticas',
        curso: '2º ESO',
        alumnos: [
          {nombre: 'Fran'},
          {nombre: 'Luis'},
          {nombre: 'Ana'}
        ],
        showAsig: false
      },
      {
        id: 3,
        nombre: 'Lengua',
        curso: '4º ESO',
        alumnos: [
          {nombre: 'Gustavo'},
          {nombre: 'Marisa'}
        ],
        showAsig: false
      }
    ];
  
    $scope.enviarFaltas = function (asig) {
      $ionicPopup.confirm({
        title: 'Confirmación envío incidencias',
        template: '¿Estás seguro de que quieres enviar las incidencias?'
      }).then(function(res) {
        if(res) {
          var retrasos = 0;
          var faltas = 0;
          for(var i=0; i<asig.alumnos.length; i++){
            if(asig.alumnos[i].falta){
              faltas++;
            }
            if(asig.alumnos[i].retraso){
              retrasos++;
            }
          }
          for(var j=0; j<asig.alumnos.length; j++){
            asig.alumnos[j].falta = false;
            asig.alumnos[j].retraso = false;
          }
          $ionicLoading.show({
            template: 'Se han enviado las incidencias con éxito',
            noBackdrop: true,
            duration: 2000
          });
        }
      });
    }
}
