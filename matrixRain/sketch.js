var numStreams = 50;
var symbolSize;

function setup() {
  // put setup code here
  var cnv = createCanvas(windowWidth, windowHeight);
  cnv.style('display', 'block');
  background(0);

  symbolSize = width / numStreams;
  textSize(symbolSize);

  streams = [];
  x = 0;
  for(var i = 0; i <= numStreams; i++){
    var stream = new Stream(x);
    stream.setup();
    streams.push(stream);
    x += symbolSize;
  }
}

function draw() {
  background(0, 100);
  streams.forEach(function(s){
    s.render();
    s.update();
  });
}

function Symbol(x, y, velocity, white){
  this.x = x;
  this.y = y;
  this.changeProb = random(0.5, 1);
  this.velocity = velocity;
  this.value;
  this.white = white;

  this.setRandomSymbol = function(){
    var decimal = random(12448, 12543); //Katakana unicode range
    this.value = String.fromCharCode(decimal);
  }

  this.render = function(){
    if(this.white){
      fill(180, 255, 180);
    } else {
      fill(0, 255, 70);
    }
    text(this.value, this.x, this.y);
  }

  this.update = function() {
    if(random() > this.changeProb){
      this.setRandomSymbol();
    }
    if(this.y > height){
      this.y = 0;
    } else {
      this.y += this.velocity;
    }
  }
}

function Stream(x){
  this.x = x;
  this.len;
  this.symbols = [];

  this.setup = function() {
    var y = random(-100, -1000);
    var velocity = random(1,10);
    this.len = random(5, 20);
    var white = random([true, false]);

    for(var i = 0; i < this.len; i++){
      var sym = new Symbol(this.x, y, velocity, white);
      this.symbols.push(sym);
      y -= symbolSize;
      white = false;
    }
  }

  this.update = function(){
    for(i = 0; i < this.len; i++){
      this.symbols[i].update();
    }
  }

  this.render = function(){
    for(i = 0; i < this.len; i++){
      this.symbols[i].render();
    }
  }
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}
