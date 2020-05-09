//MODEL

/*----- constants -----*/

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const operations = ['+', '-', '*', '/'];



/*----- app's state (variables) -----*/

let value, sum, product, difference, quotient, operation, firstNum, secondNum;

let inputs = [];

let displayValue;

let operator = null;




//CONTROLLER

/*----- cached element references -----*/

const buttongridEl = document.getElementById('buttongrid')

const displayEl = document.getElementById('display')

const calculateEl = document.getElementById('calculate')



/*----- event listeners -----*/

buttongridEl.addEventListener('click', handleClick);

calculateEl.addEventListener('click', render);



/*----- functions -----*/


 function handleClick(evt) {
    //First, determine whether the textContent of the clicked button is a number or not
    value = evt.target.textContent;
    parsedValue = parseInt(value);

    //IF textContent is NOT a number, then we need to pair that content with a mathematical operation
    if(isNaN(parsedValue)) {
        operator = evt.target.textContent;
        displayNumber = parseInt(displayEl.innerHTML);
        if(operator === '+') {
            displayEl.innerHTML = '';
            console.log(operator);
            operation = 'addition';
            inputs.push(displayNumber);
        } else if(operator === '*') {
            displayEl.innerHTML = '';
            console.log(operator);
            operation = 'multiplication';
            inputs.push(displayNumber);
        } else if(operator === '-') {
            displayEl.innerHTML = '';
            console.log(operator);
            operation = 'subtraction';
            inputs.push(displayNumber);
        } else if(operator === '/') {
            displayEl.innerHTML = '';
            console.log(operator);
            operation = 'division';
            inputs.push(displayNumber);
        }
     }
    
    //IF textContent IS a number, then we need to store and display that number
     else {
        displayEl.innerHTML = displayEl.innerHTML + parsedValue;
        displayValue = displayEl.innerHTML;
        //displayEl.innerHTML = parsedValue;
        //inputs.push(parsedValue);
        //console.log(inputs);
        }
     return inputs;
}   

function render() {
    inputs.push(parseInt(displayEl.innerHTML));

    if(operation === 'addition') {
        sum = 0;
        for(let i=0; i<inputs.length; i++) {
            sum += inputs[i];
            displayValue = sum;
            displayEl.innerHTML = displayValue;
        };
    } else if(operation === 'multiplication') {
        product = 1;
        for(let i=0; i<inputs.length; i++) {
            product *= inputs[i];
            displayValue = product;
            displayEl.innerHTML = displayValue;
        };
    } else if(operation === 'subtraction') {
        difference = inputs.reduce(function(firstNum, secondNum) {
            return firstNum - secondNum;
        });
        displayValue = difference;
        displayEl.innerHTML = displayValue;
    } else {
        quotient = inputs.reduce(function(num1, num2) {
            return num1 / num2;
        });
        displayValue = quotient;
        displayEl.innerHTML = displayValue;
    };
    inputs = [];
    //inputs.push(displayValue);
};