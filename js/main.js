function nextPage(page) {
  window.location.href = page;
}

// autoplay music after click
document.body.addEventListener("click", () => {
  let music = document.getElementById("music");
  if (music) music.play();
});
