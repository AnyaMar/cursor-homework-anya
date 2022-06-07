const students = [{
  name: "Tanya",
  course: 3,
  subjects: {
    math: [4, 4, 3, 4],
    algorithms: [3, 3, 3, 4, 4, 4],
    data_science: [5, 5, 3, 4]
  }
}, {
  name: "Victor",
  course: 4,
  subjects: {
    physics: [5, 5, 5, 3],
    economics: [2, 3, 3, 3, 3, 5],
    geometry: [5, 5, 2, 3, 5]
  }
}, {
  name: "Anton",
  course: 2,
  subjects: {
    statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
    english: [5, 3],
    cosmology: [5, 5, 5, 5]
  }
}];

//func1
function getSubjects(index) {
  let arr = [];
  for(let key in students[index].subjects){
    key = key[0].toUpperCase() + key.slice(1).replace('_', ' ');
    arr.push(key);
  }
  return arr;
}

console.log(getSubjects(0));
console.log(getSubjects(1));
console.log(getSubjects(2));

//func2
function getAverageMark(i) {
  let arr = Object.values(students[i]['subjects']);
  let globalSum = 0;
  let length = 0;
  for(let i = 0; i < arr.length; i++){
    let sum = 0;
    for (let j in arr[i]){
    sum += arr[i][j];
    }
    length += arr[i].length;
    globalSum += sum;
  }
  return (globalSum / length).toFixed(2);
}

console.log(getAverageMark(0));
console.log(getAverageMark(1));
console.log(getAverageMark(2));

//func3
function getStudentInfo(i) {
  return {
    'course': students[i]['course'],
    'name': students[i]['name'],
    'averageMark': getAverageMark(i),
  }
};
console.log(getStudentInfo(0));
console.log(getStudentInfo(1));
console.log(getStudentInfo(2));

//func4
function getStudentsNames() {
  let arr = [];
  for(let student of students){
    arr.push(student.name);
  }
  return arr.sort();
}

console.log(getStudentsNames());

//func5
function getBestStudent() {
  let j = 0;
  for (let i = 0; i < 3; i++){
    let currentMark = 0;
    if( getStudentInfo(i).averageMark > currentMark ) {
      j = i;
    }
  }
  return getStudentInfo(j).name;
}
console.log(getBestStudent());

//func6
function calculateWordLetters(str) {
  const lettersCountObj = {};
  const lettersArr = str.toLowerCase().trim().split('');
  
  lettersArr.forEach((letter) => {
    lettersCountObj[letter] = lettersCountObj[letter] ? lettersCountObj[letter] + 1 : 1;
  })
  return lettersCountObj;
}

console.log(calculateWordLetters('test'));
console.log(calculateWordLetters('smm'));