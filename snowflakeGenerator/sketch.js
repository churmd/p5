const numBranches = 6;
const pointRadius = 5;
let snowflakeBranch = [];
let point;

function setup() {
  var cnv = createCanvas(windowWidth, windowHeight);
  cnv.style('display', 'block');
  point = createVector(windowWidth/2, 0);
}

function draw() {
  background(51);

  translate(windowWidth/2, windowHeight/2);
  addNextPoint();
  snowflakeBranch.forEach(point => {
    showPoint(point);
  })


  // fill(200,0,0);
  // ellipse(0,020,20);
  // fill(255,255,255);
  //
  // randomWalkPoint(point, TWO_PI / (numBranches * 2));
  // if(point.x < 1 || isIntersecting(point)) {
  //   snowflakeBranch.push(point);
  //   point = createVector(windowWidth/2, 0);
  // }
  //
  // showPoint(point);
  // snowflakeBranch.forEach(point => {
  //   showPoint(point);
  // })

  // let point2 = createVector(windowWidth/2, 0);
  // snowflakeBranch.push(point2);
  // console.log(isIntersecting(point));
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}

function showPoint(point) {
  ellipse(point.x, point.y, pointRadius * 2, pointRadius * 2);
}

function addNextPoint() {
  let point = createVector(windowWidth/2, 0);
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
  }
}

function isIntersecting(point) {
  for (let i = 0; i < snowflakeBranch.length; i++) {
    let existingPoint = snowflakeBranch[i];
    let distanceBetween = dist(existingPoint.x, existingPoint.y, point.x, point.y);
    if (distanceBetween <= pointRadius * 2) {
      console.log("intersecting");
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
// console.log("constrainedAngle " + angle);
  let magnitude = point.mag();
  let point2 = p5.Vector.fromAngle(angle);
  point2.setMag(magnitude);

  point.x = point2.x;
  point.y = point2.y;
}
