var symbolSize = 200;

function setup() {
  // put setup code here
  createCanvas(window.innerWidth, window.innerHeight);
  background(0);
  textSize(symbolSize);

  streams = [];
  x = 0;
  for(var i = 0; i <= (width / symbolSize); i++){
    var stream = new Stream(x);
    stream.setup();
    streams.push(stream);
    x += symbolSize;
  }
}

function draw() {
  background(0);
  streams.forEach(function(s){
    s.render();
    s.update();
  });
}

function Symbol(x, y, velocity){
  this.x = x;
  this.y = y;
  this.changeProb = random();
  this.velocity = velocity;
  this.value;

  this.setRandomSymbol = function(){
    var decimal = random(12448, 12543); //Katakana unicode range
    this.value = String.fromCharCode(decimal);
  }

  this.render = function(){
    fill(0, 255, 70);
    //print("x = " + this.x + "y = " + this.y);
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
    y = -100;
    velocity = 1;
    this.len = 2;

    for(var i = 0; i < this.len; i++){
      var sym = new Symbol(this.x, y, velocity);
      this.symbols.push(sym);
      y -= symbolSize;
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
