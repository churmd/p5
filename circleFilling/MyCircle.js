class MyCircle{

  constructor(x, y, r, colour){
    this.x = x;
    this.y = y;
    this.d = r * 2;
    this.colour = colour;
    this.growing = true;
  }

  show(){
    push();
    noStroke();
    fill(this.colour);
    ellipse(this.getPixelX(), this.getPixelY(), this.getDiameter(), this.getDiameter());
    pop();
  }

  grow(){
    if(this.growing){
      this.d = this.d + 0.3;
    }
  }

  getPixelX(){
    return this.x * width;
  }

  getPixelY(){
    return this.y * height;
  }

  getDiameter(){
    return this.d;
  }

  getRadius(){
    return this.getDiameter() / 2;
  }
}
