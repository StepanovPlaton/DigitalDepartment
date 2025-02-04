// --- #1 ---
function findCommonElements(array1, array2) {
  const set1 = new Set(array1);
  const set2 = new Set(array2);
  const commonElements = [...set1].filter((item) => set2.has(item));

  return commonElements;
}

const array1 = [1, 2, 3, 4, 5];
const array2 = [4, 5, 6, 7, 8];
console.log(findCommonElements(array1, array2)); // [4, 5]

// --- #2 ---
function countOccurrences(array) {
  const occurrencesMap = new Map();

  for (const element of array) {
    if (occurrencesMap.has(element)) {
      occurrencesMap.set(element, occurrencesMap.get(element) + 1);
    } else {
      occurrencesMap.set(element, 1);
    }
  }

  return occurrencesMap;
}

const array = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4];
const occurrences = countOccurrences(array);
occurrences.forEach((count, element) => {
  console.log(`Element ${element} occurs ${count} times`);
});

// --- #3 ---
class Student {
  constructor(name, groupNumber) {
    this.name = name;
    this.groupNumber = groupNumber;
  }
}

function countLargestGroup(students) {
  const groupCounts = new Map();

  for (const student of students) {
    const group = student.groupNumber;
    if (groupCounts.has(group)) {
      groupCounts.set(group, groupCounts.get(group) + 1);
    } else {
      groupCounts.set(group, 1);
    }
  }

  let maxCount = 0;
  for (const count of groupCounts.values()) {
    if (count > maxCount) {
      maxCount = count;
    }
  }

  return maxCount;
}

const students = [
  new Student("Alice", "A1"),
  new Student("Bob", "A1"),
  new Student("Charlie", "B1"),
  new Student("David", "A1"),
  new Student("Eve", "B1"),
  new Student("Frank", "B1"),
  new Student("Grace", "C1"),
];

console.log(countLargestGroup(students)); // 3 (группа B1)
