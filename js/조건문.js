console.log(a) = 1;
console.log(b) = 2;
console.log(c) = 1;


//if조건문
//if (a === b) {
console.log('조건문 안에 들어옴')
//else {
//console.log('첫번째 조건이 달라서 여기로 옴')
//} else if () {
//console.log('두번째 조건이 달라서 여기로 옴')
//} else if () {
//console.log('두번째 조건이 달라서 여기로 옴')
//} else if () {
//console.log('두번째 조건이 달라서 여기로 옴')
// else if () {
//console.log('두번째 조건이 달라서 여기로 옴')



//삼항 연산자
const result = a === b ? 'a와 b는 같습니다' : 'a와 b는 다릅니다';
console.log(result);

// switch문
switch (a) {
    case b:
        console.log('a는 b와 같습니다');
        break;
    case c:
        console.log('a는 c와 같습니다');
        break;
    default:
        console.log('a는 b나 c와 같지 않습니다');
}