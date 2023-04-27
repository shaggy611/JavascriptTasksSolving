/** ЗАДАЧА 75 - Перебор символов строки
 *
 * Подсчитайте количество строчных гласных букв в строке.
 * Гласные буквы - a, e, i, o, u
 */

let vowelsCount = 0
const vowels = ['a', 'e', 'i', 'o', 'u']

const str = 'Today is the best day of my life'

//Solution #1

// function findVowels(strLine) {
//     vowels.forEach((element) => {
//         Array.from(strLine).filter((item) => {
//             item === element ? vowelsCount += 1 : false
//         }) 
//     })

//     return vowelsCount
// } 

//Solution #2

function findVowels(strLine) {
    strLine.split('').forEach((element) => {
        vowels.includes(element) ? vowelsCount++ : false
    })

    return vowelsCount
} 

console.log(findVowels(str))
//console.log(vowelsCount)
// 9
