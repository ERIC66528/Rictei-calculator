let display = document.getElementById('display');  
let expression = '';  
  
function addNumber(num) {  
    expression += num;  
    display.value = expression;  
}  
  
function addOperator(operator) {  
    expression += operator;  
    display.value = expression;  
}  
  
function calculate() {  
    try {  
        let result = eval(expression);  
        display.value = result;  
        expression = result.toString();  
    } catch (error) {  
        display.value = 'Error';  
        expression = '';  
    }  
}  
  
function clearDisplay() {  
    display.value = '';  
    expression = '';  
}
