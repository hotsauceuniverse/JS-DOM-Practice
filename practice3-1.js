//DOM(프로그래밍 언어가 DOM 구조에 접근할 수 있는 방법을 제공) 1번예제 - class명 추가/제거
let boxEl = document.querySelector('.box');

console.log(boxEl);

boxEl.addEventListener('click', function () {
  console.log('click!!');
  boxEl.classList.add('active');
  console.log(boxEl.classList.contains('active'));
  boxEl.classList.remove('active');
  console.log(boxEl.classList.contains('active'));
});

