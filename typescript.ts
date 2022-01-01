// boolen
let isCool: boolean = true;

// number
let age: number = 56;

// string
let eyecolor: string = "brown";
let favouriteQuote: string = `I'm not old, i'm only ${age}`;

// array
let pets: string[] = ["beg", "floor", "bed"];
let pets2: Array<string> = ["lion", "dragon", "lizard"];

// object
let wizard: object = {
  a: "John",
};

// null and undefined
let meh: undefined = undefined;
let noo: null = null;

// tuple
let basket: [string, number];
basket = ["basketball", 7];

// enum
enum Size {
  Small = 1,
  Medium = 2,
  Large = 3,
}
let sizeName: string = Size[2];

// any - !!!!!! BE CAREFUL
let whatever: any = "aghhhh nooo!!!";
whatever = 5;

// void
let sing = (): void => {
  console.log("lalalalllala");
};

// never
let error = (): never => {
  throw Error("oops");
};

// interface
// interface create new name to use in everywhere
// questionmark means optional property
interface RobotArmy {
  count: number;
  type: string;
  magic?: string;
}

// while type not creating new name
type RobotArmy2 = {
  count: number;
  type: string;
  magic: string;
};

let fightRobotArmy = (robots: RobotArmy) => {
  console.log("FIGHT");
};

let fightRobotArmy2 = (robots: {
  count: number;
  type: string;
  magic: string;
}) => {
  console.log("FIGHT");
};

// type assertion --- becareful to use this
interface CatArmy {
  count: number;
  type: string;
  magic: string;
}

let dog = {} as CatArmy;
dog.count;

// function
let fightRobotArmy3 = (robots: RobotArmy): void => {
  console.log("FIGHT");
};

let fightRobotArmy4 = (robots: {
  count: number;
  type: string;
  magic: string;
}): number => {
  console.log("FIGHT");
  return 5;
};

// classes
class Animal {
  public sing: string = 'alalalla';
  constructor(sound: string){
    this.sing = sound;
  }

  greet(): string {
    return `Hello ${this.sing}`;
  }
}

let lion = new Animal('RAARRR');
lion.greet();
lion.sing;

// union
let confused: string | number | boolean = true;
