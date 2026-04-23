function nextPage(page) {
  window.location.href = page;
}

window.onload = () => {
  document.body.classList.add("loaded");

  const music = document.getElementById("music");
  if (music) {
    document.body.addEventListener("click", () => {
      music.play();
    }, { once: true });
  }
};
