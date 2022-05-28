function getMaxDigit(number) {
  let result = -1;
  for(let i = number; i > 0; i = Math.floor(i / 10)){
    let digit = i % 10;
    if(result < digit)
    result = digit;
  }
  return(result);
}

function formatName(name) {
  name = name[0].toUpperCase() + 
  name.slice(1).toLowerCase();
  return name;
}

function amountOfSalary(salary, taxRate){
  const TAX = taxRate * salary / 100;
  const FINAL_SALARY = salary - TAX;
  return FINAL_SALARY;
}


function getRandomNumber(firstNumber, lastNumber) {
  const randomNumber = Math.round( Math.random() *
   (lastNumber - firstNumber) + 1);
   return randomNumber;
 }
 

 function countLetter(letter, word) {
  letter = letter.toLowerCase();
  word = word.toLowerCase();
  
  let count = 0;
  for(let i = 0; i < word.length; i++){
if(letter == word[i]) {
  count++;
    }
  } 
  return count; 
}


function convertCurrency(cost) {
  let convertedAmount;
if (cost.includes('UAH')){
  convertedAmount = `${Math.floor(cost.slice(0, -3) * 0.034)}$`;
} else if (cost.includes('$')) {
  convertedAmount = `${Math.floor(cost.slice(0, -1) * 29.42)} грн`;
 } else {
   console.log('Ви ввели неправильне значення');
   return;
 }
 return convertedAmount;
}




function getRandomPassword(length = 8) {
  let password = '';
  let randomNumber = 0;
  for(let i = 1; i <= length; i++){
    randomNumber = Math.round(Math.random() * 9 );
    password += randomNumber;
   }
   return password;
}
getRandomPassword();



let deleteLetters = (str) => str.replace(/[aouiye]/gi, '');



function isPalyndrom(str) {
  str = str.replaceAll(' ', '').toLowerCase();

  let finalStr = '';

  for(let i = str.length - 1; i > -1; i--){
    finalStr += str[i];
  }
  
  let isPalyndrom = (str == finalStr) ? true : false;
  return isPalyndrom;
}



function eleveteToDegree(number, degree) {
  let numberToDegree = 1;
  
   for (let i = 0; i < degree; i++) {
      numberToDegree *= number;
    }
    
  return numberToDegree;
}
  

  document.writeln(`Функція №1: ${getMaxDigit("345678")}`);
  document.writeln(`Функція №2: ${formatName("дМИтРО")}`);
  document.writeln(`Функція №3: ${amountOfSalary(1000, 19.5)}`);  document.writeln(`Функція №4: ${getRandomNumber(1, 10)}`);
  document.writeln(`Функція №5: ${getRandomNumber(1, 10)}`);
  document.writeln(`Функція №6: ${countLetter("e", "celece")}`);
  document.writeln(`Функція №7: ${convertCurrency('100UAH')}`);
  document.writeln(`Функція №8: ${getRandomPassword()}`);
  document.writeln(`Функція №9: ${convertCurrency('100UAH')}`);
  document.writeln(`Функція №10: ${deleteLetters('hello world')}`);
  document.writeln(`Функція №11: ${isPalyndrom('Я несу гусеня')}`);
  document.writeln(`Функція №12: ${eleveteToDegree(3, 2)}`);


 
  

  

  
