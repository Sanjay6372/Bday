function nextPage(page) {
  window.location.href = page;
}

/* CUT CAKE */
function cutCake() {
  document.getElementById("cake").classList.add("cut");
}

/* BLOW CANDLES */
function blowCandles() {
  document.getElementById("f1").style.display = "none";
  document.getElementById("f2").style.display = "none";
  document.getElementById("f3").style.display = "none";
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

/* PAGE 4 TEXT */
function typeText() {
  const text = "You are my world 💕 I love you forever...";
  const el = document.getElementById("loveText");

  if (!el) return;

  let i = 0;
  const interval = setInterval(() => {
    el.innerHTML += text[i];
    i++;
    if (i === text.length) clearInterval(interval);
  }, 50);
}

/* START */
window.onload = () => {
  createHearts();
  typeText();
};
