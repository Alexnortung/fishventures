let shopItemId = 0;
const unknownImgName = "unknown";


class ShopItemObj {
    constructor(name, imgName) {
        this._name = name;
        this._owned = 0;
        this.id = shopItemId;
        this._imgName = imgName;
        this.notVisibleImgName = unknownImgName;
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
        if (this.isVisible) {
            return this._imgName;
        } else {
            return this.notVisibleImgName;
        }
    }
}

export default ShopItemObj;