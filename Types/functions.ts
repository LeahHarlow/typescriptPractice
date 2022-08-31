//annotating functions

function square(num: number){
  return num * num;
}

function greek(food: string){
  return 'olives';
}

const friendPotential = (person: string, age: number, isFunny: boolean) => {}

friendPotential("Zuma", 1.5, true) // this works ts will give you exact errors for arguemnts missing tho which is cool.

//providing default values must come after annotation

function whatsForLunch(food: string = 'Burrito'){
  return `We get to have a ${food} for lunch.`
}
