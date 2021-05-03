import React from "react";
import p5 from "p5";
import Player from "./Player";
import World from "./World";
import ProjectionPlane from "./ProjectionPlane";

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

            world = new World(p);

            const cnv = p.createCanvas(world.getWidth() * 2, world.getHeight());
            cnv.style("display", "block");

            p.angleMode(p.RADIANS);

            player = new Player(p, 1.5, 1.5, 0);
            projectionPlane = new ProjectionPlane(
                p,
                world.getWidth(),
                world.getHeight(),
                p.radians(60)
            );
        };

        p.draw = () => {
            handleMovement(player);
            const collisions = projectionPlane.findRayColisions(player, world);

            p.background(0);
            world.show(collisions);
            player.show(world.blockSize);

            p.translate(world.getWidth(), 0);
            projectionPlane.showProjection(collisions, world);

            // p.noLoop();
        };

        const handleMovement = (player) => {
            if (p.keyIsDown(p.LEFT_ARROW)) {
                player.changeHeading(0.1);
            } else if (p.keyIsDown(p.RIGHT_ARROW)) {
                player.changeHeading(-0.1);
            }
        };

        p.windowResized = () => {
            p.resizeCanvas(window.innerWidth, window.innerHeight);
        };
    };

    componentDidMount() {
        this.myP5 = new p5(this.sketch, this.myRef.current);
    }

    render() {
        return <div ref={this.myRef}></div>;
    }
}
export default RayCastingFps;
