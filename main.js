// // JavaScript Code
// let num = 10;

// while (num >= 1) {
//     console.log(num);
//     num--;
// }

// console.log("Blast-Off!");

// for (let num = 0; num <= 100; num += 5) {
//     console.log(num);
// }

// console.log("Blast-Off!");

// let numHeads = 0;
// let numTails = 0

// // Loop 500 times
// for (let n = 1; n <= 500; n++) {
//   // Simulate Coin Flip 50/50 chance
//   if (Math.random() < 0.5) {
//     numHeads++;
//   } else {
//     numTails++;
//   }
// }

// // Output Final Results
// console.log("Heads: " + numHeads + " Tails: " + numTails);

 // Coin Flip Simulator
      let numHeads = 0;
      let numTails = 0
      let numFlips = 0;

      // Loop until 100 heads
      while (numHeads < 100) {
        // Simulate Coin Flip 50/50 chance
        if (Math.random() < 0.5) {
          numHeads++;
        } else {
          numTails++;
        }
        // Increment numFlips
        numFlips++;
      }
  
      // Output Final Results
      console.log("Number of Coin Flips: " + numFlips);
      console.log("Heads: " + numHeads + " Tails: " + numTails);
      