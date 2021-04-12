import React, { Suspense, lazy } from "react";
import { Route, HashRouter as Router, Switch } from "react-router-dom";
import * as routePaths from "./constants/RoutePaths";
import Notfound from "./NotFound";

const ModuloTimesTable = lazy(() =>
    import("./sketches/moduloTimesTableCircle/ModuloTimesTable")
);
const SnowflakeGenerator = lazy(() =>
    import("./sketches/snowfalkeGenerator/SnowflakeGenerator")
);
const FlockingSimulation = lazy(() =>
    import("./sketches/flockingSimulation/FlockingSimulation")
);
const LissajousCurveTable = lazy(() =>
    import("./sketches/lissajousCurveTable/LissajousCurveTable")
);
const MatrixRain = lazy(() => import("./sketches/matrixRain/MatrixRain"));
const MaurerRose = lazy(() => import("./sketches/maurerRose/MaurerRose"));
const MazeGenerator = lazy(() =>
    import("./sketches/mazeGenerator/MazeGenerator")
);
const ChaosGame = lazy(() => import("./sketches/chaosGame/ChaosGame"));
const Home = lazy(() => import("./components/home/Home"));
const BeautifulTrig = lazy(() =>
    import("./sketches/beautifulTrig/BeautifulTrig")
);
const Hexes = lazy(() => import("./sketches/hexes/Hexes"));
const Cuneiform = lazy(() =>
    import("./sketches/cuneiformNumConverter/Cuneiform")
);

const routing = (
    <Router>
        <Suspense fallback={<div>Page is Loading...</div>}>
            <Switch>
                <Route exact path={routePaths.home} component={Home} />
                <Route
                    exact
                    path={routePaths.cuneiformNumberConverter}
                    component={Cuneiform}
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
                <Route
                    exact
                    path={routePaths.matrixRain}
                    component={MatrixRain}
                />
                <Route
                    exact
                    path={routePaths.maurerRose}
                    component={MaurerRose}
                />
                <Route
                    exact
                    path={routePaths.mazeGenerator}
                    component={MazeGenerator}
                />
                <Route
                    exact
                    path={routePaths.chaosGame}
                    component={ChaosGame}
                />
                <Route
                    exact
                    path={routePaths.beautifulTrig}
                    component={BeautifulTrig}
                />
                <Route exact path={routePaths.hexes} component={Hexes} />
                <Route component={Notfound} />
            </Switch>
        </Suspense>
    </Router>
);

function App() {
    return <React.StrictMode>{routing}</React.StrictMode>;
}

export default App;
