//added if/else to return 0 if greater than 1000. Also refactored to allow us to put the max number in the external code (to the right of the = sign)

// const addNumbers = (first, second, third, fourth, maxNum) => {
//     const sum = first + second + third + fourth
//     if (sum > maxNum) {
//         return 0
        
//     }
//     return sum

// rest parameters:
// }

// const addNumbers = (max, ... numbers) => {
//     let sum = 0
//     for (const num of numbers) {
//         sum += num
//     }
//     if (sum > max) {
//         return 0
        
//     }
//     return sum
// }


//use array join method along with rest parameters to be able to put as many words together to form a sentence

const buildSentence = (...words) => {
    return words.join(" ")
}
    
const sentence = buildSentence("We", "like", "to", "break", "our", "brains", "with", "JavaScript")

console.log(sentence)

// const resultOne = addNumbers(10, 1, 2, 3, 4)
// console.log(resultOne)

// const resultTwo = addNumbers(200, 4, 3, 5, 24)
// console.log(resultTwo)

// const resultThree = addNumbers(22, 56, 34, 1234, 100000)
// console.log(resultThree)

