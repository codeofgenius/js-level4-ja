// entriesメソッド
const title = 'アリスの冒険';
const price = 1200;
const author = 'アリス';
const genre = '小説';

const book = { title, price, author, genre };

// オブジェクトのキーと値を2次元配列で取得
const pairs = Object.entries(book);
console.log(pairs);

console.log('===');

// mapメソッドでキーと値を表示
pairs.map(([key, value]) => console.log(`${key} ==> ${value}`));
