const FUNCTION_BUTTON_1 = ["AC", "C", "onemore"];

const FUNCTION_BUTTON_2 = ["/", "*", "-", "+", "="];

const NUMBERS = [7,8,9,4,5,6,1,2,3,0,","];
for (let i = 0; i < FUNCTION_BUTTON_1.length; i++) {
  $(".functionButtons1").append("<button>" + FUNCTION_BUTTON_1[i] + "</button>");
}

for(number of NUMBERS){
  $(".numbers").append("<button>" + number + "</button>");
}

for(symbol of FUNCTION_BUTTON_2){
  $(".functionButtons2").append("<button>" + symbol + "</button>");
}

console.log("test");
