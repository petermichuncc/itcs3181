Sites = new Mongo.Collection('sites');
 
if (Meteor.isClient) {
 
  // This code only runs on the client
  angular.module('websiterater',['angular-meteor']);
 
    angular.module('websiterater').controller('websiteCtrl', ['$scope', '$meteor',
    function ($scope, $meteor) {
 
      $scope.sites = $meteor.collection( function() {
        return Sites.find({}, { sort: { createdAt: -1 } })
      });
 
      $scope.addSite = function (newSite) {
        $scope.sites.push( {
          name: newSite,
          time: new Date() }
        );
      };
 
    }]);
}