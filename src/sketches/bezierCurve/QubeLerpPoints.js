import p5 from "p5";
import { instanceOf, number } from "prop-types";
import QuadLerpPoints from "./QuadLerpPoints";

class QubeLerpPoints {
    constructor(a, b, lerpPerc) {
        this.a = a;
        this.b = b;
        this.lerpPoint = p5.Vector.lerp(
            a.combinedLerp,
            b.combinedLerp,
            lerpPerc
        );
    }
}

QubeLerpPoints.proptypes = {
    a: instanceOf(QuadLerpPoints),
    b: instanceOf(QuadLerpPoints),
    lerpPerc: number,
};

export default QubeLerpPoints;
