// メソッド2
const person = {
    name: 'Alice',
    age: 15,
};

// メソッドの定義
person.showName = function () {
    console.log(`My name is ${this.name}`);
};

person.showAge = function () {
    console.log(`I am ${this.age} years old`);
};

// メソッドの呼び出し
person.showName();
person.showAge();
