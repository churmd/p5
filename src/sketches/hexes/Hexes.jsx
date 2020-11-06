import React from "react";
import p5 from "p5";
import CenterOutHexGrid from "./CenterOutHexGrid";
import HexGrid from "./HexGrid";
import RandomHexGrid from "./RandomHexGrid";
import "./Hexes.scss";

class Hexes extends React.Component {
    constructor(props) {
        super(props);
        this.myRef = React.createRef();
    }

    sketch = (p) => {
        let hexGrid;
        let currentPattern;
        let patternRadioGroup;

        const randomPattern = "Random";
        const centerOutPattern = "CenterOutPattern";

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

        const createHexGrid = () => {
            switch (currentPattern) {
                case randomPattern:
                    return new RandomHexGrid(
                        p,
                        getCanvasWidth(),
                        getCanvasHeight(),
                        getSideLength()
                    );
                case centerOutPattern:
                    return new CenterOutHexGrid(
                        p,
                        getCanvasWidth(),
                        getCanvasHeight(),
                        getSideLength()
                    );
                default:
                    return new HexGrid(
                        p,
                        getCanvasWidth(),
                        getCanvasHeight(),
                        getSideLength()
                    );
            }
        };

        const createControls = () => {
            patternRadioGroup = p.createRadio();
            patternRadioGroup.option(randomPattern);
            patternRadioGroup.option(centerOutPattern);
            patternRadioGroup.parent("radioOptions");

            patternRadioGroup.selected(randomPattern);

            currentPattern = patternRadioGroup.selected();
        };

        p.setup = () => {
            const cnv = p.createCanvas(getCanvasWidth(), getCanvasHeight());
            cnv.parent("canvas");
            cnv.style("display", "block");

            createControls();

            p.angleMode(p.DEGREES);
            hexGrid = createHexGrid();
        };

        p.draw = () => {
            p.background(51);

            if (patternRadioGroup.selected() !== currentPattern) {
                currentPattern = patternRadioGroup.selected();
                hexGrid = createHexGrid();
            }

            hexGrid.update();
            hexGrid.show();
        };

        p.windowResized = () => {
            p.resizeCanvas(getCanvasWidth(), getCanvasHeight());
            hexGrid = createHexGrid();
        };
    };

    componentDidMount() {
        this.myP5 = new p5(this.sketch, this.myRef.current);
    }

    toggleCavasFullScreen = () => {
        const canvasElem = document.getElementById("canvas");
        const currentFullScreenElem = document.fullscreenElement;
        if (canvasElem === currentFullScreenElem) {
            this.exitFullScreen(canvasElem);
        } else {
            this.openFullScreen(canvasElem);
        }
    };

    openFullScreen = (elem) => {
        if (elem.requestFullscreen) {
            console.log(elem);
            elem.requestFullscreen();
        } else if (elem.webkitRequestFullscreen) {
            /* Safari */
            elem.webkitRequestFullscreen();
        } else if (elem.msRequestFullscreen) {
            /* IE11 */
            elem.msRequestFullscreen();
        }
    };

    exitFullScreen = (elem) => {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.webkitExitFullscreen) {
            /* Safari */
            document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) {
            /* IE11 */
            document.msExitFullscreen();
        }
    };

    render() {
        return (
            <div ref={this.myRef}>
                <div id='canvas' onClick={this.toggleCavasFullScreen}></div>
                <div id='controls'>
                    <div id='radioOptions'></div>
                </div>
            </div>
        );
    }
}
export default Hexes;
