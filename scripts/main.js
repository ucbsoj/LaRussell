// Get the audio element
const audio = document.querySelector(".lyrics audio");

// Add click event listener to the div with class "lyrics"
document.querySelector(".lyrics").addEventListener("click", () => {
  audio.currentTime = 0; // reset audio to beginning
  audio.play();
});

