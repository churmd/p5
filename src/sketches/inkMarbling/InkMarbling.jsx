import React from "react";
import p5 from "p5";
import FullscreenElem from "../../components/fullscreenElem/FullscreenElem";
import InkDrop from "./InkDrop";
import { forEach } from "mathjs";

/**
 * Original CodingTrain video https://www.youtube.com/watch?v=p7IGZTjC008
 */
class InkMarblingSketch extends React.Component {
    constructor(props) {
        super(props);
        this.myRef = React.createRef();
    }

    sketch = (p) => {

        let drops = [];

        p.setup = () => {
            const cnv = p.createCanvas(window.innerWidth, window.innerHeight);
            cnv.parent("canvas");
            cnv.style("display", "block");
            p.frameRate(10);
        };

        p.draw = () => {
            p.background(51);

            let newDrop = new InkDrop(p, p.mouseX, p.mouseY, 100, p.color(p.random(0, 256)));
            drops.forEach((drop) => {
                drop.displaceByInDrop(newDrop);
            })

            drops.push(newDrop);
            if (drops.length > 30) {
                drops.shift();
            }
            
            drops.forEach((drop) => {
                drop.show();
            })
        };

        p.windowResized = () => {
            p.resizeCanvas(window.innerWidth, window.innerHeight);
            drops = [];
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

export default InkMarblingSketch;
