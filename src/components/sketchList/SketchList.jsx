import React from "react";
import "./SketchList.scss";
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
import HexesImg from "../sketchImages/HexesImg";
import MazeGeneratorImg from "../sketchImages/MazeGeneratorImg";
import CuneiformClockImg from "../sketchImages/CuneiformClockImg";
import RayCastFpsImg from "../sketchImages/RayCastFpsImg";
import BezierCurveImg from "../sketchImages/BezierCurveImg";
import DescentImg from "../sketchImages/DescentImg";
import FlowFieldImg from "../sketchImages/FlowFieldImg";
import InkMarbling from "../sketchImages/InkMarblingImg";

function SketchList(props) {
    return (
        <div className='sketch-list'>
            <SketchTile
                title='Ink Marbling'
                desc='Simulation of ink drops being placed on top of water to create a marbling effect'
                image={<InkMarbling loading='auto' />}
                routerPath={routePaths.inkMarbling}
            />
            <SketchTile
                title='Flow Field'
                desc='Flow field made from perlin noise simulating a water current with particles flowing along it'
                image={<FlowFieldImg loading='auto' />}
                routerPath={routePaths.flowField}
            />
            <SketchTile
                title='Descent'
                desc='Mimics moving downwards in a long tunnel'
                image={<DescentImg loading='auto' />}
                routerPath={routePaths.descent}
                isMobileFriendly
            />
            <SketchTile
                title='Bezier Curve'
                desc='A smooth curve drawn between a series of points'
                image={<BezierCurveImg />}
                routerPath={routePaths.bezierCurve}
                isMobileFriendly
            />
            <SketchTile
                title='Ray Casting'
                desc='A ray casting engine from games of the 90s'
                image={<RayCastFpsImg />}
                routerPath={routePaths.rayCastingFps}
            />
            <SketchTile
                title='Cuneiform Number Collection'
                desc='A simple 24 hour clock and counter, displayed in Babylonian cuneiform numerals'
                image={<CuneiformClockImg />}
                routerPath={routePaths.cuneiformNumberConverter}
                isMobileFriendly
            />
            <SketchTile
                title='Maze Generator'
                desc='Repeatedly generates a solvable maze.'
                image={<MazeGeneratorImg />}
                routerPath={routePaths.mazeGenerator}
                isMobileFriendly
            />
            <SketchTile
                title='Hexes'
                desc='A page of tiled hexes that grow/shrink in a random or center-out pattern. Click on the hexes animation to make it full screen.'
                image={<HexesImg />}
                routerPath={routePaths.hexes}
                isMobileFriendly
            />
            <SketchTile
                title='Beautiful Trigonometry'
                desc='Points on the spokes of a circle following a main point as it rotates around the edge of the circle. Press the button to show how the points are calulated and how trigonometry is related to circles.'
                image={<BeautifulTrigImg />}
                routerPath={routePaths.beautifulTrig}
                isMobileFriendly
            />
            <SketchTile
                title='Flocking Simulation'
                desc='A simulated flock of birds using Boids program.'
                image={<FlockingSimulationImg />}
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
