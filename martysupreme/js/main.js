const balls = [];
const GRAVITY = 0.5;
const FLOOR = window.innerHeight - 60;

// función aleatoria
function random(min, max) {
  return Math.random() * (max - min) + min;
}

// crear pelotas
for (let i = 0; i < 10; i++) {
  const ball = document.createElement("img");

  ball.src = "imagenes/MartySupreme_PingPongBall.png";
  ball.classList.add("ball");

  const ballData = {
    el: ball,
    x: random(0, window.innerWidth - 60),
    y: random(-500, -50),
    speedY: random(1, 5)
  };

  ball.style.left = ballData.x + "px";
  ball.style.top = ballData.y + "px";

  const background = document.getElementById("background");
background.appendChild(ball);

  balls.push(ballData);
}

// animación
function animate() {
  balls.forEach(ball => {
    ball.speedY += GRAVITY;
    ball.y += ball.speedY;

    // rebote
    if (ball.y >= FLOOR) {
      ball.y = FLOOR;
      ball.speedY *= -0.7; // pierde energía
    }

    ball.el.style.top = ball.y + "px";
  });

  requestAnimationFrame(animate);
}

animate();

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

