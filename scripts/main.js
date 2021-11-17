let circleX = 100
function setup() {
  createCanvas(1200, 500);
  background(200, 24, 144);
  
}
function draw() {
  
  strokeWeight(3);
  let y = 440;
  fill(mouseY);
  stroke(0, 0, 255)
  rect(0, 0, mouseY, 100, 10);
  rectMode(CENTER);
 circleX =circleX+3;
  circle(circleX, 150, 60);
}
let div = createDiv('this is some text');
div.style('font-size', '16px');
div.position(10, 0);


function mousePressed() {
  background(200, 24, 144);
  circleX = 0;
}
 /*

  ellipseMode(CENTER);
  erase(40, 80);
  ellipse(330, 430, 330, 70);
  circle(260, 40, 23);
  noStroke();
  triangle(750, 200, 900, 300, 555, 222);
  noErase();
}
  

  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  box(45, 45, 45);
  strokeWeight(4);
  stroke(160);
  rect(15, 10, 55, 55);
  noFill();
  rect(20, 20, 60, 60);
  triangle(150, 100, 400, 200, 155, 122);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  box(45, 45, 45);
}


/*
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

let x = 240;
  let y = 440;


*/