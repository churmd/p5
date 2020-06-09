import React from "react";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";
import "./SketchTile.scss";
import MobileFriendly from "@material-ui/icons/MobileFriendly";

function SketchTile(props) {
	const history = useHistory();

	function handleClick() {
		history.push(props.routerPath);
	}

	return (
		<div className='sketch-tile'>
			<img
				src={props.image}
				alt='Avatar'
				className='image'
				onClick={handleClick}
			></img>
			<div className='text'>
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
	image: PropTypes.string.isRequired,
	routerPath: PropTypes.string.isRequired,
	isMobileFriendly: PropTypes.bool,
};

SketchTile.defaultProps = {
	isMobileFriendly: false,
};

export default SketchTile;
