let brandNewCalc = true;
let newToken = true;
let screen = document.querySelector("#calc_screen");
screen.value = "0"
let justCalculated = false;

const display = (op) => {
    clearScreenIfNeed(op);
    if (op === '.' && newToken) {   // if no recorded decimal in token
        screen.value += op;         // put .
        newToken = false;           // now has decimal in token
    } else {
        if (isMathOp(op)) {       // add math , +, -, /, *
            screen.value += op;     // add screen val
            newToken = true;        // ready for new number
            justCalculated = false;
        } else {
            screen.value += op;         // add number to screen
        }
    }
};

const isNumberic = (a) => !isNaN(a);

const clearScreen = () => {
    screen.value = "0";
    brandNewCalc = true;
};

const solve = () => {
    let mathTokens = screen.value.split(" ");
    solveHigherOps(mathTokens);
    screen.value = solveLowerOps(mathTokens);
    justCalculated = true;
};

function solveHigherOps(mathTokens) {
    let i = 0;
    let c = 0;
    while (i < mathTokens.length) {
        if (higherOp(mathTokens[i])) {
            let a = parseInt(mathTokens[i - 1]);
            let b = parseInt(mathTokens[i + 1]);
            if (mathTokens[i] === "*") {
                c += a * b;
            } else {
                c += a / b;
            }
            mathTokens[i + 1] = c.toString();
            mathTokens.splice(i - 1, 2);
        }
        i++;
    }
}

function solveLowerOps(mathTokens) {
    let i = 0;
    let c = 0;
    while (i < mathTokens.length) {
        if (isMathOps(mathTokens[i])) {
            let a = parseInt(mathTokens[i - 1]);
            let b = parseInt(mathTokens[i + 1]);
            if (mathTokens[i] === "+") {
                c += a + b;
            } else {
                c += a - b;
            }
            mathTokens[i + 1] = c.toString();
            mathTokens.splice(i - 1, 2);
        }
        i++;
    }
    return mathTokens[0];
}

function clearScreenIfNeed(operation) {
    if (isNumberic(operation)) {
        if (justCalculated || brandNewCalc){
            screen.value = "";
            justCalculated = false;
            brandNewCalc = false;
        }
    }
}

const isMathOp = (op) => {
    return op === ' + ' || op === ' - ' || op === ' / ' || op === ' * ';    // need spaces for splitting
};

const isMathOps = (op) => {
    return op === '+' || op === '-' || op === '/' || op === '*';    // need spaces for splitting
};

const higherOp = (operand) => operand === "*" || operand === "/";