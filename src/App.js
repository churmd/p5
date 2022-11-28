import React, { Suspense, lazy } from "react";
import { Route, HashRouter as Router, Routes } from "react-router-dom";
import * as routePaths from "./constants/RoutePaths";
import Notfound from "./NotFound";
import BezierCurve from "./sketches/bezierCurve/BezierCurve";
import Descent from "./sketches/descent/Descent";
import RayCastingFps from "./sketches/raycastingfps/RayCastingFps";

const ModuloTimesTable = lazy(() =>
    import("./sketches/moduloTimesTableCircle/ModuloTimesTable")
);
const SnowflakeGenerator = lazy(() =>
    import("./sketches/snowfalkeGenerator/SnowflakeGenerator")
);
const FlockingSimulation = lazy(() =>
    import("./sketches/flockingSimulation/FlockingSimulation")
);
const FlowField = lazy(() => import("./sketches/flowfield/FlowField"));
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
            <Routes>
                <Route exact path={routePaths.home} element={<Home />} />
                <Route
                    exact
                    path={routePaths.flowField}
                    element={<FlowField />}
                />
                <Route exact path={routePaths.descent} element={<Descent />} />
                <Route
                    exact
                    path={routePaths.bezierCurve}
                    element={<BezierCurve />}
                />
                <Route
                    exact
                    path={routePaths.rayCastingFps}
                    element={<RayCastingFps />}
                />
                <Route
                    exact
                    path={routePaths.cuneiformNumberConverter}
                    element={<Cuneiform />}
                />
                <Route
                    exact
                    path={routePaths.moduloTimesTable}
                    element={<ModuloTimesTable />}
                />
                <Route
                    exact
                    path={routePaths.snowflakeGenerator}
                    element={<SnowflakeGenerator />}
                />
                <Route
                    exact
                    path={routePaths.flockingSimulation}
                    element={<FlockingSimulation />}
                />
                <Route
                    exact
                    path={routePaths.lissajousCurveTable}
                    element={<LissajousCurveTable />}
                />
                <Route
                    exact
                    path={routePaths.matrixRain}
                    element={<MatrixRain />}
                />
                <Route
                    exact
                    path={routePaths.maurerRose}
                    element={<MaurerRose />}
                />
                <Route
                    exact
                    path={routePaths.mazeGenerator}
                    element={<MazeGenerator />}
                />
                <Route
                    exact
                    path={routePaths.chaosGame}
                    element={<ChaosGame />}
                />
                <Route
                    exact
                    path={routePaths.beautifulTrig}
                    element={<BeautifulTrig />}
                />
                <Route exact path={routePaths.hexes} element={<Hexes />} />
                <Route path='*' element={<Notfound />} />
            </Routes>
        </Suspense>
    </Router>
);

function App() {
    return <React.StrictMode>{routing}</React.StrictMode>;
}

export default App;
