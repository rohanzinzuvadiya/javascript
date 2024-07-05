class Animal {
  constructor(name) {
    this.name = name;
  }

  eat() {
    console.log(`${this.name} is eating...`);
  }

  sleep() {
    console.log(`${this.name} is sleeping...`);
  }

  sound() {
    console.log(`${this.name} makes a sound...`);
  }
}

class Cat extends Animal {
  constructor(name) {
    super(name);
  }

  sound() {
    console.log(`${this.name} meows...`);
  }
}

class Dog extends Animal {
  constructor(name) {
    super(name);
  }

  sound() {
    console.log(`${this.name} barks...`);
  }
}

let myCat = new Cat("Whiskers");
myCat.eat(); // Whiskers is eating...
myCat.sleep(); // Whiskers is sleeping...
myCat.sound(); // Whiskers meows...

let myDog = new Dog("Buddy");
myDog.eat(); // Buddy is eating...
myDog.sleep(); // Buddy is sleeping...
myDog.sound(); // Buddy barks...
