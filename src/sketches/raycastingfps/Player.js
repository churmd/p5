import p5 from "p5";
import { number } from "prop-types";

class Player {
    constructor(p5Instance, x, y, heading) {
        this.p = p5Instance;
        this.position = this.p.createVector(x, y);
        this.heading = heading;
    }

    changeHeading(offset) {
        this.heading += offset;
    }

    show() {
        this.p.push();

        this.p.stroke(255);
        this.p.fill(150);
        this.p.circle(this.position.x, this.position.y, 50);

        const headingVec = p5.Vector.fromAngle(-this.heading).mult(100);
        const headingEnd = p5.Vector.add(this.position, headingVec);

        this.p.stroke(255, 0, 0);
        this.p.line(
            this.position.x,
            this.position.y,
            headingEnd.x,
            headingEnd.y
        );

        this.p.pop();
    }
}

Player.propTypes = {
    p5Instance: p5,
    x: number,
    y: number,
    heading: number,
};

export default Player;
