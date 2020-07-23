import React from "react";
import SketchImage from "./SketchImage";
import PropTypes from "prop-types";
import * as routePaths from "../../constants/RoutePaths";
import ModuloTimesTable1920 from "../../images/moduloTimesTable/moduloTimesTable-1920w.jpeg";
import ModuloTimesTable1080 from "../../images/moduloTimesTable/moduloTimesTable-1080w.jpeg";
import ModuloTimesTable720 from "../../images/moduloTimesTable/moduloTimesTable-720w.jpeg";
import ModuloTimesTable480 from "../../images/moduloTimesTable/moduloTimesTable-480w.jpeg";

let srcSetString =
    ModuloTimesTable1920 +
    " 1920w, " +
    ModuloTimesTable1080 +
    " 1080w, " +
    ModuloTimesTable720 +
    " 720w, " +
    ModuloTimesTable480 +
    " 480w";

function ModuloTimesTableImg(props) {
    return (
        <SketchImage
            image={ModuloTimesTable1920}
            routerPath={routePaths.moduloTimesTable}
            srcset={srcSetString}
            sizes='80vw'
            loading={props.loading}
        />
    );
}

ModuloTimesTableImg.propTypes = {
    loading: PropTypes.string,
};

export default ModuloTimesTableImg;
