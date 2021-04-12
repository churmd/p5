import React from "react";
import p5 from "p5";
import FullscreenElem from "../../components/fullscreenElem/FullscreenElem";
import { CounterSketch, ClockSketch } from "./Sketchs";
import "./Cuneiform.scss";

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
                <div id='p5_loading' class='loadingclass'>
                    Loading custom font ...
                </div>
                <FullscreenElem id='canvas' />
                <div id='controls'>
                    <button onClick={this.setClockSketch}>Clock</button>
                    <button onClick={this.setCounterSketch}>Counter</button>
                </div>
            </div>
        );
    }
}
export default Cuneiform;
