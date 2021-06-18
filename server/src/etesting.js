const palindrome = (string) => {
    const arrayString = string.split('');
    arrayString.reverse();
    const newString = arrayString.join('');
    return newString;
}

const average = (array) => {
    let suma = 0;

    array.forEach(element => {
        suma += element;
    });

    const average = suma/array.length;

    return average;
}

const multiply = (a, b) => {
    let result = 0;

    const positve = Math.abs(a) == a;

    for (let index = 0; index < Math.abs(a); index++) {
        result = positve ? result += b : result -= b
    }

    return result;
}

const getBiggest = (array) => {
    const biggestNumber = Math.max(...array);
    return biggestNumber;
}

const numbers = [10, -4, 21, 34, 5, 48, -12];

console.log(getBiggest(numbers));


const clean = (array) => {
    const arrayCleaned = array.reduce((acc, el) => {
        if (el) {
            acc.push(el)
        }
        return acc;
    }, []);
    return arrayCleaned;
}

console.log(clean([1, undefined, null, 0, 6, 10, 2]))

const wordRepeated = (string) => {
    const lowerString = string.toLowerCase();
    const splitted = lowerString.split(' ');

    const amountRepeated = splitted.reduce((acc, el) => {
        if (acc[el]) {
            acc[el]++ 
        } else {
            acc[el] = 1;
        }

        return acc;
    }, {});

    return amountRepeated;
}

console.log(wordRepeated('Hola mundo como estan? como que no se ven bien ehh!!'))