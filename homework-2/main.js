let numN;
do { numN = Number(prompt('Введіть ціле число')); } 
while (!Number.isInteger(numN));

let numM;
do { numM = Number(prompt('Введіть ціле число')); } 
while (!Number.isInteger(numM));

const evenNumber = confirm('Чи пропускати парні числа?');

let sum = 0;
for(; numN <= numM; numN++) {
 if (evenNumber && numN % 2 === 0) continue;
 sum += numN;
} 

console.log(sum);

