/*
ワーク03_最終問題

以下のように、文字列textが定義されています。

splitメソッド、mapメソッド、toLowerCaseメソッドを
利用して、文字列textを「/」で区切った配列を作成して、
かつ、配列のそれぞれの要素を小文字に変換した配列を
作成してください。結果として、実行結果のように
表示する処理を作成してください。

実行結果
[ 'soccer', 'tennis', 'golf', 'running' ]
*/

const text = 'SOCCER/TENNIS/GOLF/RUNNING';

const result = text.split('/').map((e) => e.toLowerCase());
console.log(result);
