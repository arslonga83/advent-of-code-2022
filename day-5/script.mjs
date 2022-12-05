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

function runProgram() {
  // console.log(stack1)
  instructions.forEach((instruction) => {
  const move = instruction.split(' ')
  craneMove(move[1], move[3], move[5]) 
  // console.log(stack1)
  
  })
  printAnswer()
}

runProgram()

function craneMove(num, from, to) {
  //i think this will make the right number of moves for each instruction
  for (let i = 0; i < num; i++) {
    // console.log(to, from)
    //first pop out one number
    const item = removeItem(from)
    //then push it to the correct stack
    pushItem(item, to)
  }
}

function removeItem(from) {
  if (from === '1') {
    return stack1.pop()
  }
  if (from === '2') {
    return stack2.pop()
  }
  if (from === '3') {
    return stack3.pop()
  }
  if (from === '4') {
    return stack4.pop()
  }
  if (from === '5') {
    return stack5.pop()
  }
  if (from === '6') {
    return stack6.pop()
  }
  if (from === '7') {
    return stack7.pop()
  }
  if (from === '8') {
    return stack8.pop()
  }
  if (from === '9') {
    return stack9.pop()
  }
}

function pushItem(item, to) {
  if (to === '1') {
    stack1.push(item)
  }
  if (to === '2') {
    stack2.push(item)
  }
  if (to === '3') {
    stack3.push(item)
  }
  if (to === '4') {
    stack4.push(item)
  }
  if (to === '5') {
    stack5.push(item)
  }
  if (to === '6') {
    stack6.push(item)
  }
  if (to === '7') {
    stack7.push(item)
  }
  if (to === '8') {
    stack8.push(item)
  }
  if (to === '9') {
    stack9.push(item)
  }
}

function printAnswer() {
  console.log(stack1[stack1.length-1] +
    stack2[stack2.length-1] +
    stack3[stack3.length-1] +
    stack4[stack4.length-1] +
    stack5[stack5.length-1] +
    stack6[stack6.length-1] +
    stack7[stack7.length-1] +
    stack8[stack8.length-1] +
    stack9[stack9.length-1]
    )
}



