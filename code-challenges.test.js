// ASSESSMENT 3: Coding Practical Questions with Jest



// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence.

// a) Create a test with expect statements for each of the variables provided.

const fibLength1 = 6
// Expected output: [1, 1, 2, 3, 5, 8]

const fibLength2 = 10
// Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

// describe("fibSequence", () => {
//     it("returns an array that length containing the numbers of the Fibonacci sequence.", () => {
//       expect(fibSequence(fibLength1)).toEqual([1, 1, 2, 3, 5, 8])
//       expect(fibSequence(fibLength2)).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55])
//     })
//   })
// ReferenceError: fibSequence is not defined

// b) Create the function that makes the test pass.

// PseudoCode: Declare a function called fibsequence 
// set parameter: num
// Delcare a variable with [0,1] as its value
// set up a for loop starting at index 2 to start iteration at index 2
// use push method to to create an equation that adds the previous indexes value to the current value.
// use shift method to remove value of index 1
// return variable from step 3

 const fibSequence = (num) => {
     let fibArray = [0,1]
     for(let i = 2; i <= num; i++) {
        fibArray.push(fibArray[i - 2] + fibArray[i - 1])
     }  fibArray.shift()
        return fibArray
        
}    

//  console.log(fibSequence(fibLength1)) // [1, 1, 1, 2, 3, 5, 8]
//  console.log(fibSequence(fibLength2)) // [1, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55]


// const fibSequence = (num) => {
//     let fibArray = [0,1]
//     for(let i = 2; i <= num; i++) {
//        fibArray.push(fibArray[i - 2] + fibArray[i - 1])
//     } 
//        return fibArray
       
// }   

//  console.log(fibSequence(fibLength1)) // [0, 1, 1, 2, 3, 5, 8]
//  console.log(fibSequence(fibLength2)) // [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55]


// This ^ was my original function that seemed correct but would not pass the test. I was so confused but eventually realized the expected fibonacci sequence does not start at 0. Therefore I had to figure out how to get rid of the 0 and came up with .shift.

// --------------------2) Create a function that takes in an array and returns a new array of only odd numbers sorted from least to greatest.

// a) Create a test with expect statements for each of the variables provided.

const fullArr1 = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"]
// Expected output: [-9, 7, 9, 199]

const fullArr2 = ["hello", 7, 23, -823, false, 78, null, "67", 6, "number"]
// Expected output: [-823, 7, 23]

// describe("OddsInOrder", () => {
//         it("returns a new array of only odd numbers sorted from least to greatest.", () => {
//           expect(OddsInOrder(fullArr1)).toEqual([-9, 7, 9, 199])
//           expect(OddsInOrder(fullArr2)).toEqual([-823, 7, 23])
//         })
//       })

    //   ReferenceError: OddsInorder is not defined



// b) Create the function that makes the test pass.


// PseudoCode:
// Declare a function called OddsInOrder
// Set parameter to array
// return parameter with .sort method then use .filter to iterate over the array
// Use conditional that determines whether or now the value in an array is a number and(&&) if the value is an odd number.
// return values

const OddsInOrder = (array) => {
    return array.sort((a, b) => a - b).filter(value => {
      if(typeof value === "number" && value % 2 !== 0) {
          return value
      }
})
}
// console.log(OddsInOrder(fullArr1)) [-9, 7, 9, 199]
// console.log(OddsInOrder(fullArr2)) [-823, 7, 23]
// Pass


// const OddsInOrder = (array) => {
//     return array.filter(value => {
//       if(typeof value === "number" && value % 2 !== 0) {
//           return value.sort((a, b) => a - b)
//       }
// })
// }
// This ^ was my original function. It worked but I could not get my array of odd numbers sorted from least to greatest. I knew sort was the method I needed to use so I tried sorting the array before using the HOF filter and was able to get my function to pass.




// --------------------3) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

// a) Create a test with expect statements for each of the variables provided.

const numbersToAdd1 = [2, 4, 45, 9]
// Excpected output: [2, 6, 51, 60]

const numbersToAdd2 = [0, 7, -8, 12]
// Expected output: [0, 7, -1, 11]

const numbersToAdd3 = []
// Expected output: []


// describe("sumArrayNums", () => {
//     it("returns an array of the accumulating sum. An empty array should return an empty array.", () => {
//       expect(sumArrayNums(numbersToAdd1)).toEqual([2, 6, 51, 60])
//       expect(sumArrayNums(numbersToAdd2)).toEqual([0, 7, -1, 11])
//       expect(sumArrayNums(numbersToAdd3)).toEqual([])
//     })
//   })

// Fail. No reference error. 
// Pass

// b) Create the function that makes the test pass.

// PseudoCode:
// Declare a function names sumArrayNums
// Set parameter: arrayOfNums
// Delcare a varibale called newArray with [] as its value
// set up a for loop
// Delcare a variable called accumulatingSum and set its value to 0
// Set accumulatingSum += arrayOfNums[i]
// Use newArray.push and pass accumulatingSum as the arguments
// return newArray


const sumArrayNums = (arrayOfNums) => {
    let newArray = []
    let accumulatingSum = 0
    for(let i = 0; i < arrayOfNums.length; i++) {

        accumulatingSum += arrayOfNums[i]
        newArray.push(accumulatingSum)
      }
      return newArray
    
}
// Pass
// console.log(sumArrayNums(numbersToAdd1)) // [2, 6, 51, 60]
// console.log(sumArrayNums(numbersToAdd2)) // [0, 7, -1, 11]
// console.log(sumArrayNums(numbersToAdd3)) // []
