const compliments = [
  '¡Eres una persona genial!',
  'Tu actitud hace el día más divertido.',
  'Sigue sonriendo, se ve increíble.',
  'Hoy puedes lograr algo increíble.',
  'Tu energía alegra a todas las personas cerca.'
];

const randomCompliment = () => compliments[Math.floor(Math.random() * compliments.length)];
document.getElementById('showCompliment').addEventListener('click', () => {
  document.getElementById('compliment').textContent = randomCompliment();
});

let target = 0;
let attempts = 0;
const maxAttempts = 5;

const resetGuess = () => {
  target = Math.floor(Math.random() * 20) + 1;
  attempts = 0;
  document.getElementById('guessMessage').textContent = '¡Listo! Intenta adivinar otra vez.';
  document.getElementById('guessInput').value = '';
};

resetGuess();

document.getElementById('guessBtn').addEventListener('click', () => {
  const input = Number(document.getElementById('guessInput').value);
  const message = document.getElementById('guessMessage');
  if (!input || input < 1 || input > 20) {
    message.textContent = 'Ingresa un número entre 1 y 20.';
    return;
  }
  attempts += 1;
  if (input === target) {
    message.textContent = `¡Ganaste en ${attempts} intento(s)! 🎉`;
    setTimeout(resetGuess, 1000);
  } else if (attempts >= maxAttempts) {
    message.textContent = `Se acabaron los intentos. Era ${target}. Reiniciando...`;
    setTimeout(resetGuess, 1400);
  } else {
    message.textContent = input < target ? 'Muy bajo 🔼' : 'Muy alto 🔽';
  }
});

document.getElementById('resetGuess').addEventListener('click', resetGuess);

const quizMessage = document.getElementById('quizMessage');
document.querySelectorAll('.option-btn').forEach((btn) => {
  btn.addEventListener('click', () => {
    if (btn.textContent.trim() === 'Colibrí') {
      quizMessage.textContent = '¡Correcto! Colibrí puede volar. 🐦';
      quizMessage.style.color = '#197b5e';
    } else {
      quizMessage.textContent = 'No es correcto, intenta otra vez. 😊';
      quizMessage.style.color = '#a22f67';
    }
  });
});

const spins = [
  'Hoy es un gran día para hacer algo divertido.',
  'Una sonrisa puede cambiar cualquier momento.',
  'Respira hondo y sigue con ánimo.',
  '¡Eres capaz de todo lo que te propongas!',
  'Haz algo lindo para ti hoy.'
];

document.getElementById('spinBtn').addEventListener('click', () => {
  const result = spins[Math.floor(Math.random() * spins.length)];
  document.getElementById('spinResult').textContent = result;
});
