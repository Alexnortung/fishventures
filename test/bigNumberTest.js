require("chai").should();
const BigNumber = require("../resources/js/bigNumber.js");

describe("BigNumber", () => {
    describe("BigNumber.getUnitIndex", () => {
        it("should should return the correct index for each unit", () => {
            BigNumber.units.forEach((unit, i) => {
                BigNumber.getUnitIndex(unit).should.equal(i);
            });
        });
    });
});