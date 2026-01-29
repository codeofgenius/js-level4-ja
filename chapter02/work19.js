/*
ワーク19_練習問題

以下のように、配列fruitsが定義されています。

mapメソッドとtoLowerCaseメソッドを利用して、
配列fruitsの要素を小文字に変換した配列を
作成してください。実行結果のように表示する
処理を作成してください。

実行結果
[ 'apple', 'orange', 'melon', 'banana' ]
*/

const fruits = ['Apple', 'orAnGe', 'mElOn', 'bAnAnA'];

const result = fruits.map((e) => e.toLowerCase());
console.log(result);
