function solution(wallpaper) {
  const answer = [];
  const x = [];
  const y = [];

  for (let i = 0; i < wallpaper.length; i++) {
    if (wallpaper[i].includes("#")) {
      for (let j = 0; j < wallpaper[i].length; j++) {
        if (wallpaper[i][j] === "#") {
          x.push(j);
          y.push(i);
        }
      }
    }
  }
  x.sort((a, b) => a - b);
  y.sort((a, b) => a - b);

  answer.push(y[0]);
  answer.push(x[0]);
  answer.push(y[y.length - 1] + 1);
  answer.push(x[x.length - 1] + 1);

  return answer;
}
