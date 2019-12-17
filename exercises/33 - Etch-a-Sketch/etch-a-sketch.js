//  SELECT PAGE ELEMENTS: CANVAS / SHAKE BUTTON
const canvas = document.querySelector('#etch-a-sketch');
const ctx = canvas.getContext('2d');
const shakeButton = document.querySelector('.shake');
const MOVE_AMOUNT = 40;

// SETUP CANVAS FOR DRAWING
// ?FOLLOWING TWO VARIABLES ARE "DESTRUCTURED"
//  instead of width = canvas.width it is { width } = canvas. :)
const { width, height } = canvas;

// Create random X + Y placemnt on canvas.
let x = Math.floor(Math.random() * width);
let y = Math.floor(Math.random() * height);

ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = MOVE_AMOUNT;
let hue = 0;
ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;

ctx.beginPath();
ctx.moveTo(x, y);
ctx.lineTo(x, y);
ctx.stroke();

// WRITE A DRAW FUNCTION
function draw({ key }) {
  console.log(key);
  hue += 1;
  ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
  ctx.beginPath();
  ctx.moveTo(x, y);
  // MOVE DEPENDING ON USER INPUT
  switch (key) {
    case 'ArrowUp':
      y -= MOVE_AMOUNT;
      break;
    case 'ArrowRight':
      x += MOVE_AMOUNT;
      break;
    case 'ArrowDown':
      y += MOVE_AMOUNT;
      break;
    case 'ArrowLeft':
      x -= MOVE_AMOUNT;
      break;
    default:
      break;
  }
  ctx.lineTo(x, y);
  ctx.stroke();
}

// WRITE A HANDLER FOR THE KEYS
function handleKey(event) {
  if (event.key.includes('Arrow')) {
    event.preventDefault();
    draw({ key: event.key });
  }
}

// CLEAR / SHAKE FUNCTION
function clearCanvas() {
  canvas.classList.add('shake');
  ctx.clearRect(0, 0, width, height);
  canvas.addEventListener(
    'animationend',
    function() {
      canvas.classList.remove('shake');
      // console.log('DONE SHAKING');
    },
    {
      once: true,
    }
  );
}

shakeButton.addEventListener('click', clearCanvas);

//  LISTEN FOR ARROW KEYS
window.addEventListener('keydown', handleKey);
