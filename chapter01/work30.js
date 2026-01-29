/*
ワーク30_練習問題

以下のように、配列numbersが定義されています。

reduceメソッドを利用して、配列numbersの要素の
合計を計算してください。結果として、
実行結果のように表示する処理を作成してください。

実行結果
28
*/

const numbers = [2, 6, 8, 12];

const result = numbers.reduce((e, prev) => prev + e, 0);
console.log(result);
