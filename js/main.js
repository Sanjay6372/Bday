function nextPage(page) {
  window.location.href = page;
}

function cutCake() {
  document.getElementById("cake").classList.add("cut");
}

/* HEARTS EFFECT */
function createHearts() {
  setInterval(() => {
    const heart = document.createElement("div");
    heart.innerHTML = "❤️";
    heart.className = "heart";

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = (12 + Math.random() * 10) + "px";

    document.body.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 6000);
  }, 500);
}

/* START */
window.onload = () => {
  createHearts();
};
