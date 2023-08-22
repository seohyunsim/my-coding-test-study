var StockSpanner = function () {
  this.price = [];
};

// /**
//  * @param {number} price
//  * @return {number}
//  */
StockSpanner.prototype.next = function (price) {
  let sum = 0;
  this.price.push(price);

  const priceIdx = this.price.length - 1;

  if (this.price[priceIdx] >= this.price[priceIdx - 1]) {
    for (let i = priceIdx; i > -1; i--) {
      if (priceIdx === 1) sum++;
      else if (this.price[i] > price) {
        sum = priceIdx - i;
        break;
      } else sum++;
    }
  } else sum = 1;

  return sum;
};

/**
 * Your StockSpanner object will be instantiated and called as such:
 * var obj = new StockSpanner()
 * var param_1 = obj.next(price)
 */
