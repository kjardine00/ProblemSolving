

aNumber = (input) => {
    if (!isNaN(input)) {
        return true;
    } else { 
        return false;
    }
}

output = aNumber('1asdf23');

console.log(output)