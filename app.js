let def = true;

function display(oper) {
    let screen = document.querySelector("#calc_screen");
    if (def) {
        def = false;
        screen.value = oper;
    } else {
        if (oper === ".") {
            if (!screen.value.includes("."))
                screen.value += oper;
        } else {
            screen.value += oper;
        }
    }
}

const clearScreen = () => document.querySelector("#calc_screen").value = "0";