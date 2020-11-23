const operations = ["+/-", "√", "%", "×", "-", "+", "/"];
var first = null;
var mathOperation = null;
var second = null;
var recentlyOperate = false;

// change value of screen solving
function showAnswer(number) {
    $('#screen').val(number);
}

// Append numbers to screen
$(".numeric").click(function () {
    if (recentlyOperate) {
        $('#screen').val("");
        recentlyOperate = false;
    }
    $('#screen').val($('#screen').val() + $(this).val());
});

// clear screen
$("input[value='ON/C']").click(function () {
    $('#screen').val("");
});

// process operations
$(".operation").not(".equals").click(function () {
    first = $("#screen").val();
    mathOperation = $(this).val();
    recentlyOperate = true;
});

// solve
$(".equals").click(function () {
    if (first === "" || !mathOperation) return;
    if (mathOperation) second = $('#screen').val();
    //make first and second Number()
    switch (mathOperation) {
        case "+":
            showAnswer(first + second);
            break;
        case "/":
            showAnswer(first / second);
            break;
        case "-":
            showAnswer(first - second);
            break;
        case "√":
            showAnswer(first + second);
            break;
        case "%":
            showAnswer(first + second);
            break;
        case "×":
            showAnswer(first * second);
            break;
        case "+/-":
            showAnswer(first + second);
            break;
        default:
            break;
    }
});