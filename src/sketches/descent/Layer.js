import p5 from "p5";
import { instanceOf, number } from "prop-types";

class Section {
    constructor(left, right) {
        this.left = left;
        this.right = right;
    }
}

Section.propTypes = {
    left: number,
    right: number,
};

class Layer {
    /**
     * Creates a depth layer with 'walls' on the left and right of the canvas centre
     * @param {p5} p5Instance Instance of a p5 sketch
     * @param {Number} coveredPerc Percentage of the horizontal canvas to hide, must be 0 < coveredPerc < 1
     * @param {Number} resolution Number of changes in the layers size
     * @param {Number} delta Percentage of the canvas the visible section can vary by
     */
    constructor(p5Instance, coveredPerc, resolution, delta) {
        this.p = p5Instance;
        this.coveredPerc = coveredPerc;
        this.delta = delta;
        this.resolution = resolution;
        this.numSections = this.resolution + 1;
        this.sections = [];
        this.scrolled = 0;

        for (let i = 0; i < this.numSections; i++) {
            this.createSection();
        }
    }

    show(canvasWidth, canvasHeight, colour) {
        this.p.push();
        this.p.noStroke();
        this.p.fill(colour);

        const sectionHeight = canvasHeight / this.resolution;

        this.sections.forEach((section, index) => {
            const y = index * sectionHeight - this.scrolled;
            const leftWallLen = canvasWidth * section.left;
            const rightWallLen = canvasWidth * section.right;
            const rightX = canvasWidth - rightWallLen;

            this.p.rect(0, y, leftWallLen, sectionHeight);
            this.p.rect(rightX, y, rightWallLen, sectionHeight);
        });

        this.p.pop();
    }

    scrollUp(canvasHeight, perc) {
        this.scrolled += canvasHeight * perc;
        const sectionHeight = canvasHeight / this.resolution;

        if (this.scrolled >= sectionHeight) {
            this.scrolled -= sectionHeight;

            this.sections.shift();

            this.createSection();
        }
    }

    createSection() {
        const coveredPercPerSide = this.coveredPerc / 2;
        const offsetLeft = this.p.random(this.delta);
        const offsetRight = this.p.random(this.delta);
        const section = new Section(
            coveredPercPerSide + offsetLeft,
            coveredPercPerSide + offsetRight
        );
        this.sections.push(section);
    }
}

Layer.propTypes = {
    p5Instance: instanceOf(p5),
    coveredPerc: number,
    resolution: number,
    delta: number,
};

export default Layer;
