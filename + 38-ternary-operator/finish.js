/** ЗАДАЧА 38 - Тернарный оператор
 *
 * 1. Перепишите инструкцию "if .. else" без использования "else"
 *
 * 2. Перепишите содержимое функции, используя тернарный оператор
 *
 * 3. Замените обычную функцию на стрелочную функцию
 */

// function isArrayEmpty(inputArray) {
//   if (inputArray.length > 0) {
//     return 'Массив не пустой'
//   } else {
//     return 'Массив пустой'
//   }
// }

function isArrayEmpty(inputArray) {
  if (inputArray.length > 0) {
    return 'Массив не пустой'
  }

  return 'Массив пустой'
}


function isArrayEmpty_1(inputArray) {
  return inputArray.length > 0 ? 'Массив не пустой' : 'Массив пустой'
}

const isArrayEmpty_2 = (inputArray) => {
  return inputArray.length > 0 ? 'Массив не пустой' : 'Массив пустой'
}


console.log(isArrayEmpty_2([1, 3]))
console.log(isArrayEmpty_2([]))
