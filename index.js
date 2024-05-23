const expressionElement = document.getElementById('expression');
const outputElement = document.getElementById('output');
const buttons = document.querySelectorAll('.circle');

let expression = '';
let result = '';

// Function to update the expression and output
function updateDisplay() {
    expressionElement.innerText = expression;
    outputElement.innerText = result;
}

// Function to handle button click
function buttonClick(event) {
    const buttonValue = event.target.innerText;
    
    // Handling different button clicks
    switch(buttonValue) {
        case '=':
            try {
                // Evaluate the expression
                result = eval(expression);
            } catch(error) {
                result = 'Error';
            }
            // expression = '';
            break;
        case 'X':
            expression += '*';
            break;
        case 'C':
            // Clearing the expression and result
            expression = '';
            result = '';
            break;
        case 'CE':
            // Clearing the last entry
            expression = expression.slice(0, -1);
            break;
        case '%':
            result = expression/100;
        default:
            // Adding button value to the expression
            expression += buttonValue;
            break;
    }
    
    // Update the display
    updateDisplay();
}

// Attaching click event listener to all buttons
buttons.forEach(button => {
    button.addEventListener('click', buttonClick);
});
