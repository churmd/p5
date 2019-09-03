class LightSource {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.posistion = createVector(x,y);
    this.rays = [];

    for(var a = 0; a < 2*PI; a += PI/128) {
      var dirVec = p5.Vector.fromAngle(a);
      var dirFromLight = dirVec.add(this.posistion);
      var ray = new LineSegment(this.posistion, dirFromLight);
      this.rays.push(ray);
    }
  }

  rayCollisions(wallList) {
    var collisions = [];

    this.rays.forEach(ray => {
      var closest = null;
      var closestDist = Infinity;
      wallList.forEach(wall => {
        var intersect = wall.intersection(ray);
        if(intersect != null) {
          var d = dist(this.x, this.y, intersect.x, intersect.y);
          if(d < closestDist) {
            closestDist = d;
            closest = intersect;
          }
        }
      })
      if (closest != null) {
        collisions.push(closest);
      }
    });

    return collisions;
  }

  show(wallList) {
    push();

    fill(255);
    ellipse(this.x, this.y, 10, 10);

    var rayCollisions = this.rayCollisions(wallList);
    rayCollisions.forEach(collision => {
      var ray = new LineSegment(this.posistion, collision);
      ray.show(color(255, 50))
      // line(this.x, this.y, collision.x, collision.y);
    });

    pop();
  }
}
