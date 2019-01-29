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
  $(".functionButtons2").append("<button class='func2'>" + symbol + "</button>");
}

// Create variables for buttons and display
const BUTTONS = document.getElementsByTagName("button");
const DISPLAY = $(".display");

let numbers = [];
let mathMethod;
let clear = false;

// Add event listeners to all buttons
for (let button of BUTTONS) {

  if (button.classList == "func2") {



    button.addEventListener("click", function() {

      if(button.innerHTML != mathMethod){ // ÄNDRA DENNA
        if(numbers.length == 0){
          numbers.push(DISPLAY[0].value);
        }else{
          numbers.push(DISPLAY[0].value);
          console.log(numbers[0], numbers[1], mathMethod);
          numbers.unshift(calc(Number(numbers[0]), Number(numbers[1]), mathMethod));
          DISPLAY[0].value = numbers[0];
          numbers.splice(1, 2);
        }

        if(button.innerHTML != "="){
          mathMethod = button.innerHTML;
        }

        clear = true;
        console.log(numbers);
      }


    });
  }else{
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
    });
  }
}

function calc(a, b, method){
  switch (method) {
    case "+":
    return a + b;
    case "-":
    return a - b;
    case "*":
    return a * b;
    case "/":
    return a / b;
  }
}
