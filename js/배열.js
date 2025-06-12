
const array = [1, 2, 3, 4, 5];
// push: 마지막 배열에 추가
array.push(6);
// pop: 마지막 배열 삭제
array.pop();


// unshift: 배열의 첫번째에 추가
//array.unshift(0);

// shift:  첫번째 배열을 삭제
//array.shift();

// splice: 배열의 원하는 위치에 추가/삭제
// splice(시작 인덱스, 삭제할 개수, 추가값1, 추가값2)
//추가
//array.splice(2, 0, 3);
//console.log(array);
//삭제
//array.splice(2, 4);
//console.log(array);

// slice: 배열 일부를 복사
// slice(복사 시작 인덱스, 선언한 인덱스 이전까지 복사)
//const slice = array.slice(0, 3);

// concat: 배열 합치기
//const array2 = [6, 7, 8];
//console.log(slice.concat(array2));
//console.log([...array, ...array2]);

// indexOf: 배열에서 위치 찾기
//console.log(array.indexOf(3)); // 인덱스 위치
//console.log(array.includes(100)); // -1

// includes: 배열안에 값이 있는지 확인 (참,거짓)
// console.log(array.includes(3)); // 값이 있다면 true
// console.log(array.includes(100)); // 값이 없다면 false

// map: 조건에 따라 새로운 배열을 만들어줌
//console.log(319 % 1); //2
//const newarray = array.map((e) => e * 2);
//console.log(newarray);

// filter: 조건에 맞는 값만 추출 (새로운 배열로 만들어줌)
//const filteredArray = array.filter((e) => e % 2 === 1);

// find: 조건에 맞는 첫번째 값만 반환
//const findarray = array.find((e) => e % 2 === 0);
//console.log(findarray);

// reduce: 배열의 누적 계산
// reduce((누적값, 현재값) => {})
//const totararray = array.reduce((acc, cur) => {
    //return acc * cur;
//});

//console.log(totararray);

// sort: 배열을 정렬
const nonsortedArray = [100, 20, 4, 3000];
const sortarray = nonsortedArray.sort();
const realsortarray = nonsortedArray.sort((a, b) => a - b); // 오름차순 정렬
//const realsortarray = nonsortedArray.sort((a, b) => b - a); // 내림차순 정렬
console.log(sortarray);

// 반복문을 이용해서 0부터 100까지 배열 하나 101부터 200까지 배열을 만들고 그  두개의 배열을 합친 다음 그 한ㅂ친 배열에서 짝수만 있는 배열 만들기
//그리고 그 배열을 역순으로 정렬 , 배열안에 모든 수를 더한 값을 출력