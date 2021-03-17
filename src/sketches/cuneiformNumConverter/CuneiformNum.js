export default class CuneiformNum {
    /**
     * @param {Integer} val The value to dusplay
     */
    constructor(val) {
        this.val = val;
    }

    /**
     * Returns a list of numbers that represent the given value in base 60,
     * with the first index being the lowest unit (aka 60^0).
     *
     * Think of it like binary but in base 60 not 2 and read left to right.
     *
     * Example for val 601:
     * 60^0 | 60^1
     *  1   |  10
     *
     * @param {Integer} val The value to convert to base 60
     */
    __toBase60Array(val) {
        const quotient = Math.floor(val / 60);
        const remainder = val % 60;

        if (quotient === 0) {
            return [remainder];
        } else {
            return [remainder].concat(this.__toBase60Array(quotient));
        }
    }
}
