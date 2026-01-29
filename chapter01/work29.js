/*
ワーク29_練習問題

以下のように、配列numbersが定義されています。

filterメソッドを利用して、配列numbersから3の倍数の
要素を抽出した配列を作成してください。結果として、
実行結果のように表示する処理を作成してください。

実行結果
[ 6, 12 ]
*/

const numbers = [2, 6, 8, 12];

const result = numbers.filter((e) => e % 3 === 0);
console.log(result);
