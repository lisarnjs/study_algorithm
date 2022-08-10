// const seungwan = {
//   rank: "god",
//   tier: 0,
//   printInfo: function () {
//     setTimeout(function () {
//       console.log(this.rank);
//       console.log(this.tier);
//     }, 1000);
//   },
// };

// const a = seungwan.printInfo; // ?
// a();

// const printThis = () => {
//   console.log(this);
// };

// let a = {
//   num: 2,
// };

// let test1 = printThis.bind(a);
// test1();

// let b = {
//   num: 22,
// };

// let test2 = test1.bind(b);
// test2();

function printThis() {
  console.log(this);
}

let a = {
  num: 2,
};

let test1 = printThis.bind(a);
test1(); // ?

let b = {
  num: 22,
};

let test2 = test1.bind(b);
console.log(test1);

test2(); // ?
