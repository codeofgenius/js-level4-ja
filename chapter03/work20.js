// 複数のオブジェクト作成
const Player = function (name, job) {
    // プロパティーの代入
    this.name = name;
    this.job = job;

    // メソッド
    this.getName = function () {
        return 'I am ' + this.name;
    };

    // メソッド
    this.getJob = function () {
        return 'My job is ' + this.job;
    };
};

// 1個目のオブジェクト作成
const p1 = new Player('Alice', 'Magician');

// オブジェクトの表示
console.log(p1);

// メソッド呼び出し
console.log(p1.getName());
console.log(p1.getJob());

console.log('====');

// 2個目のオブジェクト作成
const p2 = new Player('Bob', 'Hero');

// オブジェクトの表示
console.log(p2);

// メソッド呼び出し
console.log(p2.getName());
console.log(p2.getJob());
