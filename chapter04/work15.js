/*
ワーク15_練習問題

以下のようにMapオブジェクトpersonMapが定義されています。

MapオブジェクトpersonMapとforEachメソッドを利用して、
実行結果のように表示する処理を作成してください。

実行結果
name ==> Bob
age ==> 17
hobby ==> piano
*/

const personMap = new Map();
personMap.set('name', 'Bob');
personMap.set('age', 17);
personMap.set('hobby', 'piano');

personMap.forEach((value, key) => {
    console.log(`${key} ==> ${value}`);
});
