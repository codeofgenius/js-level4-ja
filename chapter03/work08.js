// オブジェクトの分割代入
const book = {
    title: 'アリスの冒険',
    price: 1200,
    author: 'アリス',
    genre: 'SF小説',
};

// 分割代入
const { title, price } = book;
console.log(title); // アリスの冒険
console.log(price); // 1200
