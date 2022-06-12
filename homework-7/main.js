const ukraine = { tax: 0.195, middleSalary: 1789, vacancies: 11476 };

const latvia = { tax: 0.25, middleSalary: 1586, vacancies: 3921 };

const litva = { tax: 0.15, middleSalary: 1509, vacancies: 1114 };


function getMyTaxes(salary) {
  return Math.round(this.tax * salary);
}
console.log(getMyTaxes.call(ukraine, 10000));


function getMiddleTaxes() {
  return Math.round(this.tax * this.middleSalary);
}
console.log(getMiddleTaxes.call(ukraine));

function getTotalTaxes() {
  return Math.ceil(this.tax * this.middleSalary * this.vacancies);
}
console.log(getTotalTaxes.call(ukraine));


function getMySalary(country) {
  const obj = {};
  
  let salary = Math.round(Math.random() * (2000 - 1500 + 1));
  obj['salary'] = salary;
  let taxes = Math.round(country.tax * salary);
  obj['taxes'] = taxes;
  let profit = Math.round(salary - taxes);
  obj['profit'] = profit;
  console.log(obj);
}
setInterval(getMySalary, 10000, ukraine);
