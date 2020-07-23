import React from "react";
import SketchImage from "./SketchImage";
import PropTypes from "prop-types";
import * as routePaths from "../../constants/RoutePaths";
import MaurerRose1920 from "../../images/maurerRose/maurerRose-1920w.jpeg";
import MaurerRose1080 from "../../images/maurerRose/maurerRose-1080w.jpeg";
import MaurerRose720 from "../../images/maurerRose/maurerRose-720w.jpeg";
import MaurerRose480 from "../../images/maurerRose/maurerRose-480w.jpeg";

let srcSetString =
    MaurerRose1920 +
    " 1920w, " +
    MaurerRose1080 +
    " 1080w, " +
    MaurerRose720 +
    " 720w, " +
    MaurerRose480 +
    " 480w";

function MaurerRoseImg(props) {
    return (
        <SketchImage
            image={MaurerRose1920}
            routerPath={routePaths.maurerRose}
            srcset={srcSetString}
            sizes='80vw'
            loading={props.loading}
        />
    );
}

MaurerRoseImg.propTypes = {
    loading: PropTypes.string,
};

export default MaurerRoseImg;
