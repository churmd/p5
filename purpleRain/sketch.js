let dropCount = 1000;

function setup() {
  // put setup code here
  var cnv = createCanvas(windowWidth, windowHeight);
  cnv.style('display', 'block');

  drops = [];
  for(i = 0; i < dropCount; i++){
    drops[i] = new Drop();
  }
}

function draw() {
  // put drawing code here
  clear();
  
  noStroke();
  fill('purple');

  for(i = 0; i < dropCount; i++){
    drops[i].show();
    drops[i].update();
  }
}
