// script.js
document.addEventListener("DOMContentLoaded", () => {
  const dots = document.querySelectorAll(".dot");
  let currentIndex = Array.from(dots).findIndex(dot => dot.classList.contains("active"));

  setInterval(() => {
      dots[currentIndex].classList.remove("active");
      currentIndex = (currentIndex + 1) % dots.length; // Loop through dots
      dots[currentIndex].classList.add("active");
  }, 3000); // Change active dot every three seconds
});
