let emptyScreen = true;
let newToken = true;
let screen = document.querySelector("#calc_screen");
screen.value = "0"

const display = (op) => {
    if (op === '.' && newToken) {   // if no recorded decimal in token
        screen.value += op;         // put .
        newToken = false;           // now has decimal in token
    } else {
        if (isMathOp(op)) {       // add math , +, -, /, *
            screen.value += op;     // add screen val
            newToken = true;        // ready for new number
        } else {
            if (isNumberic(op)) {           // adding number
                if (emptyScreen) {          // if empty screen eligible, make it empty screen
                    emptyScreen = false;
                    screen.value = "";
                }
                screen.value += op;         // add number to screen
            }
        }
    }
};

const isNumberic = (a) => !isNaN(a);

const clearScreen = () => {
    screen.value = "0";
    emptyScreen = true;
};

const solve = () => {
    let mathTokens = screen.value.split(" ");
    let i = 0;
    let higherOpDone = false;
    for (let i = 0; i < 2; i++) {
        while (i < mathTokens.length) {
            if (isMathOps(mathTokens[i])) {
                let a = parseInt(mathTokens[i - 1]);
                let b = parseInt(mathTokens[i + 1]);
                let c = null;
                if (!higherOpDone && higherOp(mathTokens[i])) {
                    if (mathTokens[i] === "*") {
                        c = a * b;
                    } else {
                        c = a / b;
                    }
                    screen.value = c;
                    mathTokens[i + 1] = c.toString();
                    mathTokens.splice(i - 1, 2);
                } else if (higherOpDone) {
                    if (mathTokens[i] === "+") {
                        c = a + b;
                    } else {
                        c = a - b;
                    }
                    screen.value = c;
                    mathTokens[i + 1] = c.toString();
                    mathTokens.splice(i - 1, 2);
                }
            }
            i++;
        }
        higherOpDone = true;
    }
};

const isMathOp = (op) => {
    return op === ' + ' || op === ' - ' || op === ' / ' || op === ' * ';    // need spaces for splitting
};

const isMathOps = (op) => {
    return op === '+' || op === '-' || op === '/' || op === '*';    // need spaces for splitting
};

const higherOp = (operand) => operand === "*" || operand === "/";