import React from "react";
import p5 from "p5";
import FullscreenElem from "../../components/fullscreenElem/FullscreenElem";
import { CounterSketch, ClockSketch } from "./Sketchs";

class Cuneiform extends React.Component {
    constructor(props) {
        super(props);
        this.myRef = React.createRef();
    }

    setCounterSketch = () => {
        if (this.myP5 !== undefined) {
            this.myP5.remove();
        }
        this.myP5 = new p5(CounterSketch, this.myRef.current);
    };

    setClockSketch = () => {
        if (this.myP5 !== undefined) {
            this.myP5.remove();
        }
        this.myP5 = new p5(ClockSketch, this.myRef.current);
    };

    componentDidMount() {
        this.setClockSketch();
    }

    render() {
        return (
            <div ref={this.myRef}>
                <FullscreenElem id='canvas' />
                <div id='controls'>
                    <button onClick={this.setCounterSketch}>Counter</button>
                    <button onClick={this.setClockSketch}>Clock</button>
                </div>
            </div>
        );
    }
}
export default Cuneiform;
