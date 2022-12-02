function setup() {
  createCanvas(600, 600);
  background(10);
}

function draw() {

  let l = 500;
  // Place at center
  let x = width / 2 - l / 2;
  let y = height / 2 + l / 2;

  noFill();
  stroke(255);
  sierpinskiTriangle(x, y, l);

  // Execute sierpinskiChaos for 10 milliseconds
  // if (frameCount < 10) {
  //   sierpinskiChaos(x, y, x + l, y, x + l / 2, y - l);
  // }

  // Execute sierpinskiChaos for unlimited time
  // sierpinskiChaos(x, y, x + l, y, x + l / 2, y - l);
}

function sierpinskiTriangle(x, y, l) {
  // Base triangle 
  triangle(x, y, x + l, y, x + l / 2, y - l);

  // Recursion to draw the next generation
  if (l > 5) {
    sierpinskiTriangle(x, y, l / 2);
    sierpinskiTriangle(x + l/2, y, l/2);
    sierpinskiTriangle(x + l/4, y - l/2, l/2)
  }
}

function sierpinskiChaos(x1, y1, x2, y2, x3, y3) {
  // Corners of the triangle
  let p1 = {
    x: x1,
    y: y1
  },
  p2 = {
    x: x2,
    y: y2
  },
  p3 = {
    x: x3,
    y: y3
  };

  let corners = [p1, p2, p3];

  noFill();
  stroke(255);
  triangle(x1, y1, x2, y2, x3, y3);

  // Get a random point inside the triangle
  let p = {
    x: random(x1, x2),
    y: random(y3, y1)
  };

  // Draw the point
  stroke(255);
  point(p.x, p.y);

  // Draw the next generation
  for (let i = 0; i < 10000; i++) {
    let nextCorner = random(corners);
    p.x = (p.x + nextCorner.x) / 2;
    p.y = (p.y + nextCorner.y) / 2;
    point(p.x, p.y);
  }

}