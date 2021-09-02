import p5 from "p5";
import { number } from "prop-types";

class Point {
    constructor(p5Instance, x, y, r) {
        this.p = p5Instance;
        this.x = x;
        this.y = y;
        this.r = r;
    }

    getPos() {
        return this.p.createVector(this.x, this.y);
    }

    show() {
        this.p.push();

        this.p.fill(255);
        this.p.circle(this.x, this.y, this.r);

        this.p.pop();
    }
}

Point.proptypes = {
    p5Instance: p5,
    x: number,
    y: number,
    r: number,
};

export default Point;
