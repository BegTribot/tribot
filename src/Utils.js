const K = 1000, M = 1000000, B = 1000000000;

const formatDecimal = (number, decimals) =>
    number.toLocaleString('en-US', {minimumFractionDigits: decimals, maximumFractionDigits: decimals});

export function toKmb(number, upperCase, decimal) {
    const decimals = decimal ? 2 : 0;
    if (Math.abs(number) < K) {
        return "" + number;
    } else if (Math.abs(number) < M) {
        return formatDecimal(number / K, decimals) + (upperCase ? "K" : "k");
    } else if (Math.abs(number) < B) {
        return formatDecimal(number / M, decimals) + (upperCase ? "M" : "m");
    }
    return formatDecimal(number / B, decimals) + (upperCase ? "B" : "b");
}

export function msToString(ms, upperCase, longFormat) {
    let msString = "";
    let seconds = Math.floor(ms / 1000);
    let minutes = Math.floor(seconds / 60);
    seconds %= 60;
    let hours = Math.floor(minutes / 60);
    minutes %= 60;
    let days = Math.floor(hours / 24)
    hours %= 24;
    if (days > 0) {
        msString += days + (longFormat ? " " : "") + (upperCase ? "D" : "d") + (longFormat ? (days > 1 ? "ays" : "ay") : "") + ", ";
    }
    if (hours > 0) {
        msString += hours + (longFormat ? " " : "") + (upperCase ? "H" : "h") + (longFormat ? (hours > 1 ? "ours" : "our") : "") + ", ";
    }
    if (minutes > 0) {
        msString += minutes + (longFormat ? " " : "") + (upperCase ? "M" : "m") + (longFormat ? (minutes > 1 ? "inutes" : "inute") : "") + ", ";
    }
    if (seconds > 0 || msString === '') {
        msString += seconds + (longFormat ? " " : "") + (upperCase ? "S" : "s") + (longFormat ? (minutes === 0 || minutes > 1 ? "econds" : "econd") : "");
    }
    if (msString.endsWith(", ")) {
        msString = msString.substring(0, msString.length - 2);
    } else if (msString.endsWith(" ")) {
        msString = msString.substring(0, msString.length - 1);
    }
    return msString;
}