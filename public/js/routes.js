"use strict";

angular.module('BatallaKamikaze.routes', ['ngRoute'])

   // configure views; the authRequired parameter is used for specifying pages
   // which should only be available while logged in
   .config(['$routeProvider', function($routeProvider) {
       
        var md = new MobileDetect( $(window)[0].navigator.userAgent );
        var device = md.phone() ? 'control' : 'tv';
        console.log(device);
       
        if(device == 'control'){
            $routeProvider.when('/home', {
             templateUrl: 'public/partials/control/home.html',
             controller: 'HomeDeviceCtrl'
            });
            $routeProvider.when('/play', {
             templateUrl: 'public/partials/control/play.html',
             controller: 'PlayDeviceCtrl'
            });
            $routeProvider.when('/score', {
             templateUrl: 'public/partials/control/score.html',
             controller: 'ScoreDeviceCtrl'
            });
            
        }else{
            $routeProvider.when('/home', {
             templateUrl: 'public/partials/tv/home.html',
             controller: 'HomeTvCtrl'
            });
            $routeProvider.when('/instrucciones', {
             templateUrl: 'public/partials/tv/instrucciones.html',
             controller: 'InstruccionesTvCtrl'
            });
            $routeProvider.when('/juego', {
             templateUrl: 'public/partials/tv/juego.html',
             controller: 'JuegoTvCtrl'
            });
            $routeProvider.when('/resumen', {
             templateUrl: 'public/partials/tv/resumen.html',
             controller: 'ResumenTvCtrl'
            });
            $routeProvider.when('/leaderboard', {
             templateUrl: 'public/partials/tv/leaderboard.html',
             controller: 'LeaderboardTvCtrl'
            });
        }

//        $routeProvider.when('/chat', {
//         templateUrl: 'public/partials/chat.html',
//         controller: 'ChatCtrl'
//        });
//
//        $routeProvider.when('/account', {
//         authRequired: true, // must authenticate before viewing this page
//         templateUrl: 'public/partials/account.html',
//         controller: 'AccountCtrl'
//        });
//
//        $routeProvider.when('/login', {
//         templateUrl: 'public/partials/login.html',
//         controller: 'LoginCtrl'
//        });

        $routeProvider.otherwise({redirectTo: '/home'});
   }]);