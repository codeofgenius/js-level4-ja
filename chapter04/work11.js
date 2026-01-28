// ユニオンによる和集合
const a = new Set(['Apple', 'Orange', 'Banana', 'Grape']);
const b = new Set(['Banana', 'Orange', 'Melon']);

const result = a.union(b);
console.log(result); // Set(5) { 'Apple', 'Orange', 'Banana', 'Grape', 'Melon' }
