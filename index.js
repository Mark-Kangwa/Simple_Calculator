
const display = document.getElementById('display');

function appendToDisplay(input){

  display.value += gitinput;
}

function clearDisplay(){
  display.value = '';
}

function calculate(){
  display.value = eval(display.value);
}