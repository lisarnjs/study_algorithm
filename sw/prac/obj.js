const s = "javascript";

const result = Array.prototype.filter
  .call(s, (item) => item.match(/[^aeiou]/))
  .join("");

console.log(result);
