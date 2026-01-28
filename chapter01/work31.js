/*
ワーク31_練習問題
以下のように、配列fruitsが定義されています。

findメソッドを利用して、配列fruitsの要素に
「orange」が含まれているかを検索してください。
実行結果のように表示する処理を作成してください。

実行結果
orange
*/

const fruits = ['apple', 'orange', 'melon'];

const result = fruits.find((e) => e === 'orange');
console.log(result);
