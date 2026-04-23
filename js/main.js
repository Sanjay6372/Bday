function startMusic(page) {
  localStorage.setItem("playMusic", "true");
  window.location.href = page;
}

window.onload = function () {
  const music = document.getElementById("music");

  if (localStorage.getItem("playMusic") === "true" && music) {
    music.play().catch(()=>{});
  }

  document.body.classList.add("loaded");
};

function createHearts() {
  for (let i = 0; i < 6; i++) {
    let h = document.createElement("div");
    h.innerHTML = "❤️";
    h.className = "heart";
    h.style.left = Math.random()*100+"vw";
    h.style.fontSize = (Math.random()*20+10)+"px";
    document.body.appendChild(h);
  }
}
