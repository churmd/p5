let birds = [];

function setup() {
  var cnv = createCanvas(windowWidth, windowHeight);
  cnv.style('display', 'block');

  for (let i = 0; i < 50; i++) {
    birds.push(new Bird(random(0, windowWidth),random(0, windowHeight),i));
  }
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
