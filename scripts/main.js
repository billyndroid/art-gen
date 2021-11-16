// Clicking in the box toggles fullscreen on and off.
function setup() {
  createCanvas(1200, 100);
    background(200);
  }
  function mousePressed() {
    if (mouseX > 0 && mouseX < 100 && mouseY > 0 && mouseY < 100) {
      let fs = fullscreen();
      fullscreen(!fs);
      
    }
  }
 function draw() {
     strokeWeight(6); // Thicker
    line(20, 40, 80, 40);
    ellipse(20, 50, 50, 20);
    sphere(40);
 }