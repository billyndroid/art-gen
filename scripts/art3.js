let color = 255;

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(color);
  }
function draw() {
    noFill();
    stroke(10, 0, 0);
    bezier(185, 20, 10, 10, 90, 90, 15, 80);

}


