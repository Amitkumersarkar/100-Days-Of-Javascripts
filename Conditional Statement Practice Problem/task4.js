/***
Qs.4:
if you get more then 80 then inside your friend score. 
    If your friend get more than 80. then go for a lunch. 
    if your friend get below 80 but greater than or equal 60 then tell your friend, good luck next time. 
    if your friend get less than 60 but more than or equal to 40 then, keep your friend's message unseen.
    if your friend get less than 40, block your friend
if you get less than 80 go to home and sleep and act sad

Note: 
use nested if-else-if-else
*/

const friendScore = 80;
if (friendScore > 80) {
    console.log("Let's Go For Lunch");
}
else if (friendScore < 80 && friendScore >= 60) {
    console.log("Good Luck Brother Next Time");
}
else if (friendScore < 60 && friendScore >= 40) {
    console.log("Message Unseen");
}
else if (friendScore < 40) {
    console.log("Your Blocked");
}
else {
    console.log("Good Night ");
}
