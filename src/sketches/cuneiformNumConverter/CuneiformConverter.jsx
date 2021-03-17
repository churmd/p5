import React from "react";
import p5 from "p5";
import "./CuneiformNum";
import CuneiformNum from "./CuneiformNum";

class CuneiformConverter extends React.Component {
    constructor(props) {
        super(props);
        this.myRef = React.createRef();
    }

    sketch = (p) => {
        let x = 100;
        let y = 100;

        p.setup = () => {
            const cnv = p.createCanvas(window.innerWidth, window.innerHeight);
            cnv.style("display", "block");

            // const myNum = 4271; [11,11,1]
            const myNum = 601;
            let cn = new CuneiformNum(myNum);
            console.log(cn.__toBase60Array(myNum));
        };

        p.draw = () => {
            p.background(0);
            p.fill(255);
            p.rect(x, y, 50, 50);
        };

        p.windowResized = () => {
            p.resizeCanvas(window.innerWidth, window.innerHeight);
        };
    };

    componentDidMount() {
        this.myP5 = new p5(this.sketch, this.myRef.current);
    }

    render() {
        return <div ref={this.myRef}></div>;
    }
}
export default CuneiformConverter;
