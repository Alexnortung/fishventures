function retTrue() {
    return true;
}

class UpgradeItemObj {
    /**
     * @callback affectedItemCallback
     * @param {Object} item 
     */

    /**
     * 
     * @param {String} name Name of the upgrade
     * @param {Number} cost How much the upgrade should cost
     * @param {Object[]} affectedItems An array of objects that should be applied a specific funtion to
     * @param {affectedItemCallback} affectedItemFunction The function that will be applied to each item in the affectedItems array
     * @param {String} imgName The name of the image
     * @param {String} description a description of what the upgrade does
     */
    
    constructor(name, cost, affectedItems, affectedItemFunction, imgName, description, requiredFunction = retTrue, requiredDescription = "") {
        this.name = name;
        this.cost = cost;
        this.imgName = imgName;
        this.affectedItems = affectedItems;
        this.affectedItemFunction = affectedItemFunction;
        this.description = description;
        this.requiredFunction = requiredFunction;
        this.requiredDescription = requiredDescription;

        this. bought = false;
    }

    onBuy() {

        if (this.bought) {
            return false;
        }

        this.affectedItems.forEach((item)=> {
            this.affectedItemFunction(item);
        });

        this.bought = true;

        return true;
    }

    get imagePath() {
        return `/img/icons/upgrades/${this.imgName}.png`;
    }

}

export default UpgradeItemObj;