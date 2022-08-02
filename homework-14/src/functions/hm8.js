export class Student {
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
}

export const student1 = new Student('ЛНУ', '3', 'Аня Маркевич');

