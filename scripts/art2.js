let circleX = 100
let circleY = 50

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(200, 24, 144);
}
function draw() {
  strokeWeight(3);
  let y = 440;
  fill(255);
  stroke(0, 0, 255)
  rect(mouseX, mouseY, 100, 10);
  

}
let div = createDiv('this is some text');
div.style('font-size', '16px');
div.position(10, 0);


function mousePressed() {
  background(200, 24, 144);
  circleX = 0;
}
 