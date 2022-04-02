type TupleSplit<
  T,
  N extends number,
  O extends readonly any[] = readonly []
> = O["length"] extends N
  ? [O, T]
  : T extends readonly [infer F, ...infer R]
  ? TupleSplit<readonly [...R], N, readonly [...O, F]>
  : [O, T];

type Test = TupleSplit<readonly ["a", "b", "c", "d", "e"], 3>;
// type Test = [readonly ["a", "b", "c"], readonly ["d", "e"]]

type TakeFirst<T extends readonly any[], N extends number> = TupleSplit<
  T,
  N
>[0];

type SkipFirst<T extends readonly any[], N extends number> = TupleSplit<
  T,
  N
>[1];

type TupleSlice<
  T extends readonly any[],
  S extends number,
  E extends number
> = SkipFirst<TakeFirst<T, E>, S>;

function slice<T extends readonly any[], S extends number, E extends number>(
  arr: readonly [...T],
  start: S,
  end: E
) {
  return arr.slice(start, end) as readonly any[] as TupleSlice<T, S, E>;
}

const tuple = ["a", "b", "c", "d", "e"] as const;
// const tuple: readonly ["a", "b", "c", "d", "e"]

const ret0 = slice(tuple, 2, 4);
// const ret0: readonly ["c", "d"]
console.log(ret0); // ["c", "d"]

const ret1 = slice(tuple, 0, 9);
// const ret1: readonly ["a", "b", "c", "d", "e"]
console.log(ret1); // ["a", "b", "c", "d", "e"];

const ret2 = slice(tuple, 5, 3);
// const ret2: readonly []
console.log(ret2); // [];

// caveats: S and E had better be non-negative whole numbers less than around 25 or so, or you will see issues
