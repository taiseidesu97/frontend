//for (let i = 1; i < 100; ++i){
   // console.log('정렬 값은', i, '다')

//if (let j = 101; j < 101; j++){
   // console.log('정렬 값은', j, '다')


const array1 = [];
const array2 = [];

for (let i = 0; i < 100; i++) {
    array1.push(i);
}

for (let i = 101; i < 200; i++) {
    array1.push(i);
}
const concatarray = array1.concat(array2);

const filteredArray = concatarray.filter((e) => e % 2 === 0);

const sortarray = filteredArray.sort((a, b) => a - b);

const reducearray = sortarray.reduce((acc, cur) => {
    return acc + cur;
});

// 한번에 하는 법
constonecombo = array1
    .concat(array2)
    .filter((e) => e % 2 === 0)
    .sort((a, b) => b - a)
    .reduce((acc, cur) => {
        return acc + cur;


    });
console.log(constonecombo);
