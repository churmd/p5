import React from "react";
import p5 from "p5";
import Stream from "./Stream";

class MatrixRain extends React.Component {
	constructor(props) {
		super(props);
		this.myRef = React.createRef();
	}

	sketch = (p) => {
		let numStreams = 50;
		let symbolSize;
		let streams = [];

		p.setup = () => {
			var cnv = p.createCanvas(p.windowWidth, p.windowHeight);
			cnv.style("display", "block");
			p.background(0);

			this.createNewStreams();
		};

		this.createNewStreams = () => {
			streams = [];

			symbolSize = p.width / numStreams;
			p.textSize(symbolSize);

			let x = 0;
			for (var i = 0; i <= numStreams; i++) {
				var stream = new Stream(p, x, symbolSize);
				streams.push(stream);
				x += symbolSize;
			}
		};

		p.draw = () => {
			p.background(0, 100);
			streams.forEach(function (s) {
				s.render();
				s.update();
			});
		};

		p.windowResized = () => {
			p.resizeCanvas(p.windowWidth, p.windowHeight);
			this.createNewStreams();
		};
	};

	componentDidMount() {
		this.myP5 = new p5(this.sketch, this.myRef.current);
	}

	render() {
		return <div ref={this.myRef}></div>;
	}
}
export default MatrixRain;
