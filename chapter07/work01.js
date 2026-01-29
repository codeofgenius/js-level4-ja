/*
ワーク01_最終問題

以下のように、配列numbersが定義されています。

mapメソッドとMath.powを利用して、配列numbersの各要素を
3乗した配列を作成してください。結果として、
実行結果のように表示する処理を作成してください。

実行結果
[ 8, 27, 125, 216 ]
*/

const numbers = [2, 3, 5, 6];

const result = numbers.map((e) => Math.pow(e, 3));
console.log(result);
