const intNumbers = [1, 2, 3, 4, 5]

function soma(x, y) {
    return x + y
}

function addNoOutroArray(x, y) {

    console.log(x)
    x.push(y * 3)
    x.push(y * 4)
    return x

}

console.log(intNumbers.reduce((x, y) => x + y))
console.log(intNumbers.reduce(addNoOutroArray, [58]))