import { readInput } from '../utilities.mjs'

const data = await readInput('./day5data')
const instructions = data.toString().split('\n');


let stack1 = ['H', 'R', 'B', 'D', 'Z', 'F', 'L', 'S']
let stack2 = ['T', 'B', 'M', 'Z', 'R']
let stack3 = ['Z', 'L', 'C', 'H', 'N', 'S']
let stack4 = ['S', 'C', 'F', 'J']
let stack5 = ['P', 'G', 'H', 'W', 'R', 'Z', 'B']
let stack6 = ['V', 'J', 'Z', 'G', 'D', 'N', 'M', 'T']
let stack7 = ['G', 'L', 'N', 'W', 'F', 'S', 'P', 'Q']
let stack8 = ['M', 'Z', 'R']
let stack9 = ['M', 'C', 'L', 'G', 'V', 'R', 'T']

// [S]                 [T] [Q]        
// [L]             [B] [M] [P]     [T]
// [F]     [S]     [Z] [N] [S]     [R]
// [Z] [R] [N]     [R] [D] [F]     [V]
// [D] [Z] [H] [J] [W] [G] [W]     [G]
// [B] [M] [C] [F] [H] [Z] [N] [R] [L]
// [R] [B] [L] [C] [G] [J] [L] [Z] [C]
// [H] [T] [Z] [S] [P] [V] [G] [M] [M]
//  1   2   3   4   5   6   7   8   9 

function getInstruction() {
  let array = []
  instructions.forEach((instruction) => {
    array.push(instruction.split(' '))
  })
  return array;
}

const instructionsArray = getInstruction()

console.log(instructionsArray)

