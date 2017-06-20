angular.module('starter')
  .controller('CalificacionesCtrl', controlador);

function controlador($scope, $ionicPopup, ObtenerDatosSrv, $http) {
  var SERVERURL = 'http://80.49.113.168:9095';
  /*$scope.asignaturas = [
   {
   id: 1,
   nombre: 'Matemáticas',
   curso: '1º ESO',
   alumnos: [
   {nombre: 'Jose Maria', notas:[
   {titulo: 'Unidad 1', puntuacion: 8, observaciones: 'Muy bien hecho'},
   {titulo: 'Unidad 6', puntuacion: 6.3, observaciones: 'Regular'}
   ], showAlu: false, notaFinal: 8},
   {nombre: 'Pepito', showAlu: false, notaFinal: 5},
   {nombre: 'Fulanito', notas:[
   {titulo: 'Unidad 1', puntuacion: 10, observaciones: 'Muy bien hecho'},
   {titulo: 'Unidad 6', puntuacion: 8.6, observaciones: 'Ha faltado poco'}
   ], showAlu: false, notaFinal: 9.5}
   ],
   showAsig: false
   },
   {
   id: 2,
   nombre: 'Matemáticas',
   curso: '2º ESO',
   alumnos: [
   {nombre: 'Fran', showAlu: false, notaFinal: 8},
   {nombre: 'Luis', notas:[
   {titulo: 'Unidad 1', puntuacion: 4, observaciones: 'La próxima mejor'},
   {titulo: 'Unidad 4', puntuacion: 6.3, observaciones: 'Regular'}
   ], showAlu: false, notaFinal: 7},
   {nombre: 'Ana', showAlu: false, notaFinal: 5}
   ],
   showAsig: false
   },
   {
   id: 3,
   nombre: 'Lengua',
   curso: '4º ESO',
   alumnos: [
   {nombre: 'Gustavo', showAlu: false, notaFinal: 4},
   {nombre: 'Marisa', showAlu: false, notaFinal: 6}
   ],
   showAsig: false
   }
   ];*/
  $scope.data = {};
  $scope.notas = [];
  $scope.notasFinales = [];
  $scope.alumnos = [];
  $scope.asignaturas_profesor = [];

  $http.post(SERVERURL + '/asignaturas_profesor', {id_profesor: ObtenerDatosSrv.user.data.id})
    .then(function (res) {
      $scope.asignaturas_profesor = res.data;
      for (var i = 0; i < $scope.asignaturas_profesor.length; i++) {
        $scope.asignaturas_profesor[i].showAsig = false;
        $http.post(SERVERURL + '/alumnos_clase', {id_clase: $scope.asignaturas_profesor[i].id_clase})
          .then(function (res) {
            for (var j = 0; j < res.data.length; j++) {
              res.data[j].showAlu = false;
              $scope.alumnos.push(res.data[j]);
              $http.post(SERVERURL + '/notas_alumno', {id_alumno: res.data[j].id})
                .then(function (res) {
                  for (var x = 0; x < res.data.length; x++) {
                    if(res.data[x].nombre == 'notaFinal'){
                      $scope.notasFinales.push(res.data[x]);
                      for (var y=0; y<$scope.alumnos.length; y++){
                        if($scope.alumnos[y].id == res.data[x].id_alumno){
                          $scope.alumnos[y].notaFinal = res.data[x].nota;
                        }
                      }
                    } else {
                      $scope.notas.push(res.data[x]);
                      for (var y=0; y<$scope.alumnos.length; y++){
                        if($scope.alumnos[y].id == res.data[x].id_alumno){
                          $scope.alumnos[y].notaFinal = '-';
                        }
                      }
                    }
                  }
                })
                .catch(function (err) {
                  console.log(err);
                });
            }
          })
          .catch(function (err) {
            console.log(err);
          })
      }
    })
    .catch(function (err) {
      console.log(err);
    });

  $scope.cambiaNotaFinal = function (alum, asig) {
    $ionicPopup.show({
      template: '<input type="number" max="10" min="0" ng-model="data.notaFinal">',
      title: 'Nota final',
      subTitle: 'Indique la nota final del alumno',
      scope: $scope,
      buttons: [
        {
          text: 'Cancelar'
        },
        {
          text: '<b>Guardar</b>',
          type: 'button-positive',
          onTap: function (e) {
            if (!$scope.data.notaFinal) {
              e.preventDefault();
            } else {
              if(alum.notaFinal == '-'){
                $http.post(SERVERURL + '/insertar_nota'
                  , {
                    id_alumno: alum.id,
                    id_asignatura: asig.id_asignatura,
                    nombre: 'notaFinal',
                    nota: $scope.data.notaFinal,
                    observaciones: ''
                  })
                  .then(function (res) {
                    var notaNueva = {
                      id_alumno: alum.id,
                      id_asignatura: asig.id_asignatura,
                      nombre: 'notaFinal',
                      nota: $scope.data.notaFinal,
                      observaciones: '',
                      asignatura: asig.asignatura
                    };
                    $scope.notasFinales.push(notaNueva);
                    alum.notaFinal = $scope.data.notaFinal;
                  })
                  .catch(function (err) {
                    console.log(err);
                  });
              } else {
                var idNota;
                for(var i=0; i<$scope.notasFinales.length; i++){
                  if($scope.notasFinales[i].asignatura == asig.asignatura && $scope.notasFinales[i].id_alumno == alum.id){
                    idNota = $scope.notasFinales[i].id;
                  }
                }
                $http.post(SERVERURL + '/cambiarNota',
                  {
                    nota: {
                      id_nota: idNota,
                      id_asignatura: asig.id_asignatura,
                      nombre: 'notaFinal',
                      nota: $scope.data.notaFinal,
                      id_alumno: alum.id,
                      observaciones: ''
                    }
                  })
                  .then(function (res) {
                    console.log('Exito al cambiar nota');
                    alum.notaFinal = $scope.data.notaFinal;
                    return res;
                  })
                  .catch(function (err) {
                    console.log(err);
                  });
              }
            }
          }
        }
      ]
    }).then(function (res) {
      console.log('Tapped!', res);
    });
  };

  $scope.editarNota = function (nota) {
    if (nota) {
      $scope.data = {
        titulo: nota.nombre,
        puntuacion: nota.nota,
        observaciones: nota.observaciones
      }
    }

    $ionicPopup.show({
      template: '<input type="text" placeholder="Título" ng-model="data.titulo"><br>' +
      '<input type="number" max="10" min="0" ng-model="data.puntuacion" placeholder="Puntuación"><br>' +
      '<textarea placeholder="Observaciones..." ng-model="data.observaciones">',
      title: 'Nota',
      subTitle: 'Introduce los datos correspondientes a la nota',
      scope: $scope,
      buttons: [
        {
          text: 'Cancelar'
        },
        {
          text: '<b>Guardar</b>',
          type: 'button-positive',
          onTap: function (e) {
            if ($scope.data.titulo && $scope.data.puntuacion && $scope.data.observaciones) {
              nota.nombre = $scope.data.titulo;
              nota.nota = $scope.data.puntuacion;
              nota.observaciones = $scope.data.observaciones;
              $http.post(SERVERURL + '/cambiarNota',
                {
                  nota: {
                    id_nota: nota.id,
                    id_asignatura: nota.id_asignatura,
                    nombre: $scope.data.titulo,
                    nota: $scope.data.puntuacion,
                    id_alumno: nota.id_alumno,
                    observaciones: $scope.data.observaciones
                  }
                })
                .then(function (res) {
                  console.log('Exito al cambiar nota');
                  $scope.data.titulo = '';
                  $scope.data.puntuacion = '';
                  $scope.data.observaciones = '';
                  return res;
                })
                .catch(function (err) {
                  console.log(err);
                });
            } else if ($scope.data.titulo && $scope.data.puntuacion) {
              nota.nombre = $scope.data.titulo;
              nota.nota = $scope.data.puntuacion;
              nota.observaciones = '';
              $http.post(SERVERURL + '/cambiarNota', {
                nota: {
                  id_nota: nota.id,
                  id_asignatura: nota.id_asignatura,
                  nombre: $scope.data.titulo,
                  nota: $scope.data.puntuacion,
                  id_alumno: nota.id_alumno,
                  observaciones: ''
                }
              })
                .then(function (res) {
                  console.log('Exito al cambiar nota');
                  $scope.data.titulo = '';
                  $scope.data.puntuacion = '';
                  $scope.data.observaciones = '';
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
    }).then(function (res) {
      console.log('Tapped!', res);
    });
  };

  $scope.insertaNota = function (alum, asig) {
    $ionicPopup.show({
      template: '<input type="text" placeholder="Título" ng-model="data.titulo"><br>' +
      '<input type="number" max="10" min="0" ng-model="data.puntuacion" placeholder="Puntuación"><br>' +
      '<textarea placeholder="Observaciones..." ng-model="data.observaciones">',
      title: 'Nota',
      subTitle: 'Introduce los datos correspondientes a la nota',
      scope: $scope,
      buttons: [
        {
          text: 'Cancelar'
        },
        {
          text: '<b>Guardar</b>',
          type: 'button-positive',
          onTap: function (e) {
            if ($scope.data.puntuacion && $scope.data.observaciones && $scope.data.titulo != 'notaFinal') {
              $http.post(SERVERURL + '/insertar_nota'
                , {
                  id_alumno: alum.id,
                  id_asignatura: asig.id_asignatura,
                  nombre: $scope.data.titulo,
                  nota: $scope.data.puntuacion,
                  observaciones: $scope.data.observaciones
                })
                .then(function (res) {
                  var notaNueva = {
                    id_alumno: alum.id,
                    id_asignatura: asig.id_asignatura,
                    nombre: $scope.data.titulo,
                    nota: $scope.data.puntuacion,
                    observaciones: $scope.data.observaciones,
                    asignatura: asig.asignatura
                  };
                  $scope.notas.push(notaNueva);
                })
                .catch(function (err) {
                  console.log(err);
                });
            } else if ($scope.data.titulo != 'notaFinal' && $scope.data.puntuacion) {
              $http.post(SERVERURL + '/insertar_nota'
                , {
                  id_alumno: alum.id,
                  id_asignatura: asig.id_asignatura,
                  nombre: $scope.data.titulo,
                  nota: $scope.data.puntuacion,
                  observaciones: $scope.data.observaciones
                })
                .then(function (res) {
                  var notaNueva = {
                    id_alumno: alum.id,
                    id_asignatura: asig.id_asignatura,
                    nombre: $scope.data.titulo,
                    nota: $scope.data.puntuacion,
                    observaciones: '',
                    asignatura: asig.asignatura
                  };
                  $scope.notas.push(notaNueva);
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
    }).then(function (res) {
      console.log('Tapped!', res);
    });
  };

}
