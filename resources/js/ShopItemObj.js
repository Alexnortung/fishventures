let shopItemId = 0;
const unknownImgName = "unknown";


class ShopItemObj {
    /**
     * 
     * @param {String} name the name of the item
     * @param {String} imgName the name of the image on the filesystem
     * @param {Object} options An object containing options for the shopit
     * @param {Number} options.initialCost How much the the first item costs
     * @param {Number} options.costMultiplier How much the ccost should be multiplied every time a new item is bought
     * @param {Number} options.baseCostAdd How much the base cost should go up everty time the item is bought
     * @param {Number} [options.moneyPerSecond=1] How much miney you will gain from this each second
     */
    constructor(name, imgName, options) {

        Object.assign(this, {
            initialCost: 1,
            costMultiplier: 1.5,
            baseCostAdd: 0,
            moneyPerSecond: 1,
        }, options);


        this._name = name;
        this._owned = 0;
        this.id = shopItemId;
        this._imgName = imgName;
        this.notVisibleImgName = unknownImgName;
        this.affordable = false;
        shopItemId++;

        this.isVisible = false;
    }

    get name() {
        if (this.isVisible) {
            return this._name;
        } else {
            return "??????";
        }
    }

    get owned() {
        if (this.isVisible) {
            return this._owned;
        } else {
            return 0;
        }
    }

    get imgName() {
        return this._imgName;
    }

    getCurrentCost(amount) {
        if (typeof amount !== "number") {
            amount = 1;
        }

        const start =  (this.initialCost + this.baseCostAdd * this._owned) * (this.costMultiplier ** this._owned);
        let cost = 0;

        for (let i = 0; i < amount; i++) {
            cost += this.baseCostAdd * i + start * (this.costMultiplier ** i);
        }

        return Math.round(cost);

    }

    add(amount) {
        this._owned += amount;
    }
}

export default ShopItemObj;