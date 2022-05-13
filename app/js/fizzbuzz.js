const isModulo = (i, modulo) => i % modulo === 0;

let str = '';
 for (let i = 1; i <= 100; i++) {
   if (isModulo(i, 15)) {
     str += 'FizzBuzz';
   } else if (isModulo(i, 3)) {
     str += 'Fizz';
   } else if (isModulo(i, 5)) {
     str += 'Buzz';
   } else {
     str += i;
   }
   str += '\n';
 }
 console.log(str);
