// keysメソッド
const title = 'アリスの冒険';
const price = 1200;
const author = 'アリス';
const genre = '小説';
const book = { title, price, author, genre };

// オブジェクトのプロパティ（キー）を配列で取得
const keys = Object.keys(book);
console.log(keys);

console.log('===');

// mapメソッドで各キーを表示
keys.map((e) => console.log(e));
