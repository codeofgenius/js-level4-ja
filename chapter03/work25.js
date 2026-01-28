/*
ワーク25_練習問題

以下のようにオブジェクトplayerが定義されています。

Object.entriesメソッドとmap処理を利用して、オブジェクトの
キーと値を取得して、実行結果のように表示する処理を作成してください。

実行結果
name ==> Tom
job ==> Hero
hp ==> 20
mp ==> 30
*/

const player = {
    name: 'Tom',
    job: 'Hero',
    hp: 20,
    mp: 30,
};

Object.entries(player).map(([key, value]) => {
    console.log(`${key} ==> ${value}`);
});
