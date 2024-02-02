function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(30, 10, 90);
  square(90, 340, 50, 0);
  rectMode(CENTER);
  fill(190, 10, 86);
  rect(50, 50, 900, 90);
  point(200, 200);
  quad(20, 60, 200, 400, 400, 300, 370, 399);

  fill(20, 30, 400);
  strokeWeight(20);

  stroke(230, 30, 30);

  circle(200, 200, 200);
  colorMode(HSB);
  fill(45, 50, 400);
  strokeWeight(10);
  ellipse(200, 200, 50, 50);
  line(50, 50, 200, 300);
  fill(00, 30, 500);
  noStroke();
  triangle(20, 390, 60, 40, 60, 340);
  ellipseMode(CORNER);
  fill(255);
  ellipse(25, 25, 50, 50);
  ellipseMode(CORNERS);
  fill(100);
  ellipse(25, 25, 50, 50);
}
