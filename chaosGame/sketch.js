var radius;
var points = [];
var centre;
var oldMarker;
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

  oldMarker = createVector(random(displayWidth), random(displayHeight));
}

function draw() {
  var newMarker = moveMarker();
  stroke(255, 0, 255, 100);
  strokeWeight(4);
  point(newMarker.x, newMarker.y);
  oldMarker = newMarker;
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

function moveMarker() {
  //var availablePoints = points.filter(p => p !== oldPoint);
  var availablePoints = points;
  var randomPoint = random(availablePoints);
  var x = lerp(oldMarker.x, randomPoint.x, 0.5);
  var y = lerp(oldMarker.y, randomPoint.y, 0.5);
  var newPoint = createVector(x, y);
  oldPoint = randomPoint;
  return newPoint;
}
