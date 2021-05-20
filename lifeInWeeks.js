function lifeInWeeks(age) {    
/************Don't change the code above************/      
    //Write your code here.    
    var leftAge = 90 - age;
    var days = leftAge * 365;
    var weeks = leftAge * 52;
    var months = leftAge * 12;    
    console.log("You have " + days + " days, " + weeks + " weeks, and " + months + " months left.");
   
/*************Don't change the code below**********/
}

lifeInWeeks(51);

OUtput: You have 14235 days, 2028 weeks, and 468 months left.