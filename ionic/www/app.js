// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic'])

  .run(function ($ionicPlatform) {
    $ionicPlatform.ready(function () {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        cordova.plugins.Keyboard.disableScroll(true);

      }
      if (window.StatusBar) {
        // org.apache.cordova.statusbar required
        StatusBar.styleDefault();
      }
    });
  })

  .config(function ($stateProvider, $urlRouterProvider) {

    $stateProvider
      .state('tab', {
        url: '/tab',
        abstract: true,
        templateUrl: 'templates/tabs.html'
      })

      //------------- LOGIN -------------------------------------------

      .state('login', {
        url: '/login',
        templateUrl: 'aplicacion/login/login.html',
        controller: 'LoginCtrl'
      })

      //------------- PROFESORES --------------------------------------

      .state('tab.lista', {
        url: '/lista',
        views: {
          'tab-lista': {
            templateUrl: 'aplicacion/profesores/lista/prof-lista.html',
            controller: 'PasarListaCtrl'
          }
        }
      })
      .state('tab.calificaciones', {
        url: '/calificaciones',
        views: {
          'tab-calificaciones': {
            templateUrl: 'aplicacion/profesores/calificaciones/prof-calificaciones.html',
            controller: 'CalificacionesCtrl'
          }
        }
      })
      .state('tab.perfil', {
        url: '/perfil',
        views: {
          'tab-perfil': {
            templateUrl: 'aplicacion/profesores/perfil/prof-perfil.html',
            controller: 'PerfilCtrl'
          }
        }
      })
      .state('tab.horario', {
        url: '/horario',
        views: {
          'tab-horario': {
            templateUrl: 'aplicacion/profesores/horario/prof-horario.html',
            controller: 'HorarioCtrl'
          }
        }
      })
      .state('tab.calendario', {
        url: '/calendario',
        views: {
          'tab-calendario': {
            templateUrl: 'aplicacion/profesores/calendario/prof-calendario.html',
            controller: 'CalendarioCtrl'
          }
        }
      });

      //------------- ALUMNOS ------------------------------------------
    $stateProvider
      .state('tab-alu', {
        url: '/tab-alu',
        abstract: true,
        templateUrl: 'templates/tabs-alu.html'
      })
      .state('tab-alu.calendario', {
        url: '/alu-calendario',
        views: {
          'tab-alu-calendario': {
            templateUrl: 'aplicacion/alumnos/calendario/alu-calendario.html',
            controller: 'AluCalendarioCtrl'
          }
        }
      })
      .state('tab-alu.horario', {
        url: '/alu-horario',
        views: {
          'tab-alu-horario': {
            templateUrl: 'aplicacion/alumnos/horario/alu-horario.html',
            controller: 'AluHorarioCtrl'
          }
        }
      })
      .state('tab-alu.notas', {
        url: '/alu-notas',
        views: {
          'tab-alu-notas': {
            templateUrl: 'aplicacion/alumnos/notas/alu-notas.html',
            controller: 'AluNotasCtrl'
          }
        }
      })
      .state('tab-alu.perfil', {
        url: '/alu-perfil',
        views: {
          'tab-alu-perfil': {
            templateUrl: 'aplicacion/alumnos/perfil/alu-perfil.html',
            controller: 'AluPerfilCtrl'
          }
        }
      });

    $urlRouterProvider.otherwise('/login');

  })
;
