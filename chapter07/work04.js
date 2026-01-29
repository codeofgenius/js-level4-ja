/*
ワーク04_最終問題

以下のように、文字列textが定義されています。

replaceメソッドを利用して、文字列textの
「You」を「I」に、「sushi」を「pizza」に
変換した文字列を作成してください。

結果として、実行結果のように表示する処理を
作成してください。

実行結果
I love pizza
*/

const text = 'You love sushi';

const result = text.replace('You', 'I').replace('sushi', 'pizza');
console.log(result);
