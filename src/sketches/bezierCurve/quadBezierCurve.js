import p5 from "p5";
import { instanceOf } from "prop-types";
import Point from "./Point";

class QuadBezierCurve {
    constructor(p5Instance, pointA, pointB, pointC) {
        this.p = p5Instance;
        this.pointA = pointA;
        this.pointB = pointB;
        this.pointC = pointC;
        this.iterations = 10;
        this.curve = this.createCurve();
    }

    show() {
        this.curve = this.createCurve();

        this.p.push();

        this.p.noFill();
        this.p.stroke(255);
        this.p.strokeWeight(5);

        this.curve.forEach((curvePoint) => {
            this.p.circle(curvePoint.x, curvePoint.y, 10);
        });

        this.pointA.show();
        this.pointB.show();
        this.pointC.show();

        this.p.pop();
    }

    createCurve() {
        let curve = [];

        const curveIncrements = 1 / this.iterations;
        for (let i = 0; i < this.iterations; i++) {
            const curvePerc = i * curveIncrements;
            const l1 = this.lerpPoint(this.pointA, this.pointB, curvePerc);
            const l2 = this.lerpPoint(this.pointB, this.pointC, curvePerc);
            const curvePoint = p5.Vector.lerp(l1, l2, curvePerc);
            curve[i] = curvePoint;
        }

        return curve;
    }

    lerpPoint(p1, p2, perc) {
        return p5.Vector.lerp(p1.getPos(), p2.getPos(), perc);
    }
}

QuadBezierCurve.proptypes = {
    p5Instance: p5,
    pointA: instanceOf(Point),
    pointB: instanceOf(Point),
    pointC: instanceOf(Point),
};

export default QuadBezierCurve;
