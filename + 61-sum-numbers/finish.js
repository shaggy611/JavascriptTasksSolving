/** ЗАДАЧА 61 - Сумма чисел
 *
 * 1. Создайте функцию "sumNumbers", которая будет суммировать все переданные ей аргументы.
 * Количество аргументов неизвестно
 *
 * 2. Используйте console.log внутри функции для вывода результата
 *
 * 3. Также верните эту сумму как результат функции
 */

// function sumNumbers(...items) {
//     const result = items.reduce((sum, item) => sum += item, 0)
//     console.log(`Sum of numbers is ${result}`)
//     return result
// }

function sumNumbers() {
    let sum = 0
    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i]
    }
    console.log(`Sum of numbers is ${sum}`)
    return sum
}


const x = sumNumbers(1, 3)
console.log(x)
// 4

sumNumbers(10, 20, 5)
// 35

sumNumbers(2, 5, 80, 1, 10, 12)
// 110
