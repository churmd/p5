import p5 from "p5";

export default class Bird {
    constructor(p, x, y, id) {
        this.p = p;
        this.uuid = id;
        this.pos = this.p.createVector(x, y);
        this.r = 5;
        this.heading = this.p.createVector(
            this.p.random(-1, 1),
            this.p.random(-1, 1)
        );
    }

    show(neighbourhood, showNeighbourhood) {
        this.p.push();

        this.p.translate(this.pos.x, this.pos.y);
        this.p.rotate(this.heading.heading() + this.p.PI / 2);

        if (showNeighbourhood) {
            this.p.push();
            this.p.fill(255, 50);
            this.p.noStroke();
            this.p.ellipse(0, 0, neighbourhood * 2, neighbourhood * 2);
            this.p.pop();
        }

        this.p.fill(255);
        this.p.triangle(-10, 10, 0, -10, 10, 10);

        this.p.pop();
    }

    update(birds, sepMult, alignMult, cohMult, neighbourhood, maxX, maxY) {
        const otherBirds = birds.filter((bird) => {
            const distance = this.p.dist(
                this.pos.x,
                this.pos.y,
                bird.pos.x,
                bird.pos.y
            );
            return bird.uuid !== this.uuid && distance < neighbourhood;
        });

        const sepHeading = this.separate(otherBirds).mult(sepMult);
        const alignHeading = this.align(otherBirds).mult(alignMult);
        const cohHeading = this.cohesion(otherBirds).mult(cohMult);

        const desiredHeading = this.p.createVector(0, 0);
        desiredHeading.add(sepHeading);
        desiredHeading.add(alignHeading);
        desiredHeading.add(cohHeading);
        desiredHeading.normalize();

        this.changeHeading(desiredHeading);

        this.pos.add(this.heading);
        this.keepInBounds(0, 0, maxX, maxY);
    }

    // Move away from other birds in the flock to avoid crowding
    separate(birds) {
        let acc = this.p.createVector(0, 0);

        birds.forEach((bird) => {
            let headingToBird = p5.Vector.sub(bird.pos, this.pos);
            acc.add(headingToBird);
        });

        acc.normalize();
        return acc.mult(-1);
    }

    // Steer towards the local heading of the flock
    align(birds) {
        let acc = this.p.createVector(0, 0);

        birds.forEach((bird) => {
            acc.add(bird.heading);
        });

        return acc.normalize();
    }

    // Move towards the center of the local flock
    cohesion(birds) {
        let acc = this.p.createVector(0, 0);

        if (birds.length === 0) {
            return acc;
        }

        birds.forEach((bird) => {
            acc.add(bird.pos);
        });

        const avgPos = p5.Vector.div(acc, birds.length);
        const headingToAvgPos = p5.Vector.sub(avgPos, this.pos);
        return headingToAvgPos.normalize();
    }

    keepInBounds(minX, minY, maxX, maxY) {
        const closestInbounds = this.pos.copy();

        if (this.pos.x < minX) {
            closestInbounds.x = minX;
        }

        if (this.pos.y < minY) {
            closestInbounds.y = minY;
        }

        if (this.pos.x > maxX) {
            closestInbounds.x = maxX;
        }

        if (this.pos.y > maxY) {
            closestInbounds.y = maxY;
        }

        if (!closestInbounds.equals(this.pos)) {
            const headingToInbounds = p5.Vector.sub(closestInbounds, this.pos);
            this.changeHeading(headingToInbounds);
        }
    }

    changeHeading(desiredHeading) {
        const desiredHeadingRatio = 0.1;
        const currentHeadingRatio = 1 - desiredHeadingRatio;
        const desiredPart = p5.Vector.mult(desiredHeading, desiredHeadingRatio);
        const currentPart = p5.Vector.mult(this.heading, currentHeadingRatio);
        const newHeading = currentPart.add(desiredPart);
        newHeading.normalize();
        this.heading = newHeading;
    }
}
