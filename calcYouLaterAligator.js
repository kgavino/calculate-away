var whatIsThis = function (string){
	return "This is a ", string;
};

whatIsThis("calculator"); //"This is a calculator"

//feel free to use this array
var myArray = [5,10,15,20]; //50

//YOUR CODE BELOW

var add = function(mom, pop){
	return mom + pop; 
};

var addAll = function(anything){
	var sum = 0;
	for (var i = 0; i < anything.length; i++){
		var currentVal = anything[i];
		var previousSum = sum;
		sum = previousSum + currentVal; 
		//sum += anything[i];
	}

	return sum;
}

var subtract = function(a, b){
	return a - b;
}

var diffFrom100 = function(batman){
	return subtract(100, batman);
}

var multiply = function(num1, num2){
	return num1 * num2;
}

var getTip = function(total, tip){
	return multiply(total, tip/100);
}

var divide = function(num1, num2){
	return num1 / num2;
};

var getHalf = function(yum){
	return divide(yum, 2);
}

var isPositive = function(someNum){
	if (someNum > 0){
		return true;
	}
	else {
		return false;
	}
	//return (someNum > 0); //evaluates to a boolean
}

var getRemainder = function(num1, num2){
	return num1 % num2; //% === "modulo";
}
