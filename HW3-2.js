let i = getRandomInt(1,10);// рандомны размер массива
let basket = []; //создание массива

for (a = 0; a != i; a++)//заполнение массива
{
basket.push(getRandomInt(1,1000));
}

console.log("Basket Price = ", countBasketPrice(basket));

function getRandomInt(min, max) {//рандомные числа в диапозоне
    return Math.floor(Math.random() * (max - min)) + min;
  }

function countBasketPrice(arr){//суммарная цена
    let Price = 0;
    for (I = 0; I != arr.length; I++){
        Price += arr[I];
    }
    return Price;
}
// 2 и 3 задания