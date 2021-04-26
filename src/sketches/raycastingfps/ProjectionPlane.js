import p5 from "p5";
import { number } from "prop-types";

class ProjectionPlane {
    constructor(p5Instance, width, height, fov) {
        this.p = p5Instance;
        this.width = width;
        this.height = height;
        this.distanceToPlane = width / 2 / this.p.tan(fov / 2);
        this.fov = fov;
        this.angleBetweenRays = fov / width;
    }

    show(player, world) {
        this.p.push();
        this.p.noStroke();

        this.p.fill(0, 0, 230);
        this.p.rect(0, 0, this.width, this.height / 2);

        this.p.fill(150);
        this.p.rect(0, this.height / 2, this.width, this.height / 2);

        this.p.push();
        this.p.fill(0, 0, 100);
        // if there is no stroke the walls look tranparent as they are only 1 pixel wide
        this.p.stroke(0, 0, 100);
        this.p.rectMode(this.p.CENTER);
        const distToWalls = this.distancesToWalls(player, world);
        for (let i = 0; i < distToWalls.length; i++) {
            const wallDist = distToWalls[i];

            const distInWorldToWall = this.p.round(wallDist * world.blockSize);
            const wallHeight =
                (world.blockSize / distInWorldToWall) * this.distanceToPlane;

            if (wallDist > 0) {
                this.p.fill(0, wallHeight, 100);
                this.p.stroke(0, wallHeight, 100);
                this.p.rect(i, this.height / 2, 1, wallHeight);
            }
        }

        this.p.pop();
        this.p.pop();
    }

    distancesToWalls(player, world) {
        let angle = player.heading - this.fov / 2;
        const distances = [];
        for (let i = 0; i < this.width; i++) {
            let d = this.distanceToWall(player.position, angle, world);
            d = d * this.p.cos(player.heading - angle);
            distances.push(d);

            angle += this.angleBetweenRays;
        }

        return distances;
    }

    distanceToWall(origin, angle, world) {
        // used to calculate length of line along a heading given only 1 coord
        const headingVec = p5.Vector.fromAngle(angle, 1);

        const sx = this.p.sqrt(1 + this.p.sq(headingVec.y / headingVec.x));
        const sy = this.p.sqrt(1 + this.p.sq(headingVec.x / headingVec.y));

        // x y directions of travel
        const mults = this.getXYDirectionMultipliers(angle);
        const xMult = mults.x;
        const yMult = mults.y;

        // Get inital distances to first grid line in x and y
        const ax = this.getXInitOffset(origin.x, xMult);
        const ay = this.getYInitOffset(origin.y, yMult);

        let nextXCoord = origin.x;
        let nextYCoord = origin.y;

        let nextXDist = ax * sx;
        let nextYDist = ay * sy;

        let distToWall = this.p.min(nextXDist, nextYDist);

        const maxRayLen = this.p.sqrt(
            this.p.sq(world.getWidth()) + this.p.sq(world.getHeight())
        );

        while (this.p.min(nextXDist, nextYDist) <= maxRayLen) {
            if (world.isCoordWall(nextXCoord, nextYCoord)) {
                const headingVec2 = p5.Vector.fromAngle(-angle);
                let tyemp = p5.Vector.add(
                    origin,
                    p5.Vector.mult(headingVec2, distToWall)
                );

                tyemp.mult(world.blockSize);

                tyemp = p5.Vector.sub(
                    tyemp,
                    this.p.createVector(world.getWidth())
                );

                this.p.fill(100, 0, 0);
                this.p.circle(tyemp.x, tyemp.y, 10);

                console.log(`wall at ${nextXCoord} ${nextYCoord}`);

                return distToWall;
            }

            if (nextXDist < nextYDist) {
                nextXCoord += xMult;
                distToWall = nextXDist;
                nextXDist += sx;
            } else {
                nextYCoord += yMult;
                distToWall = nextYDist;
                nextYDist += sy;
            }
        }

        return -1;
    }

    /**
     * Multipliers to move along a angle in the correct x y direction.
     * @param {number} angle
     * @returns {x: number, y: number} (x,y) direction multipliers
     */
    getXYDirectionMultipliers(angle) {
        let mults = { x: 1, y: 1 };

        if (angle < this.p.PI) {
            mults.y = -1;
        }

        if (angle >= this.p.HALF_PI && angle < this.p.PI + this.p.HALF_PI) {
            mults.x = -1;
        }

        return mults;
    }

    getXInitOffset(xCoord, xMult) {
        if (xMult === -1) {
            return xCoord % 1;
        } else {
            return 1 - (xCoord % 1);
        }
    }

    getYInitOffset(yCoord, yMult) {
        if (yMult === -1) {
            return yCoord % 1;
        } else {
            return 1 - (yCoord % 1);
        }
    }
}

ProjectionPlane.propTypes = {
    p5Instance: p5,
    width: number,
    height: number,
    fov: number,
};

export default ProjectionPlane;
