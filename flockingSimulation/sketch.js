let birds = [];

function setup() {
  var cnv = createCanvas(windowWidth, windowHeight);
  cnv.style('display', 'block');

  birds.push(new Bird(300,300,1));
  birds.push(new Bird(500,300,2));
  birds.push(new Bird(400,500,3));
  birds.push(new Bird(400,400,4));
}

function draw() {
  background(51);

  birds.forEach(bird => {
    bird.update(birds, windowWidth, windowHeight);
    bird.show();
  })
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}
