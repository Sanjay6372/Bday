function nextPage(page) {
  window.location.href = page;
}

function cutCake() {
  const cake = document.getElementById("cake");
  if (cake) {
    cake.classList.add("cut");
  }
}

/* ❤️ HEARTS EFFECT */
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

/* ✍️ TYPING EFFECT (PAGE 4) */
function typeText() {
  const el = document.getElementById("loveText");
  if (!el) return; // only run on page4

  const text = "You are my world 💕 I love you forever...";
  let i = 0;

  function typing() {
    if (i < text.length) {
      el.innerHTML += text.charAt(i);
      i++;
      setTimeout(typing, 50);
    }
  }

  typing();
}

/* 🚀 START (ALL PAGES) */
window.onload = () => {
  createHearts();   // hearts on all pages
  typeText();       // runs only if page4 has #loveText
};
