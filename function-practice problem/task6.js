function isLeapYear(year) {
    if (year % 100 !== 0 && year % 4 === 0) {
        return true;
    }
}
const leap = isLeapYear(2024);
console.log(leap);