// Import stylesheets
import './style.css';

//select the elements on the page, canvas shake button
const canvas = document.querySelector('#etch-a-sketch');
const ctx = canvas.getContext('2d'); // ctx short for for context
const shakebutton = document.querySelector('.shake');

const MOVE_AMOUNT = 10;

//setup our canvas for drawing

const {width, height } = canvas; // a var called height and width from the same props on our canvas


// create a radom x and y starting points for drawing
let x = Math.floor(Math.random() * width); 
let y = Math.floor(Math.random() * height); 

ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 15;

let hue = 0;
ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
ctx.beginPath(); // drawing starts
ctx.moveTo(x, y);
ctx.lineTo(x, y);
ctx.stroke();


// write a draw function
function draw({key}) {
  hue += 1;
  ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
  console.log(key);
  //path starts
  ctx.beginPath();
  ctx.moveTo(x,y);
  //move x & y based on user input
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

//write a handler for the keys
function handleKey(e) {
  if (e.key.includes('Arrow')){
    e.preventDefault();
    draw({key: e.key});
  }
}

//clear with shake button
function clearCanvas(){
  canvas.classList.add('shake');
  ctx.clearRect(0,0,width,height);
  canvas.addEventListener('animationend', function() {
      canvas.classList.remove('shake');
  }, { once: true });
}

// listen for arrow keys
window.addEventListener('keydown', handleKey);
shakebutton.addEventListener('click', clearCanvas);
console.log(handleKey);