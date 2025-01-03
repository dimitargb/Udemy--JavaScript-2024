"strict mode";
// for loop
// for (let repetition = 1; repetition <= 10; repetition++) {
//   console.log(`Lifting weights repetition ${repetition} 🏋️`);
// }

//While Loop

// while loop -> here we can specify only the condition.
// We want to keep the loop running wile the repetition is <= 10
// The While Loop will run while the condition is true => while (repetition <= 10)

//We need to manualy difine the other 2 components of the for Loop -> counter and counter increase.
//We need to this outside the loop. We start weith rep = 1;
// Then we put the code to execute inside the loop -> console.log(`Lifting weights repetition ${repetition} 🏋️`
//Then at the end of the iteration we wil then increse the counter -> repetition++

let repetition = 1;
while (repetition <= 10) {
  console.log(`Lifting weights repetition ${repetition} 🏋️`);
  repetition++;
}

//While Loop does not really need a counter.
// The only thing the While Loop needs is the condition in order to keep running.

// Exsample: Let's roll a dice and keep rolling the dice intill we roll a six.
// Then when we roll a six we stop. So we dont know how many times the loop shoild run, so we dont need a counter varaible.

let dice = Math.trunc(Math.random() * 6) + 1;
//console.log(dice);
while (dice !== 6) {
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) {
    console.log(`Loop reached 6 and is over!`);
  }
}

// We use while loop whenever we do not know before how many iterations the loop will have.
