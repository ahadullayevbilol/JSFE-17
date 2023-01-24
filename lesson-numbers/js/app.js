// Homework

// pow

function pow(num, n) {
    return num ** n
}

console.log(pow(5, 2));


// round

function round(n) {
	return n.toFixed(0)
}

console.log(round(4.9));

// floor

function floor(floor) {
    let num2 = String(floor);
    num2 = num2.split('');
    console.log(+num2[0]);
}

floor(5.6);

//ceil 

function ceil(ceil) {
    let num3 = String(ceil);
    num3 = num3.split('.');
    console.log(+num3[0] + 1);
}

ceil(5.1);

// sqrt 

function sqrt(x) {
    console.log(x ** 0.5);
}

sqrt(4)

// abs 

function abs(x){
    if(x < 0) {
        return x * -1
    }else {
        return x
    }
}

console.log(abs(-7));

// trunc

function trunc(x){
    return Math.floor(x)
}

console.log(trunc(2.189179087));