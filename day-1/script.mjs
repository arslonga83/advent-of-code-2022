import { readFileSync } from 'fs';
const data = readFileSync('./day1data', 'utf-8')
console.log(data.toString().split('\n\n'))


// import * as fs from 'fs';

// function question1() {
//   //read the data
//   fs.readFile('./day1data', (err, data) => {
//     const calorieData = data.toString();
//     //separate each elf
//     const caloriesArray = calorieData.split('\n\n')
//     //remove the spaces
//     const separateElves = caloriesArray.map((elf) => elf.split('\n')) 
//     //get total count for each elf
//     const totals = separateElves.map((elf) => {
//       return elf.reduce((a, b) => Number(a) + Number(b), 0)
//     })
//     //get the maximum value
//     const most = totals.reduce((a, b) => Math.max(a, b))
//     console.log('first answer =', most)
//   })
// }

// question1();

// function question2() {
//   //read data from file
//   fs.readFile('./day1data', (err, data) => {
//     const calorieData = data.toString();
//      //separate each elf
//     const caloriesArray = calorieData.split('\n\n')
//      //remove spaces in each elf
//     const separateElves = caloriesArray.map((elf) => elf.split('\n')) 
//      //total each elf's calories
//     const totals = separateElves.map((elf) => {
//       return elf.reduce((a, b) => Number(a) + Number(b), 0)
//     }) 
//     //sort by number and add the biggest 3
//     const orderedTotals = totals.sort((a, b) => a - b);
//     console.log('second answer =', 
//       orderedTotals[orderedTotals.length-1] +
//       orderedTotals[orderedTotals.length-2] +
//       orderedTotals[orderedTotals.length-3]
//       )
//   })
// }

// question2()
