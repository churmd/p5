import HexGrid from "./HexGrid";

export default class RandomHexGrid extends HexGrid {
    constructor(p, canvasWidth, canvasHeight, hexSideLength) {
        super(p, canvasWidth, canvasHeight, hexSideLength);
        this.setRandomPattern();
    }

    setRandomPattern() {
        this.hexes.forEach((hex) => {
            const startingSize = this.p.random(0, this.hexSideLength);
            hex.setSideLength(startingSize);

            const isGrowing = this.p.random([true, false]);
            if (isGrowing) {
                hex.grow();
            } else {
                hex.shrink();
            }
        });
    }
}
