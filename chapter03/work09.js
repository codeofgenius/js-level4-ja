// オブジェクトの分割代入と残りの値
const book = {
    title: 'アリスの冒険',
    price: 1200,
    author: 'アリス',
    genre: 'SF小説',
};

// 分割代入と残りの値
const { title, price, ...others } = book;
console.log(title); // アリスの冒険
console.log(price); // 1200
console.log(others); // { author: 'アリス', genre: 'SF小説' }
