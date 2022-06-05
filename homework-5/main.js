//func1
const getRandomNumber = (m, n) => Math.floor(Math.random() * (n - m) + 1);

const getRandomArray = (length, min, max) => {
  const arr = [];
  for (let i = 1; i <= length; i++){
  arr.push(getRandomNumber(min, max) + min);
}
return arr;
}
console.log(getRandomArray(20, 5, 40));

//func3
function getAverage(...numbers) {
  const arr = numbers.filter((number) => {
    return number % 1 === 0;
  });
  const sum = arr.reduce((function(sum, current) {
    return sum + current;
  }));
  return (sum / arr.length).toFixed(1);
  }
  
  console.log(getAverage(1,5,6,7,8,9,10,10.5));

//func4
function getMedian(...numbers) {
  const arr = numbers.filter((number) => {
    return number % 1 === 0;
  });

  arr.sort((a, b) => a - b);

  if( !(arr.length % 2) ) {
    const i = (arr.length - 1) / 2;
    return (arr[Math.ceil(i)] + arr[Math.floor(i)]) 
    / 2;
  } else {
    const i = (arr.length - 1) / 2;
    return arr[i];
  }
};

console.log(getMedian(5,8,1,9,10));
console.log(getMedian(5,8,1,9,10,12));
console.log(getMedian(1, 2));
console.log(getMedian(5,6,4,4,10,12,8,9,8,2));

//func5
function filterEvenNumbers(...numbers){
  const primeNumbers = numbers.filter((number) => {
    return number % 2;
  });
  return primeNumbers;
};

console.log(filterEvenNumbers(1,2,3,4,5,6,7));

//func6
function countPositiveNumbers(...numbers){
  const positiveNumbers = numbers.filter((number) => {
    return number > 0;
  });
  return positiveNumbers.length;
}

console.log(countPositiveNumbers(1, 2, -1, -8, -9, 5));

//func7
function getDividedByFive(...numbers) {
  const dividedByFive = numbers.filter((number) => number % 5 === 0);
  return dividedByFive;
}

console.log(getDividedByFive(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2, 25));

//func8
function replaceBadWords(str) {
  const arr = str.split(' ');
  const badWords = ['shit', 'fuck'];

  for (let badWord of badWords) {
    for (let i in arr) {
      arr[i] = arr[i].replace(badWord, '*'.repeat(badWord.length));
    }
  }
  return arr.join(' ');
}
console.log(replaceBadWords("Holy shit!"));
console.log(replaceBadWords("Are you fucking kidding?"));
console.log(replaceBadWords("It's bullshit!"));

//func9
function divideByThree(str) {

  const arr = str.toLowerCase().replaceAll(' ','').split('');
  const newArr = [];
  
    for(let i = 0; i < arr.length; i += 3){
      newArr.push(arr[i] + arr[i + 1] + arr[i + 2]);
      }
    for(let i in newArr){
      newArr[i] = newArr[i].replaceAll('undefined', '');
    }
      return newArr;
  }
  
  console.log(divideByThree('Commander'))
  console.log(divideByThree('live'))

  //func10
  function generateCombinations(word) {
    if (word.length < 2) return [word];
  
    let combinations = [];
  
    for(let i = 0; i < word.length; i++){
      let char = word[i];
      let rest = generateCombinations(word.slice(0, i) + word.slice(i + 1));
      
      for(const comb of rest) {
        combinations.push(char + comb);
      }
    }
    return combinations;
  }
  
  console.log(generateCombinations('man'));

