import React from "react";
import "./SketchList.scss";
// import flockingSimulationImg from "../../images/flockingSimulation/flockingSimulation.jpeg";
// import snowflakeGeneratorImg from "../../images/snowflakeGenerator.jpeg";
// import moduloTimesTableImg from "../../images/moduloTimesTable.jpeg";
// import matrixRainImag from "../../images/matrixRain.jpeg";
// import lissajousCurveTableImg from "../../images/lissajousCurveTable.jpeg";
// import maurerRoseImg from "../../images/maurerRose.jpeg";
// import chaosGameImg from "../../images/chaosGame/chaosGame.jpeg";
// import beautifulTrigImg from "../../images/beautifulTrig/beautifulTrigDisabled.jpeg";
import BeautifulTrigImg from "../sketchImages/BeautifulTrigImg";
import * as routePaths from "../../constants/RoutePaths";
import SketchTile from "../sketchTile/SketchTile";
import FlockingSimulationImg from "../sketchImages/FlockingSimulationImg";
import SnowflakeGeneratorImg from "../sketchImages/SnowflakeGenerator";
import ModuloTimesTableImg from "../sketchImages/ModuloTimesTable";
import MatrixRainImg from "../sketchImages/MatrixRain";
import LissajousCurveTableImg from "../sketchImages/LissajousCurveTableImg";
import MaurerRoseImg from "../sketchImages/MaurerRose";
import ChaosGameImg from "../sketchImages/ChaosGameImg";

function SketchList(props) {
    return (
        <div className='sketch-list'>
            <SketchTile
                title='Beautiful Trigonometry'
                desc='Points on the spokes of a circle following a main point as it rotates around the edge of the circle. Press the button to show how the points are calulated and how trigonometry is related to circles.'
                image={<BeautifulTrigImg loading='auto' />}
                routerPath={routePaths.beautifulTrig}
                isMobileFriendly
            />
            <SketchTile
                title='Flocking Simulation'
                desc='A simulated flock of birds using Boids program.'
                image={<FlockingSimulationImg loading='auto' />}
                routerPath={routePaths.flockingSimulation}
            />
            <SketchTile
                title='Snowflake Generator'
                desc='Repeatedly grow a random snowflake until it reaches full size and then begin again.'
                image={<SnowflakeGeneratorImg />}
                routerPath={routePaths.snowflakeGenerator}
                isMobileFriendly
            />
            <SketchTile
                title='Modulo Times Table'
                desc='A cicle with numbers 0 to N-1 around the outside. Each number is then multiplied by a factor F modulo N, and a line is drawn from it to the result. The multiplication factor is increased as time goes on.'
                image={<ModuloTimesTableImg />}
                routerPath={routePaths.moduloTimesTable}
            />
            <SketchTile
                title='Matrix Rain'
                desc='The falling streams of symbols seen in the Matrix films.'
                image={<MatrixRainImg />}
                routerPath={routePaths.matrixRain}
            />
            <SketchTile
                title='Lissajous Curve Table'
                desc='A table with rotating cogs in the top row and left column. The speed of the cogs increases going right/down along the table. Horizontal and vertical lines are then drawn from a point on the cogs edge. Where these lines intersect a path is traced.'
                image={<LissajousCurveTableImg />}
                routerPath={routePaths.lissajousCurveTable}
            />
            <SketchTile
                title='Maurer Rose'
                desc='A set of points along rose curve connected with straight lines. Animated so that the set of points and number of rose petals changes over time.'
                image={<MaurerRoseImg />}
                routerPath={routePaths.maurerRose}
            />
            <SketchTile
                title='Chaos Game'
                desc='Place a series of N points, 3 points in this example. Draw a dot at a random place on the screen. Randomly chose a point and move the dot halfway to it, and then repeat forever. Depending on the number of points, different patterns will appear.'
                image={<ChaosGameImg />}
                routerPath={routePaths.chaosGame}
                isMobileFriendly
            />
        </div>
    );
}

export default SketchList;
