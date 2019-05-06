

class UpgradeItemObj {
    constructor(name, cost, affectedItems, affectedItemFunction) {
        this.name = name;
        this.cost = cost;
        this.affectedItems = affectedItems;
        this.affectedItemFunction = affectedItemFunction;

        this. bought = false;
    }

    onBuy() {

        this.affectedItems.foreach((item)=> {
            this.affectedItemFunction(item);
        });

        this.bought = true;
    }

}