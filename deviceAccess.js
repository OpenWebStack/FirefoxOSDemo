var battery = navigator.battery || navigator.mozBattery || navigator.webkitBattery;

var app = angular.module('main', []);

app.controller('mainCtrl', function($scope) {
  $scope.installApp = function() {
    var request = navigator.mozApps.checkInstalled(location.protocol + "//" + location.host + "/manifest.webapp");
    request.onsuccess = function() {
      if (this.result) {
        // we're installed
        console.log('Already Installed!');
        console.log(this.result);
      } else {
        // not installed
        console.log('Argh!  Install me!');

        var request = navigator.mozApps.install(location.protocol + "//" + location.host + "/manifest.webapp");
        request.onsuccess = function() {
          // great - display a message, or redirect to a launch page
          console.log('Installed!');
        };
        request.onerror = function() {
          // whoops - this.error.name has details
          console.log('Failed Installing!');
        };
      }
    };
    request.onerror = function() {
      alert('Error checking installation status: ' + this.error.message);
    };
  };

  $scope.sampleText = 'a';

  $scope.addMoreText = function() {
    $scope.sampleText += 'a';
  };

  $scope.vibrate = function() {
    window.navigator.vibrate([100, 100, 200, 100, 300, 100, 400, 100, 500]);
  };

  $scope.batteryLevel = battery.level * 100 + '%';

});

var ambientLightTextbox = document.getElementById('ambientLight');
window.addEventListener('devicelight', function(event) {
  ambientLightTextbox.value = event.value;
});

var proximityTextbox = document.getElementById('proximity');
window.addEventListener('deviceproximity', function(event) {
  proximityTextbox.value = "value: " + event.value + ", max: " + event.max + ", min: " + event.min;
});

var orientationZTextbox = document.getElementById('orientationZ');
var orientationXTextbox = document.getElementById('orientationX');
var orientationYTextbox = document.getElementById('orientationY');
window.addEventListener("deviceorientation", function (event) {
  orientationZTextbox.value = event.alpha;
  orientationXTextbox.value = event.beta;
  orientationYTextbox.value = event.gamma;
}, true);

var accelerationXTextbox = document.getElementById('accelerationX');
var accelerationYTextbox = document.getElementById('accelerationY');
var accelerationZTextbox = document.getElementById('accelerationZ');
window.addEventListener("devicemotion", function (event) {
 // document.write('fff');
  accelerationXTextbox.value = JSON.stringify(event);
  accelerationYTextbox.value = event.acceleration.y;
  accelerationZTextbox.value = event.acceleration.z;
}, true);