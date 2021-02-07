
//Guess Temp Value
console.log("Activity One")
console.log("==============")
var temp = 10;


function checkScope(){
    console.log("Temp value --- ",temp)
}


function  callCheckScope(){
    var temp = 20;
 
    checkScope()
}

callCheckScope()


// Guess Output
console.log("==============")
console.log("Activity Two")
console.log("==============")
console.log(addNumbers(10,20))
console.log(multiplyNumbers(12,12))

function addNumbers(num1,num2){
    return num1+num2;
}

var multiplyNumbers = function(num1,num2){
    return num1*num2
}

console.log("==============")
console.log("Activity Three")
console.log("==============")


