import ShopItemObj from "./ShopItemObj.js";
import UpgradeItemObj from "./UpgradeItemObj.js";




function generateItemsAndUpgrades(neededObjects) {

    const {
        gameComponent
    } = neededObjects;

    const ginT = new ShopItemObj("Gin T", "gin-t", {
        initialCost: 1,
        baseCostAdd: 1,
        costMultiplier: 1.2,
        moneyPerSecond: 0.1,
    });

    
    const ripper = new ShopItemObj("Ripper", "ripper", {
        moneyPerSecond: 1.5,
        initialCost: 100,
        costMultiplier: 1.2,
        baseCostAdd: 5,
    });

    const rixo = new ShopItemObj("Rixo", "rixo", {
        moneyPerSecond: 5,
        initialCost: 5500,
        costMultiplier: 1.3,
        baseCostAdd: 0,
    });

    const igor = new ShopItemObj("Igor", "igor", {
        moneyPerSecond: 35,
    });
    
    const items = [
        ginT,
        ripper,
        rixo,
        igor,
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

    const [
        ,,,,
        jaeger,
        steven,
        blu,
        enigma,
        bartholomew,
        zanuchi,
        beaumont,
    ] = items;


    const ginUpgrade = new UpgradeItemObj(
        "Gin",
        40,
        [ginT],
        function (item) {
            item.moneyPerSecond += 0.1;
        },
        "gin",
        `Gives Gin T some more Gin! (Adds +0.1$/s to Gin T)`,
        function () {
            return ginT.isVisible;
        }
    );

    const upgrades = [
        ginUpgrade,

        new UpgradeItemObj(
            "The newbie rod",
            150,
            [gameComponent],
            function (item) {
                item.clickValueBase += 2;
                item.visibleItemNum++;
            },
            "newbie-rod",
            `Gives you more fishing power (clicks give +2, lets you buy the next fish)`,
        ),

        // Tonic

        new UpgradeItemObj(
            "Tonic",
            600,
            [ginT],
            function (item) {
                item.moneyPerSecond *= 2;
            },
            "tonic",
            `Tonic is essential for a Gin & Tonic (multiply Gin T's income by x2)`,
            () => ginUpgrade.bought,
            `You need to buy Gin (upgrade) first`
        ),

        new UpgradeItemObj(
            "Reaper",
            800,
            [ripper],
            function (item) {
                item.moneyPerSecond *= 1.5;
            },
            "reaper",
            `The reaper will give Ripper more swimming strength (multiply Rippers income by x1.5)`,
            function () {
                return ripper.isVisible;
            },
            `You need to unlock ${ripper.name}`,
        ),

        


    ];

    return {
        upgrades: upgrades,
        items: items,
    }
}

export default generateItemsAndUpgrades