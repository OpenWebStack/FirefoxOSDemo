// Install the app, on loading the page
var request = navigator.mozApps.install(location.protocol + "//" + location.host + "/manifest.webapp");
request.onsuccess = function() {
  console.log('Installed successfully');
};
request.onerror = function() {
  console.log('Failed Installing! ' + this.error.name);
};

// Setup angular controller
var app = angular.module('main', []);
app.controller('mainCtrl', function($scope) {
  $scope.vibrate = function() {
    // Vibrate the morse code for whatever is in the textbox
    window.navigator.vibrate(getVibrationPattern($scope.textToEncode));
  };

  $scope.playSounds = function() {
    // Play (as sound) the morse code for whatever is in the textbox
    playSounds(getVibrationPattern($scope.textToEncode));
  };
});