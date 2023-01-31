let d = 0;
let c = 6;

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  colorMode(RGB, 100);
  background(10);
}

function draw() {
  for (d = 0; d <= 1000; d++) {
//change the angle decimal points to get different patterns
let a = d * 137.5;
let r = c * sqrt(d);
let x = r * cos(a) + width / 2;
let y = r * sin(a) + height / 2;
	fill(d % 180, r % 90, c % 90);
	stroke(20);
	ellipse(x, y, 10, 10);
  }
}