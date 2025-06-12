const btn = document.getElementById('evenbtn')
const countdisplay = document.getElementById('count');

let count = 0;

// 버튼 이벤트
btn.addEventListener('click', function () {
    console.log(count)
    count += 1;
    countdisplay.textContent = count; //화면에 반영
});