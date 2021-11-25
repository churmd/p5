import p5 from "p5";
import { instanceOf, number } from "prop-types";

class Layer {
    /**
     * Creates a depth layer with 'walls' on the left and right of the canvas centre
     * @param {p5} p5Instance Instance of a p5 sketch
     * @param {Number} coveredPerc Percentage of the canvas to hide, must be 0 < coveredPerc <= 1
     * @param {Number} delta Percentage of the canvas the visible section can vary by
     */
    constructor(p5Instance, coveredPerc, delta) {
        this.p = p5Instance;
        this.coveredPerc = coveredPerc;
        this.delta = delta;
        this.resolution = 10;
        this.numSections = this.resolution + 1;
        this.sections = [];
        this.scrolled = 0;

        for (let i = 0; i < this.numSections; i++) {
            const offset = this.p.random(this.delta);
            this.sections.push(this.coveredPerc + offset);
        }
    }

    show(canvasWidth, canvasHeight, colour) {
        this.p.push();
        this.p.noStroke();
        this.p.fill(colour);

        const sectionHeight = canvasHeight / this.resolution;

        this.sections.forEach((section, index) => {
            const y = index * sectionHeight - this.scrolled;
            const wallLength = (canvasWidth * section) / 2;
            const rightX = canvasWidth - wallLength;

            this.p.rect(0, y, wallLength, sectionHeight);
            this.p.rect(rightX, y, wallLength, sectionHeight);
        });

        this.p.pop();
    }

    scrollUp(canvasHeight, perc) {
        this.scrolled += canvasHeight * perc;
        const sectionHeight = canvasHeight / this.resolution;

        if (this.scrolled >= sectionHeight) {
            this.scrolled -= sectionHeight;

            this.sections.shift();

            const offset = this.p.random(this.delta);
            this.sections.push(this.coveredPerc + offset);
        }
    }
}

Layer.prototypes = {
    p5Instance: instanceOf(p5),
    coveredPerc: number,
    delta: number,
};

export default Layer;
