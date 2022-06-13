const ukraine = { tax: 0.195, middleSalary: 1789, vacancies: 11476 };

const latvia = { tax: 0.25, middleSalary: 1586, vacancies: 3921 };

const litva = { tax: 0.15, middleSalary: 1509, vacancies: 1114 };


function getMyTaxes(salary) {
  return Math.round(this.tax * salary);
}
console.log(`getMyTaxes: ${getMyTaxes.call(ukraine, 10000)}`);


function getMiddleTaxes() {
  return (this.tax * this.middleSalary).toFixed(2);
}
console.log(`getMiddleTaxes: ${getMiddleTaxes.call(ukraine)}`);

function getTotalTaxes() {
  return (this.tax * this.middleSalary * this.vacancies).toFixed(2);
}
console.log(`getTotalTaxes: ${getTotalTaxes.call(ukraine)}`);


function getMySalary(country) {  
  const salary = Math.round(Math.random() * (2000 - 1500) + 1500);
  const taxes = Math.round(country.tax * salary);
  const profit = Math.round(salary - taxes);
  const obj = {
    salary: salary,
    taxes: taxes,
    profit: profit
  }
  console.log(obj);
}
setInterval(getMySalary, 10000, ukraine);
