const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const number = Math.round(Math.random() * 100);
    const isPair = number % 2 === 0;

    if (isPair) {
      resolve(`Generated number is pair! (${number})`);
    } else {
      reject(new Error(`Error! Number is ${number}`));
    }
  }, 3000);
});

promise
  .then((message) => console.log(message))
  .catch((error) => console.log(error.message));

console.log("Waiting...");

const p1 = new Promise((resolve) =>
  setTimeout(() => resolve([1, 2, 3, 4, 5]), 1000)
);
const p2 = new Promise((resolve) =>
  setTimeout(() => resolve({ name: "Mary", lastName: "Smith" }), 3000)
);
const p3 = "Hello, world";
const p4 = Promise.resolve("P4 resolved");

Promise.all([p1, p2, p3, p4])
  .then((res) => {
    console.log(res);

    const { 2: secondResult } = res;
    console.log(secondResult);
  })
  .catch((errors) => console.log(errors));
