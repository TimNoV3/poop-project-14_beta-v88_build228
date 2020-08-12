const min = (arg1, arg2) => arg1 < arg2 ? arg1 : arg2;

const isEven = arg1 => {
  if (arg1 < 0) arg1 = arg1 * -1;
  if (arg1 === 0) return true;
  else if (arg1 === 1) return false;
  else return isEven(arg1 - 2);
}

const countChar = (str, char) => {
  let count = 0;
  for (let index = 0; index < str.length; index += 1 ){
    if (str[index] === char) count += 1; 
  }  
  return count;
}
console.log(countChar('abcdefgaaA', 'A'))
