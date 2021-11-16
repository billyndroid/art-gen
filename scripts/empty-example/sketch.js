let detailX;
// slide to see how detailX works
function setup() {
  createCanvas(1350, 500, WEBGL);
  detailX = createSlider(3, 24, 3);
  detailX.position(10, height + 5);
  detailX.style('width', '80px');
}

function draw() {
  background(205, 105, 94);
  rotateY(millis() / 1000);
  sphere(40, detailX.value(), 16);
}