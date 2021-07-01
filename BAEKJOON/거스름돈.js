const money = parseInt(require("fs").readFileSync("/dev/stdin").toString());
const coin = [500, 100, 50, 10, 5, 1];
let result = 1000 - money;
let count = 0;
let answer = 0;

for (let i = 0; i < coin.length; i++) {
    count = Math.floor(result / coin[i]);
    result -= count * coin[i]; 
    answer += count;
}

console.log(answer);
