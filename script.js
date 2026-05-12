const faqQuestions = document.querySelectorAll(".faq-question");

faqQuestions.forEach(button => {
  button.addEventListener("click", () => {
    const answer = button.nextElementSibling;

    if (answer.style.maxHeight) {
      answer.style.maxHeight = null;
    } else {
      answer.style.maxHeight = answer.scrollHeight + "px";
    }
  });
});

const carousel = document.getElementById("carousel");
const leftBtn = document.querySelector(".left");
const rightBtn = document.querySelector(".right");

const firstCard = carousel.querySelector(".guest-card");

function getStep() {
  const cardWidth = firstCard.getBoundingClientRect().width;
  const styles = window.getComputedStyle(carousel);
  const gap = parseFloat(styles.columnGap || styles.gap || "0");
  return cardWidth + gap;
}

function moveCarousel(direction) {
  const step = getStep();
  const target = carousel.scrollLeft + direction * step;

  carousel.scrollTo({
    left: target,
    behavior: "smooth"
  });
}

rightBtn.addEventListener("click", () => {
  moveCarousel(1);
});

leftBtn.addEventListener("click", () => {
  moveCarousel(-1);
});

const reserveForm = document.getElementById("reserveForm");

const successPopup = document.getElementById("successPopup");

const backHomeBtn = document.getElementById("backHomeBtn");

reserveForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("nombre").value.trim();

  const email = document.getElementById("email").value.trim();

  const date = document.getElementById("fecha").value;

  document.getElementById("outName").textContent =
    name || "Jugador";

  document.getElementById("outEmail").textContent =
    email || "tu mail";

  document.getElementById("outDate").textContent =
    date || "la fecha elegida";

  successPopup.classList.add("active");

document.body.classList.add("popup-open");
});

backHomeBtn.addEventListener("click", () => {

  successPopup.classList.remove("active");

document.body.classList.remove("popup-open");

  reserveForm.reset();

  window.scrollTo({
    top:0,
    behavior:"smooth"
  });

});