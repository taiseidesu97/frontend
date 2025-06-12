const a = 1;
const b = 10;
const c = 100;

//기본 함수 선언식
function functionname(x, y) {
    return x + y;
}

console.log(functionname(a, c));

//화살표 함수 선언식
const arrowfunction = (x, y) => {
    return x * y;
};

console.log(arrowfunction(b, c));

// 즉시 실행 함수
(function(x, y) {
    console.log('즉시 실행 함수:', x - y);
})(a, b);
