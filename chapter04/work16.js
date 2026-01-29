/*
ワーク16_練習問題

以下のようにMapオブジェクトplayerMapが定義されています。

MapオブジェクトplayerMapとfor-of文を利用して、
実行結果のように表示する処理を作成してください。

実行結果
name is Alice
job is Magician
hp is 20
mp is 42
*/

const playerMap = new Map();
playerMap.set('name', 'Alice');
playerMap.set('job', 'Magician');
playerMap.set('hp', 20);
playerMap.set('mp', 42);

for (const [key, value] of playerMap) {
    console.log(`${key} is ${value}`);
}
