/***
Qs.6:
Ticket fare Calculator
    - Children (age < 10): free
    - Students get a 50% discount
    - Senior citizens (age >= 60) gets a 15% Discount
    - Otherwise Regular ticket fare 800 tk
*/

const age = 60;
const ticketPrice = 100;

if (age < 10) {
    console.log("Free");
}
else if (age >= 18) {
    const discount = ticketPrice * 50 / 100;
    const payAmount = ticketPrice - discount;
    console.log(payAmount);
}
else if (age >= 60) {
    const payAmount = ticketPrice - discount;
    const discount = ticketPrice * 15 / 100;
    console.log(payAmount);
}


else {
    console.log("You Have To Pay Regular Ticket Fare : ");
}