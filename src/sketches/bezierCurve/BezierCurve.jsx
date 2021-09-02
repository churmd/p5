import React from "react";
import p5 from "p5";
import Point from "./Point";
import QuadBezierCurve from "./quadBezierCurve";
import { NotListedLocationSharp } from "@material-ui/icons";

class BezierCurve extends React.Component {
    constructor(props) {
        super(props);
        this.myRef = React.createRef();
    }

    sketch = (p) => {
        let pA, pB, pC;
        let curve;
        let direction = 10;

        p.setup = () => {
            const cnv = p.createCanvas(getCanvasWidth(), getCanvasHeight());
            cnv.style("display", "block");

            pA = new Point(p, 0, getCanvasHeight() / 2, 50);
            pB = new Point(p, getCanvasWidth() / 2, getCanvasHeight(), 50);
            pC = new Point(p, getCanvasWidth(), getCanvasHeight() / 2, 50);
            curve = new QuadBezierCurve(p, pA, pB, pC);
        };

        p.draw = () => {
            p.background(51);

            curve.show();

            if (pB.y > getCanvasHeight()) {
                direction = -10;
            }

            if (pB.y < 0) {
                direction = 10;
            }

            pB.y += direction;

            // p.noLoop();
        };

        p.windowResized = () => {
            p.resizeCanvas(getCanvasWidth(), getCanvasHeight());
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
        return <div ref={this.myRef}></div>;
    }
}
export default BezierCurve;
