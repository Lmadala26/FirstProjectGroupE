const startRecordButton = document.getElementById("startRecord");
const stopRecordButton = document.getElementById("stopRecord");
const playAudioButton = document.getElementById("playAudio");
const pauseAudioButton = document.getElementById("pauseAudio");
const stopAudioButton = document.getElementById("stopAudio");
const audioPlayer = document.getElementById("audioPlayer");
let mediaRecorder;
let audioChunks = [];
let audioStream;

startRecordButton.addEventListener("click", async () => {
  audioChunks = [];
  audioStream = await navigator.mediaDevices.getUserMedia({ audio: true });
  mediaRecorder = new MediaRecorder(audioStream);

  mediaRecorder.ondataavailable = (event) => {
    if (event.data.size > 0) {
      audioChunks.push(event.data);
    }
  };

  mediaRecorder.onstop = () => {
    const audioBlob = new Blob(audioChunks, { type: "audio/wav" });
    audioPlayer.src = URL.createObjectURL(audioBlob);
    playAudioButton.disabled = false;
    pauseAudioButton.disabled = false;
    stopAudioButton.disabled = false;
  };

  mediaRecorder.start();
  startRecordButton.disabled = true;
  stopRecordButton.disabled = false;
});

stopRecordButton.addEventListener("click", () => {
  mediaRecorder.stop();
  audioStream.getTracks().forEach((track) => track.stop());
  startRecordButton.disabled = false;
  stopRecordButton.disabled = true;
});

playAudioButton.addEventListener("click", () => {
  audioPlayer.play();
  playAudioButton.disabled = true;
});

pauseAudioButton.addEventListener("click", () => {
  audioPlayer.pause();
  playAudioButton.disabled = false;
});

stopAudioButton.addEventListener("click", () => {
  audioPlayer.pause();
  audioPlayer.currentTime = 0;
  playAudioButton.disabled = false;
});
