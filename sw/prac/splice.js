// 백준 무슨 문제라던데..

n = 5;
arr = [10, 20, 30, 40, 50];

const hap = (start, end) => {
  result = 0;
  for (let i = start - 1; i <= end - 1; i++) {
    result += arr[i];
  }
  console.log(result);
};

hap(1, 3);
