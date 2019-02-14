var base = 100;
var factor = 0;

function setup() {
  var cnv = createCanvas(windowWidth, windowHeight);
  cnv.style('display', 'block');
}

// Get a vector point radius distance away from the origin at the angle
// index/base scaled to 2 pi
function getIndexVector(index, base, radius) {
  let angle = map(index, 0, base, 0, TWO_PI);
  let v = p5.Vector.fromAngle(angle - PI);
  v.mult(radius);
  return v;
}

function draw() {
  background(51);

  if(factor != Number.MAX_VALUE) {
    factor = factor + 0.01;
  } else {
    factor = 0;
  }

  var radius = min(windowWidth/2, windowHeight/2);
  var outerRadius = radius * 0.95;
  var innerRadius = radius * 0.9;
  var pointSize = 10;
  var halfPointSize = pointSize / 2;

  translate(windowWidth/2, windowHeight/2);
  textSize(pointSize);

  stroke(255);
  noFill();
  circle(0, 0, innerRadius);

  fill(255);
  for(var i = 0; i < base; i++) {
    let timesResult = (i * factor) % base;

    let p1 = getIndexVector(i, base, innerRadius);
    let p2 = getIndexVector(timesResult, base, innerRadius);
    let p3 = getIndexVector(i, base, outerRadius);

    circle(p1.x, p1.y, pointSize);
    line(p1.x, p1.y, p2.x, p2.y);
    text(i, (p3.x - halfPointSize), (p3.y + halfPointSize));
  }
}


function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}
