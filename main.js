
//timer reset
let increase = 0;
let timeGo;

// Create arrays with button values
const FUNCTION_BUTTON_1 = ["AC", "C", "onemore"];
const FUNCTION_BUTTON_2 = ["/", "*", "-", "+", "="];
const NUMBERS = [7,8,9,4,5,6,1,2,3,0,","];

// Fill button containers with buttons
for (let symbol of FUNCTION_BUTTON_1){
  $(".functionButtons1").append("<button class='func1'>" + symbol + "</button>");
}
for(let number of NUMBERS){
  $(".numbers").append("<button>" + number + "</button>");
}
for(let symbol of FUNCTION_BUTTON_2){
  $(".functionButtons2").append("<button class='func2'>" + symbol + "</button>");
}

// Create variables for buttons and display
const BUTTONS = document.getElementsByTagName("button");
const DISPLAY = $(".display");

// Some global variables
let evalString = "";
let clear = false;

// Add event listeners to all buttons
for (let button of BUTTONS) {
  if (button.classList == "func1"){
    button.addEventListener("click", function(){
      if(button.innerHTML == "AC"){
        DISPLAY[0].value = "0";
        evalString = "";
      }
    })
  }else if (button.classList == "func2") {
    // Event listener for "function 1" buttons
    button.addEventListener("click", function() {

      // If the button has the value "="
      if(button.innerHTML == "="){
        calc()
      }else{
        calc()

        let lastChar = evalString.substr(evalString.length - 1);

        // If the last character in evalString isn't an operator
        if(lastChar != "+" && lastChar != "-" && lastChar != "*" && lastChar != "/"){
          // Append an operator to evalString
          evalString += this.innerHTML;
        }else{
          // Remove the last character and append an operator
          evalString = evalString.substr(0, evalString.length - 1);
          evalString += this.innerHTML;
        }
      }
      // Set clear to true to clear the display after an operator is appended
      clear = true;
    });
  }else{
    // Event listeners for number buttons
    button.addEventListener("click", function() {
      // If the value in the display is 0..
      if(DISPLAY[0].value == 0 || clear){
        // ..Replace the value
        DISPLAY[0].value = this.innerHTML;
        clear = false;
      }else{
        // ..Append a value
        DISPLAY[0].value += this.innerHTML;
      }
      evalString += this.innerHTML;
    });
  }
}

function calc(){
  // If the string to evaluate contains a number, then an operator, then a number
  if(evalString.match(/[0-9][*/+-][0-9]/)){
    // Evaluate it and draw it on the display
    evalString = eval(evalString).toString();
    DISPLAY[0].value = evalString.toString();
  }
}


(function theTimer(){

let on = false;

$('#start').on('click', function() {

  if (on === false) {
    $('#start').css('opacity', 0.5);
    $('#stop').css('opacity', 1);
    $('#reset').css('opacity', 1);
    timeGo = setInterval(timerTime, 1000);
    on = true;
  }
});

$('#stop').on('click', function() {
  clearInterval(timeGo);
  $('#start').on();
  $('#start').css('opacity', 1);

  $('#stop').css('opacity', 0.5);
  $('#reset').css('opacity', 1);


  on = false;
 });

$('#reset').on('click', function() {
  clearInterval(timeGo);
  $('#timerTime').text('0');
  increase = 0;
  $('#start').on();

  $('#reset').css('opacity', 0.5);
  $('#stop').css('opacity', 1);
  $('#start').css('opacity', 1);
  on = false;
 });



function timerTime() { //timer counter
  increase++;
 $('#timerTime').text(increase);
}

})();

export default {
 calc()
}
