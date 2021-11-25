import React from "react";
import p5 from "p5";
import Layer from "./Layer";

class DeepCave extends React.Component {
    constructor(props) {
        super(props);
        this.myRef = React.createRef();
    }

    sketch = (p) => {
        const numLayers = 20;
        const layerResolution = 20;
        let layers = [];

        p.setup = () => {
            const cnv = p.createCanvas(window.innerWidth, window.innerHeight);
            cnv.style("display", "block");

            const hiddenPercStep = 1 / numLayers;
            for (let i = 0; i < numLayers; i++) {
                const hiddenPerc = i * hiddenPercStep;
                const l = new Layer(
                    p,
                    hiddenPerc,
                    layerResolution - i / 2,
                    hiddenPercStep
                );
                layers.unshift(l);
            }
        };

        p.draw = () => {
            const hue = 260;
            const sat = 50;
            const lightMin = 15;
            const lightMax = 75;
            const lightStep = (lightMax - lightMin) / numLayers;
            const lightBackground = 5;

            p.colorMode(p.HSL, 360, 100, 100, 1);

            p.background(p.color(hue, sat, lightBackground));

            layers.forEach((layer, index) => {
                const lightness = lightMin + index * lightStep;
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
        return <div ref={this.myRef}></div>;
    }
}
export default DeepCave;
