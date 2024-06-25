import React from "react";
import p5 from "p5";
import FullscreenElem from "../../components/fullscreenElem/FullscreenElem";
import InkDrop from "./InkDrop";
import "./InkMarbling.scss"

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
        let colourMode = false;

        p.setup = () => {
            const cnv = p.createCanvas(window.innerWidth, window.innerHeight);
            cnv.parent("canvas");
            cnv.style("display", "block");
            p.frameRate(10);

            createControls();
        };

        const createControls = () => {
            const greyScaleButton = p.createButton("GreyScale");
            greyScaleButton.parent("controls");
            greyScaleButton.mousePressed(() => {
                drops = [];
                colourMode = false;
            });

            const colourButton = p.createButton("Colour");
            colourButton.parent("controls");
            colourButton.mousePressed(() => {
                drops = [];
                colourMode = true;
            })
        };

        p.draw = () => {
            p.background(51);

            p.push();

            let colour; 
            if (colourMode) {
                p.colorMode(p.HSL, 360);
                const hue = p.random(0, 361)
                colour = p.color(hue, 250, 200);
            } else {
                p.colorMode(p.RGB, 255)
                colour = p.color(p.random(0, 256))
                
            }

            let newDrop = new InkDrop(p, p.mouseX, p.mouseY, 100, colour);
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

            p.pop();
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
        document.getElementById("controls").replaceChildren();
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

export default InkMarblingSketch;
