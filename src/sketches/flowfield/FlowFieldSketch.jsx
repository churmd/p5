import React from "react";
import p5 from "p5";
import FlowField from "./FlowField";
import FullscreenElem from "../../components/fullscreenElem/FullscreenElem";
import ParticlesOnFlowField from "./ParticlesOnFlowField";

class FlowFieldSketch extends React.Component {
    constructor(props) {
        super(props);
        this.myRef = React.createRef();
    }

    sketch = (p) => {
        let flowField;

        p.setup = () => {
            const cnv = p.createCanvas(window.innerWidth, window.innerHeight);
            cnv.parent("canvas");
            cnv.style("display", "block");

            flowField = new ParticlesOnFlowField(
                p,
                window.innerWidth,
                window.innerHeight
            );
        };

        p.draw = () => {
            p.background(150);
            flowField.show(window.innerWidth, window.innerHeight);
            flowField.update(window.innerWidth, window.innerHeight);
        };

        p.windowResized = () => {
            p.resizeCanvas(window.innerWidth, window.innerHeight);
        };
    };

    componentDidMount() {
        this.myP5 = new p5(this.sketch, this.myRef.current);
    }

    componentWillUnmount() {
        document.getElementById("canvas").replaceChildren();
    }

    render() {
        return (
            <div ref={this.myRef}>
                <FullscreenElem id='canvas' />
            </div>
        );
    }
}

export default FlowFieldSketch;
