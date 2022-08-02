const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];

const studentsCopy = [...students];


let pairsArr = [];
function getPairs() {
  studentsCopy.splice(1, 2, "Олена", "Ігор");
  for(let i = 0; i < studentsCopy.length; i += 2){
    pairsArr.push([studentsCopy[i], studentsCopy[i + 1]]);
  }
  return pairsArr;
}

export const pairs = getPairs();