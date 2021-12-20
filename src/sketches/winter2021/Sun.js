import p5 from "p5";
import PropTypes from "prop-types";

class Sun {
    constructor(p5Instance) {
        this.p = p5Instance;
        this.x = 0.9;
        this.rotation = 0;
    }

    update() {
        this.rotation += 0.1;
    }

    show() {}
}

Sun.proptypes = {
    p5Instance: PropTypes.instanceOf(p5),
};

export default Sun;
