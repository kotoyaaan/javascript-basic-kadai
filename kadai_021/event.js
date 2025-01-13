const text = document.getElementById('text');
const btn = document.getElementById('btn')

// 定数btnがクリックされたときにイベント処理を実行する
btn.addEventListener('click', () => {
  // 2秒後（2000ミリ秒）の待ち時間を設定し、非同期処理を実行する
  setTimeout(() => {
    // 定数textに代入された文章を「ボタンをクリックしました」に変更する
    text.textContent = 'ボタンをクリックしました';
  }, 2000);
}) ;