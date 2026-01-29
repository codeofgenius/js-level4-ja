/*
ワーク17_練習問題

以下のようにSetオブジェクトn1とn2が定義されています。

Setオブジェクトn1とn2の和集合となるSetオブジェクトを
作成してください。
実行結果のように表示する処理を作成してください。

実行結果
Set(5) { 'USA', 'Spain', 'Japan', 'Canada', 'Italy' }
*/

const n1 = new Set(['USA', 'Spain', 'Japan', 'Canada']);
const n2 = new Set(['Italy', 'Canada', 'Spain']);

const result = n1.union(n2);
console.log(result);
