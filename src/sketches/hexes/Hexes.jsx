import React from "react";
import p5 from "p5";
import Hex from "./Hex";

class Hexes extends React.Component {
    constructor(props) {
        super(props);
        this.myRef = React.createRef();
    }

    sketch = (p) => {
        let hexes = [];

        p.setup = () => {
            const cnv = p.createCanvas(getCanvasWidth(), getCanvasHeight());
            cnv.style("display", "block");

            p.angleMode(p.DEGREES);
            createHexes();
        };

        p.draw = () => {
            p.background(51);

            hexes.forEach((hex) => {
                hex.show(getCanvasWidth(), getCanvasHeight());
            });
        };

        p.windowResized = () => {
            p.resizeCanvas(getCanvasWidth(), getCanvasHeight());
            createHexes();
        };

        const createHexes = () => {
            hexes = [];

            let hexSideLength = getSideLength();
            let horizontalDist = p.sin(60) * hexSideLength * 2;
            let verticleDist = 2 * hexSideLength * 0.75;

            let midWidth = getCanvasWidth() / 2;
            let midHeight = getCanvasHeight() / 2;

            let h1 = new Hex(p, midWidth, midHeight, hexSideLength);
            let h2 = new Hex(
                p,
                midWidth + horizontalDist,
                midHeight,
                hexSideLength
            );
            let h3 = new Hex(
                p,
                midWidth + horizontalDist / 2,
                midHeight + verticleDist,
                hexSideLength
            );

            hexes.push(h1);
            hexes.push(h2);
            hexes.push(h3);
        };

        const getCanvasHeight = () => {
            return window.innerHeight;
        };

        const getCanvasWidth = () => {
            return window.innerWidth;
        };

        const getSideLength = () => {
            let minDim = Math.min(getCanvasHeight(), getCanvasWidth());
            return 0.05 * minDim;
        };
    };

    componentDidMount() {
        this.myP5 = new p5(this.sketch, this.myRef.current);
    }

    render() {
        return <div ref={this.myRef}></div>;
    }
}
export default Hexes;
