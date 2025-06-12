const person = {
    name: "キモオタハゲタコ",
    age: 29,
    job: "きっしょニート",
    talk: (sentence) => {
        console.log(sentence);
    },
    hobbies: {
        hobby1: 'パチンコ',
        hobby2: 'pｆ宇宙戦艦ヤマトオンリーワン89甘デジ',
    }
};

//console.log(person.name);
console.log(`안녕하세요 저는 ${person.name}입니다.
    제나이는 ${person.age}살 이고, 제 직업은 ${person.job}입니다.
    제 취미는 ${person.hobbies.hobby1}와 ${person.hobbies.hobby2}입니다.'
    ${person.talk('앞으로 잘 부탁드립니다.')}
        `);
// 옅은 복사
const person2 = person;

person2.name = 'パチンカス、チー牛、ゴミ野郎';

console.log('첫번째 옅은 복사', person.name);

// 깊은 복사
const deepcopy = (origin) => {
    const result = {};
    for (let key in origin) {
        if (origin[key] !== null && typeof origin[key] !== 'object') {
            result[key] = deepcopy(origin[key]);
        } else {
            result[key] = origin[key];
        }
    }
    return result;
};

const person4 = deepcopy(person);

console.log('깊은 복사', person4.name);

person4.name = 'パチンコ、チー牛、ゴミ野郎';