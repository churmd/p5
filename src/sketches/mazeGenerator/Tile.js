export default class Tile {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.adjacentTiles = [];
        this.isWall = true;
    }

    addAdjacentTile(adjacentTile) {
        this.adjacentTiles.push(adjacentTile);
    }

    show(p, topLeftXPix, topLeftYPix, tileLength) {
        p.push();

        p.rect(topLeftXPix, topLeftYPix, tileLength, tileLength);

        p.pop();
    }
}
