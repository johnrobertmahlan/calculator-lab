/* VARIABLES */

let value, sum, product, difference, quotient, operator, operation, displayValue;

let inputs = [];


/* CACHED ELEMENTS */

const buttongridEl = document.getElementById('buttongrid')

const displayEl = document.getElementById('display')

const calculateEl = document.getElementById('calculate')


/* EVENT LISTENERS */

buttongridEl.addEventListener('click', handleClick);

calculateEl.addEventListener('click', render);


/* FUNCTIONS */

//This function runs when any button *except* the '=' button is clicked
function handleClick(evt) {
    //First, determine whether the textContent of the clicked button is a number or not
    value = evt.target.textContent;
    parsedValue = parseInt(value);

    //Second, if textContent is *not* a number, then we need to pair that content with a mathematical operation
    if(isNaN(parsedValue)) {
        operator = evt.target.textContent;
        displayNumber = parseInt(displayValue);
        if(operator === '+') {
            displayEl.innerHTML = '';
            operation = 'addition';
            inputs.push(displayNumber); // push the current number on display to an array for availablility for operations
        } else if(operator === '*') {
            displayEl.innerHTML = '';
            operation = 'multiplication';
            inputs.push(displayNumber); // push the current number on display to an array for availablility for operations
        } else if(operator === '-') {
            displayEl.innerHTML = '';
            operation = 'subtraction';
            inputs.push(displayNumber); // push the current number on display to an array for availablility for operations
        } else if(operator === '/') {
            displayEl.innerHTML = '';
            operation = 'division';
            inputs.push(displayNumber); // push the current number on display to an array for availablility for operations
        }
     }
    
    //Third, if textContent *is* a number, then we need to store and display that number
     else {
        displayEl.innerHTML = displayEl.innerHTML + parsedValue; // this allows for multidigit numbers by letting the user append whatever number they just clicked to the numbers previously clicked
        displayValue = displayEl.innerHTML;
        //if an operator is clicked, I then want to store displayValue and display it; we already have that 'if' condition above, at line 33, so the relevant code is included there
        }
     return inputs;
}   

//This function runs when the '=' button is clicked
function render() {
    inputs.push(parseInt(displayValue)); // the handleClick function does not allow us to push the second number a user enters into the inputs array, so that must be done by the render function

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
    inputs = []; // this clears the inputs array so that additional operations can be performed on displayValue (which will be pushed back into the array if a new operator is pushed by the handleClick function)
};