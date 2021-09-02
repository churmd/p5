import p5 from "p5";
import { instanceOf } from "prop-types";
import Point from "./Point";
import QuadLerpPoints from "./QuadLerpPoints";

class QuadBezierCurve {
    constructor(p5Instance, pointA, pointB, pointC) {
        this.p = p5Instance;
        this.pointA = pointA;
        this.pointB = pointB;
        this.pointC = pointC;
        this.iterations = 25;
    }

    show() {
        const curve = this.createCurve();

        this.showLines(curve);
        this.showCurveDots(curve);

        this.pointA.show();
        this.pointB.show();
        this.pointC.show();

        this.p.pop();
    }

    showLines(curve) {
        this.p.push();

        const colourRange = 360;
        this.p.colorMode(this.p.HSL, colourRange);
        this.p.strokeWeight(2);

        curve.forEach((curvePoint, index) => {
            const hue = (index / curve.length) * colourRange;
            const colour = this.p.color(hue, 250, 200);
            this.p.stroke(colour);

            this.p.line(
                curvePoint.abLerp.x,
                curvePoint.abLerp.y,
                curvePoint.bcLerp.x,
                curvePoint.bcLerp.y
            );
        });

        this.p.pop();
    }

    showCurveDots(curve) {
        this.p.push();

        this.p.stroke(255);

        curve.forEach((curvePoint) => {
            this.p.circle(
                curvePoint.combinedLerp.x,
                curvePoint.combinedLerp.y,
                10
            );
        });

        this.p.pop();
    }

    createCurve() {
        let curve = [];

        const curveIncrements = 1 / this.iterations;
        for (let i = 0; i <= this.iterations; i++) {
            const curvePerc = i * curveIncrements;
            const quadLerpPoints = new QuadLerpPoints(
                this.pointA.getPos(),
                this.pointB.getPos(),
                this.pointC.getPos(),
                curvePerc
            );
            curve[i] = quadLerpPoints;
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
