// thisの取り扱い
const person = {
    name: 'Alice',
    // メソッドの定義
    showName: function () {
        console.log(`My name is ${this.name}`);
    },
};
