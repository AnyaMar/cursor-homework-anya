class Student {
  constructor(university, course, fullName){
    this.university = university;
    this.course = course;
    this.fullName = fullName;
    this.marks1 = [];
  }
  
  isDismissed = false;

  getInfo() {
    return `Студент ${this.course}го курсу ${this.university}, ${this.fullName}`
  }
  

  get marks() {
    if (this.isDismissed) {
      return null;
    }
     return this.marks1;
    }
    
  set marks(mark) {
    if (this.isDismissed) {
      return null;
    }
  return this.marks1.push(mark);
  }

  getAverageMark() {
    const sum = this.marks.reduce((sum, current) => {
    return sum + current;
    });
    return (sum / this.marks.length).toFixed(2);
  }

  dismiss() {
    this.isDismissed = true; 
  }

  recover() {
    this.isDismissed = false;
  }
}

const student1 = new Student('ЛНУ', '3 курс', 'Аня Маркевич');
console.log(student1.getInfo());
student1.marks = 5;
student1.marks = 4;
student1.marks = 4;
console.log(student1.marks);
console.log(student1.getAverageMark());
student1.dismiss();
student1.marks = 3;
console.log(student1.marks)
student1.recover();
console.log(student1.getAverageMark());

//advanced
class BudgetStudent extends Student{
  constructor(university, course, fullName){
    super(university, course, fullName);
    setInterval(() => this.getScholarship(), 3000)
  }

  getScholarship() {
    if (this.getAverageMark() >= 4.0 && this.isDismissed === false){
      console.log(`Ви отримали 1400 грн стипендії`)
    } return;
  }
}
 const student2 = new BudgetStudent('Вищої Школи Психотерапії м.Одеса','1','Остап Бендер');
 console.log(student2.getInfo());
 student2.marks = 5;
student2.marks = 5;
student2.marks = 4;


 