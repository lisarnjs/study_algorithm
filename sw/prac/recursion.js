let i = 0;

function a(b) {
  if (i === 3) return b;
  i++;
  return a(b + i);
}

console.log(a(1));
