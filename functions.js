// Writes functions with the export value so we can get them from other js-files
export function keyPressed(e){
  console.log(e.key);
  handleKeyPress(e.key)

};

export function handleKeyPress(keyCode) {
  if (keyCode == 4) {
    return keyCode;
  }
}

export function calc(string){
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
