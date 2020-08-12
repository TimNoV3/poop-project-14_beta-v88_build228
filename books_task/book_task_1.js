function task_1(){
  let a = ""
  for (let number = 0; number < 7; number+=1){
    a += "#";
    console.log(a);
  }
}
task_1();

function task_2(){
  for (let number = 1; number <= 100; number+=1){
    if (number % 3 === 0 && number % 5 === 0) console.log('FizzBuzz')
    else if (number % 3 === 0) console.log('Fizz')
    else if (number % 5 === 0) console.log('Buzz')
    else {
      console.log(number);
    }
  }
}

task_2();

function task_3(n,m) {
  for (let i = 0; i < n; i+=1) {
    let str = i % 2 === 0 ? "":" ";
    for (let j = 0; j < m; j+=1) {
      str+="# ";
    }
    console.log(str);
  }
}

task_3(8,8);