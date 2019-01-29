// Create arrays with button values
const FUNCTION_BUTTON_1 = ["AC", "C", "onemore"];
const FUNCTION_BUTTON_2 = ["/", "*", "-", "+", "="];
const NUMBERS = [7,8,9,4,5,6,1,2,3,0,","];

// Fill button containers with buttons
for (let symbol of FUNCTION_BUTTON_1){
  $(".functionButtons1").append("<button>" + symbol + "</button>");
}
for(let number of NUMBERS){
  $(".numbers").append("<button>" + number + "</button>");
}
for(let symbol of FUNCTION_BUTTON_2){
  $(".functionButtons2").append("<button>" + symbol + "</button>");
}

// Create variables for buttons and display
const BUTTONS = document.getElementsByTagName("button");
const DISPLAY = $(".display");

// Add event listeners to all buttons
for (button of BUTTONS) {
  button.addEventListener("click", function() {
    // If the value in the display is 0..
    if(DISPLAY[0].value == 0){
      // ..Replace the value
      DISPLAY[0].value = this.innerHTML;
    }else{
      // ..Append a value
      DISPLAY[0].value += this.innerHTML;
    }
  });
}
