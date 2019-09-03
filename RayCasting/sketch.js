var light;
var temp;
var temp2;
var temp3;
var walls = [];

function setup() {
  var cnv = createCanvas(windowWidth, windowHeight);
  cnv.style('display', 'block');

  var topLeft = createVector(0, 0);
  var topRight = createVector(windowWidth-1, 0);
  var bottomLeft = createVector(0, windowHeight-2);
  var bottomRight = createVector(windowWidth-1, windowHeight-2);

  light = new LightSource(windowWidth/2, windowHeight/2);
  walls.push(new LineSegment(topLeft, topRight));
  walls.push(new LineSegment(topRight, bottomRight));
  walls.push(new LineSegment(bottomRight, bottomLeft));
  walls.push(new LineSegment(bottomLeft, topLeft));
}

function draw() {
  background(51);

  if (mouseIsPressed) {
    light.updatePosition(mouseX, mouseY);
  }

  walls.forEach(wall => {
    wall.show(255);
  });

  light.show(walls);
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}
