1.// დაწერეთ ფუნქცია, რომელიც პარამეტრად მიიღებს ერთ მთელ რიცხვს და დააბრუნებს true -ს თუ რიცხვი  არის 3ის ჯერადი , ხოლო თუ არაა მაშნ false-ს
function isMultipleOfThree(number) {
  return number % 3 === 0;
  }
  console.log(isMultipleOfThree(9)); 
  console.log(isMultipleOfThree(7));


2.//დაწერეთ ფუნქცია, getCurrencySymbolFromCode რომელიც პარამეტრად მიიღებს ვალუტის კოდს (USD ან EUR ან GEL) სტრინგის სახით და დააბრუნებს ამ კოდის შესაბამის სიმბოლოს ($, €, ლ) თუ ისეთი კოდს გადავცემ რომლის სიმბოლოც არ მაქვს დააბრუნოს კოდი.
function getCurrencySymbolFromCode(currencyCode) {
  switch (currencyCode) {
    case 'USD':
      return '$';
    case 'EUR':
      return '€';
    case 'GEL':
      return '₾';
    default:
      return 'Unknown'; 
  }
}
console.log(getCurrencySymbolFromCode('USD')); 
console.log(getCurrencySymbolFromCode('EUR')); 
console.log(getCurrencySymbolFromCode('GEL')); 
console.log(getCurrencySymbolFromCode('XYZ'));

3.//დაწერეთ ფუნქცია, რომელიც მიიღებს lowerCase სტრინგს მაგ (my name is joe) და დააბრუნებს UpperCase (MY NAME IS JOE) სტრინგს.
function convertToUpperCase(inputString) {
  return inputString.toUpperCase();
}
const lowerCaseString = 'my name is joe';
const upperCaseString = convertToUpperCase(lowerCaseString);

console.log(upperCaseString);

4.// დაწერეთ ფუნქცია, რომელიც არგუმენტად მიიღებს გასაყიდ და ასაღებ ფასს, დათვლის მოგებას  და დააბრუნებს გასაყიდი ფასის რა პროცენტს შეადგენს მოგება.
function calculateProfitPercentage(bidPrice, askPrice) {
  const profit = askPrice - bidPrice;
  const salePrice = askPrice;
  const profitPercentage = (profit / salePrice) * 100;
  return profitPercentage.toFixed(2); 
}
const bid = 80; 
const ask = 100;

const profitPercentage = calculateProfitPercentage(bid, ask);
console.log(`Profit Percentage: ${profitPercentage}%`);


5.// დაწერეთ ფუნქცია, რომელიც მიიღებს რიცხვების მასივს და დააბრუნებს გაფილტრულ მასივს .filter სადაც მხოლოდ ლუწი რიცხვები იქნება.
function filterEvenNumbers(numbersArray) {
  return numbersArray.filter(number => number % 2 === 0);
}
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const filteredEvenNumbers = filterEvenNumbers(numbers);

console.log(filteredEvenNumbers);

6.// დაწერეთ ფუნქცია, რომელიც მიიღებს ობიექტების მასივს (ობიექტს უნდა ქონდეს ველი name) და მეორე პარამეტრად მიიღებს სტრინგს და ამ მასივში .find ით მოვძებნოთ ობიექტის name === ფუნქციის მეორე პარამეტრს და დავაბრუნოთ ნაპოვნი ობიექტი.
function findObjectByName(objectsArray, nameToFind) {
  return objectsArray.find(obj => obj.name === nameToFind);
}
const arrayOfObjects = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 30 },
  { name: 'Charlie', age: 22 }
];
const foundObject = findObjectByName(arrayOfObjects, 'Bob');
console.log(foundObject);



    