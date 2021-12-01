import React from "react";
import p5 from "p5";
import Layer from "./Layer";
import FullscreenElem from "../../components/fullscreenElem/FullscreenElem";
import "./DeepCave.scss";

// TODO Smooth layer edges
// TODO shift from going to dark to going to light
// TODO add bridges

class DeepCave extends React.Component {
    constructor(props) {
        super(props);
        this.myRef = React.createRef();
    }

    sketch = (p) => {
        const numLayers = 20;
        const layerResolution = 20;
        let layers = [];
        let darkToLight = true;

        p.setup = () => {
            const cnv = p.createCanvas(window.innerWidth, window.innerHeight);
            cnv.parent("canvas");
            cnv.style("display", "block");

            createControls();

            const hiddenPercStep = 1 / numLayers;
            for (let i = 0; i < numLayers; i++) {
                const hiddenPerc = i * hiddenPercStep;
                const l = new Layer(
                    p,
                    hiddenPerc,
                    layerResolution - i / 2,
                    hiddenPercStep / 2
                );
                layers.unshift(l);
            }
        };

        const createControls = () => {
            const darkToLightButton = p.createButton("Towards light");
            darkToLightButton.parent("controls");

            darkToLightButton.mousePressed(() => {
                if (darkToLight) {
                    darkToLightButton.html("In to darkness");
                    darkToLight = false;
                } else {
                    darkToLightButton.html("Towards light");
                    darkToLight = true;
                }
            });
        };

        p.draw = () => {
            const hue = 260;
            const sat = 50;
            const lightMin = 15;
            const lightMax = 75;
            const lightStep = (lightMax - lightMin) / numLayers;
            let lightBackground = 5;
            if (!darkToLight) {
                lightBackground = 80;
            }

            p.colorMode(p.HSL, 360, 100, 100, 1);

            p.background(p.color(hue, sat, lightBackground));

            layers.forEach((layer, index) => {
                let lightDelta = index;
                if (!darkToLight) {
                    lightDelta = layers.length - 1 - index;
                }

                const lightness = lightMin + lightDelta * lightStep;
                const colour = p.color(hue, sat, lightness, 1);

                layer.show(window.innerWidth, window.innerHeight, colour);

                const speed = 0.0001 * (index + 1);
                layer.scrollUp(window.innerHeight, speed);
            });
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
            <div ref={this.myRef}>
                <FullscreenElem id='canvas' />
                <div id='controls' />
            </div>
        );
    }
}
export default DeepCave;
