function inchToFeet(inch) {
    const feet = inch / 12;
    return feet;
}
const amitHeight = inchToFeet(68);
console.log(amitHeight.toFixed(1));