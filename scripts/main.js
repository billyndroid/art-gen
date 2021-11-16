// Clicking in the box toggles fullscreen on and off.
function setup() {
  createCanvas(1200, 500);
  background(200);
  noLoop();
}
function draw() {
  strokeWeight(3); 
  line(20, 140, 70, 440);
  rectMode(CORNER);
  ellipseMode(CENTER);
  strokeCap(ROUND);
  rect(0, 0, 100, 100, 10);
  rectMode(CENTER);
  rect(100, 100, 30, 40, 40);
  ellipse(330, 430, 330, 70)
  circle(260, 40, 23, 4);
  triangle(750, 200, 900, 300, 555, 222);
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