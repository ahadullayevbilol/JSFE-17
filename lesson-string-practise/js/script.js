function checkStr(str) {
    let arr = ['a', 'e', 'i', 'o', 'u']
    let result = '';

    for (let i = 0; i < str.length; i++) {

        arr.includes(str[i]) ? result += '*' : result += str[i]

    }
    return result
}
console.log(checkStr('Hello from Javascript'));