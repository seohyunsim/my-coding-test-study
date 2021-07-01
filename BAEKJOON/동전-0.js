let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
let info = input[0].split(' ');
let n = info[0];
let k = info[1];
let moneyArr = [];
let cnt = 0;
let answer = 0;

for (let i = 1; i < input.length; i++) {
    moneyArr.push(input[i]);
    moneyArr.sort((a, b) => b - a);
}

for (let j = 0; j < n; j++) {
    cnt = Math.floor(k / moneyArr[j]);
    k -= cnt * moneyArr[j];
    answer += cnt;
}

console.log(answer);



