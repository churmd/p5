import React from "react";
import p5 from "p5";
import "./CuneiformNum";
import CuneiformNum from "./CuneiformNum";
import CuneiformFont from "./CuneiformOB.ttf";
import { CuneiformUnicodes } from "./CuniformStrings";

class CuneiformConverter extends React.Component {
    constructor(props) {
        super(props);
        this.myRef = React.createRef();
    }

    sketch = (p) => {
        let x = 100;
        let y = 100;
        let cuneiformFont;

        p.preload = () => {
            cuneiformFont = p.loadFont(CuneiformFont);
        };

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

            p.textSize(40);

            const myNum = 4271;
            let cn = new CuneiformNum(myNum);

            p.text(cn.toString(), 200, 200);

            p.push();
            p.textFont(cuneiformFont);

            p.text(CuneiformUnicodes.Fifty, 300, 300);
            p.text(CuneiformUnicodes.Five, 400, 300);
            p.pop();
        };

        p.windowResized = () => {
            p.resizeCanvas(window.innerWidth, window.innerHeight);
        };
    };

    componentDidMount() {
        this.myP5 = new p5(this.sketch, this.myRef.current);
    }

    render() {
        return (
            <div id='canvas' ref={this.myRef}>
                <span>𒐀</span>
            </div>
        );
    }
}
export default CuneiformConverter;
