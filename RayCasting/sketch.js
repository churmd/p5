var light;
var temp;
var temp2;

function setup() {
  var cnv = createCanvas(windowWidth, windowHeight);
  cnv.style('display', 'block');

  light = createVector(windowWidth/2, windowHeight/2);
  temp = new LineSegment(createVector(100,100), createVector(100,800));
  temp2 = new LineSegment(createVector(light.x,light.y),createVector(0,light.y));
}

function draw() {
  background(51);
  fill(255);
  ellipse(light.x, light.y, 10, 10);
  temp.show(255);
  var interect = temp.intersection(temp2);
  if(interect != null) {
    ellipse(interect.x, interect.y, 10, 10);
  }
  var temp3 = temp.normal();
  temp3.show(255);
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}
