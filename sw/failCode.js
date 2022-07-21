function solution(N, coffee_times) {
  var answer = [];
  if (N === 1) {
    return coffee_times.map((item, index) => {
      return index + 1;
    });
  }

  const arr = {};
  for (var i = 0; i < N; i++) {
    arr[i] = { index: i + 1, value: coffee_times[i] };
  }
  const len = coffee_times.length;
  let nowIndex = N - 1;
  while (answer.length < len) {
    for (var key in arr) {
      if (arr[key].value === 0) {
        answer.push(arr[key].index);
        nowIndex++;
        arr[key].index = nowIndex + 1;
        arr[key].value = coffee_times[nowIndex];
      } else {
        arr[key].value -= 1;
      }
    }
  }
  return answer;
}
