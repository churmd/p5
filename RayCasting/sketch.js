var light;
var temp;
var temp2;
var temp3;
var walls = [];

function setup() {
  var cnv = createCanvas(windowWidth, windowHeight);
  cnv.style('display', 'block');

  light = new LightSource(windowWidth/2, windowHeight/2);

  var topLeft = createVector(0, 0);
  var topRight = createVector(windowWidth-1, 0);
  var bottomLeft = createVector(0, windowHeight-2);
  var bottomRight = createVector(windowWidth-1, windowHeight-2);

  walls.push(new LineSegment(topLeft, topRight));
  walls.push(new LineSegment(topRight, bottomRight));
  walls.push(new LineSegment(bottomRight, bottomLeft));
  walls.push(new LineSegment(bottomLeft, topLeft));

  for(var i = 0; i < 10; i++) {
    var x1 = random(windowWidth);
    var y1 = random(windowHeight);
    var x2 = random(windowWidth);
    var y2 = random(windowHeight);
    walls.push(new LineSegment(createVector(x1, y1), createVector(x2, y2)));
  }
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
