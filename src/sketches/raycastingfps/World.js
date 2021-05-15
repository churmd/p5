import p5 from "p5";
import { instanceOf } from "prop-types";
import Player from "./Player";

class World {
    constructor(p5Instance, player) {
        this.p = p5Instance;
        this.player = player;
        this.blockSize = 64;
        this.blocks = [
            [1, 1, 1, 1, 1, 1, 1],
            [1, 0, 0, 0, 0, 0, 1],
            [1, 0, 0, 0, 0, 1, 1],
            [1, 0, 0, 0, 0, 0, 1],
            [1, 0, 0, 0, 0, 0, 1],
            [1, 0, 1, 0, 0, 0, 1],
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

    show(playerRays) {
        this.p.push();

        for (let y = 0; y < this.blocks.length; y++) {
            for (let x = 0; x < this.blocks[0].length; x++) {
                const yOffset = y * this.blockSize;
                const xOffset = x * this.blockSize;

                if (this.blocks[y][x] === 0) {
                    this.p.fill(150);
                } else {
                    this.p.fill(51, 204, 255);
                }

                this.p.rect(xOffset, yOffset, this.blockSize, this.blockSize);
            }
        }

        this.player.show(this.blockSize);

        playerRays.forEach((playerRay) => {
            if (playerRay.didCollide) {
                const headingVec = p5.Vector.fromAngle(-playerRay.angle);
                const vecToCollsion = p5.Vector.mult(
                    headingVec,
                    playerRay.distance
                );
                const collsionPointInGrid = p5.Vector.add(
                    playerRay.playerPosition,
                    vecToCollsion
                );
                const collsionPointInWorld = collsionPointInGrid.mult(
                    this.blockSize
                );

                this.p.fill(0, 51, 204);
                this.p.noStroke();
                this.p.circle(
                    collsionPointInWorld.x,
                    collsionPointInWorld.y,
                    10
                );
            }
        });

        this.p.pop();
    }
}

World.propTypes = {
    p5Instance: instanceOf(p5),
    player: instanceOf(Player),
};

export default World;
