/** ЗАДАЧА 59 - Расширение массивов
 *
 * 1. Создайте новый класс "ExtendedArray", который должен расширять встроенный "Array"
 *
 * 2. Добавьте в новый класс два пользовательских метода:
 *  - "sum" - он должен возвращать сумму всех элементов массива
 *  - "onlyNumbers" - должен возвращать новый массив,
 * который будет содержать только числа из исходного массива
 *
 * 3. Создайте несколько экземпляров нового класса "ExtendedArray"
 * и протестируйте оба метода "sum" и "onlyNumbers".
 *
 * 4. Убедитесь, что остальные методы массивов такие,
 * как "forEach", "map" также доступны
 */

 class ExtendedArray extends Array {
    sum() {
        return this.reduce((sum, num) => sum + num, 0)
    }

    onlyNumbers() {
        return this.filter((element) => typeof element === 'number' ? true : false)
    }
 }

 const arr_1 = new ExtendedArray(2, 3, 4, true, false, undefined, null, 'sdfsdf')
 console.log(arr_1)
 console.log(arr_1.onlyNumbers())

 const arr_2 = new ExtendedArray(10, 20, 30)
 console.log(arr_2.sum())
 let modedArr = arr_2.map((el) => el * 2)

 console.log(modedArr.onlyNumbers())
