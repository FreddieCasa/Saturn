const arr = [
  { i: "a", j: 1 },
  { i: "b", j: 2 },
  { i: "c", j: 3 },
];

console.log(arr);

const arr2 = arr
                .filter((ob) => ob.j ===3)
                .map((jDelta)=> ({...jDelta, j:6}));
console.log(arr2);





