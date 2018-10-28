var cnvSize, cnv;
var numCogs, gridSize;
var diameter;
var cogWidth, cogHeight;
var cogsTop, cogsSide;
var patterns;

function setup() {
  cnvSize = 800;
  cnv = createCanvas(cnvSize, cnvSize);
  cnv.style('display', 'block');
  cnv.style('margin', 'auto');

  numCogs = 8;
  gridSize = numCogs + 1;
  diameter = cnvSize / gridSize;
  cogsTop = [];
  cogsSide = [];
  patterns = [[]];

  for(var i = 1; i < gridSize; i++){
    var xOff = diameter * (i + 0.5);
    var c = new Cog(xOff, diameter * 0.5, diameter * 0.95, i, true);
    cogsTop.push(c);
  }

  for(var i = 1; i < gridSize; i++){
    var yOff = diameter * (i + 0.5);
    var c = new Cog(diameter * 0.5, yOff, diameter * 0.95, i, false);
    cogsSide.push(c);
  }

  for(var i = 1; i < gridSize; i++){
    patterns[i] = [];
    for(var j = 1; j < gridSize; j++){
      patterns[i][j] = new Set();
    }
  }
}

function draw() {
  clear();
  background(51);

  cogsTop.forEach(function(c) {
    cogsSide.forEach(function(c2){
      var l1S = [c.lineStartX, c.lineStartY];
      var l1E = [c.lineEndX, c.lineEndY];
      var l2S = [c2.lineStartX, c2.lineStartY];
      var l2E = [c2.lineEndX, c2.lineEndY];
      var x = math.intersect(l1S, l1E, l2S, l2E);
      patterns[c.index][c2.index].add(x);
    });
  });

  cogsTop.forEach(function(c) {
    c.show();
    c.updateAngle();
  });

  cogsSide.forEach(function(c) {
    c.show();
    c.updateAngle();
  });

  for(var i = 1; i < gridSize; i++){
    for(var j = 1; j < gridSize; j++){
      push();
      stroke(255);
      strokeWeight(1);
      noFill();
      beginShape();
      patterns[i][j].forEach(x => {
        vertex(x[0], x[1]);
      });
      endShape();
      pop();
    }
  }
}
