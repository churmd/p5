const Tile = {
    Empty: "Empty",
    Black: "Black",
    White: "White",
    Arrow: "Arrow",
};

class Board {
    constructor() {
        this.tiles = [];
        for (let x = 0; x < 10; x++) {
            this.tiles[x] = [];

            for (let y = 0; y < 10; y++) {
                this.tiles[x][y] = Tile.Empty;
            }
        }

        this.tiles[0][3] = Tile.Black;
        this.tiles[3][0] = Tile.Black;
        this.tiles[6][0] = Tile.Black;
        this.tiles[9][3] = Tile.Black;

        this.tiles[0][6] = Tile.White;
        this.tiles[3][9] = Tile.White;
        this.tiles[6][9] = Tile.White;
        this.tiles[9][6] = Tile.White;
    }

    getTile(x, y) {
        if (x < 0 || x >= 10 || y < 0 || y >= 10) {
            return undefined;
        }

        return this.tiles[x][y];
    }
}
