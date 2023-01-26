// homework
// cardnumber

function getCardNumber(str) {
    if (str.length === 16  && !isNaN(Number(str))) {
        let piece = str.slice(4, 12);
        let result = str.replace(piece, ' **** **** ');
        console.log(result);
        if (str.startsWith('9860')) {
            console.log('Bu humo');
        } else if (str.startsWith('8600')) {
            console.log('Bu uzkard');
        }else{
            console.log("Aniqlanmadi")
        }
    } else {
        console.log('Karta aniqlanmadi!');
    }
}

getCardNumber("9860123456789921")

// repeat-function

function repeat(str, num){
    return str.repeat(num)
}

console.log(repeat('Open web', 5));

//function-toUpperCase-toLowerCase

function checkFirstLetter(str){
    return `${str.slice(0, 1).toUpperCase()}${str.slice(1).toLowerCase()}`
}

console.log(checkFirstLetter('bilol'));