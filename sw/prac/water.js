const height = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];

const water = (height) => {
  let a = {};
  let b = {};
  for (let index = 0; index < height.length; index++) {
    if (height[index] > 0) {
      a = { index, value: height[index] };
      break;
    }
  }

  for (let index = a.index; index < height.length; index++) {
    if (a.value <= height[index]) {
      b = { index: height[index] };
      break;
    }
  }

  if (Object.keys(b).length === 0) {
    let max = 0;
    for (let index = a.index + 1; index < height.length; index++) {
      if (height[index] > max) {
        max = height[index];
        b = { index, value: height[index] };
      }
    }
  }
};
