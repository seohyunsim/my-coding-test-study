function solution(board, moves) {
  const stack = [];
  let answer = 0;

  for (let col of moves) {
    for (let row = 0; row < board.length; row++) {
      const doll = board[row][col - 1];

      if (doll === 0) continue;
      else if (doll !== 0) {
        stack.push(doll);
        board[row][col - 1] = 0;
        row++;

        stack.forEach((el, idx) => {
          if (el === stack[idx + 1]) {
            stack.pop();
            stack.pop();
            answer += 2;
          }
        });
        break;
      }
    }
  }
  return answer;
}
