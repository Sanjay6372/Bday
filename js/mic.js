function startMic() {
  document.getElementById("micStatus").innerText = "Listening... blow now 💨";

  navigator.mediaDevices.getUserMedia({ audio: true })
  .then(stream => {
    const ctx = new AudioContext();
    const mic = ctx.createMediaStreamSource(stream);
    const analyser = ctx.createAnalyser();

    mic.connect(analyser);

    const data = new Uint8Array(analyser.frequencyBinCount);

    function detect() {
      analyser.getByteFrequencyData(data);
      let volume = data.reduce((a,b)=>a+b)/data.length;

      if(volume > 60){
        document.querySelectorAll(".flame").forEach(f=>f.style.display="none");
        document.getElementById("micStatus").innerText = "🎉 Candles blown!";
      }

      requestAnimationFrame(detect);
    }

    detect();
  });
}
