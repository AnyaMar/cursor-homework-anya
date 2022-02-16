let milkPrice = 15.678;
let teaPrice = 123.965;
let yogurtPrice = 90.2345;

let maxPrice = Math.max(milkPrice, teaPrice, yogurtPrice);
console.log(maxPrice);

let minPrice = Math.min(milkPrice, teaPrice, yogurtPrice);
console.log(minPrice);

let sum = milkPrice + teaPrice + yogurtPrice;
console.log(sum);

let newMilkPrice = Math.floor(milkPrice);
let newTeaPrice  = Math.floor(teaPrice);
let newYogurtPrice = Math.floor(yogurtPrice);

let newSum = newMilkPrice + newTeaPrice + newYogurtPrice;
console.log(newSum);

let sumRoundedToHundreds = Math.round(sum/100) * 100;
console.log(sumRoundedToHundreds); 

let even = (newSum % 2 === 0);
console.log(`${even} парне число`);

let rest = 500 - sum;
console.log(rest);

const averageNumber = (sum / 3).toFixed(2);
console.log(averageNumber);


let discount = Math.round(Math.random() * (90 - 10) + 10);


let sumWithDiscount = sum -(sum/100 * discount);
console.log(`${sumWithDiscount.toFixed(2)} сума до сплати з випадковою знижкою`);


let netProfit;
let cost = Math.floor(sumWithDiscount) / 2;
netProfit = cost - Math.round(Math.floor(sumWithDiscount)/100 * discount);
console.log(`${netProfit} це чистий прибуток`);



console.log(`Максимальна ціна: ${maxPrice}
Мінімальна ціна: ${minPrice}
Вартість усіх товарів: ${sum}
Вартість усіх товарів, округлена в меншу сторону з відкиданням копійок ${newSum} 
Вартість усіх товарів, округлена до сотень: ${sumRoundedToHundreds}
Чи парне число: ${even}
Cума решти, при оплаті всіх товарів (без округлення), якщо клієнт платить 500 грн: ${rest}
Cереднє значення цін, округлене до другого знаку після коми: ${averageNumber}
Випадкова знижка: ${discount}
Сума до сплати з випадковою знижкою: ${sumWithDiscount.toFixed(2)}
Чистий прибуток: ${netProfit}`);

