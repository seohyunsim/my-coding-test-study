const solution = (a, b) =>  {
  const week = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  const year = new Date(2016, a - 1, b);

  return week[year.getDay()];
}
