// Clicking in the box toggles fullscreen on and off.
function setup() {
  createCanvas(1200, 500);
  background(200);
  noLoop();
}
function draw() {
  strokeWeight(6); // Thicker
 line(20, 40, 80, 40);
 ellipse(20, 50, 50, 20);
}



function mousePressed() {
  if (mouseX > 0 && mouseX < 100 && mouseY > 0 && mouseY < 100) {
    let fs = fullscreen();
    fullscreen(!fs);
    
  }
}
for (let y = 0; y < 100; y++) {
let x = randomGaussian(10, 15);
let r = random(-50, 50);
let words = ['apple', 'bear', 'cat', 'dog'];
let word = random(words);
text(word, 10, 50);
line(50, r, x, y);
}