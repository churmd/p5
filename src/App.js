import React from "react";

import { Route, HashRouter as Router, Switch } from "react-router-dom";
import Notfound from "./NotFound";
import ModuloTimesTable from "./sketches/moduloTimesTableCircle/ModuloTimesTable";
import SnowflakeGenerator from "./sketches/snowfalkeGenerator/SnowflakeGenerator";
import FlockingSimulation from "./sketches/flockingSimulation/FlockingSimulation";
import LissajousCurveTable from "./sketches/lissajousCurveTable/LissajousCurveTable";
import MatrixRain from "./sketches/matrixRain/MatrixRain";
import MaurerRose from "./sketches/maurerRose/MaurerRose";
import MazeGenerator from "./sketches/mazeGenerator/MazeGenerator";
import ChaosGame from "./sketches/chaosGame/ChaosGame";
import * as routePaths from "./constants/RoutePaths";
import Home from "./components/home/Home";
import BeautifulTrig from "./sketches/beautifulTrig/BeautifulTrig";
import Hexes from "./sketches/hexes/Hexes";
import CuneiformConverter from "./sketches/cuneiformNumConverter/CuneiformConverter";

const routing = (
    <Router>
        <Switch>
            <Route exact path={routePaths.home} component={Home} />
            <Route
                exact
                path={routePaths.cuneiformNumberConverter}
                component={CuneiformConverter}
            />
            <Route
                exact
                path={routePaths.moduloTimesTable}
                component={ModuloTimesTable}
            />
            <Route
                exact
                path={routePaths.snowflakeGenerator}
                component={SnowflakeGenerator}
            />
            <Route
                exact
                path={routePaths.flockingSimulation}
                component={FlockingSimulation}
            />
            <Route
                exact
                path={routePaths.lissajousCurveTable}
                component={LissajousCurveTable}
            />
            <Route exact path={routePaths.matrixRain} component={MatrixRain} />
            <Route exact path={routePaths.maurerRose} component={MaurerRose} />
            <Route
                exact
                path={routePaths.mazeGenerator}
                component={MazeGenerator}
            />
            <Route exact path={routePaths.chaosGame} component={ChaosGame} />
            <Route
                exact
                path={routePaths.beautifulTrig}
                component={BeautifulTrig}
            />
            <Route exact path={routePaths.hexes} component={Hexes} />
            <Route component={Notfound} />
        </Switch>
    </Router>
);

function App() {
    return <React.StrictMode>{routing}</React.StrictMode>;
}

export default App;
