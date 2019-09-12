var light;
var walls = [];
var cnvWidth, cnvHeight;
var numRainbowsSlider;
var numRainbows = 0;

function setup() {
  cnvWidth = windowWidth;
  cnvHeight = windowHeight * 0.9;
  var cnv = createCanvas(cnvWidth, cnvHeight);
  cnv.style('display', 'block');

  light = new LightSource(cnvWidth/2, cnvHeight/2);

  createWalls();

  createControls();
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

  numRainbows = numRainbowsSlider.value();
  light.show(walls, numRainbows);
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}

function createWalls() {
  walls = [];

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
}

function createControls() {
  var controls = createDiv();

  var label = createDiv('Number of Rainbows');
  label.style('width', '70%');
  label.style('display', 'inline-block');
  label.style('text-align', 'center');
  label.parent(controls);

  var sliderDiv = createDiv();
  sliderDiv.parent(label);

  numRainbowsSlider = createSlider(0, 20, numRainbows, 1);
  numRainbowsSlider.size(cnvWidth/2);
  numRainbowsSlider.parent(sliderDiv);

  var buttonDiv = createDiv();
  buttonDiv.style('width', '30%');
  buttonDiv.style('display', 'inline-block');
  buttonDiv.parent(controls);

  var randomiseWalls = createButton('Randomise Walls');
  randomiseWalls.parent(buttonDiv);
  randomiseWalls.mousePressed(createWalls);
}
