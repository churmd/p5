class LightSource {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.posistion = createVector(x,y);
    this.rays = this.createRays();
  }

  createRays() {
    var rays = [];
    for(var a = 0; a < 360; a ++) {
      var dirVec = p5.Vector.fromAngle(radians(a));
      var dirFromLight = dirVec.add(this.posistion);
      var ray = new LineSegment(this.posistion, dirFromLight);
      rays.push(ray);
    }
    return rays;
  }

  updatePosition(x, y) {
    this.x = x;
    this.y = y;
    this.posistion = createVector(x,y);
    this.rays = this.createRays();
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

  show(wallList, numRainbows) {
    push();

    fill(255);
    ellipse(this.x, this.y, 10, 10);

    colorMode(HSL, 360);
    var hue = 0;
    var sat = (numRainbows == 0) ? 0 : 250;

    var rayCollisions = this.rayCollisions(wallList);
    rayCollisions.forEach(collision => {
      var ray = new LineSegment(this.posistion, collision);
      hue < 360 ? hue += numRainbows : hue = 0;
      ray.show(color(hue, sat, 200))
    });

    pop();
  }
}
