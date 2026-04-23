function startMic() {
  document.getElementById("status").innerText = "Blowing... 💨";

  setTimeout(() => {
    document.querySelectorAll(".flame").forEach(f => {
      f.style.display = "none";
    });

    document.getElementById("status").innerText = "Candles blown ❤️";
  }, 2000);
}
