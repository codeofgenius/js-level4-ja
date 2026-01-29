/*
ワーク10_練習問題

以下のように、2018年12月25日を表すDateオブジェクトdateが
あります。

DateオブジェクトdateとtoLocaleDateStringメソッドを利用して、
日本語の文字列表記で表示する処理を作成してください。
実行結果のように表示する処理を作成してください。

日本語のロケール（言語指定）は「ja-JP」です。

実行結果
2018/12/25
*/

const date = new Date(2018, 11, 25);
console.log(date.toLocaleDateString('ja-JP'));
