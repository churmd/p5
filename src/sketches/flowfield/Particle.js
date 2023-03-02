import p5 from "p5";
import { instanceOf, number } from "prop-types";

class Particle {
    /**
     * @param {p5} p5Instance
     * @param {Number} x
     * @param {Number} y
     */
    constructor(p5Instance, x, y) {
        this.p = p5Instance;
        this.position = this.p.createVector(x, y);
        this.velocity = this.p.createVector(0, 0);
    }

    show() {
        this.p.push();

        this.p.circle(this.position.x, this.position.y, 20);

        this.p.pop();
    }

    /**
     * @param {p5.Vector} velocity
     */
    addVelocityAndMove(velocity) {
        this.velocity = this.velocity.add(velocity);
        this.velocity.normalize();
        this.position = this.position.add(this.velocity);
    }
}

Particle.prototypes = {
    p5Instance: instanceOf(p5),
    x: number,
    y: number,
};

export default Particle;
