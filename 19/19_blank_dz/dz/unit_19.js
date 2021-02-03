// Task 1 ============================================
/* Добавьте на блок .div-1 событие клик и по клику запуск функции t1. Функция должна возвращать и выводить на экран содержимое блока (только текст). Вывод осуществляется в out-1.  */

function t1() {
  return (document.querySelector('.out-1').textContent = document.querySelector(
    '.div-1'
  ).textContent);
}
document.querySelector('.div-1').onclick = t1;
// ваше событие здесь!!!

// Task 2 ============================================
/*  Добавьте на блок .div-2 событие клик и по клику запуск функции t2. Функция должна возвращать true или false в зависимости от того, нажата ли клавиша alt или нет в момент клика. Также, выводите на экран результат. Вывод осуществляется в out-2. */

function t2(event) {
  if (event.altKey) {
    document.querySelector('.out-2').textContent = true;
    return true;
  } else {
    document.querySelector('.out-2').textContent = false;
  }
}
document.querySelector('.div-2').onclick = t2;

// ваше событие здесь!!!

// Task 3 ============================================
/*  Добавьте на блок .div-3 событие клик. При клике - увеличивайте ширину блока на 5px. Каждый клик - увеличение ширины на 5px. 10 кликов - на 50px. Ширину выводите в out-3. */

let w3 = 75;

function t3() {
  let block = document.querySelector('.div-3');
  w3 += 5;
  block.style.width = w3 + 'px';
  document.querySelector('.out-3').textContent = w3;
}
document.querySelector('.div-3').addEventListener('click', t3);
// ваше событие здесь!!!

// Task 4 ============================================
/*  Добавьте на блок .div-4 событие двойной клик и по двойному клику запуск функции t4. Функция должна возвращать и выводить на экран содержимое блока (только текст). Вывод осуществляется в out-4. */

function t4() {
  let str = document.querySelector('.div-4').textContent;
  document.querySelector('.out-4').textContent = str;
  return str;
}

document.querySelector('.div-4').addEventListener('dblclick', t4);

// Task 5 ============================================
/*  Дан блок .div-5.active. Добавьте на него событие двойной клик, по которому удалется класс active если он есть и добавляется если такого класса нет. */

function t5() {
  this.classList.toggle('active');
}
document.querySelector('.div-5').addEventListener('dblclick', t5);
// ваше событие здесь!!!

// Task 6 ============================================
/*  Дан блок .div-6 и список .ul-6. При двойном клике на блоке скрывайте .ul-6 еcли он показан и показывайте если скрыт. Скрытие и показ делайте через добавление - удаление класса .hide */

function t6() {
  document.querySelector('.ul-6').classList.toggle('hide');
}
document.querySelector('.div-6').addEventListener('dblclick', t6);
// ваше событие здесь!!!

// Task 7 ============================================
/*  Дан блок .div-7. При клике правой кнопкой мыши на блоке добавляйте ему класс .active. При повторном клике - удаляйте. */

function t7() {
  this.classList.toggle('active');
}
document.querySelector('.div-7').addEventListener('contextmenu', t7);
// ваше событие здесь!!!

// Task 8 ============================================
/*  Дано checkbox .ch-8. Повесьте на него событие onchange при котором на документе отключается клик правой кнопкой мыши если checkbox выбран и отключает если не выбран. */

function disableContextmenu(event) {
  event.preventDefault();
}
function t8() {
  if (this.checked) {
    document.body.addEventListener('contextmenu', disableContextmenu);
  } else {
    document.body.removeEventListener('contextmenu', disableContextmenu);
  }
}
document.querySelector('.ch-8').addEventListener('change', t8);
// ваше событие здесь!!!

// Task 9 ============================================
/*  Дан блок .div-9. Внутри блока - изображение 1.png. При клике правой кнопкой мыши  - меняйте изображение на 2.png. Надеюсь вы догадаетесь изменить только src изображения? */

function t9() {
  this.setAttribute('src', 'img/2.png');
}
document
  .querySelector('.div-9.block > img')
  .addEventListener('contextmenu', t9);
// ваше событие здесь!!!

// Task 10 ============================================
/*  Дан блок .div-10. Внутри блока - изображение 1.png. При наведении мыши (mouseenter)  - меняйте изображение на 2.png. */

