// Writes functions with the export value so we can get them from other js-files
export function keyPressed(e){
  console.log(e.key);
  handleKeyPress(e.key);
};

export function handleKeyPress(keyCode) {
  if (keyCode == 4) {
    return keyCode;
  }
}
//
// export function calc(string){
//   // If the string to evaluate contains a number, then an operator, then a number
//   if(string.match(/[0-9][*/+-][0-9]/)){
//
//
//     // Evaluate it and draw it on the display
//     return string = eval(string).toString();
//   }
// }
