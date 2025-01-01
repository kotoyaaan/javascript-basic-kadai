const today = new Date();
const year = today.getFullYear();
const month = (today.getMonth() + 1);
const day = today.getDay();
console.log(year + '年'+ month + '月'+ day + '日');