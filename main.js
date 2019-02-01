// Create arrays with button values
const FUNCTION_BUTTON_1 = ["AC", "C", "onemore"];
const FUNCTION_BUTTON_2 = ["/", "*", "-", "+", "="];
const NUMBERS = [7,8,9,4,5,6,1,2,3,0,","];

// Create variables for buttons and display
const BUTTONS = document.getElementsByTagName("button");
const DISPLAY = $(".display")[0];

// Some global variables
let evalString = "";
let clear = false;
let equalsPressed = false;

function createButtons(callback){
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

  callback(FUNCTION_BUTTON_1);
  callback(FUNCTION_BUTTON_2);
  callback(NUMBERS);
}

function addEvents(array){
  for (let button of BUTTONS){
    switch(array){
      case FUNCTION_BUTTON_1:
        if(button.classList == "func1"){
          button.addEventListener("click", function(){
            if(button.innerHTML == "AC"){
              DISPLAY.value = "0";
              evalString = "";
            }
          });
        }
        break;
      case FUNCTION_BUTTON_2:
        if(button.classList == "func2"){
          button.addEventListener("click", function() {
            // If the button has the value "="
            if(button.innerHTML == "="){
              equalsPressed = true;
              calc(evalString)
            }else{
              calc(evalString)

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
        }
        break;
      case NUMBERS:
        if(button.classList != "func1" && button.classList != "func2"){
          button.addEventListener("click", function() {
            // If the value in the display is 0..
            if(equalsPressed){
              DISPLAY.value = this.innerHTML;
              evalString = this.innerHTML;
              equalsPressed = false;
            }else if(DISPLAY.value == 0 || clear){
              // ..Replace the value
              DISPLAY.value = this.innerHTML;
              evalString += this.innerHTML;
              clear = false;
            }else{
              // ..Append a value ()
              if(this.innerHTML == ","){
                DISPLAY.value += ".";
                evalString += ".";
              }else{
                DISPLAY.value += this.innerHTML;
                evalString += this.innerHTML;
              }
            }
          });
        }
        break;
    }
  }
}

createButtons(addEvents);

function calc(string){
  // If the string to evaluate contains a number, then an operator, then a number
  if(string.match(/[0-9][*/+-][0-9]/)){

    // Add the calculation to the history arrays
    history.push(string + "=" + eval(string));
    $('#historyBox').append("<p><span>" + history.length + ":</span>" + history[history.length - 1] + "</p>")
    $("#counter").text('Lines: ' + history.length);
    // Evaluate it and draw it on the display
    string = eval(string).toString();
    DISPLAY.value = string.toString();
  }
}


// List of calculated expressions
let history = [];
$('body').prepend('<div id="historyBox"></div>');
$('#historyBox').css({
  width: '28rem',
  height: '50rem',
  fontSize: '24px',
  overflow: 'auto',
  backgroundColor: '#333',
  color: '#ccc',
  padding: '20px',
  border: '0 solid',
  borderRadius: '10px 0 0 10px',
  overflowWrap: 'break-word',
  border: "3px solid white",
  borderRight: "none"
});

$('#historyBox').append("<p id='counter'>Lines: " + history.length + "</p>");


(function theTimer(){

//timer reset
let increase = 0;
let timeGo;
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
