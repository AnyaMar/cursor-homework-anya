let milkPrice = 15.678;
let teaPrice = 123.965;
let yogurtPrice = 90.2345;

const MAX_PRICE = Math.max(milkPrice, teaPrice, yogurtPrice);
console.log(MAX_PRICE);

const MIN_PRICE = Math.min(milkPrice, teaPrice, yogurtPrice);
console.log(MIN_PRICE);

let sum = milkPrice + teaPrice + yogurtPrice;
console.log(sum);

const NEW_MILK_PRICE = Math.floor(milkPrice);
const NEW_TEA_PRICE  = Math.floor(teaPrice);
const NEW_YOGURT_PRICE = Math.floor(yogurtPrice);

const NEW_SUM = NEW_MILK_PRICE + NEW_TEA_PRICE + NEW_YOGURT_PRICE;
console.log(NEW_SUM);

const SUM_ROUNDED_TO_HUNDREDS = Math.round(sum/100) * 100;
console.log(SUM_ROUNDED_TO_HUNDREDS); 

const EVEN = (NEW_SUM % 2 === 0);
console.log(`${EVEN} парне число`);

const REST = 500 - sum;
console.log(REST);

const averageNumber = (sum / 3).toFixed(2);
console.log(averageNumber);


let discount = Math.round(Math.random() * (90 - 10) + 10);


const sumWithDiscount = sum -(sum/100 * discount);
console.log(`${sumWithDiscount.toFixed(2)} сума до сплати з випадковою знижкою`);


let netProfit;
const cost = Math.floor(sumWithDiscount) / 2;
netProfit = cost - Math.round(Math.floor(sumWithDiscount)/100 * discount);
console.log(`${netProfit} це чистий прибуток`);



console.log(`Максимальна ціна: ${MAX_PRICE}
Мінімальна ціна: ${MIN_PRICE}
Вартість усіх товарів: ${sum}
Вартість усіх товарів, округлена в меншу сторону з відкиданням копійок ${NEW_SUM} 
Вартість усіх товарів, округлена до сотень: ${SUM_ROUNDED_TO_HUNDREDS}
Чи парне число: ${EVEN}
Cума решти, при оплаті всіх товарів (без округлення), якщо клієнт платить 500 грн: ${REST}
Cереднє значення цін, округлене до другого знаку після коми: ${averageNumber}
Випадкова знижка: ${discount}
Сума до сплати з випадковою знижкою: ${sumWithDiscount.toFixed(2)}
Чистий прибуток: ${netProfit}`);

