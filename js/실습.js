//const array1 = [];
//const array2 = [];

//for (let i = 0; i < 100; i++) {
   // array1.push(i);
//}

//for (let i = 101; i < 200; i++) {
   // array1.push(i);
//}
//const concatarray = array1.concat(array2);

//const filteredArray = concatarray.filter((e) => e % 2 === 0);

//const sortarray = filteredArray.sort((a, b) => a - b);

//const reducearray = sortarray.reduce((acc, cur) => {
 //   return acc + cur;
//});
//constonecombo = array1
 //   .concat(array2)
 //   .filter((e) => e % 2 === 0)
 //   .sort((a, b) => b - a)
 //   .reduce((acc, cur) => {
 //       return acc + cur;


  //  });
//console.log(constonecombo);

//const array = [1, 2, 3, 4, 5]

//배열의 길이를 아는 방법
//console.log();

//for 문
//for (let i = 0; i < hummanarray.length; i++){
    //console.log(data);
//}
//humansarray = ['キモオタ', 'パチンカス', 'きっしょニート', '짱구', '유리'];
// value of array
//for (const data of humansarray) {
   // console.log(data)}
// for each (데이터값, 순서 (숫자로 나옴)
//humansarray.foreach((data, index) => {
    //console.log(data, index);
//});
//const array = [1, 2, 3, 4, 5];
//map
//const newarray = array.map((data, index) => {
    //console.log(data, index);
    //return data / 2;
//});
//console.log(newarray);

const score = [85, 90, 50, 58, 92, 82, 61, 45, 70, 74]
const newscore = [];

// score 배열에서 60점 이상인 점수만 골라서 newscore에 넣어주시고
// 그 배열의 평균 점수를 출력해주세요. filter나 map 사용하지않고 반복문으로 작성

//for (let i = 60; i < score.length; i++){
   //console.log(score[i]);}
//for (let i = 0; i < score.length; i++) {
    //if (score[i] >= 60) {
      //  newscore.push(score[i]);
//}}
score.forEach((score) => {
    if (score >= 60) {
        newscore.push(score);
    }
});
const totalscore = total = newscore.reduce((acc, cur) => {
    return acc + cur;
});

const average = totalscore / newscore.length;
console.log(average);