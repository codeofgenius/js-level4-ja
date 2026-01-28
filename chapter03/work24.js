/*
ワーク24_練習問題

以下のようにオブジェクトplayerが定義されています。

Object.valuesメソッドとmap処理を利用して、オブジェクトの
値を取得して、実行結果のように表示する処理を作成してください。

実行結果
Tom
Hero
20
30
*/

const player = {
    name: 'Tom',
    job: 'Hero',
    hp: 20,
    mp: 30,
};

Object.values(player).map((e) => console.log(e));
