var audio;

function playAudio(file) {
  audio = new Audio(file);
  audio.play();
}

function stopAudio() {
  if (audio) {
    audio.pause();
    audio.currentTime = 0;
  }
}