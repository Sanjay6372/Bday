navigator.mediaDevices.getUserMedia({ audio: true })
.then(stream => {
  const audioContext = new AudioContext();
  const mic = audioContext.createMediaStreamSource(stream);
  const analyser = audioContext.createAnalyser();

  mic.connect(analyser);

  const data = new Uint8Array(analyser.frequencyBinCount);

  function detect() {
    analyser.getByteFrequencyData(data);
    let volume = data.reduce((a,b)=>a+b)/data.length;

    if(volume > 60){
      document.querySelectorAll(".flame").forEach(f => f.style.display="none");
    }

    requestAnimationFrame(detect);
  }

  detect();
});
