import p5 from "p5";
import { number } from "prop-types";
import { mod } from "../../constants/Mod";

class Player {
    constructor(p5Instance, x, y, heading) {
        this.p = p5Instance;
        this.position = this.p.createVector(x, y);
        this.heading = heading;
    }

    changeHeading(offset) {
        this.heading += offset;
        this.heading = mod(this.heading, this.p.TWO_PI);
    }

    moveUp(amount) {
        this.position.add(this.p.createVector(0, -amount));
    }

    moveDown(amount) {
        this.position.add(this.p.createVector(0, amount));
    }

    moveLeft(amount) {
        this.position.add(this.p.createVector(-amount, 0));
    }

    moveRight(amount) {
        this.position.add(this.p.createVector(amount, 0));
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
