//Fruit Arrays  1 & 2 declaration & assignment
const fruitArr1 = ['apple', 'mango'];
const fruitArr2 = ['banana', 'papaya'];

//Function to display the selected fruit name
function displayFruit(fruit) {
    console.log(`The fruit selected is ${fruit}`);
}

//Function that'll call the 'displayFruit' method after setTimeout function is invoked
//If the fruit name is mango, the clearTimeout method will clear the timeout value and mango fruit will not be displayed
function checkFruit(fruitArr) {
    fruitArr.forEach(function(fruit) {
        const timeout = setTimeout(displayFruit, 2000, fruit);
        if (fruit === 'mango') {
            clearTimeout(timeout);
        }
    })
}

//Invoke checkFruit method
checkFruit(fruitArr1);
checkFruit(fruitArr2);


//Declare a car array
const carArr = ['Tesla', 'Ford']

//Display the output -> The car is 'name of car' on console
function displayCar(car) {
    console.log(`The car is ${car}`);
}

//Check the car and display the name of car only if the car is Tesla
function checkCar(carArr) {
    carArr.forEach(function(car) {
        const interval = setInterval(displayCar, 2000, car);
        if (car !== 'Tesla') {
            clearInterval(interval);
        }
    })
}

//Invoke the checkCar function
checkCar(carArr);