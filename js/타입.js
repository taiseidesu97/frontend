const a = 1;
console.log('a 타입', typeof a);
const b = '1';
//숫자 => 문자로 형태 변환
console.log('b 타입', typeof b);
// bigint

const c = 2n; //2^53 - 1 보다 큰 값
console.log('c 타입', typeof c);
const d = true; // boolean 타입, true 또는 false
console.log('d 타입', typeof d);
const e = null; // null은 객체로 취급됨 다만 현재값은 비어있음
console.log('e 타입', typeof e);
const f = undefined; // undefined는 값이 할당되지 않은 상태
console.log('f 타입', typeof f);
const g = NaN; // Not a Number, 숫자가 아닌 값
console.log('g 타입', typeof g); 
const h = Infinity; // 무한대, 숫자 타입
console.log('f 타입', typeof f);
const i = Symbol('description'); // 심볼 타입, 고유한 식별자
console.log('i 타입', typeof i);