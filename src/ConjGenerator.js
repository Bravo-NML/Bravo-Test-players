export function declinationOfNumber (value, words) {
  const cases = [2, 0, 1, 1, 1, 2]
  return words[(value % 100 > 4 && value % 100 < 20) ? 2 : cases[(value % 10 < 5) ? value % 10 : 5]]
}

export function declinationOfNumberCurrying (words) {
  return (value) => declinationOfNumber(value, words)
}

export function decl(number){
  if(number < 0) number = 0;

  if((number % 10 === 1) && (number % 100 !== 11)) {
    return 0;

  } else if ((number % 10 >= 2) && (number % 10 <= 4) && ((number % 100 < 10) || (number % 100 >= 20))){
    return 1;
    
  } else {
    return 2;
  }
}