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

rightBtn.addEventListener("click", () => {
  carousel.scrollLeft += 350;
});

leftBtn.addEventListener("click", () => {
  carousel.scrollLeft -= 350;
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