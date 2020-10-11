import React from "react";
import p5 from "p5";
import CenterOutHexGrid from "./CenterOutHexGrid";

class Hexes extends React.Component {
    constructor(props) {
        super(props);
        this.myRef = React.createRef();
    }

    sketch = (p) => {
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

        const createHexGrid = () => {
            return new CenterOutHexGrid(
                p,
                getCanvasWidth(),
                getCanvasHeight(),
                getSideLength()
            );
        };

        let hexGrid;

        p.setup = () => {
            const cnv = p.createCanvas(getCanvasWidth(), getCanvasHeight());
            cnv.style("display", "block");

            p.angleMode(p.DEGREES);
            hexGrid = createHexGrid();
        };

        p.draw = () => {
            p.background(51);

            hexGrid.update();
            hexGrid.show();
        };

        p.windowResized = () => {
            p.resizeCanvas(getCanvasWidth(), getCanvasHeight());
            hexGrid = createHexGrid();
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
