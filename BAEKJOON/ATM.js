let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
let n = input[0];
let members = input[1].split(" ");
let answer = 0;

members.sort((a, b) => a - b);

for (let i = 0; i < members.length; i++) {
    answer += members[i] * (n - i);
}

console.log(answer);

