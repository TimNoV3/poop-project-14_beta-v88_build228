const range = (start, end, step = 1) => {
  let range = [];

  while (start != end) { 
    range.push(start);
    start += step;
  }
  return range;
} 
const sum = (array) => {
  let sum = 0;
  array.forEach(element => {
    sum += parseInt(element,10);
  });
  return sum;
}

const reverseArray = array => {
  for (let i = 0; i < Math.round(array.length / 2); i+=1){
    let c = "";
    c = array[i];
    array[i] = array[array.length - 1 - i];
    array[array.length - 1 - i] = c;
  }
  return array;
}

const arrayToList = array => {
  let new_array = [];
  let n1 = new_array;
  array.forEach(element => {
    new_array.push({
      value: element,
      rest: []
    });

    new_array = new_array[new_array.length - 1].rest;    
    });
    new_array.push(null);
  return n1;
}

const listToArray = list => {
  let new_array = []
  console.log(list[0].value);
  while (list) {
    new_array.push(list[0].value);
    console.log(list[0].value);
    list = list[0].rest;
    
  }
  
  return new_array;
}


console.log(listToArray(arrayToList(range(5,2,-1))));
console.log(arrayToList(range(5,2,-1))[0].rest[0].rest[0].value[0]==null)