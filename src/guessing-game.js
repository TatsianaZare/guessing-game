class GuessingGame {
    constructor() {
    	this.min = 0;
    	this.max = 0;
    	this.half = 0;
    }

    setRange(min, max) {
    	this.min = min;
    	this.max = max;
    }

    guess() {
    	this.half = this.findHalf(this.min, this.max);

    	return this.half;
    }

    lower() {
    	this.max = this.half;
    }

    greater() {
    	this.min = this.half;
    }

    findHalf(min, max) {

    	return Math.round((min + max) / 2);
    }
}

module.exports = GuessingGame;
