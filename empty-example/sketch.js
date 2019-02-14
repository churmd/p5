function setup() {
  var cnv = createCanvas(windowWidth, windowHeight);
  cnv.style('display', 'block');
}

function draw() {
  background(51);
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}
