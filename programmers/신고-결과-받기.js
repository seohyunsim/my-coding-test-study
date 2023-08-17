function solution(id_list, report, k) {
  const reportObj = {};
  const repo = [...new Set(report)];
  const repo2 = [];
  const answer = [];
  const recipients = [];

  for (let el of repo) {
    const [key, value] = el.split(" ");

    if (reportObj[value]) reportObj[value]++;
    else reportObj[value] = 1;
  }

  for (let key in reportObj) {
    const value = reportObj[key];

    if (value >= k) {
      repo2.push(key);
    }
  }

  for (let el of repo) {
    const [key, value] = el.split(" ");

    for (let i = 0; i < repo2.length; i++) {
      if (value === repo2[i]) {
        recipients.push(key);
      }
    }
  }

  for (let i = 0; i < id_list.length; i++) {
    let sum = 0;
    for (let j = 0; j < recipients.length; j++) {
      if (id_list[i] === recipients[j]) {
        sum++;
      }
    }
    answer.push(sum);
  }

  return answer;
}
