/**
 * Created by tushar on 18/6/17.
 */

var angularApp  = angular.module('app1', []);
angularApp.controller('AppCtrl', function($http) {
    var app = this;
    console.log("app chal rhi hai");
    $http.get("http://localhost:3000").then(function(entity) {
        app.entities = entity.data;
    });
});

