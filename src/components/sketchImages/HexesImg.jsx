import React from "react";
import SketchImage from "./SketchImage";
import PropTypes from "prop-types";
import HexesFile1920 from "../../images/hexes/randomHexes-1920w.jpeg";
import HexesFile1080 from "../../images/hexes/randomHexes-1080w.jpeg";
import HexesFile720 from "../../images/hexes/randomHexes-720w.jpeg";
import HexesFile480 from "../../images/hexes/randomHexes-480w.jpeg";

let srcSetString =
    HexesFile1920 +
    " 1920w, " +
    HexesFile1080 +
    " 1080w, " +
    HexesFile720 +
    " 720w, " +
    HexesFile480 +
    " 480w";

function HexesImg(props) {
    return (
        <SketchImage
            image={HexesFile1920}
            srcset={srcSetString}
            sizes='80vw'
            loading={props.loading}
        />
    );
}

HexesImg.propTypes = {
    loading: PropTypes.string,
};

export default HexesImg;
