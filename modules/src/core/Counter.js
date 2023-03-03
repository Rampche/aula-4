const EventEmitter = require('events');
const { clearScreenDown } = require('readline');



class Counter extends EventEmitter {
  static INCREMENT = "increment";

  #count = 0;
  #timer = null;

  constructor(initialCount) {
    super();
    this.#count = initialCount;
  }

  start(time) {
    this.#timer = setInterval(() => {
      this.#count++;
      this.emit(Counter.INCREMENT, this.#count);
    }, time * 1000);
  }

  stop() {
    clearInterval(this.#timer);
  }
}

const c1 = new Counter();

module.exports = Counter;