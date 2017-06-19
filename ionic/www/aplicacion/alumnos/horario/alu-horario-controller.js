angular.module('starter')
  .controller('AluHorarioCtrl', controlador);

function controlador($scope, ObtenerDatosSrv, $http) {
  var SERVERURL = 'http://80.49.113.168:9095';
  $scope.horario = [];
  $scope.horario_completo = [
    {
      sesion: 'Hora',
      dia1: 'LUNES',
      dia2: 'MARTES',
      dia3: 'MIERCOLES',
      dia4: 'JUEVES',
      dia5: 'VIERNES'
    },
    {
      sesion: '08:15 - 9:10',
      dia1: '',
      dia2: '',
      dia3: '',
      dia4: '',
      dia5: ''
    },
    {
      sesion: '09:10 - 10:05',
      dia1: '',
      dia2: '',
      dia3: '',
      dia4: '',
      dia5: ''
    },
    {
      sesion: '10:05 - 11:00',
      dia1: '',
      dia2: '',
      dia3: '',
      dia4: '',
      dia5: ''
    },
    {
      sesion: '11:00 - 11:30',
      dia1: 'RECREO',
      dia2: 'RECREO',
      dia3: 'RECREO',
      dia4: 'RECREO',
      dia5: 'RECREO'
    },
    {
      sesion: '11:30 - 12:25',
      dia1: '',
      dia2: '',
      dia3: '',
      dia4: '',
      dia5: ''
    },
    {
      sesion: '12:25 - 13:20',
      dia1: '',
      dia2: '',
      dia3: '',
      dia4: '',
      dia5: ''
    },
    {
      sesion: '13:20 - 14:15',
      dia1: '',
      dia2: '',
      dia3: '',
      dia4: '',
      dia5: ''
    }
  ];

  $http.post(SERVERURL + '/horario_clase', { id_clase: ObtenerDatosSrv.user.data.id_clase })
    .then(function (res) {
      $scope.horario = res.data;
      for(var i=0; i<$scope.horario.length; i++){
        var fila = 0;
        var col = 0;
        if ($scope.horario[i].hora == '8:15'){
          fila = 1;
          col = comprobarDia(fila, $scope.horario[i].dia_semana, $scope.horario[i].asignatura);
        } else if ($scope.horario[i].hora == '9:10'){
          fila = 2;
          col = comprobarDia(fila, $scope.horario[i].dia_semana, $scope.horario[i].asignatura);
        } else if ($scope.horario[i].hora == '10:05'){
          fila = 3;
          col = comprobarDia(fila, $scope.horario[i].dia_semana, $scope.horario[i].asignatura);
        } else if ($scope.horario[i].hora == '11:30'){
          fila = 5;
          col = comprobarDia(fila, $scope.horario[i].dia_semana, $scope.horario[i].asignatura);
        } else if ($scope.horario[i].hora == '12:25'){
          fila = 6;
          col = comprobarDia(fila, $scope.horario[i].dia_semana, $scope.horario[i].asignatura);
        } else if ($scope.horario[i].hora == '13:20'){
          fila = 7;
          col = comprobarDia(fila, $scope.horario[i].dia_semana, $scope.horario[i].asignatura);
        }
      }
    })
    .catch(function (err) {
      console.log(err);
    })

  function comprobarDia(fila, col, asig) {
    if (col == 'LUNES'){
      $scope.horario_completo[fila].dia1 = asig;
    } else if (col == 'MARTES'){
      $scope.horario_completo[fila].dia2 = asig;
    } else if (col == 'MIERCOLES'){
      $scope.horario_completo[fila].dia3 = asig;
    } else if (col == 'JUEVES'){
      $scope.horario_completo[fila].dia4 = asig;
    } else if (col == 'VIERNES'){
      $scope.horario_completo[fila].dia5 = asig;
    }
  }
}
