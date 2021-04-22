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

        if (this.heading >= this.p.TWO_PI) {
            this.heading -= this.p.TWO_PI;
        }

        if (this.heading < 0) {
            this.heading += this.p.TWO_PI;
        }
    }

    getPixelXY(blockSize) {
        const pixelX = this.p.round(this.position.x * blockSize);
        const pixelY = this.p.round(this.position.y * blockSize);
        return this.p.createVector(pixelX, pixelY);
    }

    show(blockSize) {
        const pixelPos = this.getPixelXY(blockSize);

        this.p.push();

        this.p.stroke(255);
        this.p.fill(150);
        this.p.circle(pixelPos.x, pixelPos.y, 50);

        const headingVec = p5.Vector.fromAngle(-this.heading).mult(100);
        const headingEnd = p5.Vector.add(pixelPos, headingVec);

        this.p.stroke(255, 0, 0);
        this.p.line(pixelPos.x, pixelPos.y, headingEnd.x, headingEnd.y);

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
