/* 
  This demo uses the Mozilla Audio Data API (https://wiki.mozilla.org/Audio_Data_API)
  Firefox OS does not yet support the Web Audio API or that would have been used as the Audio Data API is deprecated
*/

var soundData = [];
var audioContext = new Audio();

// Given an array of morse code information, play the sound through the speaker
function playSounds(durations) {
  soundData = [];

  var sound = true;

  for (var i = 0; i < durations.length; i++) {
    if (sound) {
      playSoundForMillis(durations[i]);
    }
    else {
      playSilenceForMillis(durations[i]);
    }
    sound = !sound;
  }

  audioContext.mozSetup(1, 15000);

  writeSoundBuffer();
}

/* 
  Write the actual sound data to the API.  Only some of the data will fit, thus 
  we write more every 100ms until it is all written
*/
function writeSoundBuffer() {
  var written = audioContext.mozWriteAudio(soundData);
  console.log(written + ' of ' + soundData.length + ' written');
  if (written > 0) {
    soundData = soundData.splice(written);
    setTimeout(writeSoundBuffer, 100);
  }
}

// Create the sound data (of a tone) for a given length of time
function playSoundForMillis(length) {
  var iterations = length / 2;
  for (var i = 0; i < iterations; i++) {
    for (var j = 0; j < 30; j++) {
      soundData.push(3 * Math.sin(Math.PI * (j/15)));
    }
  }
}

// Create the sound data (of silence) for a given length of time
function playSilenceForMillis(length) {
  var iterations = length / 2;
  for (var i = 0; i < iterations * 30; i++) {
    soundData.push(0);
  }
}
