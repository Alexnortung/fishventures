import ShopItemObj from "./ShopItemObj.js";
import UpgradeItemObj from "./UpgradeItemObj.js";




function generateItemsAndUpgrades(neededObjects) {

    const {
        gameComponent
    } = neededObjects;

    const ginT = new ShopItemObj("Gin T", "gin-t", {
        initialCost: 15,
        // baseCostAdd: 2,
        costMultiplier: 1.15,
        moneyPerSecond: 0.1,
    });

    
    const ripper = new ShopItemObj("Ripper", "ripper", {
        moneyPerSecond: 1,
        initialCost: 100,
        costMultiplier: 1.15,
        // baseCostAdd: 15,
    });

    const rixo = new ShopItemObj("Rixo", "rixo", {
        moneyPerSecond: 8,
        initialCost: 1100,
        costMultiplier: 1.15,
        // baseCostAdd: 165,
    });

    const igor = new ShopItemObj("Igor", "igor", {
        moneyPerSecond: 47,
        initialCost: 12000,
        costMultiplier: 1.15,
        // baseCostAdd: 1800,
    });
    const jaeger = new ShopItemObj("Jaeger", "jaeger", {
        moneyPerSecond: 260,
        initialCost: 130000,
        costMultiplier: 1.15,
        // baseCostAdd: 19500,

    });

    const steven = new ShopItemObj("Steven", "steven", {
        moneyPerSecond: 1400,
        initialCost: 1400000,
        costMultiplier: 1.15,
        // baseCostAdd: 210000,

    });

    const blu = new ShopItemObj("Blu", "blu", {
        moneyPerSecond: 7800,
        initialCost: 20000000,
        costMultiplier: 1.15,
        // baseCostAdd: 3000000,

    });

    const enigma = new ShopItemObj("Enigma", "enigma", {
        moneyPerSecond: 44000,
        initialCost: 330000000,
        costMultiplier: 1.15,
        // baseCostAdd: 49500000,

    });

    const bartholomew = new ShopItemObj("Bartholomew", "bartholomew", {
        moneyPerSecond: 260000,
        initialCost: 5100000000,
        costMultiplier: 1.15,
        // baseCostAdd: 765000000,

    });
    const zanuchi = new ShopItemObj("Zanuchi", "zanuchi", {
        moneyPerSecond: 1600000,
        initialCost: 75000000000,
        costMultiplier: 1.15,
        // baseCostAdd: 11250000000,

    });

    const beaumont = new ShopItemObj("Beaumont", "beaumont", {
        moneyPerSecond: 10000000,
        initialCost: 1000000000000,
        costMultiplier: 1.15,
        // baseCostAdd: 150000000000,

    });
    
    const items = [
        ginT,
        ripper,
        rixo,
        igor,
        jaeger,
        steven,
        blu,
        enigma,
        bartholomew,
        zanuchi,
        beaumont,
    ];

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


    const intermediateRod = new UpgradeItemObj(
        "The intermediate rod",
        15000,
        (gameComp) => {

        }
    );

    const superRod = new UpgradeItemObj(
        "The super rod",
        1500000,
        [gameComponent],
        (gameComp) => {

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