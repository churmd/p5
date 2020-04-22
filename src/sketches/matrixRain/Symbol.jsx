export default class Symbol {
	constructor(p, x, y, velocity, isWhite) {
		this.p = p;
		this.x = x;
		this.y = y;
		this.changeProb = this.p.random(0.5, 1);
		this.velocity = velocity;
		this.isWhite = isWhite;
		this.setRandomSymbol();
	}

	setRandomSymbol = () => {
		var decimal = this.p.random(12448, 12543); //Katakana unicode range
		this.value = String.fromCharCode(decimal);
	};

	render = () => {
		if (this.isWhite) {
			this.p.fill(180, 255, 180);
		} else {
			this.p.fill(0, 255, 70);
		}
		this.p.text(this.value, this.x, this.y);
	};

	update = () => {
		if (this.p.random() > this.changeProb) {
			this.setRandomSymbol();
		}
		if (this.y > this.p.height) {
			this.y = 0;
		} else {
			this.y += this.velocity;
		}
	};
}
