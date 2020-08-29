import React from "react";
import p5 from "p5";
import Hex from "./Hex";

class Hexes extends React.Component {
    constructor(props) {
        super(props);
        this.myRef = React.createRef();
    }

    sketch = (p) => {
        let h;

        p.setup = () => {
            const cnv = p.createCanvas(getCanvasWidth(), getCanvasHeight());
            cnv.style("display", "block");

            h = new Hex(p, 0.5, 0.5, 100);
        };

        p.draw = () => {
            p.background(51);
            h.show(getCanvasWidth(), getCanvasHeight());
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
