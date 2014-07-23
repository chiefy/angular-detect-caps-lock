/* global ng, angular, capsLock */
ng.module('chiefy.detect-caps-lock', [])
    .run(function($rootScope, $window) {
        $rootScope.caps_state = false;
        angular.element($window)
            .bind('keydown keypress', function() {
                $rootScope.caps_state = capsLock.status;
                $rootScope.$apply();
            });
    });