
const persons = {
    キモオタハゲタコ: {
        age: 29,
        job: "きっしょニート",
        sex: '남자',

    },

    kaaa: {
        age: 25,
        job: "パチンコ店員",
        sex: '남자',
    },
    チー牛: {
        age: 35,
        job: "チー牛店員",
        sex: '남자',
    },
    ゴミ野郎: {
        age: 26,
        job: "ゴミ収集員",
        sex: '여자',
    },
};
for (i in persons) {
    for (j in persons[i]) {
        if (j === 'age' && persons[i][j] < 30)
            if (j === 'sex' && persons[i][j] === '남자' => '여자') {

        }
    }
    console.log('30살 미만인 사람, 여자인 사람', i, '입니다')
}
