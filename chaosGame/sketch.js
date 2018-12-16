var radius;
var points = [];
var centre;
var oldPoint;

function setup() {
  // put setup code here
  createCanvas(displayWidth, displayHeight);
  background(51);

  centre = createVector(displayWidth/2, displayHeight/2);

  var smallestDim = min(displayWidth, displayHeight);
  radius = (smallestDim * 0.9) / 2;

  var numPoints = 3;
  points = createPoints(numPoints);

  strokeWeight(8);
  stroke(255);
  for(var i = 0; i < numPoints; i++) {
    var v = points[i];
    point(v.x, v.y);
  }

  oldPoint = createVector(random(displayWidth), random(displayHeight));
}

function draw() {
  var newPoint = movePoint();
  stroke(255, 0, 255);
  strokeWeight(6);
  point(newPoint.x, newPoint.y);
  oldPoint = newPoint;
}

function createPoints(numPoints) {
  var newPoints = [];
  for(var i = 0; i < numPoints; i++) {
    var angle = i * TWO_PI / numPoints;
    // minus PI/2 so points start at the top of the screen
    angle = angle - PI / 2;
    let v = p5.Vector.fromAngle(angle);
    v.mult(radius);
    v.add(centre);
    newPoints.push(v);
  }
  return newPoints;
}

function movePoint() {
  var randomPoint = random(points);
  var x = lerp(oldPoint.x, randomPoint.x, 0.5);
  var y = lerp(oldPoint.y, randomPoint.y, 0.5);
  var newPoint = createVector(x, y);
  return newPoint;
}
