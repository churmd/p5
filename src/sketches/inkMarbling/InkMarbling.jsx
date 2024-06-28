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
        let colourMode = true;
        let spawnModeRandom = true;

        p.setup = () => {
            const cnv = p.createCanvas(window.innerWidth, window.innerHeight);
            cnv.parent("canvas");
            cnv.style("display", "block");
            p.frameRate(10);

            createControls();
        };

        const createControls = () => {
            const colourSection = p.createDiv();
            colourSection.parent("controls");

            const greyScaleButton = p.createButton("Greyscale");
            greyScaleButton.parent(colourSection);
            greyScaleButton.mousePressed(() => {
                drops = [];
                colourMode = false;
            });

            const colourButton = p.createButton("Colour");
            colourButton.parent(colourSection);
            colourButton.mousePressed(() => {
                drops = [];
                colourMode = true;
            })

            const spawnSection = p.createDiv();
            spawnSection.parent("controls");

            const spawnAtMouseButton = p.createButton("At mouse");
            spawnAtMouseButton.parent(spawnSection);
            spawnAtMouseButton.mousePressed(() => {
                drops = [];
                spawnModeRandom = false;
            });

            const spawnAtRandomButton = p.createButton("Random");
            spawnAtRandomButton.parent(spawnSection);
            spawnAtRandomButton.mousePressed(() => {
                drops = [];
                spawnModeRandom = true;
            })
        };

        p.draw = () => {
            p.background(51);
            updateInkDrops();
            drops.forEach((drop) => {
                drop.show();
            })
        };

        const updateInkDrops = () => {
            let newDrop = createInkDrop();
            drops.forEach((drop) => {
                drop.displaceByInDrop(newDrop);
            })

            drops.push(newDrop);

            drops = drops.filter((drop) => {
                return drop.isOnScreen(window.innerWidth, window.innerHeight);
            })
        }

        const createInkDrop = () => {
            let colour;
            if (colourMode) {
                colour = p.color(p.random(0, 256), p.random(0, 256), p.random(0, 256));
            } else {
                colour = p.color(p.random(0, 256));
            }

            let x, y;
            if (spawnModeRandom) {
                x = p.random(0, window.innerWidth);
                y = p.random(0, window.innerHeight);
            } else {
                x = p.mouseX;
                y = p.mouseY;
            }

            return new InkDrop(p, x, y, 100, colour);
        }

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
