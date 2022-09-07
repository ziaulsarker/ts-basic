class Dog {
  constructor(readonly name: string) {}
  sayhello = (): string => 'Woof Woof Bitch!!';
}

class Fish {
  constructor(readonly name: string) {}
  dive = (howDeep: string): string => `Fish Dove ${howDeep} feet`;
}

type Pet = Dog | Fish;

const d = new Dog("ghost");
const f = new Fish("shark");



// type Guards; 
const isDog = (obj: any): obj is Dog => !!obj && 'sayhello' in obj;
const isFish = (obj: any): obj is Fish => !!obj && 'dive' in obj;

const talkToPet = (pet: Pet): void => {

  // instanseof Typeguard
  if (pet instanceof Dog) {
    return console.log(pet.sayhello());
  } 
  
    // instanseof Typeguard
  if (pet instanceof Fish) {
   return console.log(pet.dive("100"));
  }

  return console.log("thats Typeguard bitch");
};

talkToPet(d);
talkToPet(f);


