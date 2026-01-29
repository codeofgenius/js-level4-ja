// nowメソッドでタイムスタンプの取得
const timestamp = Date.now();

// タイムスタンプの表示
console.log(timestamp);

// タイムスタンプからDateオブジェクト作成
const nowDate = new Date(timestamp);
// 日本語で日本時間の文字列表記
console.log(nowDate.toLocaleString('ja-JP', { timeZone: 'Asia/Tokyo' }));
