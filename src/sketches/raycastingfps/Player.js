import p5 from "p5";
import { number } from "prop-types";
import { mod } from "../../constants/Mod";

class Player {
    constructor(p5Instance, x, y, heading) {
        this.p = p5Instance;
        this.position = this.p.createVector(x, y);
        this.heading = heading;
        this.walkSpeed = 0.05;
        this.turnSpeed = 0.075;
    }

    turnRight() {
        this.heading -= this.turnSpeed;
        this.heading = mod(this.heading, this.p.TWO_PI);
    }

    turnLeft() {
        this.heading += this.turnSpeed;
        this.heading = mod(this.heading, this.p.TWO_PI);
    }

    moveForward() {
        let dir = p5.Vector.fromAngle(-this.heading);
        dir.mult(this.walkSpeed);
        this.position.add(dir);
    }

    moveBackward() {
        let dir = p5.Vector.fromAngle(-this.heading);
        dir.mult(-this.walkSpeed);
        this.position.add(dir);
    }

    moveLeft() {
        let dir = p5.Vector.fromAngle(-(this.heading + this.p.HALF_PI));
        dir.mult(this.walkSpeed);
        this.position.add(dir);
    }

    moveRight(amount) {
        let dir = p5.Vector.fromAngle(-(this.heading - this.p.HALF_PI));
        dir.mult(this.walkSpeed);
        this.position.add(dir);
    }

    getPixelXY(blockSize) {
        const pixelX = this.p.round(this.position.x * blockSize);
        const pixelY = this.p.round(this.position.y * blockSize);
        return this.p.createVector(pixelX, pixelY);
    }

    show(blockSize) {
        const pixelPos = this.getPixelXY(blockSize);

        this.p.push();

        this.p.stroke(0);
        this.p.fill(255);
        this.p.translate(pixelPos.x, pixelPos.y);
        this.p.rotate(-(this.heading - this.p.HALF_PI));

        this.p.triangle(-10, 10, 0, -10, 10, 10);

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
