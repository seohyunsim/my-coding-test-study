const solution = (absolutes, signs) => {
  for (let i = 0; i < absolutes.length; i++) {
    signs[i] ? absolutes[i] : (absolutes[i] = -absolutes[i]);
  }
  return absolutes.reduce((a, b) => a + b);
};
