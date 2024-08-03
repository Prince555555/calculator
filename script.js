function appendToDisplay(value) {
    const display = document.getElementById('display');
    // Replace '0' or 'Error' with the new value
    if (display.innerText === '0' || display.innerText === 'Error') {
        display.innerText = value;
    } else {
        display.innerText += value;
        console.log(value)
    }
}

function clearDisplay() {
    document.getElementById('display').innerText = '0';
}

function insertFunction(func) {
    const display = document.getElementById('display');
        display.innerText = func ;
        console.log(func);
    }
function twoValueFunction (funct) {
    const display = document.getElementById('display');
    display.innerText = funct ;

}  

function calculate() {
    const display = document.getElementById('display');
    let expression = display.innerText;

    try {
        // Ensure trigonometric functions are handled correctly
        expression = expression.replace(/sqrt\(([^)]+)\)/g, 'Math.sqrt($1)');
        expression = expression.replace(/pow\(([^,]+),([^)]*)\)/g, 'Math.pow($1,$2)');
        expression = expression.replace(/log\(([^)]+)\)/g, 'Math.log10($1)');
        expression = expression.replace(/sin\(([^)]+)\)/g, 'Math.sin($1 * Math.PI / 180)');
        expression = expression.replace(/cos\(([^)]+)\)/g, 'Math.cos($1 * Math.PI / 180)');
        expression = expression.replace(/tan\(([^)]+)\)/g, 'Math.tan($1 * Math.PI / 180)');

        // Evaluate the expression safely using new Function
        const result = new Function('return ' + expression)();
        display.innerText = result;
    } catch (e) {
        display.innerText = 'Error';
    }
}
