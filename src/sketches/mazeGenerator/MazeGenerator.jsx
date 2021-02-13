import React from "react";
import p5 from "p5";
import Maze from "./Maze";
import FullscreenElem from "../../components/fullscreenElem/FullscreenElem";

class MazeGeneratoe extends React.Component {
    constructor(props) {
        super(props);
        this.myRef = React.createRef();
    }

    sketch = (p) => {
        const FRAME_RATE = 30;
        let maze;
        let framesSinceMazeCompleted = 0;

        const getCanvasHeight = () => {
            return window.innerHeight;
        };

        const getCanvasWidth = () => {
            return window.innerWidth;
        };

        p.setup = () => {
            const cnv = p.createCanvas(window.innerWidth, window.innerHeight);
            cnv.parent("canvas");
            cnv.style("display", "block");

            p.frameRate(FRAME_RATE);

            framesSinceMazeCompleted = 0;
            maze = new Maze(20, 20);
        };

        p.draw = () => {
            p.background(51);

            if (framesSinceMazeCompleted === FRAME_RATE) {
                framesSinceMazeCompleted = 0;
                maze = new Maze(20, 20);
            } else if (maze.completed()) {
                framesSinceMazeCompleted++;
            }

            maze.show(p, getCanvasWidth(), getCanvasHeight());
            maze.update();
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
            </div>
        );
    }
}
export default MazeGeneratoe;
