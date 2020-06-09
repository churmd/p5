import Symbol from "./Symbol";

export default class Stream {
	constructor(p, x, symbolSize) {
		this.p = p;
		this.x = x;
		this.symbolSize = symbolSize;
		this.symbols = [];
		this.setup();
	}

	setup = () => {
		let y = this.randomInt(-100, -1000);
		let velocity = this.randomInt(1, 10);
		let isWhite = this.p.random([true, false]);

		for (let i = 0; i < this.calcStreamLen(); i++) {
			let sym = new Symbol(this.p, this.x, y, velocity, isWhite);
			this.symbols.push(sym);
			y -= this.symbolSize;
			isWhite = false;
		}
	};

	randomInt = (min, max) => {
		return this.p.int(this.p.random(min, max));
	};

	calcStreamLen = () => {
		let maxLen = this.p.int(this.p.windowHeight / this.symbolSize);
		let minLen = maxLen < 5 ? 1 : 5;
		return this.randomInt(minLen, maxLen);
	};

	update = () => {
		for (let i = 0; i < this.symbols.length; i++) {
			this.symbols[i].update();
		}
	};

	render = () => {
		for (let i = 0; i < this.symbols.length; i++) {
			this.symbols[i].render();
		}
	};
}
