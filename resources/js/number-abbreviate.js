const units = ["", "k", "m", "b", "t", "qd", "qt", "sx", "sp", "o", "n", "d", "alot"];

function numberAbbreviate(number, numLength = 4) {
    let tier = Math.log10(number) / 3 | 0;

    // if zero, we don't need a suffix
    if (tier == 0) return number;

    // get suffix and determine scale
    if (tier >= units.length) {
        tier = units.length - 1;
    }
    const suffix = units[tier];
    const scale = Math.pow(10, tier * 3);

    const scaled = number / scale;

    const intLength = parseInt(scaled).toString().length;
    let decimals = numLength - intLength;

    if (decimals < 0) {
        decimals = 0;
    }

    return scaled.toFixed(decimals) + suffix;
}

window.numbabbr = numberAbbreviate;
export default numberAbbreviate;