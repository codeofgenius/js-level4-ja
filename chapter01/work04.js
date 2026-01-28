// 配列の判定
// 配列
const colors = ['red', 'blue', 'yellow'];

// colorsの判定
if (Array.isArray(colors)) {
    console.log('colors is array');
} else {
    console.log('colors is not array');
}

// オブジェクト
const person = {
    name: 'Tom',
    age: 15,
};

// personの判定
if (Array.isArray(person)) {
    console.log('person is array');
} else {
    console.log('person is not array');
}
