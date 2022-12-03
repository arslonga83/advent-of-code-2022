import { readInput } from '../utilities.mjs'

const data = await readInput('./day3data')
const ruckSacks = data.toString().split('\n')

//find repeated items
let repeatedItems = '';
ruckSacks.forEach((ruckSack) => {
  const firstHalf = ruckSack.slice(0, (ruckSack.length/2))
  const secondHalf = ruckSack.slice(ruckSack.length/2)
  repeatedItems += getRepeat(firstHalf, secondHalf)
  // console.log(firstHalf, typeof(firstHalf))
})

function getRepeat(firstHalf, secondHalf) {
  for (let char of firstHalf) {
    if (secondHalf.includes(char)) {
      return char;
    }
  }
}

//add up priorities
function addPriorities(repeatedItems) {
  let priorityCount = 0
  for (let i = 0; i < repeatedItems.length; i++) {
    if (repeatedItems.charCodeAt(i) > 96) {
      priorityCount += (repeatedItems.charCodeAt(i)-96)
    } else {
      priorityCount += repeatedItems.charCodeAt(i) - 38
    }
  }
  console.log(priorityCount)
}

addPriorities(repeatedItems)


//question 2

let question2Priorities = ''
for (let i = 0; i < ruckSacks.length-2; i += 3) {
  for (let char of ruckSacks[i]) {
    if (ruckSacks[i+1].includes(char) && ruckSacks[i+2].includes(char)) {
      question2Priorities += char;
      break;
    }
  }
}

addPriorities(question2Priorities)
