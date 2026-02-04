const cardsContainer = document.getElementById("cards");
const countdown = document.getElementById("countdown");

//const contents = [
  //"Flores para la belleza 🌷",
  //"A veces el amor se derrite como chocolate 🍫",
  //"Lo escencial no siempre se ve, solo con el corazon se puede ver bien 👸",
  //"Soporta el cringe",
  //"I get so lost inside your eyes🎶",
  //"No soy bueno dando consejos. ¿Puedo interesarte en un comentario sarcástico?",
  //"The stakes are high, the water's rough but this love is ours🎵",
  //"Te amo como al fuego📖",
  //"Te doy mi corazon",
  //"",
  //"",
  //""
//];

const contents = [
  "Flores para la belleza 🌷",

  "A veces el amor se derrite como chocolate 🍫",

  "Lo esencial no siempre se ve, solo con el corazón se puede ver bien 👸",

  
  `<h2>🎥 Para ti</h2>
  <p>
    Hay cosas que no quería escribir.  
    Preferí mirarte y decirlas así.
  </p>

  <div class="video-wrapper">
    <iframe
      src="https://www.youtube.com/embed/m6w7KLJyu4A"
      title="Video para ti"
      frameborder="0"
      allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen>
    </iframe>
  </div>
  `,

  "I get so lost inside your eyes 🎶",

  "No soy bueno dando consejos. ¿Puedo interesarte en un comentario sarcástico?",

  "The stakes are high, the water's rough but this love is ours 🎵",

  "Te amo como al fuego 📖",

  "Te doy mi corazón 💍",

  "",
  "",
  ""
];

// Fecha inicio (ajusta el año si es necesario)
const startDate = new Date();

const gifts = [
  "Flores para la belleza 🌷",
  "A veces el amor se derrite como chocolate 🍫",
  "Lo escencial no siempre se ve, solo con el corazon se puede ver bien 👸",
  "Soporta el cringe",
  "I get so lost inside your eyes🎶",
  "No soy bueno dando consejos. ¿Puedo interesarte en un comentario sarcástico?",
  "The stakes are high, the water's rough but this love is ours🎵",
  "Te amo como al fuego📖",
  "Te doy mi corazon",
  "",
  "",
  ""
  
];

function render() {
  const now = new Date();
  cardsContainer.innerHTML = "";

  gifts.forEach((text, i) => {
    const unlockTime = new Date(startDate.getTime() + i * 60 * 60 * 1000);
    const unlocked =  now //>= unlockTime;

    const card = document.createElement("div");
    card.className = `card ${unlocked ? "unlocked" : "locked"}`;

    card.innerHTML = `<strong>${i}:00</strong><br>$🔒`;
      

      if (unlocked) {
        card.addEventListener("click", () => {
              openModal(contents[i]); //(`Regalo de las ${i}:00💖`)
        });
      }
    cardsContainer.appendChild(card);
  });

  const diff = startDate - now;

  if (diff > 0) {
    const hours = Math.floor(diff / (1000 * 60 * 60));
    countdown.textContent = `Faltan ${hours} horas para empezar 💖`;
  } else {
    countdown.textContent = "El día ya empezó ✨";
  }
}

setInterval(render, 1000);
render();

const modal = document.getElementById("modal");
console.log("modal"+modal)
const modalBody = document.getElementById("modalBody");
const closeModal = document.getElementById("closeModal");

function openModal(content) {
  modalBody.innerHTML = content;
  modal.classList.remove("hidden");
}

closeModal.addEventListener("click", () => {
  modal.classList.add("hidden");
});

modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.classList.add("hidden");
  }
});