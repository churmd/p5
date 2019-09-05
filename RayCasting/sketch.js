var light;
var walls = [];
var cnvWidth, cnvHeight;
var numRainbows = 0;

function setup() {
  cnvWidth = windowWidth;
  cnvHeight = windowHeight * 0.9;
  var cnv = createCanvas(cnvWidth, cnvHeight);
  cnv.style('display', 'block');

  light = new LightSource(cnvWidth/2, cnvHeight/2);

  var topLeft = createVector(0, 0);
  var topRight = createVector(cnvWidth-1, 0);
  var bottomLeft = createVector(0, cnvHeight-2);
  var bottomRight = createVector(cnvWidth-1, cnvHeight-2);

  walls.push(new LineSegment(topLeft, topRight));
  walls.push(new LineSegment(topRight, bottomRight));
  walls.push(new LineSegment(bottomRight, bottomLeft));
  walls.push(new LineSegment(bottomLeft, topLeft));

  for(var i = 0; i < 10; i++) {
    var x1 = random(cnvWidth);
    var y1 = random(cnvHeight);
    var x2 = random(cnvWidth);
    var y2 = random(cnvHeight);
    walls.push(new LineSegment(createVector(x1, y1), createVector(x2, y2)));
  }

  input = createInput("Enter image URL");

}

function draw() {
  background(51);

  if (mouseIsPressed) {
    var inXBounds = mouseX > 0 && mouseX < cnvWidth;
    var inYBounds = mouseY > 0 && mouseY < cnvHeight;
    if (inXBounds && inYBounds) {
      light.updatePosition(mouseX, mouseY);
    }
  }

  walls.forEach(wall => {
    wall.show(255);
  });

  light.show(walls, numRainbows);
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}
