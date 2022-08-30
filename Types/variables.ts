let movieTitle: string = "Bullet Train";
movieTitle = "The Man from Uncle";
//movieTitle = 9 This gives me a big old error if I try to make it not a string

let TVShow = "Peaky Blinders"
TVShow = 8 // gives the same error, meaning typescript actually automattically types things for you you dont have to explicitly write it

//you can type things to any though and it will give no errors

let thing: any = "hi";
thing = 9;
thing();
