// intersectionによる積集合
const a = new Set(['Apple', 'Orange', 'Banana', 'Grape']);
const b = new Set(['Banana', 'Orange', 'Melon']);

const result = a.intersection(b);
console.log(result); // Set(2) { 'Banana', 'Orange' }
