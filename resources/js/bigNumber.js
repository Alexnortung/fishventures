class BigNumber {
    constructor(number, unit) {
        this.number = number;
        this.unit = unit;

    }

    static get units() {
        return [
            {
                number: 10n ** 3n,
                unit: "k"
            },
            {
                number: 10n ** 6n,
                unit: "m"
            },
            {
                number: 10n ** 9n,
                unit: "b"
            },
            {
                number: 10n ** 12n,
                unit: "t"
            },
            {
                number: 10n ** 15n,
                unit: "aa"
            },
            {
                number: 10n ** 18n,
                unit: "bb"
            },
            {
                number: 10n ** 21n,
                unit: "cc"
            },
            {
                number: 10n ** 24n,
                unit: "dd"
            },
        ];

    } 

    static getUnitIndex(unit) {
        for (let i = 0; i < BigNumber.units.length; i++) {
            const cUnit = BigNumber.units[i];
            if (cUnit.unit === unit) {
                return i;
            }
        }

        return 0;
    }

    static max(...bigNumbers) {
        bigNumbers.reduce((acc, currentValue) => {
            const prevIndex = BigNumber.getUnitIndex(acc);
            const currentIndex = BigNumber.getUnitIndex(currentValue);
            if (prevIndex < currentIndex || 
                (prevIndex === currentIndex && acc.number < currentValue.number)) {
                return currentValue
            } else {
                return acc;
            }
        }, bigNumbers[0]);
    }

    get unitIndex() {
        return BigNumber.getUnitIndex(this);
    }

    convert(toUnit) {
        this.convertIndex(BigNumber.getUnitIndex(toUnit));
    }

    convertIndex(toUnitIndex) {
        const indexDiff =  toUnitIndex - this.unitIndex;

        const newNumber = this.number ** indexDiff;

        this.number = newNumber;
        this.unit = this.units[toUnitIndex].unit;
    }

    isLessThan(other) {
        const thisUnitIndex = BigNumber.getUnitIndex(this.unit);
        const otherIndex = BigNumber.getUnitIndex(other.unit);

        if (thisUnitIndex < otherIndex) {
            return true;
        } else if (thisUnitIndex === otherIndex) {
            if (this.number < other.number) {
                return true
            }

            return false;
        } else {
            return false;
        }
    }

    add(otherBigNumber) {

        const oi = otherBigNumber.unitIndex;
        const ti = this.unitIndex;
        const diff = Math.abs(oi - ti);
        
        if (diff > 2) {
            const greatest = BigNumber.max(otherBigNumber, this);
            return greatest;
        } else {

        }
    }
}

module.exports =BigNumber