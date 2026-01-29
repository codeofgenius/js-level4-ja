// タイムゾーンと言語設定
const today = new Date();

// 実行環境のタイムゾーンと言語設定での文字列表記
console.log(today.toLocaleString());
// 実行環境のタイムゾーンと言語設定での年月日の文字列表記
console.log(today.toLocaleDateString());
// 実行環境のタイムゾーンと言語設定での時刻の文字列表記
console.log(today.toLocaleTimeString());

// 日本語での文字列表記
console.log(today.toLocaleString('ja-JP'));
// 韓国語での文字列表記
console.log(today.toLocaleString('ko-KR'));

// 日本語で日本時間の文字列表記
console.log(today.toLocaleString('ja-JP', { timeZone: 'Asia/Tokyo' }));
// 韓国語でニューヨーク時間の文字列表記
console.log(today.toLocaleString('ko-KR', { timeZone: 'America/New_York' }));
