//DOM 2번예제
const boxEls = document.querySelectorAll('.box'); //HTLML 요소 모두 검색

boxEls.forEach(function (boxEl, index) { //forEach 메소드를 통해 반복
  boxEl.classList.add(`order-${index+1}`);
  console.log(index, boxEl);  
});