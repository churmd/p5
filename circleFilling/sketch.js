var allCircles;
var img;
var full;

function preload() {
  setImage("http://cdn.cnn.com/cnnnext/dam/assets/181010130950-australia-best-beaches-cossies-beach-cocos.jpg");
}

function setup() {
  // put setup code here
  var cnv = createCanvas(windowWidth, windowHeight);
  cnv.style('display', 'block');

  full = false;

  allCircles = [];
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
  var cutOff = 100;

  while(attempts < cutOff){
    var x = random();
    var y = random();
    var colour = color(getImageColour(x, y));
    var tempC = new MyCircle(x, y, 1, colour);

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

function setImage(url){
  loadImage(url, function(i) {
      img = i;
      img.loadPixels();
    }, function(e) {
      console.log(e);
    })
}

function getImageColour(xPerc, yPerc){
  var xPix = round(img.width * xPerc);
  var yPix = round(img.height * yPerc);

  return img.get(xPix, yPix);
}
