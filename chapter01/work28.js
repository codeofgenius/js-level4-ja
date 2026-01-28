/*
ワーク28_練習問題
以下のように、配列numbersが定義されています。

mapメソッドを利用して、配列numbersの各要素を
3倍にした配列を作成してください。結果として、
実行結果のように表示する処理を作成してください。

実行結果
[ 6, 18, 24, 36 ]
*/

const numbers = [2, 6, 8, 12];

const result = numbers.map((e) => e * 3);
console.log(result);
