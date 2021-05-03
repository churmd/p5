import { cos } from "mathjs";
import p5 from "p5";
import { bool, number } from "prop-types";

class RayColision {
    constructor(
        didCollide = false,
        origin = null,
        angle = null,
        distance = null
    ) {
        this.didCollide = didCollide;
        this.origin = origin;
        this.angle = angle;
        this.distance = distance;
        this.distanceWithoutFishEye = null;
    }

    /**
     * @returns {(number|null)} The distance on the grid to the colision from the player,
     *                          or null if there was no collision.
     */
    getDistance() {
        if (this.didCollide) {
            return this.distance;
        } else {
            return null;
        }
    }

    removeFishEyeEffect(playerHeading, rayCastAngle) {
        this.distanceWithoutFishEye =
            this.distance * cos(playerHeading - rayCastAngle);
    }
}

RayColision.propTypes = {
    didCollide: bool,
    origin: p5.Vector,
    distance: number,
};

export default RayColision;
