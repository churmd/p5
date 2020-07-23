import React from "react";
import SketchImage from "./SketchImage";
import PropTypes from "prop-types";
import * as routePaths from "../../constants/RoutePaths";
import SnowflakeGenerator1920 from "../../images/snowflakeGenerator/snowflakeGenerator-1920w.jpeg";
import SnowflakeGenerator1080 from "../../images/snowflakeGenerator/snowflakeGenerator-1080w.jpeg";
import SnowflakeGenerator720 from "../../images/snowflakeGenerator/snowflakeGenerator-720w.jpeg";
import SnowflakeGenerator480 from "../../images/snowflakeGenerator/snowflakeGenerator-480w.jpeg";

let srcSetString =
    SnowflakeGenerator1920 +
    " 1920w, " +
    SnowflakeGenerator1080 +
    " 1080w, " +
    SnowflakeGenerator720 +
    " 720w, " +
    SnowflakeGenerator480 +
    " 480w";

function SnowflakeGeneratorImg(props) {
    return (
        <SketchImage
            image={SnowflakeGenerator1920}
            routerPath={routePaths.snowflakeGenerator}
            srcset={srcSetString}
            sizes='80vw'
            loading={props.loading}
        />
    );
}

SnowflakeGeneratorImg.propTypes = {
    loading: PropTypes.string,
};

export default SnowflakeGeneratorImg;
