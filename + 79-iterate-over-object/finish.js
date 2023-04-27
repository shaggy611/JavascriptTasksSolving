/** ЗАДАЧА 79 - Перебор свойств объекта
 *
 * 1. Создайте функцию "sumObjectValues", которая будет суммировть
 * все значения свойств, которые являются числами.
 *
 * 2. Сумму чисел необходимо вернуть из функции
 *
 * 3. Убедитесь, что итерация выполняется только
 * по собственным свойствам объекта
 */

const objectWithNumbers = {
  a: 10,
  b: 20,
  c: 'string',
  d: 12,
}

// Option #1
// const sumObjectValues = (obj) => {
//   let sum = 0
//   Object.keys(obj).forEach((item) => {
//     if(typeof obj[item] === 'number') {
//       sum += obj[item]
//     }
//   })

//   return sum
// }


// Option #2
const sumObjectValues = (object) => {
  let sum = 0

  for (const key in object) {
    if (Object.hasOwnProperty.call(object, key) && typeof object[key] === 'number') {
      sum += object[key];
    }
  }
  return sum
}



const result = sumObjectValues(objectWithNumbers)
console.log(result)
//42
