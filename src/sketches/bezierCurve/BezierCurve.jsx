import React from "react";
import p5 from "p5";
import Point from "./Point";
import QubeBezierCurve from "./QubeBezierCurve";
import FullscreenElem from "../../components/fullscreenElem/FullscreenElem";

class BezierCurve extends React.Component {
    constructor(props) {
        super(props);
        this.myRef = React.createRef();
    }

    sketch = (p) => {
        let pA, pB, pC, pD;
        let curve;
        let directionB = 10;
        let directionC = 10;

        p.setup = () => {
            const cnv = p.createCanvas(getCanvasWidth(), getCanvasHeight());
            cnv.parent("canvas");
            cnv.style("display", "block");

            createCurve();
        };

        const createCurve = () => {
            pA = new Point(p, 0, getCanvasHeight() / 2, 50);
            pB = new Point(p, getCanvasWidth() / 3, getCanvasHeight(), 50);
            pC = new Point(p, (getCanvasWidth() * 2) / 3, 0, 50);
            pD = new Point(p, getCanvasWidth(), getCanvasHeight() / 2, 50);
            curve = new QubeBezierCurve(p, pA, pB, pC, pD);
        };

        p.draw = () => {
            p.background(51);

            pA.show();
            pB.show();
            pC.show();
            pD.show();

            curve.show();

            if (pB.y > getCanvasHeight()) {
                directionB = -10;
            }

            if (pB.y < 0) {
                directionB = 10;
            }

            pB.y += directionB;

            if (pC.y > getCanvasHeight()) {
                directionC = -10;
            }

            if (pC.y < 0) {
                directionC = 10;
            }

            pC.y += directionC;
        };

        p.windowResized = () => {
            p.resizeCanvas(getCanvasWidth(), getCanvasHeight());
            createCurve();
        };

        const getCanvasHeight = () => {
            return window.innerHeight;
        };

        const getCanvasWidth = () => {
            return window.innerWidth;
        };
    };

    componentDidMount() {
        this.myP5 = new p5(this.sketch, this.myRef.current);
    }

    render() {
        return (
            <div ref={this.myRef}>
                <FullscreenElem id='canvas' />
            </div>
        );
    }
}
export default BezierCurve;
