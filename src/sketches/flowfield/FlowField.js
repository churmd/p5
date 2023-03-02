import p5 from "p5";
import { instanceOf, number } from "prop-types";

class FlowField {
    /**
     * @param {p5} p5Instance
     * @param {Number} width
     * @param {Number} height
     */
    constructor(p5Instance, width, height) {
        this.p = p5Instance;
        this.width = width;
        this.height = height;
        this.time = 0;

        this.grid = [];
        for (let x = 0; x < width; x++) {
            this.grid[x] = [];
        }

        for (let x = 0; x < width; x++) {
            for (let y = 0; y < height; y++) {
                this.grid[x][y] = this.p.noise(x, y, this.t);
            }
        }
    }

    show(canvasWidth, canvasHeight) {
        this.p.push();

        const cellWidth = canvasWidth / this.width;
        const cellHeight = canvasHeight / this.height;

        for (let x = 0; x < this.width; x++) {
            for (let y = 0; y < this.height; y++) {
                const xPixel = x * cellWidth;
                const yPixel = y * cellHeight;

                const colour = this.grid[x][y] * 255;
                this.p.fill(colour);
                this.p.rect(xPixel, yPixel, cellWidth, cellHeight);

                this.p.push();

                this.p.translate(
                    xPixel + cellWidth / 2,
                    yPixel + cellHeight / 2
                );

                this.p.rotate(this.grid[x][y] * this.p.TWO_PI);

                this.p.line(0, 0, cellHeight / 2, 0);

                this.p.pop();
            }
        }

        this.p.pop();
    }

    update() {
        this.time += 0.001;

        for (let x = 0; x < this.width; x++) {
            for (let y = 0; y < this.height; y++) {
                this.grid[x][y] = this.p.noise(x, y, this.time);
            }
        }
    }

    /**
     * @param {p5.Vector} position
     * @param {Number} canvasWidth
     * @param {Number} canvasHeight
     * @returns {p5.Vector} the velocity of the flow between 0 and 2 PI
     */
    flowVelocityFromPixelPosition(position, canvasWidth, canvasHeight) {
        const gridXPercent = this.p.map(
            position.x,
            0,
            canvasWidth,
            0,
            this.width,
            true
        );
        const gridX = this.p.floor(gridXPercent);

        const gridYPercent = this.p.map(
            position.y,
            0,
            canvasHeight,
            0,
            this.height,
            true
        );
        const gridY = this.p.floor(gridYPercent);

        const angle = this.grid[gridX][gridY] * this.p.TWO_PI;
        return p5.Vector.fromAngle(angle, 1);
    }
}

FlowField.prototypes = {
    p5Instance: instanceOf(p5),
    coveredPerc: number,
    resolution: number,
    delta: number,
};

export default FlowField;
