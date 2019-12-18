const numBranches = 6;
const pointRadius = 3;
const secondsToKeepFinishedSnowflake = 3;
let snowflakeBranch;
let newestPoint;
let sameSnowflakeCounter;

function setup() {
  var cnv = createCanvas(windowWidth, windowHeight);
  cnv.style('display', 'block');
  frameRate(10);
  clearSnowflake();
}

function draw() {
  let countBeforeClearing = getFrameRate() * secondsToKeepFinishedSnowflake;
  if (sameSnowflakeCounter > countBeforeClearing) {
    clearSnowflake();
  }

  let pointAdded = addNextPoint();
  if (!pointAdded) {
    sameSnowflakeCounter++;
    return;
  }

  // Center drawing on screen
  // rotate so top and bottom snowflake branches are vertically aligned
  translate(windowWidth/2, windowHeight/2);
  rotate(TWO_PI / (numBranches * 2) );

  let rotationAmount = TWO_PI / numBranches;
  for(let i = 0; i < numBranches; i++) {
    rotate(rotationAmount);

    showPoint(newestPoint);

    push();
    scale(1, -1);
    showPoint(newestPoint);
    pop();
  }
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
  clearSnowflake();
}

// Clears the screen and resets the snowflake branch to be empty.
function clearSnowflake() {
  background(51);
  snowflakeBranch = [];
  newestPoint = null;
  sameSnowflakeCounter = 0;
}

function showPoint(point) {
  ellipse(point.x, point.y, pointRadius * 2, pointRadius * 2);
}

// Add another point to the snowflake branch, if there is space on screen.
// Returns true if a new point was added the the branch, false if not.
function addNextPoint() {
  let minWindowSize = min(windowWidth/2, windowHeight/2)
  let point = createVector(minWindowSize, 0);
  let counter = 0;

  while(true) {
    randomWalkPoint(point, TWO_PI / (numBranches * 2));
    if(point.x < 1 || isIntersecting(point)) {
      break;
    }
    counter++;
  }

  if (counter > 0) {
    snowflakeBranch.push(point);
    newestPoint = point;
    return true;
  } else {
    return false;
  }
}

// Check if a point is intersecting with any of the existing points in the snowflake branch
function isIntersecting(point) {
  for (let i = 0; i < snowflakeBranch.length; i++) {
    let existingPoint = snowflakeBranch[i];
    let distanceBetween = dist(existingPoint.x, existingPoint.y, point.x, point.y);
    if (distanceBetween <= pointRadius * 2) {
      return true;
    }
  }
  return false;
}

// Walk the point to the left keeping it within the angle specified from the origin
function randomWalkPoint(point, angleThreshold) {
  point.x -= 1;
  point.y += random(-3, 3);

  let angle = point.heading();
  angle = constrain(angle, 0, angleThreshold);

  let magnitude = point.mag();
  let point2 = p5.Vector.fromAngle(angle);
  point2.setMag(magnitude);

  point.x = point2.x;
  point.y = point2.y;
}
