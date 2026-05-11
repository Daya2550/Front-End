
//Declaration of Contition of IfElse

var condition = true;
//If condition is true, then execute the code in the if block
if(condition){
    console.log("Condition is true");
}


//If condition is false, then execute the code in the else block
condition = false;
if(condition){
    console.log("Condition is true");
}                                               // If condition is false, then execute the code in the else block
else{
    console.log("Condition is false");
}


//if else if ladder
var number = 10;
if(number > 0){
    console.log("Number is positive");
}
else if(number < 0){
    console.log("Number is negative");
}
else{
    console.log("Number is zero");
}


//Nested if else
var age = 25;
if(age >= 18){
    if(age < 60){
        console.log("You are an adult");    
    }
    else{
        console.log("You are a senior citizen");
    }
}
else{
    console.log("You are a minor");
}



// Ternary operator
var isMember = true;
var discount = isMember ? 0.1 : 0; // If isMember is true, discount is 0.1, otherwise it's 0
console.log("Discount: " + discount);


// ?? Nullish coalescing operator
var userName = null;
var defaultName = "Guest";
var nameToDisplay = userName ?? defaultName;  //It is speecail for null and undefined. value is than get anather value.
console.log("Name to display: " + nameToDisplay);