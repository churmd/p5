import p5 from "p5";
import { instanceOf } from "prop-types";

class QuadLerpPoints {
    constructor(a, b, c, lerpPerc) {
        this.abLerp = p5.Vector.lerp(a, b, lerpPerc);
        this.bcLerp = p5.Vector.lerp(b, c, lerpPerc);
        this.combinedLerp = p5.Vector.lerp(this.abLerp, this.bcLerp, lerpPerc);
    }
}

QuadLerpPoints.proptypes = {
    a: instanceOf(p5.Vector),
    b: instanceOf(p5.Vector),
    c: instanceOf(p5.Vector),
};

export default QuadLerpPoints;
