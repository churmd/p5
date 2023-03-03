import { sum } from "mathjs";
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

                const halfCellHeight = cellHeight / 2;

                this.p.translate(
                    xPixel + cellWidth / 2,
                    yPixel + halfCellHeight
                );

                this.p.rotate(this.grid[x][y] * this.p.TWO_PI);

                this.p.fill(0);

                this.p.line(0, 0, halfCellHeight, 0);

                this.p.triangle(
                    halfCellHeight,
                    0,
                    halfCellHeight - cellHeight / 10,
                    -cellHeight / 20,
                    halfCellHeight - cellHeight / 10,
                    cellHeight / 20
                );

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

        const surroundingGridAngles = this.getSurroundingAngles(gridX, gridY);
        const averageAngle =
            sum(surroundingGridAngles) / surroundingGridAngles.length;

        const angle = averageAngle * this.p.TWO_PI;
        return p5.Vector.fromAngle(angle, 1);
    }

    /**
     * Returns a list the angles in the grid around a point, including the point itself.
     * If a surrounding index is out of bounds, it is skipped and not returned in the list.
     * @param {Number} x grid x index
     * @param {Number} y grid y index
     * @returns {Array<Number>} List of all the angles in the grid around a point
     */
    getSurroundingAngles(x, y) {
        const gridPoints = [
            [x - 1, y - 1],
            [x - 1, y],
            [x - 1, y + 1],
            [x, y - 1],
            [x, y],
            [x, y + 1],
            [x + 1, y - 1],
            [x + 1, 0],
            [x + 1, y + 1],
        ];

        const angles = [];
        gridPoints.forEach((gridPoint) => {
            if (
                gridPoint[0] >= 0 &&
                gridPoint[1] >= 0 &&
                gridPoint[0] < this.width &&
                gridPoint[1] < this.height
            ) {
                const angle = this.grid[gridPoint[0]][gridPoint[1]];
                angles.push(angle);
            }
        });

        return angles;
    }
}

FlowField.prototypes = {
    p5Instance: instanceOf(p5),
    coveredPerc: number,
    resolution: number,
    delta: number,
};

export default FlowField;
