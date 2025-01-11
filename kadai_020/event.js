//btnというidを持つHTML要素を取得し、定数に代入する
const btn = document.getElementById('btn');

//ボタンが押されたときにイベント処理を実行する
document.addEventListener('click', () => {
  //textというidを持つHTML要素を取得し、を定数に代入する
  const text = document.getElementById('text');
  // textを「ボタンをクリックしました」に変更する
  text.innerHTML = 'ボタンをクリックしました';
});