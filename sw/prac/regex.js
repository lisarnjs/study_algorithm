const str = "https://art-map.co.kr/exhibition/view.php?idx=1784&p=1&a=2";

const reg = /idx=\d{1,}/;

const result = str.match(reg);
console.log(result);


