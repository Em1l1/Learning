const moneyBox = (coins) => {
  var saveCoins = 5;
  saveCoins += coins;
  console.log(`MoneyBox: $${saveCoins}`);

}

moneyBox(5);
moneyBox(15);

// Closure
const moneyBoxx = () => {
  debugger
  var saveCoinss = 0;
  const countCoins = (coins) => {
    debugger
    saveCoinss += coins;
    console.log(`MoneyBox: $${saveCoinss}`);
  }
  return countCoins;
};

let myMoneyBox = moneyBoxx();
myMoneyBox(2);
myMoneyBox(13);
myMoneyBox(40);