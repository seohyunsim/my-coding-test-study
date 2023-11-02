function solution(money) {
  const n = money.length;
  const dp1 = Array(n).fill(0);
  const dp2 = Array(n).fill(0);

  dp1[0] = money[0];
  dp1[1] = money[0];
  dp2[1] = money[1];

  for (let i = 2; i < n; i++) {
    // 첫 집을 방문했을 때
    if (i !== n - 1) {
      dp1[i] = Math.max(dp1[i - 1], dp1[i - 2] + money[i]);
    } else {
      dp1[i] = dp1[i - 1];
    }

    // 첫 집을 방문하지 않았을 때
    dp2[i] = Math.max(dp2[i - 1], dp2[i - 2] + money[i]);
  }

  console.log(dp1, dp2);

  return Math.max(dp1[n - 1], dp2[n - 1]);
}
