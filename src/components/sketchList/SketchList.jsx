import React from "react";
import "./SketchList.scss";
import flockingSimulationImg from "../../images/flockingSimulation.png";
import snowflakeGeneratorImg from "../../images/snowflakeGenerator.png";
import moduloTimesTableImg from "../../images/moduloTimesTable.png";
import matrixRainImag from "../../images/matrixRain.png";
import lissajousCurveTableImg from "../../images/lissajousCurveTable.png";
import maurerRoseImg from "../../images/maurerRose.png";
import chaosGameImg from "../../images/chaosGame.png";
import beautifulTrigImg from "../../images/beautifulTrigDisabled.png";
import * as routePaths from "../../constants/RoutePaths";
import SketchTile from "../sketchTile/SketchTile";

function SketchList(props) {
    return (
        <div className='sketch-list'>
            <SketchTile
                title='Beautiful Trigonometry'
                desc='Points on the spokes of a circle following a main point as it rotates around the edge of the circle. Press the button to show how the points are calulated and how trigonometry is related to circles.'
                image={beautifulTrigImg}
                routerPath={routePaths.beautifulTrig}
                isMobileFriendly
            />
            <SketchTile
                title='Flocking Simulation'
                desc='A simulated flock of birds using Boids program.'
                image={flockingSimulationImg}
                routerPath={routePaths.flockingSimulation}
            />
            <SketchTile
                title='Snowflake Generator'
                desc='Repeatedly grow a random snowflake until it reaches full size and then begin again.'
                image={snowflakeGeneratorImg}
                routerPath={routePaths.snowflakeGenerator}
                isMobileFriendly
            />
            <SketchTile
                title='Modulo Times Table'
                desc='A cicle with numbers 0 to N-1 around the outside. Each number is then multiplied by a factor F modulo N, and a line is drawn from it to the result. The multiplication factor is increased as time goes on.'
                image={moduloTimesTableImg}
                routerPath={routePaths.moduloTimesTable}
            />
            <SketchTile
                title='Matrix Rain'
                desc='The falling streams of symbols seen in the Matrix films.'
                image={matrixRainImag}
                routerPath={routePaths.matrixRain}
            />
            <SketchTile
                title='Lissajous Curve Table'
                desc='A table with rotating cogs in the top row and left column. The speed of the cogs increases going right/down along the table. Horizontal and vertical lines are then drawn from a point on the cogs edge. Where these lines intersect a path is traced.'
                image={lissajousCurveTableImg}
                routerPath={routePaths.lissajousCurveTable}
            />
            <SketchTile
                title='Maurer Rose'
                desc='A set of points along rose curve connected with straight lines. Animated so that the set of points and number of rose petals changes over time.'
                image={maurerRoseImg}
                routerPath={routePaths.maurerRose}
            />
            <SketchTile
                title='Chaos Game'
                desc='Place a series of N points, 3 points in this example. Draw a dot at a random place on the screen. Randomly chose a point and move the dot halfway to it, and then repeat forever. Depending on the number of points, different patterns will appear.'
                image={chaosGameImg}
                routerPath={routePaths.chaosGame}
                isMobileFriendly
            />
        </div>
    );
}

export default SketchList;
