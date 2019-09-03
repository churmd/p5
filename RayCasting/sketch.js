var light;
var temp;
var temp2;
var temp3;
var walls = [];

function setup() {
  var cnv = createCanvas(windowWidth, windowHeight);
  cnv.style('display', 'block');

  light = new LightSource(windowWidth/2, windowHeight/2);
  walls.push(new LineSegment(createVector(200,100), createVector(100,800)));
  walls.push(new LineSegment(createVector(100,800), createVector(1000,800)));
  walls.push(new LineSegment(createVector(1000,100), createVector(1000,800)));
  walls.push(new LineSegment(createVector(1000,100), createVector(200,100)));
  // temp2 = new LineSegment(createVector(light.x,light.y),createVector(0,light.y));

}

function draw() {
  background(51);

  walls.forEach(wall => {
    wall.show(255);
  });

  light.show(walls);
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}
