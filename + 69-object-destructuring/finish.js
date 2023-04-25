/** ЗАДАЧА 69 - Деструктуризация объектов
 *
 * Создайте функцию "mult", в которой будут умножаться
 * значения свойств x, y, z переданного объекта
 *
 * Результат умножения верните из функции
 */

const objectWithNumbers = {
  x: 5,
  y: 20,
  z: 3,
}

function mult(obj) {
  const {x, y, z} = obj
  return x*y*z
}

const multModed = ({x, y, z}) => x * y * z

const result = mult(objectWithNumbers)
console.log(result)
// 300

const result_1 = mult(objectWithNumbers)
console.log(result_1)
