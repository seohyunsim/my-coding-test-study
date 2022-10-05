function solution(nums) {
  const newArr = nums.filter((item, idx) => nums.indexOf(item) === idx);
  const halfNums = nums.length / 2;
  const phoneNums = newArr.length;

  if (halfNums < phoneNums) return halfNums;
  else return phoneNums;
}
