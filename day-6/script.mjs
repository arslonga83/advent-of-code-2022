import { readInput } from '../utilities.mjs'

const data = await readInput('./day6data')
const dataStream = data.toString()

function subRoutine() {
  for (let i = 0; i < dataStream.length-3; i++) {
    let testArray = dataStream.slice(i, i+14).split('').sort()
    if (testArray[0] != testArray[1] &&
        testArray[1] != testArray[2] &&
        testArray[2] != testArray[3] &&
        testArray[3] != testArray[4] &&
        testArray[4] != testArray[5] &&
        testArray[5] != testArray[6] &&
        testArray[6] != testArray[7] &&
        testArray[7] != testArray[8] &&
        testArray[8] != testArray[9] &&
        testArray[9] != testArray[10] &&
        testArray[10] != testArray[11] &&
        testArray[11] != testArray[12] &&
        testArray[12] != testArray[13] &&
        testArray[13] != testArray[14]
        ) 
        {
          console.log(testArray, i+14)
        }
  }
}

subRoutine()