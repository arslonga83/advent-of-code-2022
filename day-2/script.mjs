import { readInput } from '../utilities.mjs'

//wasn't getting all data so finally imported in 2 batches
const data = await readInput('./day2data')
const file1 = data.toString().split('\n')

const data2 = await readInput('./day2data2')
const file2 = data2.toString().split('\n')

const strategyGuide = [...file1, ...file2]
console.log(strategyGuide)

//AX = tie = 3+1 = 4
//AY = win = 6+2 = 8
//AZ = loss = 0+3 = 3
//BX = loss = 0+1 = 1
//BY = tie = 3+2 = 5
//BZ = win = 6+3 = 9
//CX = win = 6+1 = 7
//CY = loss = 0+2 = 2
//CZ = tie = 3+3 = 6

// let total = 0;
// strategyGuide.map((round) => {
//   if (round[2] === 'X') {
//     total += 1;
//     if (round[0] === 'A') {
//       total += 3;
//     } else if (round[0] === 'C') {
//       total += 6
  //   }
  // } else if (round[2] === 'Y') {
  //   total += 2;;
  //   if (round[0] === 'B') {
  //     total += 3;
  //   } else if (round[0] === 'A') {
  //     total += 6;
  //   }
  // } else if (round[2] === 'Z') {
  //   total += 3;
  //   if (round[0] === 'C') {
  //     total += 3; 
  //   } else if (round[0] === 'B') {
  //     total += 6;
  //   }
  // } 
  // })

  // console.log(total)

// let xCount = 0;
// let yCount = 0;
// let zCount = 0;

// strategyGuide.map((round) => {
//   if (round[2] === 'X') {
//     xCount += 1;
//   } else if (round[2] === 'Y') {
//     yCount += 1;
//   } else if (round[2] === 'Z') {
//     zCount += 1;
//   }
// })

// console.log('xCount = ' + xCount)
// console.log('yCount = ' + yCount)
// console.log('zCount = ' + zCount)

// let ties = 0;
// let wins = 0;

// strategyGuide.map((round) => {
//   if (round === 'A X' || round === 'B Y' || round === 'C Z') {
//     ties += 1;
//   } else if (round === 'A Y' || round === 'B Z' || round === 'C X') {
//     wins += 1;
//   }
// })

// console.log('ties = ' + ties)
// console.log('wins = ' + wins)

let total = 0

strategyGuide.forEach((round) => {
  if (round === 'A X') {
    total += 3;
  }
  if (round === 'A Y') {
    total += 4;
  }
  if (round === 'A Z') {
    total += 8;
  }
  if (round === 'B X') {
    total += 1;
  }
  if (round === 'B Y') {
    total += 5;
  }
  if (round === 'B Z') {
    total += 9;
  }
  if (round === 'C X') {
    total += 2;
  }
  if (round === 'C Y') {
    total += 6;
  }
  if (round === 'C Z') {
    total += 7;
  }
} )

console.log(total)

// PART 2
//AX = lose 0 = scissors 3 = 3
//AY = draw 3 = rock 1 = 4
//AZ = win 6 = paper 2 = 8
//BX = lose 0 = rock 1 = 1
//BY = draw 3 = paper 2 = 5
//BZ = win 6 = scissors 3 = 9
//CX = lose 0 = paper 2 = 2
//CY = draw 3 = scissors 3 = 6
//CZ = win 6 = rock 1 = 7