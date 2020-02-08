class Bird {
  constructor(x, y, id) {
    this.uuid = id;
    this.pos = createVector(x, y);
    this.r = 5;
    this.neighbourhood = 100;
    this.heading = createVector(random(-1, 1),random(-1, 1));
  }

  show() {
    push();
    fill(255);
    ellipse(this.pos.x, this.pos.y, this.r * 2, this.r * 2);
    pop();
  }

  update(birds, maxX, maxY) {
    const otherBirds = birds.filter(bird => {
      const distance = dist(this.pos.x, this.pos.y, bird.pos.x, bird.pos.y);
      return bird.uuid !== this.uuid && distance < this.neighbourhood;
    })

    const sepHeading = this.separate(otherBirds).mult(2);
    const alignHeading = this.align(otherBirds).mult(1);
    const cohHeading = this.cohesion(otherBirds).mult(1);

    this.heading.add(sepHeading);
    this.heading.add(alignHeading);
    this.heading.add(cohHeading);
    this.heading.normalize();

    this.pos.add(this.heading);
    this.keepInBounds(0, 0, maxX, maxY);
  }

  // Move away from other birds in the flock to avoid crowding
  separate(birds) {
    let acc = createVector(0, 0);

    birds.forEach(bird => {
        let headingToBird = p5.Vector.sub(bird.pos, this.pos);
        acc.add(headingToBird);
    })

    acc.normalize();
    return acc.mult(-1);
  }

  // Steer towards the local heading of the flock
  align(birds) {
    let acc = createVector(0, 0);

    birds.forEach(bird => {
      acc.add(bird.heading);
    })

    return acc.normalize();
  }

  // Move towards the center of the local flock
  cohesion(birds) {
    let acc = createVector(0, 0);

    if (birds.length == 0) {
      return acc;
    }

    birds.forEach(bird => {
      acc.add(bird.pos)
    })

    const avgPos = p5.Vector.div(acc, birds.length);
    const headingToAvgPos = p5.Vector.sub(avgPos, this.pos);
    return headingToAvgPos.normalize();
  }

  keepInBounds(minX, minY, maxX, maxY) {
    if (this.pos.x < minX) {
      this.pos.x = minX;
    }

    if (this.pos.y < minY) {
      this.pos.y = minY;
    }

    if (this.pos.x > maxX) {
      this.pos.x = maxX;
    }

    if (this.pos.y > maxY) {
      this.pos.y = maxY;
    }

    let inverseHeading = p5.Vector.mult(this.heading, -1);
    this.heading = p5.Vector.add(p5.Vector.mult(this.heading, 0.6), p5.Vector.mult(inverseHeading, 0.4))
  }
}
