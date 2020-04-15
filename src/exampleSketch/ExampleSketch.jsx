import React from "react";
import p5 from "p5";

class ExampleSketch extends React.Component {
	constructor(props) {
		super(props);
		this.myRef = React.createRef();
	}

	sketch = (p) => {
		let x = 100;
		let y = 100;

		p.setup = function () {
			p.createCanvas(700, 410);
		};

		p.draw = function () {
			p.background(0);
			p.fill(255);
			p.rect(x, y, 50, 50);
		};
	};

	componentDidMount() {
		this.myP5 = new p5(this.sketch, this.myRef.current);
	}

	render() {
		return <div ref={this.myRef}></div>;
	}
}
export default ExampleSketch;
