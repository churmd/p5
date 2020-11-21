class Connection {
    constructor(tileA, tileB) {
        this.tileA = tileA;
        this.tileB = tileB;
        this.isWall = true;
    }

    isEdgeConnection() {
        return this.tileA === null || this.tileB === null;
    }
}

class Tile {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.connectionAbove = null;
        this.connectionRight = null;
        this.connectionLeft = null;
        this.connectionBelow = null;
    }

    setAboveConnection(tile) {
        this.connectionAbove = new Connection(this, tile);
    }

    setRightConnection(tile) {
        this.connectionRight = new Connection(this, tile);
    }

    setBelowConnection(tile) {
        this.connectionBelow = new Connection(this, tile);
    }

    setLeftConnection(tile) {
        this.connectionLeft = new Connection(this, tile);
    }

    getTileConnections() {
        const allConnections = [
            this.connectionAbove,
            this.connectionBelow,
            this.connectionLeft,
            this.connectionRight,
        ];

        return allConnections.filter((connection) => {
            return connection !== null;
        });
    }

    getWallConnections() {
        return this.getTileConnections().filter((connection) => {
            return connection.isWall;
        });
    }

    removeWallBetween(adjacentTile) {
        const connectionToAdjacentTile = this.getTileConnections().find(
            (connection) => {
                return (
                    connection.tileA === adjacentTile ||
                    connection.tileB === adjacentTile
                );
            }
        );

        connectionToAdjacentTile.isWall = false;
    }

    show(p, topLeftXPix, topLeftYPix, tileLength) {
        const wallThickness = tileLength / 8;

        p.push();

        p.fill(255);
        p.rect(topLeftXPix, topLeftYPix, tileLength, tileLength);

        p.fill(0);

        if (!this.connectionAbove || this.connectionAbove.isWall) {
            p.rect(topLeftXPix, topLeftYPix, tileLength, wallThickness);
        }

        if (!this.connectionBelow || this.connectionBelow.isWall) {
            p.rect(
                topLeftXPix,
                topLeftYPix + (tileLength - wallThickness),
                tileLength,
                wallThickness
            );
        }

        if (!this.connectionLeft || this.connectionLeft.isWall) {
            p.rect(topLeftXPix, topLeftYPix, wallThickness, tileLength);
        }

        if (!this.connectionRight || this.connectionRight.isWall) {
            p.rect(
                topLeftXPix + (tileLength - wallThickness),
                topLeftYPix,
                wallThickness,
                tileLength
            );
        }

        p.pop();
    }
}

export { Connection, Tile };
