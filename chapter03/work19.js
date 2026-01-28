// 引数のあるコンストラクタ関数
const Player = function (name, job, hp, mp) {
    this.name = name;
    this.job = job;
    this.hp = hp;
    this.mp = mp;
};

// オブジェクト作成
const p1 = new Player('Alice', 'Magician', 20, 30);

// オブジェクトの表示
console.log(p1);

// プロパティーの利用
console.log(p1.name);
console.log(p1.job);
console.log(p1.hp);
console.log(p1.mp);
