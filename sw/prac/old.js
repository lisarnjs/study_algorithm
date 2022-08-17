var funcArr = [];
for (let i = 0; i < 10; i++) {
  funcArr.push(() => {
    console.log(i);
  });
}
for (var f of funcArr) {
  f();
}