function t10() {
  this.setAttribute('src', 'img/2.png');
}
document
  .querySelector('.div-10.block > img')
  .addEventListener('mouseenter', t10);
// ваше событие здесь!!!

// Task 11 ============================================
/*  Дан блок .div-11. Внутри блока - изображение 1.png. При наведении мыши (mouseenter)  - меняйте изображение на 2.png. При уведении мыши - mouseleave - возвращайте исходное изображение. */

function t11(event) {
  if (event.type == 'mouseenter') {
    this.setAttribute('src', 'img/2.png');
  } else {
    this.setAttribute('src', 'img/1.png');
  }
}
let block11 = document.querySelector('.div-11 > img');
block11.addEventListener('mouseenter', t11);
block11.addEventListener('mouseleave', t11);
// ваше событие здесь!!!

// Task 12 ============================================
/*  Дан блок .div-12. Добавьте на него событие mousedown - при нажатии кнопки мыши - добавляйте ему класс active. */

// () => {

// }
document.querySelector('.div-12').addEventListener('mousedown', (event) => {
  event.target.classList.add('active');
});
// ваше событие здесь!!!

// Task 13 ============================================
/*  Дан блок .div-13. Добавьте на него событие mousedown - при нажатии кнопки мыши - добавляйте ему класс active. Добавьте ему событие mouseup - при отпускании мыши - удаляйте класс active. */

// () =>  {

// }

// () =>  {

// }
document.querySelector('.div-13').addEventListener('mousedown', (event) => {
  event.target.classList.add('active');
});
document.querySelector('.div-13').addEventListener('mouseup', (event) => {
  event.target.classList.remove('active');
});
// ваше событие здесь!!!

// Task 14 ============================================
/*  Дан блок .div-14. При нажатии кнопки b-14 добавляйте к нему событие onclick - которое, при клике добавляем блоку div-14 класс active. */

function t14() {
  document.querySelector('.div-14').addEventListener('click', (event) => {
    event.target.classList.add('active');
  });
}
document.querySelector('.b-14').onclick = t14;

// Task 15 ============================================
/*  Дан блок .div-15. Добавьте на него событие move. При каждом движении мыши увеличивайте число внутри на 1. */

function t15() {
  this.textContent = +this.textContent + 1;
}
document.querySelector('.div-15').addEventListener('mousemove', t15);
// ваше событие здесь!!!

// Task 16 ============================================
/*  Дан блок .div-16. Добавьте на него событие move. При каждом движении мыши увеличивайте ширину блока на 1px. */
let div_16 = document.querySelector('.div-16');
let w = div_16.offsetWidth;
function t16() {
  w++;
  this.style.width = w + 'px';
}
div_16.addEventListener('mousemove', t16);
// ваше событие здесь!!!

// Task 17 ============================================
/*  Дано две кнопки - b-17_on и b-17_off. Напишите фукнции t17On и t17Off которые включают и отключают событие move в задании 16. */

function t17On() {
  div_16.addEventListener('mousemove', t16);
}
function t17Off() {
  div_16.removeEventListener('mousemove', t16);
}
document.querySelector('.b-17_on').addEventListener('click', t17On);
document.querySelector('.b-17_off').addEventListener('click', t17Off);

// ваше событие здесь!!!
// ваше событие здесь!!!

// Task 18 ============================================
/*  Дан блок div-18. Напишите фукнцию t18 которая выводит в данный блок его ширину при событии onmouseenter. */
let div_18 = document.querySelector('.div-18');
function t18() {
  div_18.textContent = div_18.offsetWidth;
}
div_18.addEventListener('mouseenter', t18);
// ваше событие здесь!!!

// Task 19 ============================================
/*  Дан блок div-19. Напишите фукнцию t19 которая выводит в данный блок его классы при событии onmouseout. */
let div_19 = document.querySelector('.div-19');
function t19() {
  div_19.textContent = div_19.classList;
}
div_19.addEventListener('mouseout', t19);
// ваше событие здесь!!!

// Task 20 ============================================
/*  Дан элемент progress. Напишите фукнцию t20 которая увеличивает его value на 1 при каждом событии mousemove внутри progress. */
let progressElem20 = document.querySelector('progress');
function t20() {
  progressElem20.value += 1;
}
console.dir(progressElem20);
progressElem20.addEventListener('mousemove', t20);
// ваше событие здесь!!!
