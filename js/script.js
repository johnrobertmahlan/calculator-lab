//MODEL

/*----- constants -----*/

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const operations = ['+', '-', '*', '/'];



/*----- app's state (variables) -----*/

let value, sum, product, operator, operation, firstNum, secondNum;

let inputs = [];



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
        //somehow, we will have to call the appropriate function based on the operation symbol clicked
        operator = evt.target.textContent;
        if(operator === '+') {
            console.log(operator);
            operation = 'addition';
        } else if(operator === '*') {
            console.log(operator);
            operation = 'multiplication';
        }
     }
    
    //IF textContent IS a number, then we need to store and display that number
     else {
        displayEl.innerHTML = parsedValue;
        inputs.push(parsedValue);
        console.log(inputs);
    } return inputs;
}   

function render() {
    //console.log(operation);
    if(operation === 'addition') {
        sum = 0;
        for(let i=0; i<inputs.length; i++) {
            sum += inputs[i];
            displayEl.innerHTML = sum;
        }   return sum;
    } else if(operation === 'multiplication') {
        product = 1;
        for(let i=0; i<inputs.length; i++) {
            product *= inputs[i];
            displayEl.innerHTML = product;
        } return product;
    }
} 