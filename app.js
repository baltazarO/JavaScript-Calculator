const operations = ["+/-", "√", "%", "×", "-", "+", "/"];
const unary = ["+/-", "√", "%"];
var first = null;
var mathOperation = null;
var second = null;
var recentlyOperate = false;

//choose unary operation
function unarySolve(mathOperation, first) {
    switch (mathOperation) {
        case "√":
            return (Math.sqrt(first));
        case "%":
            return (first / 100.0);
        case "+/-":
            return (first * -1);
        default:
            return (-1);
    }
}

//choose operation
function solve(mathOperation, first, second) {
    switch (mathOperation) {
        case "+":
            return (first + second);
        case "/":
            return (first / second);
        case "-":
            return (first - second);
        case "×":
            return (first * second);
        default:
            return (-1);
    }
}

// change value of screen solving
function showAnswer(number) {
    $('#screen').val(number);
}

// Append numbers to screen
$(".numeric").click(function () {
    if (mathOperation && unary.includes(mathOperation)) return;

    if (recentlyOperate) {
        $('#screen').val("");
        recentlyOperate = false;
    }

    $('#screen').val($('#screen').val() + $(this).val());
});

// clear screen
$("input[value='ON/C']").click(function () {
    $('#screen').val("");
    first = null;
    mathOperation = null;
    second = null;
    recentlyOperate = false;
});

// process operations
$(".operation").not(".equals, input[value='+/-'], input[value='√'], input[value='%']").click(function () {
    first = $("#screen").val();
    mathOperation = $(this).val();
    recentlyOperate = true;
});

// solve
$(".equals").click(function () {
    if (first === "" || !mathOperation) return;
    if (mathOperation) second = $('#screen').val();

    first = Number(first);
    second = Number(second);
    var temp = solve(mathOperation, first, second);
    showAnswer(temp);

    first = temp;
    second = null;
    recentlyOperate = false;
});

$("input[value='+/-'], input[value='√'], input[value='%']").click(function () {
    first = $("#screen").val();
    if (first === "") return;
    mathOperation = $(this).val();
    first = Number(first);
    var temp = unarySolve(mathOperation, first);
    showAnswer(temp);
    first = temp;
});