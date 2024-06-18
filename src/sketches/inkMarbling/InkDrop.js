import p5 from "p5";
import { instanceOf, number } from "prop-types";

class InkDrop {
    /**
     * @param {p5} p5Instance
     * @param {Number} centerX
     * @param {Number} centerY
     * @param {Number} radius
     */
    constructor(p5Instance, centerX, centerY, radius) {
        this.p = p5Instance;
        this.center = this.p.createVector(centerX, centerY);
        this.r = radius;
    }

    show() {
        this.p.push();
        this.p.noStroke();
        this.p.fill(255);
        this.p.circle(this.center.x, this.center.y, this.r)
        this.p.pop();

    }


}

InkDrop.prototypes = {
    p5Instance: instanceOf(p5),
    centerX: number,
    centerY: number,
    radius: number,
};

export default InkDrop;
