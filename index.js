// Import stylesheets
import './style.css';

//select the elements on the page, canvas shake button
const canvas = document.querySelector('#etch-a-sketch');
const ctx = canvas.getContext('2d'); // ctx short for for context
const shakebutton = document.querySelector('.shake');

//setup our canvas for drawing

const {width, height } = canvas; // a var called height and width from the same props on our canvas

// create a radom x and y starting points for drawing

ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 15;

ctx.beginPath(); // drawing starts
ctx.moveTo(200, 200);
ctx.lineTo(200, 200);
ctx.stroke();


// write a draw function


//write a handler for the keys


//clear with shake button



// listen for arrow keys