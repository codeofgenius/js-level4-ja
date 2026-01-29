// 年月日で文字列を構成する
// 2017年5月20日のDateオブジェクト
const date = new Date(2017, 4, 20);

// xxxx年xx月xx日で表示
let dateText = '';
dateText += date.getFullYear() + '年';
dateText += date.getMonth() + 1 + '月';
dateText += date.getDate() + '日';

console.log(dateText);
