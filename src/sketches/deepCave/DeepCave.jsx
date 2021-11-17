import React from "react";
import p5 from "p5";
import Layer from "./Layer";

class DeepCave extends React.Component {
    constructor(props) {
        super(props);
        this.myRef = React.createRef();
    }

    sketch = (p) => {
        let l1, l2, l3;

        p.setup = () => {
            const cnv = p.createCanvas(window.innerWidth, window.innerHeight);
            cnv.style("display", "block");

            l1 = new Layer(p, 0.8, 0.1);
            l2 = new Layer(p, 0.6, 0.1);
            l3 = new Layer(p, 0.4, 0.1);
        };

        p.draw = () => {
            p.background(0);

            l1.show(window.innerWidth, window.innerHeight, 150);
            l2.show(window.innerWidth, window.innerHeight, 200);
            l3.show(window.innerWidth, window.innerHeight, 255);

            l1.scrollUp(window.innerHeight, 0.001);
            l2.scrollUp(window.innerHeight, 0.002);
            l3.scrollUp(window.innerHeight, 0.003);
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
export default DeepCave;
