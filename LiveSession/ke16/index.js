//encapsulation
function Ongkir(berat){
    var pajak = 500;
    var biaya = function(){
        return berat * 1000
    }

    this.total = function(){
        return biaya() + pajak
    }
}
console.log("example of Encapsulation")
const laptop = new Ongkir(4);
laptop.pajak = 800 // tidak akan mempengaruhi var pajak dalam constuctur functionya
console.log(laptop.total());

//inheritance
class People{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
}

class Person extends People {
    constructor(name,age,job){
        super(name,age)
        this.job = job;
    }
}

console.log("Example of Inheritance")
const anyong = new Person("naniong",3,"meowMeoq")
console.log(anyong.name + " age " +anyong.age + " years and the job is " +anyong.job);

//polymorphic 
console.log("Example of Polymorphism");
class Animal {
    makeSound() {
      console.log("Animal makes a sound");
    }
  }
  
  class Dog extends Animal {
    makeSound() {
      console.log("Dog barks");
    }
  }
  
  class Cat extends Animal {
    makeSound() {
      console.log("Cat meows");
    }
  }
  
  function animalSound(animal) {
    animal.makeSound();
  }
  
  const myDog = new Dog();
  const myCat = new Cat();
  
  animalSound(myDog); // Output: Dog barks
  animalSound(myCat); // Output: Cat meows
  
  // abstract
  console.log("example of abstract")
  class Car {
    constructor(make, model) {
      this.make = make;
      this.model = model;
    }
  
    startEngine() {
      console.log(`${this.make} ${this.model}'s engine started.`);
    }
  
    drive() {
      console.log(`${this.make} ${this.model} is driving.`);
    }
  }
  
  const myCar = new Car('Toyota', 'Camry');
  myCar.startEngine(); // Output: Toyota Camry's engine started.
  myCar.drive();      // Output: Toyota Camry is driving.
  