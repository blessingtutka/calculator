<<<<<<< HEAD
function add(number1, number2){
  return (number1+number2);
}
function diff(number1, number2){
  return (number1-number2);
}
function mult(number1, number2){
  return (number1*number2);
}
function devide(number1, number2){
  return (number1/number2);
}


function calculator(number1, operator, number2){
  let result=0;
  switch (operator){
    case '+': result=add(number1, number2);
    case '-': result=diff(number1, number2);
    case '/': result=devide(number1, number2);
    case '*': result=mult(number1, number2);
  }
  return result;
}
=======
let number1     = parseInt(Readline());
let operator    = Readline();
let number2     = parseInt(Readline());
>>>>>>> c6e7ad968fa60326fb3a1da2413a419b898f44e7
