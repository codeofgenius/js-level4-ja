/*
ワーク05_最終問題

以下のようにオブジェクトscoresが定義されています。

Object.entriesメソッド、mapメソッド、toUpperCaseメソッド、
Math.roundメソッドを利用して、オブジェクトのキーを大文字、
オブジェクトの値を四捨五入して、実行結果のように表示する
処理を作成してください。

実行結果
TOKYO ==> 32
LONDON ==> 30
MADRID ==> 36
ROME ==> 31
*/

const scores = {
    tokyo: 32.13,
    london: 29.61,
    madrid: 35.52,
    rome: 30.91,
};

Object.entries(scores).map(([key, value]) => {
    console.log(`${key.toUpperCase()} ==> ${Math.round(value)}`);
});
