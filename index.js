// --- #1 ---
const student = {
  lastName: "Иванов",
  firstName: "Алексей",
  marks: [
    { subject: "Математика", mark: 5 },
    { subject: "Физика", mark: 4 },
    { subject: "Химия", mark: 3 },
  ],
};

function printStudentInfo(student) {
  console.log(`Фамилия: ${student.lastName}`);
  console.log(`Имя: ${student.firstName}`);
  console.log("Оценки:");
  student.marks.forEach((mark) => {
    console.log(`\tПредмет: ${mark.subject}, Оценка: ${mark.mark}`);
  });
}

printStudentInfo(student);

// --- #2 - #5 ---
class Mark {
  constructor(subject, mark) {
    this.subject = subject;
    this.mark = mark;
  }
}

class Student {
  constructor(lastName, firstName, marks = []) {
    this.lastName = lastName;
    this.firstName = firstName;
    this.marks = marks;
  }

  calculateAverageMark() {
    if (this.marks.length === 0) {
      return 0;
    }

    const total = this.marks.reduce((sum, mark) => sum + mark.mark, 0);
    return total / this.marks.length;
  }

  getMarksBySubject = (subject) =>
    this.marks
      .filter((mark) => mark.subject === subject)
      .map((mark) => mark.mark);

  addMark(subject, mark) {
    this.marks.push(new Mark(subject, mark));
  }

  removeMarksBySubject(subject) {
    this.marks = this.marks.filter((mark) => mark.subject !== subject);
  }
}
