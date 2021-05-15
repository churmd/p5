import { cos } from "mathjs";
import p5 from "p5";
import { bool, number, instanceOf } from "prop-types";

class PlayerRay {
    constructor(
        didCollide = false,
        playerPosition = null,
        playerHeading = null,
        angle = null,
        distance = null
    ) {
        this.didCollide = didCollide;
        this.playerPosition = playerPosition;
        this.angle = angle;
        this.distance = distance;
        this.distanceWithoutFishEye = distance * cos(playerHeading - angle);
    }
}

PlayerRay.propTypes = {
    didCollide: bool,
    playerPosition: instanceOf(p5.Vector),
    playerHeading: instanceOf(p5.Vector),
    distance: number,
};

export default PlayerRay;
