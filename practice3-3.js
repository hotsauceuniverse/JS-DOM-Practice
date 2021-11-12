//DOM 3번예제
const boxEl = document.querySelector('.box');

console.log(boxEl.textContent); //getter, 값을 얻는 용도

boxEl.textContent = 'Se Young!!'; //setter, 값을 지정하는 용도
console.log(boxEl.textContent);