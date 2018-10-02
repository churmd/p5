var allCircles;
var img;
var full;

function preload() {
  //img = loadImage('fdsasdfsdf.jpg');
}

function setup() {
  // put setup code here
  var cnv = createCanvas(windowWidth, windowHeight);
  cnv.style('display', 'block');

  full = false;

  allCircles = [];
  var c1 = new MyCircle(0.5, 0.5, 50, color(100, 10, 10));
  allCircles.push(c1);
}

function draw() {
  background(51);

  if(full){
    allCircles = [];
    full = false;
  } else {
    var circleAdded = addCircle();
    full = !circleAdded
  }

  for(var i = 0; i < allCircles.length; i++){
    var c = allCircles[i];
    c.growing = canGrow(c);
    c.grow();
    c.show();
  }
}

function addCircle(){
  var attempts = 0;
  var cutOff = 10;

  while(attempts < cutOff){
    var x = random();
    var y = random();
    var tempC = new MyCircle(x, y, 1, color("white"));

    if(!collision(tempC)){
      allCircles.push(tempC);
      return true;
    }
  }

  return false;
}

function collision(circle){
  for(var i = 0; i < allCircles.length; i++){
    var c = allCircles[i];
    if(circle == c){
      continue;
    } else {
      var distance = int(dist(circle.getPixelX(), circle.getPixelY(),
                              c.getPixelX(), c.getPixelY()));
      var totalR = circle.getRadius() + c.getRadius();
      if(distance <= totalR){
        return true;
      }
    }
  }
  return false;
}

function outOfBounds(circle){
  return (circle.getPixelX() - circle.getRadius()) < 0 ||
         (circle.getPixelX() + circle.getRadius() > width) ||
         (circle.getPixelY() - circle.getRadius()) < 0 ||
         (circle.getPixelY() + circle.getRadius() > height);
}

function canGrow(circle){
  var oob = outOfBounds(circle);
  if(oob){
    return false;
  }

  var isCollision = collision(circle);
  if(isCollision){
    return false;
  }

  return true;
}
