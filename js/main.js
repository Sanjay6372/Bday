function nextPage(page) {
  window.location.href = page;
}

function startMusic(page) {
  const music = document.getElementById("music");
  if (music) {
    music.play().catch(()=>{});
  }
  window.location.href = page;
}
