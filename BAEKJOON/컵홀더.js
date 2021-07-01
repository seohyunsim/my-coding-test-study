let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
let n = input[0];
let seat = input[1];
let cnt = 1;

for (let i = 0; i < seat.length; i++) {
    if (seat[i] === "S") {
        cnt ++;
    }
    else if (seat[i] === "L") {
        cnt += 0.5;
    }
}

if (cnt >= n) {
    console.log(n);
}
else console.log(cnt);