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
    case '-': result=add(number1, number2);
    case '/': result=add(number1, number2);
    case '*': result=add(number1, number2);
  }
  return result;
}