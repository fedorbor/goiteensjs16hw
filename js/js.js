class Animal {
  #name;
  #age;
  
  constructor(name, age) {
    this.#name = name;
    this.#age = age;
  }
  
  getAge() {
    return this.#age;
  }
  
  getInfo() {
    return `${this.#name} is ${this.#age} years old, has ${Dog.legsCount} legs, and is${this instanceof GuideDog && this.isTrained ? '' : ' not'} a trained guide dog.`;
  }
}

class Dog extends Animal {
  static legsCount = 4;
  
  bark() {
    return "Woof!";
  }
}

class GuideDog extends Dog {
  #isTrained;
  
  constructor(name, age,isTrained) {
    super(name, age);
    this.#isTrained = isTrained;
  }
  
  leadBlind() {
    if(this.#isTrained === true){
    return "Following the guide dog";
    }else{
      return "the dog is not trained";
    }
  }
  
  get isTrained() {
    return this.#isTrained;
  }
}

const myGuideDog = new GuideDog("Buddy", 3,false);
console.log(myGuideDog.getInfo());
console.log(`Number of legs: ${Dog.legsCount}`);
console.log(myGuideDog.bark());
console.log(myGuideDog.leadBlind());