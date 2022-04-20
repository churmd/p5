import React from "react";
import p5 from "p5";
import Player from "./Player";
import World from "./World";
import ProjectionPlane from "./ProjectionPlane";

const KeyCodeW = 87;
const KeyCodeA = 65;
const KeyCodeS = 83;
const KeyCodeD = 68;

// Note p5 rotate functions go in a clockwise motion,
// normal rotate function go in counter clockwise
// so times all angles by -1 when drawing

class RayCastingFps extends React.Component {
    constructor(props) {
        super(props);
        this.myRef = React.createRef();
    }

    sketch = (p) => {
        let world;
        let player;
        let projectionPlane;

        p.setup = () => {
            p.frameRate(30);

            p.angleMode(p.RADIANS);

            player = new Player(p, 1.5, 1.5, 0);
            world = new World(p, player);
            projectionPlane = new ProjectionPlane(
                p,
                world.getWidth(),
                world.getHeight(),
                p.radians(60)
            );

            const cnv = p.createCanvas(world.getWidth() * 2, world.getHeight());
            cnv.style("display", "block");
            cnv.parent("canvas");
        };

        p.draw = () => {
            handleMovement(player);
            const collisions = projectionPlane.findRayCollisions(player, world);

            p.background(0);
            world.show(collisions);

            p.translate(world.getWidth(), 0);
            projectionPlane.showProjection(collisions, world);
        };

        const handleMovement = (player) => {
            if (p.keyIsDown(p.LEFT_ARROW)) {
                player.turnLeft();
            } else if (p.keyIsDown(p.RIGHT_ARROW)) {
                player.turnRight();
            }

            if (p.keyIsDown(KeyCodeW)) {
                player.moveForward();
            }
            if (p.keyIsDown(KeyCodeA)) {
                player.moveLeft();
            }
            if (p.keyIsDown(KeyCodeS)) {
                player.moveBackward();
            }
            if (p.keyIsDown(KeyCodeD)) {
                player.moveRight();
            }
        };

        p.windowResized = () => {
            p.resizeCanvas(window.innerWidth, window.innerHeight);
        };
    };

    componentDidMount() {
        this.myP5 = new p5(this.sketch, this.myRef.current);
    }

    componentWillUnmount() {
        document.getElementById("canvas").replaceChildren();
    }

    render() {
        return (
            <div ref={this.myRef}>
                <div id='canvas' />
                <p>Controls:</p>
                <ul>
                    <li>move with w, a, s, d</li>
                    <li>turn with left and right arrow keys</li>
                </ul>
            </div>
        );
    }
}
export default RayCastingFps;
