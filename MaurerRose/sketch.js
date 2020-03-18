let cnvWidth, cnvHeight;
let n = 1;
let d = 0;
let maxN = 20;
let maxD = 360;
let play = true;
let size;
let nSlider, dSlider;

function setup() {
  cnvWidth = windowWidth;
  cnvHeight = windowHeight * 0.9;
  var cnv = createCanvas(cnvWidth, cnvHeight);
  cnv.style('display', 'block');
  size = min(cnvWidth / 2, cnvHeight / 2) - 2;

  createControls();
}

function draw() {
  background(51);

  push();
  translate(cnvWidth / 2, cnvHeight / 2);
  drawMaurerRose();
  drawRose();
  pop();

  if (play) {
    if (n > maxN) {
      n = 1;
      d = 0;
    } else if (d < maxD) {
      d += 0.5;
    } else {
      d = 0;
      n++;
    }
    nSlider.value(n);
    dSlider.value(d);
  } else {
    n = nSlider.value();
    d = dSlider.value();
  }

}

function drawRose() {
  push();
  angleMode(RADIANS);
  noFill();
  strokeWeight(2);
  stroke(255, 0 ,0);
  beginShape();
  for (let i = 0; i < TWO_PI; i += TWO_PI / 360) {
    let r = size * sin(n * i);
    vertexFromPolar(r, i);
  }
  endShape();
  pop();
}

function drawMaurerRose() {
  push();
  angleMode(DEGREES);
  noFill();
  strokeWeight(2);
  stroke(0, 0 ,255);
  beginShape();
  for (let i = 0; i < 361; i ++) {
    let k = i * d;
    let r = size * sin(n * k);
    vertexFromPolar(r, k);
  }
  endShape();
  pop();
}

function vertexFromPolar(r, theta) {
  let x = r * cos(theta);
  let y = r * sin(theta);
  return vertex(x, y);
}

function createControls() {
  let controls = createDiv();

  let sliderDiv = createDiv();
  sliderDiv.style('width', '50%');
  sliderDiv.style('display', 'inline-block');
  sliderDiv.style('text-align', 'center');
  sliderDiv.parent(controls);

  let nDiv = createDiv('N value');
  nDiv.parent(sliderDiv);

  nSlider = createSlider(1, maxN, n, 1);
  nSlider.parent(nDiv);

  let dDiv = createDiv('D value');
  dDiv.parent(sliderDiv);

  dSlider = createSlider(0, maxD, d, 1);
  dSlider.parent(dDiv);

  let buttonDiv = createDiv();
  buttonDiv.style('width', '50%');
  buttonDiv.style('display', 'inline-block');
  buttonDiv.style('text-align', 'center');
  buttonDiv.parent(controls);

  let pauseButton = createButton('Pause');
  pauseButton.parent(buttonDiv);
  pauseButton.mousePressed(() => {
    play = !play
    let text = play ? 'Pause' : 'Play';
    pauseButton.html(text);
  });

  let resetButton = createButton('Reset');
  resetButton.parent(buttonDiv);
  resetButton.mousePressed(() => {
    n = 1;
    d = 0;
  });
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}
