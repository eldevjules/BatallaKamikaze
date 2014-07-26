'use strict';

/* Controllers */

angular.module('BatallaKamikaze.controllers', [])
   
    //DevicesCTRL's
    .controller('HomeDeviceCtrl', ['$scope', 'syncData', function($scope, syncData, $firebase) {
        syncData('partidanueva').$bind($scope, 'partidanueva');
        syncData('syncedValue').$bind($scope, 'syncedValue');
        
    }])
    .controller('PlayDeviceCtrl', ['$scope', 'syncData', function($scope, syncData) {
        
        syncData('syncedValue').$bind($scope, 'syncedValue');
        syncData('nombreDePartida').$bind($scope, 'nombreDePartida');

        $scope.cargaAvion = function(){

            $( "#container" ).empty();
            var divAvion = '<div id="avion" draggable="true" style="width:50px; height:50px; background-color:red"></div>';
            $( "#container" ).append( divAvion );
            var avion = document.querySelector('#avion');

            var disparador = new Draggabilly( avion, {
                containment: '#container'
            } );

            disparador.on( 'dragMove', onDragMove );
            disparador.on( 'dragEnd', onDragEnd );

        }

        $scope.cargaAvion();


        function onDragMove( instance, event, pointer ) {
            console.log("dudes");
            console.log( 'dragMove on ' + event.type + pointer.pageX + ', ' + pointer.pageY + ' position at ' + instance.position.x + ', ' + instance.position.y );
        }

        function onDragEnd( draggieInstance, event, pointer ){
            console.log("se solto");
            console.log(draggieInstance);
            console.log(event);
            console.log(pointer);
            $scope.cargaAvion();
        }
        
    }])
    .controller('ScoreDeviceCtrl', ['$scope', 'syncData', function($scope, syncData) {
        
    }])
    
    

    //TVCTRL's
    .controller('HomeTvCtrl', ['$scope', 'syncData', function($scope, syncData) {
        
        $scope.setvalue = function(){
            $scope.syncedValue = "dudes!";
        }
        $scope.setcode = function(){
            $scope.partidanueva = { 'code': 'adsadas' };
        }
        
        syncData('syncedValue').$bind($scope, 'syncedValue');
        syncData('partidanueva').$bind($scope, 'partidanueva');
        //var partidanueva = syncData('partidanueva');
//        console.log($scope.partidanueva);
//        if(!$scope.partidanueva){
//            $scope.partidanueva = {};
//        }
        
        //Random Key
        var code = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        for( var i=0; i < 5; i++ ){
            code += possible.charAt(Math.floor(Math.random() * possible.length));
        }
        
        console.log(code);
        $scope.partidanueva = { 'code': code };
        
    }])
    .controller('InstruccionesTvCtrl', ['$scope', 'syncData', function($scope, syncData) {

    }])
    .controller('JuegoTvCtrl', ['$scope', 'syncData', function($scope, syncData) {

    }])
    .controller('ResumenTvCtrl', ['$scope', 'syncData', function($scope, syncData) {

    }])
    .controller('LeaderboardTvCtrl', ['$scope', 'syncData', function($scope, syncData) {

    }])
    
    


//    .controller('ChatCtrl', ['$scope', 'syncData', function($scope, syncData) {
//      $scope.newMessage = null;
//
//      // constrain number of messages by limit into syncData
//      // add the array into $scope.messages
//      $scope.messages = syncData('messages', 10);
//
//      // add new messages to the list
//      $scope.addMessage = function() {
//         if( $scope.newMessage ) {
//            $scope.messages.$add({text: $scope.newMessage});
//            $scope.newMessage = null;
//         }
//      };
//    }])

//    .controller('LoginCtrl', ['$scope', 'loginService', '$location', function($scope, loginService, $location) {
//      $scope.email = null;
//      $scope.pass = null;
//      $scope.confirm = null;
//      $scope.createMode = false;
//
//      $scope.login = function(cb) {
//         $scope.err = null;
//         if( !$scope.email ) {
//            $scope.err = 'Please enter an email address';
//         }
//         else if( !$scope.pass ) {
//            $scope.err = 'Please enter a password';
//         }
//         else {
//            loginService.login($scope.email, $scope.pass, function(err, user) {
//               $scope.err = err? err + '' : null;
//               if( !err ) {
//                  cb && cb(user);
//               }
//            });
//         }
//      };
//
//      $scope.createAccount = function() {
//         $scope.err = null;
//         if( assertValidLoginAttempt() ) {
//            loginService.createAccount($scope.email, $scope.pass, function(err, user) {
//               if( err ) {
//                  $scope.err = err? err + '' : null;
//               }
//               else {
//                  // must be logged in before I can write to my profile
//                  $scope.login(function() {
//                     loginService.createProfile(user.uid, user.email);
//                     $location.path('/account');
//                  });
//               }
//            });
//         }
//      };
//
//      function assertValidLoginAttempt() {
//         if( !$scope.email ) {
//            $scope.err = 'Please enter an email address';
//         }
//         else if( !$scope.pass ) {
//            $scope.err = 'Please enter a password';
//         }
//         else if( $scope.pass !== $scope.confirm ) {
//            $scope.err = 'Passwords do not match';
//         }
//         return !$scope.err;
//      }
//    }])

//    .controller('AccountCtrl', ['$scope', 'loginService', 'changeEmailService', 'firebaseRef', 'syncData', '$location', 'FBURL', function($scope, loginService, changeEmailService, firebaseRef, syncData, $location, FBURL) {
//      $scope.syncAccount = function() {
//         $scope.user = {};
//         syncData(['users', $scope.auth.user.uid]).$bind($scope, 'user').then(function(unBind) {
//            $scope.unBindAccount = unBind;
//         });
//      };
//      // set initial binding
//      $scope.syncAccount();
//
//      $scope.logout = function() {
//         loginService.logout();
//      };
//
//      $scope.oldpass = null;
//      $scope.newpass = null;
//      $scope.confirm = null;
//
//      $scope.reset = function() {
//         $scope.err = null;
//         $scope.msg = null;
//         $scope.emailerr = null;
//         $scope.emailmsg = null;
//      };
//
//      $scope.updatePassword = function() {
//         $scope.reset();
//         loginService.changePassword(buildPwdParms());
//      };
//
//      $scope.updateEmail = function() {
//        $scope.reset();
//        // disable bind to prevent junk data being left in firebase
//        $scope.unBindAccount();
//        changeEmailService(buildEmailParms());
//      };
//
//      function buildPwdParms() {
//         return {
//            email: $scope.auth.user.email,
//            oldpass: $scope.oldpass,
//            newpass: $scope.newpass,
//            confirm: $scope.confirm,
//            callback: function(err) {
//               if( err ) {
//                  $scope.err = err;
//               }
//               else {
//                  $scope.oldpass = null;
//                  $scope.newpass = null;
//                  $scope.confirm = null;
//                  $scope.msg = 'Password updated!';
//               }
//            }
//         };
//      }
//      function buildEmailParms() {
//         return {
//            newEmail: $scope.newemail,
//            pass: $scope.pass,
//            callback: function(err) {
//               if( err ) {
//                  $scope.emailerr = err;
//                  // reinstate binding
//                  $scope.syncAccount();
//               }
//               else {
//                  // reinstate binding
//                  $scope.syncAccount();
//                  $scope.newemail = null;
//                  $scope.pass = null;
//                  $scope.emailmsg = 'Email updated!';
//               }
//            }
//         };
//      }
//
//    }]);