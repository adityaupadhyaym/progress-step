const roundCircle = document.querySelectorAll('span');
const btnPrev = document.querySelector('.btn-prev');
const btnNext = document.querySelector('.btn-next');
const line = document.querySelector('.line');
// console.log(line)



let currentStatus = 1;
let counter = 0;

function lineUpdate(){

    line.style.width=  `${counter * 33}% ` ;

}



btnNext.addEventListener('click', () => {
  if (currentStatus < 4) {
    currentStatus++;
    roundCircle.forEach((ele) => {
      let inrText = ele.innerText;
      if (currentStatus === +inrText) {
        ele.classList.add('active');
        counter++;
        lineUpdate();
      }
    });

    if (currentStatus === 4) {
      btnNext.classList.add('btnDisable');
    }

    if (btnPrev.classList.contains('btnDisable')) {
      btnPrev.classList.remove('btnDisable');
    }
  }
});

btnPrev.addEventListener('click', () => {
  if (currentStatus > 1) {
    currentStatus--;
    roundCircle.forEach((ele, index) => {
      if (currentStatus === index) {
        ele.classList.remove('active');
        counter--;
        lineUpdate();
      }
    });

    if (currentStatus === 1) {
      btnPrev.classList.add('btnDisable');

    }

    if (btnNext.classList.contains('btnDisable')) {
      btnNext.classList.remove('btnDisable');
    }
  }
});
