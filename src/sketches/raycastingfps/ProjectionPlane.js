import p5 from "p5";
import { number, instanceOf } from "prop-types";
import { mod } from "../../constants/Mod";
import Player from "./Player";
import RayCollision from "./PlayerRay";

class ProjectionPlane {
    constructor(p5Instance, width, height, fov) {
        this.p = p5Instance;
        this.width = width;
        this.height = height;
        this.distanceToPlane = width / 2 / this.p.tan(fov / 2);
        this.fov = fov;
        this.angleBetweenRays = fov / width;
    }

    showProjection(collisions, world) {
        this.p.push();
        this.p.noStroke();

        // draw sky
        this.p.fill(204, 255, 255);
        this.p.rect(0, 0, this.width, this.height / 2);

        // draw floor
        this.p.fill(150);
        this.p.rect(0, this.height / 2, this.width, this.height / 2);

        this.p.rectMode(this.p.CENTER);
        for (let i = 0; i < collisions.length; i++) {
            this.__drawWallInColumn(collisions[i], world.blockSize, i);
        }

        this.p.pop();
    }

    /**
     *
     * @param {RayCollision} collision
     * @param {number} blockSize
     * @param {number} column
     */
    __drawWallInColumn(collision, blockSize, column) {
        if (collision.didCollide) {
            this.p.push();

            const distInWorldToWall = this.p.round(
                collision.distanceWithoutFishEye * blockSize
            );
            const wallHeight =
                (blockSize / distInWorldToWall) * this.distanceToPlane;

            const maxViewDist = 6;
            const wallBrightness = this.p.map(
                collision.distanceWithoutFishEye,
                0,
                maxViewDist,
                100,
                0,
                true
            );
            const wallColour = this.p.color(
                `hsb(195, 100%, ${wallBrightness}%)`
            );

            // if there is no stroke the walls look tranparent as they are only 1 pixel wide
            this.p.stroke(wallColour);
            this.p.fill(wallColour);
            this.p.rect(column, this.height / 2, 1, wallHeight);

            this.p.pop();
        }
    }

    /**
     * Finds all the ray colisions from the player.
     * @param {Player} player The player casting the rays.
     * @param {World} world The world the rays will be cast into.
     * @returns {RayCollision[]} The list of ray colisions with walls found.
     */
    findRayCollisions(player, world) {
        let angle = player.heading + this.fov / 2;
        const collisions = [];
        for (let i = 0; i < this.width; i++) {
            const wrappedAngle = mod(angle, this.p.TWO_PI);

            let c = this.__distanceToWall(player, wrappedAngle, world);
            collisions.push(c);

            angle -= this.angleBetweenRays;
        }

        return collisions;
    }

    /**
     *
     * @param {Player} player
     * @param {number} angle
     * @param {World} world
     * @returns {RayCollision}
     */
    __distanceToWall(player, angle, world) {
        const origin = player.position;

        // used to calculate length of line along a heading given only 1 coord
        const headingVec = p5.Vector.fromAngle(angle, 1);

        const sx = this.p.sqrt(1 + this.p.sq(headingVec.y / headingVec.x));
        const sy = this.p.sqrt(1 + this.p.sq(headingVec.x / headingVec.y));

        // x y directions of travel
        const mults = this.__getXYDirectionMultipliers(angle);
        const xMult = mults.x;
        const yMult = mults.y;

        // Get inital distances to first grid line in x and y
        const ax = this.__getXInitOffset(origin.x, xMult);
        const ay = this.__getYInitOffset(origin.y, yMult);

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
                return new RayCollision(
                    true,
                    origin,
                    player.heading,
                    angle,
                    distToWall
                );
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

        return new RayCollision();
    }

    /**
     * Multipliers to move along an angle in the correct x y direction.
     * @param {number} angle
     * @returns {x: number, y: number} (x,y) direction multipliers
     */
    __getXYDirectionMultipliers(angle) {
        let mults = { x: 1, y: 1 };

        if (angle < this.p.PI) {
            mults.y = -1;
        }

        if (angle >= this.p.HALF_PI && angle < this.p.PI + this.p.HALF_PI) {
            mults.x = -1;
        }

        return mults;
    }

    __getXInitOffset(xCoord, xMult) {
        if (xMult === -1) {
            return xCoord % 1;
        } else {
            return 1 - (xCoord % 1);
        }
    }

    __getYInitOffset(yCoord, yMult) {
        if (yMult === -1) {
            return yCoord % 1;
        } else {
            return 1 - (yCoord % 1);
        }
    }
}

ProjectionPlane.propTypes = {
    p5Instance: instanceOf(p5),
    width: number,
    height: number,
    fov: number,
};

export default ProjectionPlane;
