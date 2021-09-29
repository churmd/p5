import p5 from "p5";
import { instanceOf } from "prop-types";
import Point from "./Point";
import QuadBezierCurve from "./QuadBezierCurve";
import QubeLerpPoints from "./QubeLerpPoints";

class QubeBezierCurve {
    constructor(p5Instance, pointA, pointB, pointC, pointD) {
        this.p = p5Instance;
        this.pointA = pointA;
        this.pointB = pointB;
        this.pointC = pointC;
        this.pointD = pointD;

        this.curveA = new QuadBezierCurve(p5Instance, pointA, pointB, pointC);
        this.curveB = new QuadBezierCurve(p5Instance, pointB, pointC, pointD);
    }

    show() {
        const qubeCurve = this.createCurve();

        this.showQuadCurves();
        this.showLines(qubeCurve);
        this.showDots(qubeCurve);
    }

    /**
     * @returns {[QubeLerpPoints]}
     */
    createCurve() {
        const curveAPoints = this.curveA.createCurve();
        const curveBPoints = this.curveB.createCurve();
        const numQuadPoints = curveAPoints.length;
        const curvePercent = 1 / numQuadPoints;

        const qubeCurve = [];
        for (let i = 0; i < numQuadPoints; i++) {
            const cubePoint = new QubeLerpPoints(
                curveAPoints[i],
                curveBPoints[i],
                i * curvePercent
            );
            qubeCurve[i] = cubePoint;
        }

        return qubeCurve;
    }

    showDots(qubeCurve) {
        this.p.push();

        this.p.stroke(255);

        qubeCurve.forEach((curvePoint) => {
            this.p.circle(curvePoint.lerpPoint.x, curvePoint.lerpPoint.y, 10);
        });

        this.p.pop();
    }

    showLines(qubeCurve) {
        this.p.push();

        const colourRange = 360;
        this.p.colorMode(this.p.HSL, colourRange);
        this.p.strokeWeight(2);

        qubeCurve.forEach((curvePoint, index) => {
            const hue = (index / qubeCurve.length) * colourRange;
            const colour = this.p.color(hue, 250, 200);
            this.p.stroke(colour);

            this.p.line(
                curvePoint.a.combinedLerp.x,
                curvePoint.a.combinedLerp.y,
                curvePoint.b.combinedLerp.x,
                curvePoint.b.combinedLerp.y
            );
        });

        this.p.pop();
    }

    showQuadCurves() {
        this.curveA.show(true, false, 0.1);
        this.curveB.show(true, false, 0.1);
    }
}

QubeBezierCurve.proptypes = {
    p5Instance: p5,
    pointA: instanceOf(Point),
    pointB: instanceOf(Point),
    pointC: instanceOf(Point),
    pointD: instanceOf(Point),
};

export default QubeBezierCurve;
