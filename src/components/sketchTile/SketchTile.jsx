import React from "react";
import PropTypes from "prop-types";
import "./SketchTile.scss";
import { useHistory } from "react-router-dom";
import MobileFriendly from "@material-ui/icons/MobileFriendly";

function SketchTile(props) {
    const history = useHistory();

    function handleClick() {
        history.push(props.routerPath);
    }

    return (
        <div className='sketch-tile' onClick={handleClick}>
            <div className='text'>
                {props.image}
                <h2>
                    {props.title} {props.isMobileFriendly && <MobileFriendly />}
                </h2>
                <p>{props.desc}</p>
            </div>
        </div>
    );
}

SketchTile.propTypes = {
    title: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    image: PropTypes.element.isRequired,
    routerPath: PropTypes.string.isRequired,
    isMobileFriendly: PropTypes.bool,
};

SketchTile.defaultProps = {
    isMobileFriendly: false,
};

export default SketchTile;
