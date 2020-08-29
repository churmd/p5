import React from "react";
import p5 from "p5";
import Hex from "./Hex";

class Hexes extends React.Component {
    constructor(props) {
        super(props);
        this.myRef = React.createRef();
    }

    sketch = (p) => {
        p.angleMode(p.DEGREES);
        let hexSideLength = 50;
        let horizontalDist = p.sin(60) * hexSideLength * 2;
        let verticleDist = 2 * hexSideLength * 0.75;
        let hexes = [];

        p.setup = () => {
            const cnv = p.createCanvas(getCanvasWidth(), getCanvasHeight());
            cnv.style("display", "block");

            let percHorDist = horizontalDist / getCanvasWidth();
            let percVerDist = verticleDist / getCanvasHeight();

            let h1 = new Hex(p, 0.5, 0.5, hexSideLength);
            let h2 = new Hex(p, 0.5 + percHorDist, 0.5, hexSideLength);
            let h3 = new Hex(
                p,
                0.5 + percHorDist / 2,
                0.5 + percVerDist,
                hexSideLength
            );

            hexes.push(h1);
            hexes.push(h2);
            hexes.push(h3);
        };

        p.draw = () => {
            p.background(51);

            hexes.forEach((hex) => {
                hex.show(getCanvasWidth(), getCanvasHeight());
            });
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
export default Hexes;
