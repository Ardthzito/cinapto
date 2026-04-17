function leer(id) {
  const texto = document.getElementById(id)?.innerText;
  if (!texto) return;

  const voz = new SpeechSynthesisUtterance(texto);
  voz.lang = "es-MX";
  voz.rate = 1;
  voz.pitch = 1;

  speechSynthesis.cancel(); // evita que se encimen audios
  speechSynthesis.speak(voz);
}

// 🔊 Leer descripción ALT de imágenes
function leerAlt(imgId) {
  const img = document.getElementById(imgId);
  if (!img) return;

  const texto = img.alt;
  const voz = new SpeechSynthesisUtterance(texto);
  voz.lang = "es-MX";

  speechSynthesis.cancel();
  speechSynthesis.speak(voz);
}

function scrollAbajo() {
  window.scrollBy({
    top: window.innerHeight,
    behavior: 'smooth'
  });
}

function scrollArriba() {
  window.scrollBy({
    top: -window.innerHeight,
    behavior: 'smooth'
  });
}


