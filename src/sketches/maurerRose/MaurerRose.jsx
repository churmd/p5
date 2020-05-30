import React from "react";
import p5 from "p5";

class MaurerRose extends React.Component {
	constructor(props) {
		super(props);
		this.myRef = React.createRef();
	}

	sketch = (p) => {
		let cnvWidth, cnvHeight;
		let n = 1;
		let d = 0;
		let maxN = 20;
		let maxD = 360;
		let play = true;
		let size;
		let nSlider, dSlider;

		p.setup = () => {
			cnvWidth = p.windowWidth;
			cnvHeight = p.windowHeight * 0.9;
			var cnv = p.createCanvas(cnvWidth, cnvHeight);
			cnv.style("display", "block");
			size = p.min(cnvWidth / 2, cnvHeight / 2) - 2;

			this.createControls();
		};

		p.draw = () => {
			p.background(51);

			p.push();
			p.translate(cnvWidth / 2, cnvHeight / 2);
			this.drawMaurerRose();
			this.drawRose();
			p.pop();

			if (play) {
				if (n > maxN) {
					n = 1;
					d = 0;
				} else if (d < maxD) {
					d += 0.5;
				} else {
					d = 0;
					n++;
				}
				nSlider.value(n);
				dSlider.value(d);
			} else {
				n = nSlider.value();
				d = dSlider.value();
			}
		};

		this.drawRose = () => {
			p.push();
			p.angleMode(p.RADIANS);
			p.noFill();
			p.strokeWeight(2);
			p.stroke(255, 0, 0);
			p.beginShape();
			for (let i = 0; i < p.TWO_PI; i += p.TWO_PI / 360) {
				let r = size * p.sin(n * i);
				this.vertexFromPolar(r, i);
			}
			p.endShape();
			p.pop();
		};

		this.drawMaurerRose = () => {
			p.push();
			p.angleMode(p.DEGREES);
			p.noFill();
			p.strokeWeight(2);
			p.stroke(0, 0, 255);
			p.beginShape();
			for (let i = 0; i < 361; i++) {
				let k = i * d;
				let r = size * p.sin(n * k);
				this.vertexFromPolar(r, k);
			}
			p.endShape();
			p.pop();
		};

		this.vertexFromPolar = (r, theta) => {
			let x = r * p.cos(theta);
			let y = r * p.sin(theta);
			return p.vertex(x, y);
		};

		this.createControls = () => {
			let controls = p.createDiv();

			let sliderDiv = p.createDiv();
			sliderDiv.style("width", "50%");
			sliderDiv.style("display", "inline-block");
			sliderDiv.style("text-align", "center");
			sliderDiv.parent(controls);

			let nDiv = p.createDiv("N value");
			nDiv.parent(sliderDiv);

			nSlider = p.createSlider(1, maxN, n, 1);
			nSlider.parent(nDiv);

			let dDiv = p.createDiv("D value");
			dDiv.parent(sliderDiv);

			dSlider = p.createSlider(0, maxD, d, 1);
			dSlider.parent(dDiv);

			let buttonDiv = p.createDiv();
			buttonDiv.style("width", "50%");
			buttonDiv.style("display", "inline-block");
			buttonDiv.style("text-align", "center");
			buttonDiv.parent(controls);

			let pauseButton = p.createButton("Pause");
			pauseButton.parent(buttonDiv);
			pauseButton.mousePressed(() => {
				play = !play;
				let text = play ? "Pause" : "Play";
				pauseButton.html(text);
			});

			let resetButton = p.createButton("Reset");
			resetButton.parent(buttonDiv);
			resetButton.mousePressed(() => {
				n = 1;
				d = 0;
			});
		};

		p.windowResized = () => {
			p.resizeCanvas(p.windowWidth, p.windowHeight);
		};
	};

	componentDidMount() {
		this.myP5 = new p5(this.sketch, this.myRef.current);
	}

	render() {
		console.log("render");

		return <div ref={this.myRef}></div>;
	}
}
export default MaurerRose;
