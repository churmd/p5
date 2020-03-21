let birds = [];
let sepMult = 50;
let alignMult = 50;
let cohMult = 40;
let neighbourhood = 100;
let sepMultSlider, alignMultSlider, cohMultSlider, neighbourhoodSlider;
let neighbourhoodCheckbox;

function setup() {
  var cnv = createCanvas(windowWidth, windowHeight * 0.9);
  cnv.parent('canvas');
  cnv.style('display', 'block');

  for (let i = 0; i < 100; i++) {
    const rndX = random(0, windowWidth);
    const rndY = random(0, windowHeight * 0.9);
    birds.push(new Bird(rndX, rndY, i));
  }

  this.createControls();
}

function draw() {
  background(51);

  sepMult = sepMultSlider.value();
  alignMult = alignMultSlider.value();
  cohMult = cohMultSlider.value();
  neighbourhood = neighbourhoodSlider.value();

  birds.forEach(bird => {
    bird.update(birds, sepMult, alignMult, cohMult,
      neighbourhood, windowWidth, windowHeight * 0.9);
    bird.show(neighbourhood, neighbourhoodCheckbox.checked());
  })
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight  * 0.9);
}

function createControls() {
  sepMultSlider = createSlider(0, 100, sepMult);
  sepMultSlider.parent('sepDiv');

  alignMultSlider = createSlider(0, 100, alignMult);
  alignMultSlider.parent('alignDiv')

  cohMultSlider = createSlider(0, 100, cohMult);
  cohMultSlider.parent('cohDiv')

  neighbourhoodSlider = createSlider(0, 200, neighbourhood);
  neighbourhoodSlider.parent('neighbourhoodDiv')
  neighbourhoodSlider.style('display', 'inline-block')

  neighbourhoodCheckbox = createCheckbox('Show', false);
  neighbourhoodCheckbox.parent('neighbourhoodDiv')
  neighbourhoodCheckbox.style('display', 'inline-block')
}
