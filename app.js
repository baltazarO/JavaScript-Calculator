let def = true;
let newToken = true;
let operation = ["0"];
let token = "0";
let screen = document.querySelector("#calc_screen").value = "0";

const display = (op) => {
    if ( op === '.' ) {
        if (newToken) {
            screen.value += op;
            token += op;
            operation.pop();
            operation.push(token);
            newToken = false;
        }
    } else {
        if ( isMathOp(op) ) {
            operation.pop();
            operation.push(token,op);
            screen.value += op;
            newToken = true;
        } else {
                // numbers here
        }
    }
};

const isNumberic = (a) => !isNaN(a);

const clearScreen = () => {
    screen.value = "0";
    def = true;
};

const solve = () => {
    screen.querySelector("#calc_screen").value = "0"
};

const isMathOp = (op) => {
    return op === ' + ' || op === ' - ' || op === ' / ' || op === ' * ';
};

// function display(oper) {
//     let screen = document.querySelector("#calc_screen");
//     if (def) {
//         def = false;
//         screen.value = oper;
//         operation.push()
//     } else {
//         if (oper === ".") {
//             if (!screen.value.includes("."))
//                 screen.value += oper;
//         } else if (isNumberic(oper)) {
//             screen.value += oper;
//         } else {
//             screen.value += " " + oper + " ";
//         }
//     }
// }