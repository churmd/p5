import React from "react";
import p5 from "p5";
import FullscreenElem from "../../components/fullscreenElem/FullscreenElem";
import Sun from "./Sun";

class Winter2021 extends React.Component {
    constructor(props) {
        super(props);
        this.myRef = React.createRef();
    }

    sketch = (p) => {
        let sun;

        p.setup = () => {
            const cnv = p.createCanvas(window.innerWidth, window.innerHeight);
            cnv.parent("canvas");
            cnv.style("display", "block");

            p.angleMode(p.RADIANS);

            sun = new Sun(p);
        };

        p.draw = () => {
            p.background(196, 237, 241);
            sun.show(this.width(), this.height());
            sun.update();
        };

        p.windowResized = () => {
            p.resizeCanvas(window.innerWidth, window.innerHeight);
        };
    };

    width() {
        return window.innerWidth;
    }

    height() {
        return window.innerHeight;
    }

    halfWidth() {
        return this.width() / 2;
    }

    halfHeight() {
        return this.height() / 2;
    }

    componentDidMount() {
        this.myP5 = new p5(this.sketch, this.myRef.current);
    }

    render() {
        return (
            <div ref={this.myRef}>
                <FullscreenElem id='canvas' />
                <div id='controls' />
            </div>
        );
    }
}
export default Winter2021;
