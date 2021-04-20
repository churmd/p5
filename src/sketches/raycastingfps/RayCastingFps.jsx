import React from "react";
import p5 from "p5";
import Player from "./Player";

// Note p5 rotate functions go in a clockwise motion,
// normal rotate function go in counter clockwise
// so times all angles by -1 when drawing

class RayCastingFps extends React.Component {
    constructor(props) {
        super(props);
        this.myRef = React.createRef();
    }

    sketch = (p) => {
        let x = 100;
        let y = 100;
        let player;

        p.setup = () => {
            const cnv = p.createCanvas(window.innerWidth, window.innerHeight);
            cnv.style("display", "block");

            p.angleMode(p.RADIANS);

            player = new Player(p, 500, 500, p.PI / 2);
        };

        p.draw = () => {
            p.background(0);
            p.fill(255);
            p.rect(x, y, 50, 50);

            player.show();
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
export default RayCastingFps;
