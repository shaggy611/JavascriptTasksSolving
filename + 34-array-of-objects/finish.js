/** ЗАДАЧА 34 - Массив объектов
 *
 * 1. Создайте массив с 3 объектами "cars"
 *
 * 2. Каждый объект должен иметь три свойства
 *  - carBrand (строка)
 *  - price (число)
 *  - isAvailableForSale (логическое значение)
 *
 * 3. Добавьте еще один объект в массив
 *
 * 4. Выведите результирующий массив в консоль
 */

const cars = [
    {
        carBrand: 'Volvo',
        price: 12000,
        isAvailableForSale: true
    },
    {
        carBrand: 'Opel',
        price: 10000,
        isAvailableForSale: false
    },
    {
        carBrand: 'Audi',
        price: 15000,
        isAvailableForSale: true
    }
]

const car_new = {
    carBrand: 'BMW',
        price: 14000,
        isAvailableForSale: false
}

cars.push(car_new)

console.log(cars)