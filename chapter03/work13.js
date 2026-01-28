// valuesメソッド
const title = 'アリスの冒険';
const price = 1200;
const author = 'アリス';
const genre = '小説';

const book = { title, price, author, genre };

// オブジェクトの値を配列で取得
const values = Object.values(book);
console.log(values);

console.log('===');

// mapメソッドで各値を表示
values.map((e) => console.log(e));
