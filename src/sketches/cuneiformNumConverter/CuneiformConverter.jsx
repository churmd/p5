import React from "react";
import p5 from "p5";
import "./CuneiformNum";
import CuneiformNum from "./CuneiformNum";
import CuneiformFont from "./CuneiformOB.ttf";
import FullscreenElem from "../../components/fullscreenElem/FullscreenElem";

class CuneiformConverter extends React.Component {
    constructor(props) {
        super(props);
        this.myRef = React.createRef();
    }

    sketch = (p) => {
        let cuneiformFont;
        let cuneiformCounter;

        const getCanvasHeight = () => {
            return window.innerHeight;
        };

        const getCanvasWidth = () => {
            return window.innerWidth;
        };

        const getTextSize = (textLen) => {
            const minDim = Math.min(getCanvasWidth(), getCanvasHeight());
            return minDim / textLen;
        };

        p.preload = () => {
            cuneiformFont = p.loadFont(CuneiformFont);
        };

        p.setup = () => {
            const cnv = p.createCanvas(getCanvasWidth(), getCanvasHeight());
            cnv.parent("canvas");
            cnv.style("display", "block");

            p.frameRate(1);

            cuneiformCounter = new CuneiformNum(0);
        };

        p.draw = () => {
            p.background(51);

            const cuniformText = cuneiformCounter.toUnicodeString();
            const textSize = getTextSize(cuniformText.length);

            p.textSize(textSize);
            p.textAlign(p.CENTER, p.CENTER);
            p.fill(255);
            p.textFont(cuneiformFont);

            p.text(cuniformText, getCanvasWidth() / 2, getCanvasHeight() / 2);

            cuneiformCounter.add(1);
        };

        p.windowResized = () => {
            p.resizeCanvas(getCanvasWidth(), getCanvasHeight());
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
export default CuneiformConverter;
