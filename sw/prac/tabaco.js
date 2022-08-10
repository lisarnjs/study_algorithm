// this.. 어렵다

class test {
  constructor(start) {
    this.start = start;
  }

  run() {
    while (this.start < 10) {
      function a(start) {
        setTimeout(function a() {
          console.log(start);
        }, 0);
      }
      a(this.start);
      this.count();
    }
  }

  count() {
    this.start++;
  }
}

const t = new test(1);
t.run();
