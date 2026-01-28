// 乱数発生の関数にする
function getRandom(min, max) {
    // 変数「min」と「max」の間で乱数発生
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

for(var i = 0; i < 10; i++) {
    console.log(getRandom(3,7));
}
