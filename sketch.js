function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(10);

  let l = 500;
  let x = width / 2 - l / 2;
  let y = height / 2 + l / 2;

  stroke(255);
  noFill();
  seierpinskiTriangle(x, y, l);
}

function seierpinskiTriangle(x, y, l) {
  // Base triangle with generation point in the center
  triangle(x, y, x + l, y, x + l / 2, y - l);

  // Recursion to draw the next generation
  if (l > 5) {
    seierpinskiTriangle(x, y, l / 2);
    seierpinskiTriangle(x + l/2, y, l/2);
    seierpinskiTriangle(x + l/4, y - l/2, l/2)
  }
  
}