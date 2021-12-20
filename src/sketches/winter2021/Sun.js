import p5 from "p5";
import PropTypes from "prop-types";

class SunAndMoon {
    constructor(p5Instance) {
        this.p = p5Instance;
        this.yOffset = 0.9;
        this.rotation = 0;
    }

    update() {
        this.rotation += 0.01;
        if (this.rotation >= this.p.TWO_PI) {
            this.rotation -= this.p.TWO_PI;
        }
    }

    show(width, height) {
        this.p.push();

        this.showSunAndMoon(width, height);

        const distToNight = this.p.PI - this.p.abs(this.p.PI - this.rotation);
        const nightAlpha = this.p.map(distToNight, 0, this.p.PI, 0, 100);

        this.p.noStroke();
        this.p.fill(0, 0, 0, nightAlpha);
        this.p.rect(0, 0, width, height);

        this.p.pop();
    }

    showSunAndMoon(width, height) {
        const smallestDim = this.p.min(width, height);

        this.p.push();
        this.p.translate(width / 2, height);
        this.p.rotate(this.rotation);

        this.p.noStroke();

        this.p.fill(247, 247, 123);
        this.p.circle(0, height * -this.yOffset, smallestDim / 20);

        this.p.fill(255);
        this.p.circle(0, height * this.yOffset, smallestDim / 20);

        this.p.pop();
    }
}

SunAndMoon.proptypes = {
    p5Instance: PropTypes.instanceOf(p5),
};

export default SunAndMoon;
