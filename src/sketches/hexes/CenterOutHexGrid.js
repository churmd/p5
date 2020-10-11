import HexGrid from "./HexGrid";

export default class CenterOutHexGrid extends HexGrid {
    constructor(p, canvasWidth, canvasHeight, hexSideLength) {
        super(p, canvasWidth, canvasHeight, hexSideLength);
        this.setCenterOutPattern();
    }

    setCenterOutPattern() {
        const maxDistFromCenter = this.p.dist(
            this.canvasWidth / 2,
            this.canvasHeight / 2,
            0,
            0
        );

        this.hexes.forEach((hex) => {
            const hexDistFromCenter = this.p.dist(hex.x, hex.y, 0, 0);
            const startingSideLength = this.p.map(
                hexDistFromCenter,
                0,
                maxDistFromCenter,
                this.hexSideLength,
                0
            );
            hex.setSideLength(startingSideLength);
            hex.grow();
        });
    }
}
