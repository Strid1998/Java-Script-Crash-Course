/* Data types and Varibales */


// let str = 'David'
//console.log(str[str.length - 1])


console.log('Hello World' [10])
console.log('12345'.length)

//console.log(str[5 - 1])

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


/*
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


&& checks if both the right and the left sides are true
|| checks if the left or right side of the comparison is true 

*/


//let cash = 50
//let price = 40
//let isStoreOpen = false

//if (cash >= price  || isStoreOpen === true) {
    console.log('print the receipt')
//}

//else {
    console.log("falsy value")
//}

let hot = false

hot ? console.log('weather is hot outside') : console.log('weather is cold')

let subscribedd = false
let loggedInn = true

let str = subscribedd || loggedInn ? 'show the video' : 'hide the video'
console.log(str);


let cash = 30 
let price = 40
let isStoreOpen = true

if (cash>=price && isStoreOpen === true) {
    console.log('give receipt')
}

else if (cash<price && isStoreOpen === true) {
    console.log('do not give receipt')
}

else {
    console.log('please return during business hours')
}
