let movieTitle: string = "Bullet Train";
movieTitle = "The Man from Uncle";
//movieTitle = 9 This gives me a big old error if I try to make it not a string

let TVShow = "Peaky Blinders"
TVShow = 8 // gives the same error, meaning typescript actually automattically types things for you you dont have to explicitly write it

//you can type things to any though and it will give no errors

let thing: any = "hi";
thing = 9;
thing();

// the only time you would want to use the any type is when you are declaring a variable before inizializing it. It will still have type any if you assign it later. So it's still better to use types coz that's the whole point of typescript.

const movies = ["The Gentleman", "A Knights Tale", "School of Rock"]

let foundMovie;

for(let movie of movies){
  if(movie === "A Knights Tale") foundMovie = "A Knights Tale"
}


