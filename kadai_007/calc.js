// 変数に整数を代入
let num = 10;

// 変数numの値が3と5の倍数なら、 “3と5の倍数です”と出力される
if (num % 15 == 0 ) {
  console.log('3と5の倍数です');
}
// 変数numの値が3の倍数なら、“3の倍数です”と出力される
else if (num % 3 == 0) {
  console.log('3の倍数です');
}
// 変数numの値が5の倍数なら、 “5の倍数です”と出力される
else if (num % 5 == 0 ) {
  console.log('5の倍数です');
}
// それ以外の場合は変数numを出力する
else {
  console.log(num);
}