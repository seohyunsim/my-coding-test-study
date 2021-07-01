const btn = [300, 60, 10];
const answer = [];
let time = parseInt(require("fs").readFileSync("/dev/stdin").toString());
let count = 0;


for (let i = 0; i < btn.length; i++) {
    if (time % 10 === 0) {
        count = Math.floor(time / btn[i]);
        answer.push(count);
        time -= count * btn[i];
    }
    else {
        console.log(-1);
        break;
    }
}

console.log(answer.join(' '));

