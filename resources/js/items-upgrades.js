import ShopItemObj from "./ShopItemObj.js";
import UpgradeItemObj from "./UpgradeItemObj.js";


const ginT = new ShopItemObj("Gin T", "gin-t", {
    initialCost: 1,
    baseCostAdd: 1,
    costMultiplier: 1.2,
    moneyPerSecond: 0.1,
});

const items = [
    ginT,
    new ShopItemObj("Ripper", "ripper", {
        moneyPerSecond: 2,
    }),
    new ShopItemObj("Rixo", "rixo", {
        moneyPerSecond: 5,
    }),
    new ShopItemObj("Igor", "igor", {
        moneyPerSecond: 35,
    }),
    new ShopItemObj("Jaeger", "jaeger", {
        moneyPerSecond: 120,
    }),
    new ShopItemObj("Steven", "steven", {
        moneyPerSecond: 375,
    }),
    new ShopItemObj("Blu", "blu", {
        moneyPerSecond: 1000,
    }),
    new ShopItemObj("Enigma", "enigma", {
        moneyPerSecond: 3000,
    }),
    new ShopItemObj("Bartholomew", "bartholomew", {
        moneyPerSecond: 9999,
    }),
    new ShopItemObj("Zanuchi", "zanuchi", {
        moneyPerSecond: 33333,
    }),
    new ShopItemObj("Beaumont", "beaumont", {
        moneyPerSecond: 190000,
    }),
];

const upgrades = [
    new UpgradeItemObj("Gin", 40, [ginT], function (item) {
        item.moneyPerSecond += 0.1;
    }, "gin", `Gives Gin T some more Gin! (Adds 0.1$/s to Gin T)`),
];

export {items, upgrades}