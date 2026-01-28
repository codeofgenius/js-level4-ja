// sliceメソッド
const text = 'abcde';

// インデックスが1以降を取り出す
console.log(text.slice(1)); // bcde

// インデックスが1から3の範囲を取り出す
console.log(text.slice(1, 3)); // bc

// 負の数を指定すると最後尾から取り出す
console.log(text.slice(-1)); // e
