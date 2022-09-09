function printName(person: { first: string; last: string }): void {
  console.log(`${person.first}, ${person.last}`);
}

printName({ first: 'Lola', last: 'Dobson' });


//weird example but its possible and highlights the different types of brackets
//the first set of brackets is the typed input object and the second set is the actual input object.
let coordinate: {x: number, y: number} = {x:10, y:13}
