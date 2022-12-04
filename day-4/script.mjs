import { readInput } from '../utilities.mjs'

const data = await readInput('./day4data')
const pairs = data.toString().split('\n')


let count = 0;

pairs.forEach((pair) => {
  // separate the data into 2 arrays
  let array = makeArray(pair);
  let elf1 = array[0].split('-')
  let elf2 = array[1].split('-')

  //QUESTION 1
//   //elf 1 contains elf 2?
//   if (Number(elf1[0]) <= elf2[0] && Number(elf1[1]) >= elf2[1]) {
//     count ++; 
    
//     //elf 2 contains elf 1?
//   } else if (Number(elf2[0]) <= elf1[0] && Number(elf2[1]) >= elf1[1]) {
//     count ++
//   }
//   // }

// QUESTION 2
if (Number(elf1[1]) >= elf2[0] && Number(elf1[1]) <= elf2[1]) {
  count++
} else if (Number(elf1[0]) <= elf2[1] && Number(elf1[1]) >= elf2[1]) {
  count++
}

})

console.log(count)

function makeArray(input) {
  return input.split(',')
}

