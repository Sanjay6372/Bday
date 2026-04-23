function nextPage(page) {
  window.location.href = page;
}

function cutCake() {
  document.getElementById("cake").classList.add("cut");
}

/* HEARTS */
function createHearts() {
  setInterval(() => {
    const heart = document.createElement("div");
    heart.innerHTML = "❤️";
    heart.className = "heart";

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = (12 + Math.random() * 10) + "px";

    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 6000);
  }, 500);
}

/* TYPING EFFECT */
function typeText() {
  const text = "You are my world 💕 I love you forever...";
  let i = 0;

  function typing() {
    if (i < text.length) {
      document.getElementById("loveText").innerHTML += text.charAt(i);
      i++;
      setTimeout(typing, 50);
    }
  }

  if (document.getElementById("loveText")) {
    typing();
  }
}

/* START */
window.onload = () => {
  createHearts();
  typeText();
};
