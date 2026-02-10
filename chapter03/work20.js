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
