const operations = ["+/-", "√", "%", "×", "-", "+", "/"];
var first = null;
var mathOperation = null;
var second = null;
var recentlyOperate = false;

//choose operation
function chooseOperation(mathOperation, first, second) {
    switch (mathOperation) {
        case "+":
            return(first + second);
        case "/":
            return(first / second);
        case "-":
            return(first - second);
        case "√":
            return(first + second);
        case "%":
            return(first + second);
        case "×":
            return(first * second);
        case "+/-":
            return(first + second);
        default:
            return(-1);
    }
}

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

    first = Number(first);
    second = Number(second);
    var temp = chooseOperation(mathOperation,first,second);
    showAnswer(temp);
    
    first = temp;
    second = null;
    mathOperation = null;
    recentlyOperate = false;
});