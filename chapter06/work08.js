// 乱数処理の関数化
function getRandom(min, max) {
    // 引数minとmaxを含む範囲で乱数発生
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

for (var i = 0; i < 10; i++) {
    console.log(getRandom(2, 7));
}
