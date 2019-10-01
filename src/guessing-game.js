class GuessingGame {
    constructor() {
        this.leftRange = 0;
        this.rightRange = 0;
        this.previousAssumption = 0;
    }

    setRange(min, max) {
        this.leftRange = min;
        this.rightRange = max;
    }

    guess() {
        this.previousAssumption = Math.ceil((this.rightRange - this.leftRange) / 2) + this.leftRange;
        return this.previousAssumption;
    }

    lower() {
         this.rightRange = this.previousAssumption;
    }

    greater() {
        this.leftRange = this.previousAssumption;
    }
}

module.exports = GuessingGame;
