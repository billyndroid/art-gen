let x = 200;
let y = 200;
let canvasLayer2;

function setup() {
  createCanvas(windowWidth, windowHeight);
  canvasLayer2 = createGraphics(windowWidth, windowHeight);
  canvasLayer2.clear();
  background(0);
}

function draw() {
  
  // no trails
  background(0);
  x += random(-5, 15);
  y += random(-5, 5);
	
  // trails

    canvasLayer2.fill(255, 150);
    canvasLayer2.noStroke();
    let starX = random(width);
    let starY = random(height);
    canvasLayer2.ellipse(starX, starY, 10, 10);
   
  
  image(canvasLayer2, 0, 0);
  fill(mouseX, y, 255);
  stroke(10);
  rectMode(CENTER);
  rect(x, y, x, y);

  
}