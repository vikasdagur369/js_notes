const myNums = [1, 2, 3];

// Use reduce to sum all elements in the array
const myTotal = myNums.reduce((acc, curr) => {
  console.log(`acc: ${acc} and currval: ${curr}`);
  return acc + curr;
}, 0);

console.log(myTotal); // Output: 6

const shoppingCart = [
  {
    itemName: "js course",
    price: 2999,
  },
  {
    itemName: "py course",
    price: 999,
  },
  {
    itemName: "mobile dev course",
    price: 5999,
  },
  {
    itemName: "data science course",
    price: 12999,
  },
];

// Use reduce to calculate the total price of items in the shopping cart
const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0);

console.log(priceToPay); // Output: 21996
