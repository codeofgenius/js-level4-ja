/*
ワーク19_練習問題

以下のようにSetオブジェクトn1とn2が定義されています。

Setオブジェクトn1とn2の対称差となるSetオブジェクトを
作成してください。
実行結果のように表示する処理を作成してください。

実行結果
Set(3) { 'USA', 'Japan', 'Italy' }
*/

const n1 = new Set(['USA', 'Spain', 'Japan', 'Canada']);
const n2 = new Set(['Italy', 'Canada', 'Spain']);

const result = n1.symmetricDifference(n2);
console.log(result);
