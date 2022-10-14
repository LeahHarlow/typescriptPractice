interface SomethingToCompile {
  name: string;
  luckyNumber: number;
}

let compiledThing: SomethingToCompile = {
  name: "thing",
  luckyNumber: 7
}


//in the CL tsc -w {name of file} will make it recompile when there's changes made to the ts file.
