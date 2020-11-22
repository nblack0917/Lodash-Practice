var _ = require("lodash");
// import _ from 'lodash'

let newString = "This is my string. There are many like it, but this one is mine."
let newNum =  25.2345
const newArr = [1,2,3,4,5,6,2];
let arrObj = [
    {
        'number': 1,
        'value': true
    },
    {
        'number': 2,
        'value': true
    },
    {
        'number': -4,
        'value': false
    },
    {
        'number': 2,
        'value': true
    },
];
let newObj = {
    firstName: "Frank",
    lastName: "Grey",
    age: 41,
    dob: "12/02/1979",
    callName: function() {
        console.log(`My name is ${this.firstName} ${this.lastName}. `)
    }
};


console.log(newObj.callName())
console.log("Chuncked Array: ", _.chunk(newArr, 2)) 
console.log("Reversed Array: ", _.reverse(newArr)) 
console.log("Array without '3': ", _.without(newArr, 3)) 
console.log("Shuffled Array: ", _.shuffle(newArr)) 
console.log("Take While Array: ", _.takeWhile(arrObj, function(x) { return x.value; }))
console.log("Uniq Array: ", _.uniq(newArr))
console.log("Max Value: ", _.max(newArr))
console.log("Safe Integer: ", _.toSafeInteger(newNum))
console.log("Rounded Number: ", _.round(newNum))
console.log("Random Number: ", _.random(0, 20))
console.log("At object: ", _.at(newObj, ['firstName']))
console.log("Snake Case: ", _.snakeCase(newString))
console.log("Snake Case: ", _.truncate(newString, {
    'length': 40,
    'separator': ' '
    }))
console.log("Snake Case: ", _.truncate(newString, {
    'length': 48,
    'separator': /,? +/
    }))
