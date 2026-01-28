// symmetricDifferenceによる対称差
const a = new Set(['Apple', 'Orange', 'Banana', 'Grape']);
const b = new Set(['Banana', 'Orange', 'Melon']);

const result = a.symmetricDifference(b);
console.log(result); // Set(3) { 'Apple', 'Grape', 'Melon' }
