// helloWorld function 
const helloWorld = function() {
    return "Hello, World!";
}

const sayHello = str => {
    if (str === true || str === false) {
        return 'Hello, World!';
    } else if (!isNaN(str)) {
        return false
    }
   return 'Hello, ' + str + '!';
}

const isFive = input => input === 5;

const isEven = input => !isNaN(parseFloat(input)) ? input % 2 === 0 : false;

const isVowel = input => {
    let vowels = 'aeiou'
    return typeof input === 'string' ? vowels.includes(input.toLowerCase()) : false;
}

const add = (input1, input2) => Number(input1) + Number(input2);

console.log(add('banana', 'split'));


