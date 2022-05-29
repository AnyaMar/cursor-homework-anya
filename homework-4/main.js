const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];

const themes = ["Диференційне рівняння", "Теорія автоматів", "Алгоритми і структури даних"];

const marks = [4, 5, 5, 3, 4, 5];

const studentsCopy = [...students];


let pairsArr = [];
function getPairs() {
  studentsCopy.splice(1, 2, "Олена", "Ігор");
  for(let i = 0; i < studentsCopy.length; i += 2){
    pairsArr.push([studentsCopy[i], studentsCopy[i + 1]]);
  }
  return pairsArr;
}

const pairs = getPairs();
console.log(pairs);



let pairsThemes = [];
function getThemeForPairs() {
for(let i = 0; i < pairs.length; i++){
  pairsThemes.push([`${pairs[i][0]} і ${pairs[i][1]}`, themes[i]]);
}
return pairsThemes;
}

const themesForPairs = getThemeForPairs();
console.log(themesForPairs);




let marksStudents = [];
function getMarks() {
for(let i = 0; i < students.length; i++){
  marksStudents.push([students[i], marks[i]]);
}
return marksStudents;
}

const studentEvaluations = getMarks()
console.log(studentEvaluations);




const getRandomMark = () => Math.floor(Math.random() * 4 + 1);

let pairsWithRandomMark = [];
function getMarkForPairs() {
for (let i = 0; i < themesForPairs.length; i++){
  pairsWithRandomMark.push([`${themesForPairs[i]}, ${getRandomMark()}`]);
}
return pairsWithRandomMark;
}

console.log(getMarkForPairs());
