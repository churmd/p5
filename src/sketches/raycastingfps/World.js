import p5 from "p5";

class World {
    constructor(p5Instance) {
        this.p = p5Instance;
        this.blockSize = 64;
        this.blocks = [
            [1, 1, 1, 1, 1, 1, 1],
            [1, 0, 0, 0, 0, 0, 1],
            [1, 0, 0, 0, 0, 0, 1],
            [1, 0, 0, 0, 0, 0, 1],
            [1, 0, 0, 0, 0, 0, 1],
            [1, 0, 0, 0, 0, 0, 1],
            [1, 1, 1, 1, 1, 1, 1],
        ];
    }

    getWidth() {
        return this.blocks[0].length * this.blockSize;
    }

    getHeight() {
        return this.blocks.length * this.blockSize;
    }

    isCoordWall(x, y) {
        x = this.p.floor(x);
        y = this.p.floor(y);

        if (
            x < this.blocks[0].length &&
            x >= 0 &&
            y < this.blocks.length &&
            y >= 0
        ) {
            return this.blocks[y][x] === 1;
        }

        return false;
    }

    show() {
        for (let y = 0; y < this.blocks.length; y++) {
            for (let x = 0; x < this.blocks[0].length; x++) {
                const yOffset = y * this.blockSize;
                const xOffset = x * this.blockSize;

                if (this.blocks[y][x] === 0) {
                    this.p.fill("black");
                } else {
                    this.p.fill("white");
                }

                this.p.rect(xOffset, yOffset, this.blockSize, this.blockSize);
            }
        }
    }
}

World.propTypes = {
    p5Instance: p5,
};

export default World;
