
var clearButton = document.getElementById("clr");
var displayField = document.getElementById("display");
var calculateButton = document.getElementById("equal");

var calculationFinished = false;

$('[name = number], [name = operator]')
    .click((e)=> insert(e.target.value));

function insert(num){
    var formElement = document.form[0];
    if (calculationFinished == true) {
        formElement.value = num;
        calculationFinished = false;
    }else{
    formElement.value = formElement.value + num; 
}
};

calculateButton.addEventListener('click', function calculate(){
    displayField.value = eval(displayField.value);
    calculationFinished = true;
});

function clearDisplay(){
    displayField.value = "";
};

clearButton.addEventListener('click', clearDisplay);
