const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

/* rl.on('line', (input) => {
    if(input === 'exit') {
        rl.close();
    }
    console.log('>>', input);
}) */

/* rl.question("hoje chove?", (answer)=> {
    console.log('>>', answer);
    rl.close();
}) */

/* 
1. Como te chamas?
2. E que idade tens?

Em cada pergunta deve ter duas opções:
Fechar com exit ou ao apertar enter sem responder nada;

*/

rl.question("Como te chamas?", (firstAnswer) => {
  console.log(">>", firstAnswer);
  if (firstAnswer === "" || firstAnswer === "exit") {
    rl.close();
  } else {
    rl.question("E que idade tens?", (secondAnswer) => {
      console.log(">>", secondAnswer);
      if (secondAnswer === "" || secondAnswer === "exit") {
        rl.close();
      }
      if (!secondAnswer) {
        console.log(`O nome é ${firstAnswer} e não há idade`);
      } else {
        console.log(`O nome é ${firstAnswer} e a idade é ${secondAnswer}`);
      }
      rl.close();
    });
  }
});
