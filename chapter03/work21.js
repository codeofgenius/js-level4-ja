// プロトタイプによるメソッド作成
const Player = function (name, job) {
    this.name = name;
    this.job = job;
};

// プロトタイプによるメソッド作成
Player.prototype.getName = function () {
    return 'I am ' + this.name;
};

// プロトタイプによるメソッド作成
Player.prototype.getJob = function () {
    return 'My job is ' + this.job;
};

// オブジェクト作成
const p1 = new Player('Alice', 'Magician');
// メソッド呼び出し
console.log(p1.getName());
console.log(p1.getJob());

console.log('====');

// オブジェクト作成
const p2 = new Player('Tom', 'Fighter');
// メソッド呼び出し
console.log(p2.getName());
console.log(p2.getJob());
