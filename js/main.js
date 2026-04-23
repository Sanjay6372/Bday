function nextPage(page) {
  window.location.href = page;
}

function startMusic(page) {
  let m = document.getElementById("music");
  if(m) m.play().catch(()=>{});
  window.location.href = page;
}

function createHearts() {
  for (let i = 0; i < 12; i++) {
    let h = document.createElement("div");
    h.innerHTML = "❤️";
    h.className = "heart";
    h.style.left = Math.random()*100+"vw";
    h.style.fontSize = (Math.random()*20+10)+"px";
    h.style.animationDuration = (Math.random()*3+3)+"s";
    document.body.appendChild(h);
  }
}
