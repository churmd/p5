class Cog{

  constructor(x, y, d, index, vertical){
    this.x = x;
    this.y = y;
    this.d = d;
    this.index = index;
    this.vertical = vertical;
    this.angle = - PI / 2;
    this.updateLine();
  }

  show(){
    push();
    strokeWeight(1);
    stroke(255);
    noFill();
    ellipse(this.x, this.y, this.d, this.d);
    strokeWeight(8);
    point(this.lineStartX, this.lineStartY);
    strokeWeight(1);
    stroke(255, 50);
    line(this.lineStartX, this.lineStartY,
         this.lineEndX, this.lineEndY);
    pop();
  }

  updateLine(){
    var r = this.d / 2;
    var lineX = r * cos(this.angle);
    var lineY = r * sin(this.angle);
    this.lineStartX = this.x + lineX;
    this.lineStartY = this.y + lineY;
    if(this.vertical){
      this.lineEndX =  this.lineStartX;
      this.lineEndY = height;
    } else {
      this.lineEndX = width;
      this.lineEndY = this.lineStartY;
    }
  }

  updateAngle(){
    this.angle += 0.01 * this.index;
    this.updateLine();
  }
}
