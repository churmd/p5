import React from "react";
import p5 from "p5";
import Hex from "./Hex";

class Hexes extends React.Component {
    constructor(props) {
        super(props);
        this.myRef = React.createRef();
    }

    sketch = (p) => {
        let hexes = [];

        p.setup = () => {
            const cnv = p.createCanvas(getCanvasWidth(), getCanvasHeight());
            cnv.style("display", "block");

            p.angleMode(p.DEGREES);
            createHexes();
        };

        p.draw = () => {
            p.background(51);
            p.translate(getCanvasWidth() / 2, getCanvasHeight() / 2);

            hexes.forEach((hex) => {
                hex.show();
            });
        };

        p.windowResized = () => {
            p.resizeCanvas(getCanvasWidth(), getCanvasHeight());
            createHexes();
        };

        const createHexes = () => {
            hexes = [];

            let hexSideLength = getSideLength();
            let horizontalHexSpacing = p.sin(60) * hexSideLength * 2;
            let verticleHexSpacing = 2 * hexSideLength * 0.75;

            let midWidth = getCanvasWidth() / 2;
            let midHeight = getCanvasHeight() / 2;

            let maxHexXPos = midWidth + horizontalHexSpacing / 2;
            let maxHexYPos = midHeight + verticleHexSpacing / 2;

            let visited = [];
            let explore = [];
            explore.push({ x: 0, y: 0 });

            while (explore.length > 0) {
                let coord = explore.pop();
                const matchesThisCoord = (element) => {
                    return (
                        element.x.toFixed() === coord.x.toFixed() &&
                        element.y.toFixed() === coord.y.toFixed()
                    );
                };

                if (visited.some(matchesThisCoord)) {
                    continue;
                }

                if (
                    coord.x > maxHexXPos ||
                    coord.x < -maxHexXPos ||
                    coord.y > maxHexYPos ||
                    coord.y < -maxHexYPos
                ) {
                    continue;
                }

                visited.push(coord);

                explore.push({
                    x: coord.x - horizontalHexSpacing,
                    y: coord.y,
                });
                explore.push({
                    x: coord.x + horizontalHexSpacing,
                    y: coord.y,
                });
                explore.push({
                    x: coord.x - horizontalHexSpacing / 2,
                    y: coord.y + verticleHexSpacing,
                });
                explore.push({
                    x: coord.x + horizontalHexSpacing / 2,
                    y: coord.y + verticleHexSpacing,
                });
                explore.push({
                    x: coord.x - horizontalHexSpacing / 2,
                    y: coord.y - verticleHexSpacing,
                });
                explore.push({
                    x: coord.x + horizontalHexSpacing / 2,
                    y: coord.y - verticleHexSpacing,
                });
            }

            visited.forEach((coord) => {
                let h = new Hex(p, coord.x, coord.y, hexSideLength);
                hexes.push(h);
            });
        };

        const getCanvasHeight = () => {
            return window.innerHeight;
        };

        const getCanvasWidth = () => {
            return window.innerWidth;
        };

        const getSideLength = () => {
            let minDim = Math.min(getCanvasHeight(), getCanvasWidth());
            return 0.05 * minDim;
        };
    };

    componentDidMount() {
        this.myP5 = new p5(this.sketch, this.myRef.current);
    }

    render() {
        return <div ref={this.myRef}></div>;
    }
}
export default Hexes;
