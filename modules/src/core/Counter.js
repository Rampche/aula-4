class Counter {
  static INCREMENT = "increment";

  #count = 0;
  #timer = null;

  constructor() {}

  start(time) {
    this.#timer = setInterval(() => {
      //TODO: Add logic TPC
    }, time * 1000);
  }

  stop() {
    clearInterval(this.#timer);
  }
}

const c1 = new Counter();

module.exports = Counter;
