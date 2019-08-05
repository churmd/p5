class LineSegment {
  constructor(v1, v2) {
    this.x1 = v1.x;
    this.y1 = v1.y;
    this.x2 = v2.x;
    this.y2 = v2.y;
  }

  show(colour) {
    push();
    strokeWeight(1);
    stroke(colour);
    line(this.x1,this.y1,this.x2,this.y2);
    pop();
  }

  intersection(lineSegment2) {
    var tDenom = (this.x1 - this.x2) * (lineSegment2.y1 - lineSegment2.y2) - (this.y1 - this.y2) * (lineSegment2.x1 - lineSegment2.x2);

    // lines are parallel or coincident
    if (tDenom == 0) {
      return null;
    }

    var tNum = (this.x1 - lineSegment2.x1) * (lineSegment2.y1 - lineSegment2.y2) - (this.y1 - lineSegment2.y1) * (lineSegment2.x1 - lineSegment2.x2);
    var t = tNum / tDenom;

    // intersection happens else where on the line, not in the segment that has been defined
    if (t < 0 || t > 1) {
      return null;
    }

    var pX = this.x1 + (t * (this.x2 - this.x1));
    var pY = this.y1 + (t *(this.y2 - this.y1));
    return createVector(pX, pY);
  }

  normal() {
    var cX = this.y1 - this.y2;
    var cY = this.x2 - this.x1;
    return new LineSegment(createVector(this.x1, this.y1), createVector(this.x1 + cX, this.y1 + cY));
  }


  // Look at angle between at the point lines intersect
  // Try both directions on the line that was intersected and pick the smaller angle
}
