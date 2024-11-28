function isLeapYear(year) {
    if (year % 4 === 0) {
        return true;
    }
    else {
        return false;
    }
}
const isLeap = isLeapYear(2052);
console.log(isLeap);