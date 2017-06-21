angular.module('starter')
  .controller('CalendarioCtrl', controlador);

function controlador($scope, ObtenerDatosSrv, $http, $ionicPopup) {
  var SERVERURL = 'http://80.49.113.168:9095';

  $scope.eventos = [];
  $scope.data = {};
  /*$scope.eventos = [
    {
      titulo: 'Examen gramática',
      descripcion: 'Temas 3 y 4 + sintaxis',
      fecha: new Date(2017, 6, 3).toLocaleString('es')
    },
    {
      titulo: 'Examen matemáticas',
      descripcion: 'Tablas de multiplicar',
      fecha: new Date(2017, 5, 10).toLocaleString('es')
    }
  ];*/

  $http.post(SERVERURL + '/eventos_profesor', { id_prof: ObtenerDatosSrv.user.data.id })
    .then(function (res) {
      $scope.eventos = res.data;
      for(var i=0; i<$scope.eventos.length; i++){
        var str = $scope.eventos[i].fecha.split('T');
        var str2 = str[0].split('-');
        var dia = str2[2];
        var mes = str2[1];
        var ano = str2[0];

        $scope.eventos[i].fecha = dia + '/' + mes + '/' + ano;
      }
    })
    .catch(function (err) {
      console.log(err);
    });

  $scope.borrarEvento = function (e) {
    $http.post(SERVERURL + '/cambiarEvento', { id_evento: e.id_evento, visible: 0 })
      .then(function (res) {
        $ionicPopup.confirm({
          title: 'Confirmación eliminar evento',
          template: '¿Estás seguro de que quieres borrar el evento?'
        }).then(function (res) {
          $http.post(SERVERURL + '/eventos_profesor', {id_prof: ObtenerDatosSrv.user.data.id})
            .then(function (res) {
              $scope.eventos = res.data;
              for(var i=0; i<$scope.eventos.length; i++){
                var str = $scope.eventos[i].fecha.split('T');
                var str2 = str[0].split('-');
                var dia = str2[2];
                var mes = str2[1];
                var ano = str2[0];

                $scope.eventos[i].fecha = dia + '/' + mes + '/' + ano;
              }
            })
            .catch(function (err) {
              console.log(err);
            });
        });
      })
      .catch(function (err) {
        console.log(err);
      });
  };

  $scope.addEvento = function () {
    $ionicPopup.show({
      template:
      '<input type="text" placeholder="Título" ng-model="data.titulo"><br>' +
      '<label>Sesion<select ng-model="data.sesion">' +
      '<option value="1">8:15</option>' +
      '<option selected value="2">9:10</option>' +
      '<option value="3">10:05</option>' +
      '<option value="5">11:30</option>' +
      '<option value="6">12:25</option>' +
      '<option value="7">13:20</option>' +
      '</select></label>' +
      '<br><br><textarea placeholder="Descripcion..." ng-model="data.descripcion">',
      title: 'Evento',
      subTitle: 'Introduce los datos para añadir el nuevo evento',
      scope: $scope,
      buttons: [
        {
          text: 'Cancelar'
        },
        {
          text: '<b>Añadir</b>',
          type: 'button-positive',
          onTap: function(e) {
            if ($scope.data.titulo && $scope.data.sesion && $scope.data.descripcion) {
              $http.post(SERVERURL + '/insertar_evento'
                , {
                  id_alumno: null,
                  id_profesor: ObtenerDatosSrv.user.data.id,
                  sesion: $scope.data.sesion,
                  tipo: $scope.data.titulo,
                  descripcion: $scope.data.descripcion
                })
                .then(function (res) {
                  console.log(res);
                  $http.post(SERVERURL + '/eventos_profesor', {id_prof: ObtenerDatosSrv.user.data.id})
                    .then(function (res) {
                      $scope.eventos = res.data;
                      for(var i=0; i<$scope.eventos.length; i++){
                        var str = $scope.eventos[i].fecha.split('T');
                        var str2 = str[0].split('-');
                        var dia = str2[2];
                        var mes = str2[1];
                        var ano = str2[0];

                        $scope.eventos[i].fecha = dia + '/' + mes + '/' + ano;
                      }
                    })
                    .catch(function (err) {
                      console.log(err);
                    });
                  return res;
                })
                .catch(function (err) {
                  console.log(err);
                });
            } else {
              e.preventDefault();
            }
          }
        }
      ]
    }).then(function(res) {
      console.log('Tapped!', res);
    });
  };
}
