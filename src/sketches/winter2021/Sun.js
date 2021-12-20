import p5 from "p5";
import PropTypes from "prop-types";

class Sun {
    constructor(p5Instance) {
        this.p = p5Instance;
        this.height = -0.9;
        this.rotation = 0;
    }

    update() {
        this.rotation += 0.01;
    }

    show(width, height) {
        const smallestDim = this.p.min(width, height);

        this.p.push();
        this.p.translate(width / 2, height);
        this.p.rotate(this.rotation);

        this.p.noStroke();
        this.p.fill(247, 247, 123);

        this.p.circle(0, height * this.height, smallestDim / 20);

        this.p.pop();
    }
}

Sun.proptypes = {
    p5Instance: PropTypes.instanceOf(p5),
};

export default Sun;
