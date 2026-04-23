function cutCake() {
  const cake = document.getElementById("cake");

  if (!cake.classList.contains("cut")) {
    cake.classList.add("cut");
  }
}
