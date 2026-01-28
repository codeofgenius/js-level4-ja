// 2017年5月20日
let date = new Date(2017, 4, 20);

// xxxx年xx月xx日で表示
let text = "";
text += date.getFullYear() + "年";
text += date.getMonth() + 1 + "月";
text += date.getDate() + "日";

console.log(text);
