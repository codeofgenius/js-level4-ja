// オブジェクトにメソッド作成
const Player = function (name, job) {
    this.name = name;
    this.job = job;
};

// オブジェクト作成
const p1 = new Player('Alice', 'Magician');

// オブジェクトにメソッド作成
p1.getName = function () {
    return 'I am ' + this.name;
};

// オブジェクトにメソッド作成
p1.getJob = function () {
    return 'My job is ' + this.job;
};

// メソッド利用
console.log(p1.getName());
console.log(p1.getJob());
