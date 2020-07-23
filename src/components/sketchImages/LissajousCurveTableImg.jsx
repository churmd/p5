import React from "react";
import SketchImage from "./SketchImage";
import PropTypes from "prop-types";
import * as routePaths from "../../constants/RoutePaths";
import LissajousCurveTable1920 from "../../images/lissajousCurveTable/lissajousCurveTable-1920w.jpeg";
import LissajousCurveTable1080 from "../../images/lissajousCurveTable/lissajousCurveTable-1080w.jpeg";
import LissajousCurveTable720 from "../../images/lissajousCurveTable/lissajousCurveTable-720w.jpeg";
import LissajousCurveTable480 from "../../images/lissajousCurveTable/lissajousCurveTable-480w.jpeg";

let srcSetString =
    LissajousCurveTable1920 +
    " 1920w, " +
    LissajousCurveTable1080 +
    " 1080w, " +
    LissajousCurveTable720 +
    " 720w, " +
    LissajousCurveTable480 +
    " 480w";

function LissajousCurveTableImg(props) {
    return (
        <SketchImage
            image={LissajousCurveTable1920}
            routerPath={routePaths.lissajousCurveTable}
            srcset={srcSetString}
            sizes='80vw'
            loading={props.loading}
        />
    );
}

LissajousCurveTableImg.propTypes = {
    loading: PropTypes.string,
};

export default LissajousCurveTableImg;
