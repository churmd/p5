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

    show(showLines = true, showCurveDots = true, opactity = 1) {
        const curve = this.createCurve();

        if (showCurveDots) this.showCurveDots(curve, opactity);
        if (showLines) this.showLines(curve, opactity);
    }

    showLines(curve, opactity) {
        this.p.push();

        const colourRange = 360;
        const alpha = colourRange * opactity;
        this.p.colorMode(this.p.HSL, colourRange);
        this.p.strokeWeight(2);

        curve.forEach((curvePoint, index) => {
            const hue = (index / curve.length) * colourRange;
            const colour = this.p.color(hue, 250, 200, alpha);
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

    showCurveDots(curve, opactity) {
        this.p.push();

        this.p.stroke(255, opactity);

        curve.forEach((curvePoint) => {
            this.p.circle(
                curvePoint.combinedLerp.x,
                curvePoint.combinedLerp.y,
                10
            );
        });

        this.p.pop();
    }

    /***
     * @returns {[QuadLerpPoints]}
     */
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
}

QuadBezierCurve.proptypes = {
    p5Instance: p5,
    pointA: instanceOf(Point),
    pointB: instanceOf(Point),
    pointC: instanceOf(Point),
};

export default QuadBezierCurve;
