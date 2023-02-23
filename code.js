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