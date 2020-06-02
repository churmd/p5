import React from "react";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";
import "./SketchTile.scss";

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
				<h2>{props.title}</h2>
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
};

export default SketchTile;
