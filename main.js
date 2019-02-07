let evalString = "";
let clear = false;
let equalsPressed = false;
let currentButton;

function createButtons(){
  // Create groups of buttons
  const FUNCTION_BUTTON_1 = ["AC", "C", "M"];
  const FUNCTION_BUTTON_2 = ["/", "*", "-", "+", "="];
  const NUMBERS = [7,8,9,4,5,6,1,2,3,0,","];
  const MORE_FUNCTIONS = ["x", "(", ")", "&#8730;"];

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
  for(let symbol of MORE_FUNCTIONS){
    $(".moreFunctions").append("<button class='moreF'>" + symbol + "</button>");
  }

  function addEvents(){
    $("button").click(function(){
      currentButton = $(this);

      switch ($(this).parent().prop("className")){
        case "numbers":
          numberEvent();
          break;
        case "functionButtons1":
          func1Event();
          break;
        case "functionButtons2":
          func2Event();
          break;
      }

      console.log("current: "+currentButton.html())
      console.log("eval: "+evalString);
    });

    
  }

  addEvents();
}

// Function for the number buttons
function numberEvent(){
  // If the previous button pressed was "="..
  if(equalsPressed){
    // ..Replace the value in the display with the value of the button pressed
    $(".display")[0].value = currentButton.html();
    // ..Replace the value of evalString
    evalString = currentButton.html();
    // ..Set equalsPressed to false
    equalsPressed = false;
  // If the value in the display is "0" or clear is set to true
  }else if($(".display")[0].value == 0 || clear){
    // ..Replace the value in the display
    $(".display")[0].value = currentButton.html();
    // ..Append the value to evalString
    evalString += currentButton.html();
    // ..Set clear to false
    clear = false;
  }else{
    // If we try to add ",", add "." instead
    if(currentButton.html() == ","){
      $(".display")[0].value += ".";
      evalString += ".";
    }else{
      $(".display")[0].value += currentButton.html();
      evalString += currentButton.html();
    }
  }
}

// Function for the first group of "function buttons"
function func1Event(){
  // If the value of the button is "AC"..
  if(currentButton.html() == "AC"){
    // ..Set the display and evalString to 0 and "" respectively
    $(".display")[0].value = "0";
    // document.querySelector(".display").innerHTML = "0";
    evalString = "";
  }

  // If the value of the button is "C"..
  if(currentButton.html() == "C"){
    // If the length of the value in the display is 1..
    if($(".display")[0].value.length == 1){
      // ..Set the display to "0" and clear the evalString
      $(".display")[0].value = "0";
      evalString = "";
    }else{
      // ..Else remove the last character in the display and evalString
      $(".display")[0].value = $(".display")[0].value.slice(0, -1);
      evalString = evalString.slice(0, -1);
    }
  }
}

// Function for the second group of "function buttons"
function func2Event(){
  // If the value of the button is "="..
  if(currentButton.html() == "="){
    // ..Set equalsPressed to true
    equalsPressed = true;
    // ..Run the calculation
    calc(evalString)
  }else{
    // If equalsPressed is true i.e. the previous button pressed was "="..
    if(equalsPressed){
      // ..Set evalString to the sum of itself
      evalString = eval(evalString).toString();
      // ..Append the value of the button to evalString
      evalString += currentButton.html();
      equalsPressed = false;
    }

    // Run the calculation
    calc(evalString)

    // Get the last character of evalString
    let lastChar = evalString.substr(evalString.length - 1);

    // If the last character in evalString isn't an operator
    if(lastChar != "+" && lastChar != "-" && lastChar != "*" && lastChar != "/"){
      // Append an operator to evalString
      evalString += currentButton.html();
    }else{
      // Remove the last character and append an operator
      evalString = evalString.substr(0, evalString.length - 1);
      evalString += currentButton.html();
    }
  }
  // Set clear to true to clear the display after an operator is appended
  clear = true;
}

createButtons();

function calc(string){
  // If the string to evaluate contains a number, then an operator, then a number
  if(string.match(/[0-9][*/+-][0-9]/)){

    // Add the calculation to the history arrays
    history.push(string + "=" + eval(string));
    $('#historyBox').append("<p><span>" + history.length + ":</span>" + history[history.length - 1] + "</p>")
    $("#counter").text('Lines: ' + history.length);

    DISPLAY.value = eval(string).toString();

    // Evaluate it and draw it on the display
    string = eval(string).toString();
    $(".display")[0].value = string.toString();
    evalString = string;
  }
}

$('.moreFunctions button:first-child').append('<sup>y</sup>');

// List of calculated expressions
let history = [];
$('body').prepend('<div id="historyBox"></div>');
$('#historyBox').css({
  width: '28rem',
  height: '60rem',
  fontSize: '24px',
  overflow: 'auto',
  color: '#ccc',
  padding: '20px',
  borderRadius: '10px 0 0 10px',
  overflowWrap: 'break-word',
  border: "3px solid white",
  borderWidth: "3px 0 3px 3px",
  backgroundColor: "black",
  position: 'absolute',
  left:"37%"
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

<<<<<<< HEAD
$("#historyBox").css({
  position:"absolute",
  left:"630px",
  backgroundColor: "black"

})

=======
>>>>>>> master
let slide = true;

$(".func1:last-child").on("click", function(){

  if (slide  === true) {
    slide = false;
    $("#historyBox").animate({
      left:"21.5%",
    });
    $("#historyBox p").animate({
      opacity:'1'
    },1500);
  } else if(slide === false) {
    slide = true;
  $("#historyBox").animate({
<<<<<<< HEAD
    left:"630px",

=======
    left:"37%",     
   
>>>>>>> master
  });
  $("#historyBox p").animate({
    opacity:'0'
  });
}
});
<<<<<<< HEAD
=======

$(window).ready(function() {
 $('.timeWrapper ').animate({
 opacity: 1
 },4000);
});


>>>>>>> master
