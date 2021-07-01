// let fs = require('fs');
let input = "55-50-40";
let minus = input[0].split("-");
let result = [];
let cnt = 0;
let plus;

for (let i = 0; i < minus.length; i++) {
    plus = minus[1].split("+");
    for (let j = 0; j < plus.length; j++) {
        cnt += parseInt(j);
    }
    result.push(cnt);
}


for (let k = 0; k < result.length; k++) {
    result -= result[k]
}

console.log(result);
