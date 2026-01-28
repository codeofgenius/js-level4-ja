// substringメソッド
const text = 'abcde';

// インデックスが1以降を取り出す
console.log(text.substring(1)); // bcde

// インデックスが1から3の範囲を取り出す
console.log(text.substring(1, 3)); // bc

// 負の数を指定すると0として考える
console.log(text.substring(-1)); // abcde
