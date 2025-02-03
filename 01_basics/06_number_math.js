// const num = 150000.544;
// console.log(num.toString())
// console.log(num.toFixed(2))//rounds off and gives only speecified no of digits after decimal point
// console.log(num.toLocaleString())//150,000.544

// const a = 149.4615;
// console.log(a.toPrecision(2));

// console.log(a.toPrecision(4));
// console.log(a.toPrecision(5));
// console.log(a.toPrecision(6))

// If toPrecision(n) has n < number of digits before the decimal point, it converts the number into scientific notation.
// If n >= total digits before and after the decimal point, it keeps the number in normal notation.
/*ex:169.46 precision(1) meaning take 1 digit from it and next we have 6 so round it to 2 we have total of 3 digits 
i.e 10^2 so 2e+2(2*10^2)
*/
/*
ex:149.234 precision(1) we get 1e+2
ex:144.34 precison(2) we get 14e+1 (as after 4 we have 4 i.e 44 can be rounded to 40)
ex:145.34 precison(2) we get 15e+1(as after 5 we have  i.e 45 can be rounded to 50)
*/

// const n = 2.45;
// console.log(Math.floor(n));
// console.log(Math.ceil(2.01));//just goes to its upper limit if decimal isnt all 0s
// console.log(Math.round(n))//2 as it rounds down/up to its nearest number
// console.log(Math.round(2.51));//3
// console.log(Math.abs(5-9));
// console.log(Math.min(2,3,-1))
// const arr = [69,2,0,-69,1]
// console.log(Math.min(...arr))//dont use this for large arrays
// console.log(Math.max(...arr));

console.log(Math.random());//we get values from 0.
const num = 0.16
console.log(num.toFixed(1))