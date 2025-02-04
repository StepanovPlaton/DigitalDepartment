// --- #1 ---
class Figure {
  #x;
  #y;

  constructor(x, y) {
    this.#x = x;
    this.#y = y;
  }

  square() {
    return undefined;
  }
}

// --- #2 ---
class Circle extends Figure {
  #r;

  constructor(x, y, r) {
    super(x, y);
    this.#r = r;
  }

  square() {
    return Math.PI * this.#r * this.#r;
  }
}

// --- #3 ---
class Rectangle extends Figure {
  #h;
  #w;

  constructor(x, y, h, w) {
    super(x, y);
    this.#h = h;
    this.#w = w;
  }

  square() {
    return this.#h * this.#w;
  }
}

// --- #4 ---
const circle = new Circle(10, 20, 5);
console.log("Circle Area:", circle.square()); // 78.53981633974483
const rectangle = new Rectangle(15, 25, 5, 10);
console.log("Rectangle Area:", rectangle.square()); // 50
