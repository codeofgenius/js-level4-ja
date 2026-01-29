/*
ワーク10_最終問題

以下のように、数値を保持する配列numsがあります。

mapメソッドとMath.floorを利用して、配列numsのそれぞれの
要素の小数を切り捨てた配列を作成してください。
実行結果のように表示する処理を作成してください。

実行結果
[ 1, 2, 1, 3, 5 ]
*/

const nums = [1.32, 2.67, 1.51, 3.35, 5.19];

const result = nums.map((e) => Math.floor(e));
console.log(result);
