var allCircles;
var img;
var full;
var input;

function preload() {
    setImage("https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Tux.svg/1200px-Tux.svg.png");
}

function setup() {
  var topDiv = createDiv();
  topDiv.style('margin', '10px auto');
  var bottomDiv = createDiv();
  bottomDiv.style('margin', '10px auto');

  var cnv = createCanvas(windowWidth * 0.9, windowHeight * 0.9);
  cnv.style('display', 'block');
  cnv.style('margin-left', 'auto');
  cnv.style('margin-right', 'auto');
  // var x = (windowWidth - width) / 2;
  // var y = (windowHeight - height) / 2;
  // cnv.position(x, y);
  cnv.parent(topDiv);

  full = false;

  allCircles = [];

  input = createInput("Enter image URL");
  input.size(width / 2);
  input.changed(changeImage);
  input.style('display', 'block');
  input.style('margin-left', 'auto');
  input.style('margin-right', 'auto');
  input.parent(bottomDiv);
}

function draw() {
  background(150);

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
      allCircles = [];
    }, function(e) {
      console.log(e);
    })
}

function changeImage(){
  var url = input.value();
  console.log(url);
  input.value('');
  setImage(url);
}

function getImageColour(xPerc, yPerc){
  var xPix = round(img.width * xPerc);
  var yPix = round(img.height * yPerc);

  return img.get(xPix, yPix);
}
