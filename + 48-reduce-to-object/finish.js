/** ЗАДАЧА 48 - Использование метода "reduce" для создания объекта
 *
 * 1. Создайте функцию "quantitiesByCategories" с одним параметром "products"
 *
 * 2. Эта функция должна возвращать объект с ключами,
 * равными категориям, и значениями,
 * равными сумме всех количеств в каждой категории
 */

const inputProducts = [
  {
    title: 'Phone case',
    price: 23,
    quantity: 2,
    category: 'Accessories',
  },
  {
    title: 'Android phone',
    price: 150,
    quantity: 1,
    category: 'Phones',
  },
  {
    title: 'Headphones',
    price: 78,
    quantity: 1,
    category: 'Accessories',
  },
  {
    title: 'Sport Watch',
    price: 55,
    quantity: 2,
    category: 'Watches',
  },
  {
    title: 'Casual Watch',
    price: 55,
    quantity: 2,
    category: 'Watches',
  },
  {
    title: 'Buetooth Speaker',
    price: 45,
    quantity: 5,
    category: 'Speakers',
  },
]


// function quantitiesByCategories(products) {
//   return products.reduce((key, currentValue) => {
//     if(key.hasOwnProperty(currentValue.category)) {
//       key[currentValue.category] += currentValue.quantity
//     } else {
//       key[currentValue.category] = currentValue.quantity
//     }
    
//     return key
//   }, {})
// }

function quantitiesByCategories(products) {
  return products.reduce((qtysByCtgr, product) => {
    const {category, quantity} = product
    qtysByCtgr.hasOwnProperty(category) ? qtysByCtgr[category] += quantity : qtysByCtgr[category] = quantity

    return qtysByCtgr
  }, {})
}


console.log(quantitiesByCategories(inputProducts))
/* {
  Accessories: 3,
  Phones: 1,
  Watches: 2
} */
