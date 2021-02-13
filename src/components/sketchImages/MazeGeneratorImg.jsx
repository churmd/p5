import React from "react";
import SketchImage from "./SketchImage";
import PropTypes from "prop-types";
import MazeGeneratorFile1920 from "../../images/mazeGenerator/mazeGenerator-1920w.jpeg";
import MazeGeneratorFile1080 from "../../images/mazeGenerator/mazeGenerator-1080w.jpeg";
import MazeGeneratorFile720 from "../../images/mazeGenerator/mazeGenerator-720w.jpeg";
import MazeGeneratorFile480 from "../../images/mazeGenerator/mazeGenerator-480w.jpeg";

let srcSetString =
    MazeGeneratorFile1920 +
    " 1920w, " +
    MazeGeneratorFile1080 +
    " 1080w, " +
    MazeGeneratorFile720 +
    " 720w, " +
    MazeGeneratorFile480 +
    " 480w";

function MazeGeneratorImg(props) {
    return (
        <SketchImage
            image={MazeGeneratorFile1920}
            srcset={srcSetString}
            sizes='80vw'
            loading={props.loading}
        />
    );
}

MazeGeneratorImg.propTypes = {
    loading: PropTypes.string,
};

export default MazeGeneratorImg;
