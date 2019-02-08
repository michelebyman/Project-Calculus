export function calc(string){
  if(string != undefined && string != null){
    // If the string to evaluate contains a number, then an operator, then a number
    if(string.match(/[0-9][*/+-][0-9]/)){
      // Evaluate it and draw it on the display
      return eval(string).toString();
    }else{
      return string;
    }
  }else{
    return "error";
  }
}
