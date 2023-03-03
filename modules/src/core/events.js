const Counter = require("./Counter");

const c1 = new Counter(20);
const c2 = new Counter();

c1.start(1);

c1.on(Counter.INCREMENT, (number) => {
    console.log('Counter 1: ', number);

    if (number >= 20) {
        c1.stop();
    }
})

c2.start(5);

c2.once(Counter.INCREMENT, (number) => {
    console.log("Counter 2: ", number);
})