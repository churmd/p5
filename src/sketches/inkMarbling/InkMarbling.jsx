import React from "react";
import p5 from "p5";
import FullscreenElem from "../../components/fullscreenElem/FullscreenElem";
import InkDrop from "./InkDrop";
import { forEach } from "mathjs";

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
            p.frameRate(1);
        };

        p.draw = () => {
            p.background(51);

            let newDrop = new InkDrop(p, p.mouseX, p.mouseY, 100);
            drops.forEach((drop) => {
                drop.displaceByInDrop(newDrop);
            })

            drops.unshift(newDrop);
            if (drops.length > 10) {
                drops.pop();
            }
            
            drops.forEach((drop) => {
                drop.show();
            })
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

export default InkMarblingSketch;
