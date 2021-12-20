import p5 from "p5";
import PropTypes from "prop-types";

class SceneElement {
    constructor(p5Instance) {
        this.p = p5Instance;
    }
    update() {}
    show(width, height) {}
}

SceneElement.proptypes = {
    p5Instance: PropTypes.instanceOf(p5),
};

export default SceneElement;
