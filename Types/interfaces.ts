// interfaces look almost identical to types but they are specifically for objects

// notice theres no = before the {} like in types
interface NewPoint {
  x: Number;
  y: number;
}

const pt: NewPoint = { x: 12, y: 13 };

// optionals and read onlys work the same too

interface CelebCrush {
  first: string;
  readonly last: string;
  nickname?: string;
}

const futureHusband: CelebCrush = {
  first: "Thomas",
  last: "Hardy",
}

futureHusband.first = "Tom"
