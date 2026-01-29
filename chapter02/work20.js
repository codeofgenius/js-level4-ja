/*
ワーク20_練習問題

以下のように、配列fruitsが定義されています。

mapメソッドとtoUpperCaseメソッドを利用して、
配列fruitsの要素を大文字に変換した配列を
作成してください。実行結果のように表示する
処理を作成してください。

実行結果
[ 'APPLE', 'ORANGE', 'MELON', 'BANANA' ]
*/

const fruits = ['Apple', 'orAnGe', 'mElOn', 'bAnAnA'];

const result = fruits.map((e) => e.toUpperCase());
console.log(result);
