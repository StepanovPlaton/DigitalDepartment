class Student {
  constructor(lastName, firstName) {
    this.lastName = lastName;
    this.firstName = firstName;
  }
}

function compareStudents(studentA, studentB) {
  if (studentA.lastName < studentB.lastName) return -1;
  if (studentA.lastName > studentB.lastName) return 1;
  if (studentA.firstName < studentB.firstName) return -1;
  if (studentA.firstName > studentB.firstName) return 1;
  return 0;
}

function binarySearch(students, target) {
  let left = 0;
  let right = students.length - 1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const comparison = compareStudents(students[mid], target);
    if (comparison === 0) {
      return mid;
    } else if (comparison < 0) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;
}

const students = [
  new Student("Иванов", "Иван"),
  new Student("Петров", "Петр"),
  new Student("Сидоров", "Сидор"),
  new Student("Кузнецов", "Алексей"),
  new Student("Смирнов", "Андрей"),
  new Student("Лебедев", "Дмитрий"),
  new Student("Новиков", "Сергей"),
];

students.sort(compareStudents);
console.log("Отсортированный список студентов:");
students.forEach((student, index) => {
  console.log(`${index}: ${student.lastName} ${student.firstName}`);
});

const searchStudent = new Student("Смирнов", "Андрей");
const index = binarySearch(students, searchStudent);

if (index !== -1) {
  console.log(
    `\nСтудент ${searchStudent.lastName} ${searchStudent.firstName} найден на позиции ${index}.`
  );
} else {
  console.log(
    `\nСтудент ${searchStudent.lastName} ${searchStudent.firstName} не найден.`
  );
}
