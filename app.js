/* Data types and Varibales */


let str = 'David'
console.log(str[str.length - 1])


console.log('Hello World' [10])
console.log('12345'.length)

console.log(str[5 - 1])

let fullName = 'Ashtyn Nieves'

let isRaining = true 
let temperature = 20
let planet = 'Earth'

temperature = temperature + 2

console.log(temperature)


/* Converting Temperatures Practice 
* Celsius-to Fahrenheit formula:
*
* F = C * 1.8 + 32 
*/

let celsius = 10;
let fahrenheit = celsius * 1.8 + 32;

console.log(fahrenheit);

/*let bool = '1' == 1
console.log(bool)
*/
let bool = '1' === 1
console.log(bool)


/*Conditionals*/


let loggedIn = false
let subscribed = false

if (loggedIn === false) {
    console.log('tell user to login')
}
else if (subscribed === false) {
    console.log('tell the user to upgrade their subscription')
}
else {
    console.log('show the video')
}



let cash = 55
let price = 80
let difference = cash - price

if (cash > price) {
    console.log (`you paid extra - here's ${difference} dollars change`)
}

else if (cash === price) {
    console.log ("you paid the exact amount, have a nice day!")
}

else {
    console.log(`not enough money - you still owe ${difference * -1} dollars`)
}