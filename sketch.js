function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  frameRate(60);
}

function draw() {
  background(0);
  // noStroke();
  fill(31, 127, 255);
  rectMode(CENTER);
  // rotate(frameCount / 20.0);
  rect(0, 0, width/3, width / 3);
}