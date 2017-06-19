angular.module('starter')
  .controller('PasarListaCtrl', controlador);

function controlador($scope, $ionicPopup, $ionicLoading, ObtenerDatosSrv, $http) {
  var SERVERURL = 'http://80.49.113.168:9095';

  $scope.asignaturas_profesor = [];

  $http.post(SERVERURL + '/asignaturas_profesor', { id_profesor: ObtenerDatosSrv.user.data.id })
    .then(function (res) {
      var i;
      $scope.asignaturas_profesor = res.data;
      /*for(i=0; i<$scope.asignaturas_profesor.length; i++) {
        $http.post(SERVERURL + '/alumnos_clase', {id_clase: $scope.asignaturas_profesor[i].id_clase})
          .then(function (res) {
            if(i < $scope.asignaturas_profesor.length) {
              $scope.asignaturas_profesor[i].alumnos = res.data;
            }
          })
          .catch(function (err) {
            console.log(err);
          })
      }*/
    })
    .catch(function (err) {
      console.log(err);
    });

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
    }).then(function (res) {
      if (res) {
        var retrasos = 0;
        var faltas = 0;
        for (var i = 0; i < asig.alumnos.length; i++) {
          if (asig.alumnos[i].falta) {
            faltas++;
          }
          if (asig.alumnos[i].retraso) {
            retrasos++;
          }
        }
        for (var j = 0; j < asig.alumnos.length; j++) {
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
