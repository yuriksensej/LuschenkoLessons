// Task 1 ============================================
/* Дан input .i-1. Напишите функцию t1, которая выводит в .out-1 символ и возвращает его. Во всех последующих задачах - работаем с латиницей и цифрами.*/

function t1(event) {
  return (document.querySelector('.out-1').textContent = event.key);
}
document.querySelector('.i-1').addEventListener('keydown', t1);
// ваше событие здесь!!!

// Task 2 ============================================
/*  Дан input .i-2. Напишите функцию t2, которая выводит в .out-2 код символа и возвращает его. */

function t2(event) {
  return (document.querySelector('.out-2').textContent = event.keyCode);
}
document.querySelector('.i-2').addEventListener('keydown', t2);

// ваше событие здесь!!!

// Task 3 ============================================
/*  Дан input .i-3. Напишите функцию t3, которая выводит на страницу true если введен символ и false если цифра. Для определения - используйте код клавиши. */

let w3 = 75;

function t3(event) {
  if (
    (event.keyCode > 47 && event.keyCode < 58) ||
    (event.keyCode > 95 && event.keyCode < 105)
  ) {
    document.querySelector('.out-3').textContent = true;
  } else {
    document.querySelector('.out-3').textContent = false;
  }
}
document.querySelector('.i-3').addEventListener('keydown', t3);

// ваше событие здесь!!!

// Task 4 ============================================
/*  Дан input .i-4. Напишите функцию t4, которая выводит в .out-4 только символы в нижнем регистре. Т.е. ввели ab4Bci в out получаем ab4bci. */

function t4(event) {
  let str = document.querySelector('.i-4').value;

  document.querySelector('.out-4').textContent = str.toLowerCase();
}
document.querySelector('.i-4').addEventListener('input', t4);
// ваше событие здесь!!!

// Task 5 ============================================
/*  Дан input .i-5. Напишите функцию t5, которая выводит в .out-5 все вводимые символы в верхнем регистре. Т.е. пользователь ввел AbCd и функция выведет ABCD. */

function t5() {
  let str = document.querySelector('.i-5').value;

  document.querySelector('.out-5').textContent = str.toUpperCase();
}
document.querySelector('.i-5').addEventListener('input', t5);

// ваше событие здесь!!!

// Task 6 ============================================
/*  Дан input .i-6. Напишите функцию t6, которая выводит в .i-6 только символы в нижнем регистре.  */
function t6(event) {
  if (event.data.charCodeAt() > 97) {
    document.querySelector('.out-6').textContent += event.data;
  }
}
document.querySelector('.i-6').addEventListener('input', t6);

// ваше событие здесь!!!

// Task 7 ============================================
/*  Дан input .i-7. Напишите функцию t7, которая выводит в .out-7 случаный символ из массива a7 при каждом вводе символа. */

function t7(event) {
  let a7 = [];
  a7 = inputString7.value.split('');
  let randNumber = Math.floor(Math.random() * a7.length);
  document.querySelector('.out-7').textContent = a7[randNumber];
}
let inputString7 = document.querySelector('.i-7');
inputString7.addEventListener('input', t7);
// ваше событие здесь!!!

// Task 8 ============================================
/*  Дан input .i-8. Напишите функцию t8, которая выводит в .out-8 вводимый в input текст, но заменяет i на 1, o на 0, l на 7. */
function t8(event) {
  switch (event.data) {
    case 'i':
      symbol8 = 1;
      break;
    case 'o':
      symbol8 = 0;
      break;

    case 'l':
      symbol8 = 7;
      break;

    default:
      symbol8 = event.data;
      break;
  }
  document.querySelector('.out-8').textContent += symbol8;
}
document.querySelector('.i-8').addEventListener('input', t8);
// ваше событие здесь!!!

// Task 9 ============================================
/* Дан input .i-9. Напишите функцию t8, выводит в .out-9 количество нажатых клавиш стрелка вниз. */

let count9 = 0;
function t9(event) {
  if (event.keyCode == 40) {
    count9++;
    document.querySelector('.out-9').textContent = count9;
  }
  console.log(event);
}
document.querySelector('.i-9').addEventListener('keyup', t9);
// ваше событие здесь!!!

// Task 10 ============================================
/*  Дан input .i-10 и изображение 1.png. Добавьте событие на input, при нажатии клавиш стрелка вправо и стрелка влево увеличивать ширину изображения. Клавиши стрелка вверх и вниз - увеличивать высоту изображения. Одно нажатие клавиши - 1px. */
const divImg10 = document.querySelector('.div-10 > img');
function t10(event) {
  if (event.code == 'ArrowLeft' || event.code == 'ArrowRight') {
    divImg10.style.height = divImg10.clientHeight + 'px';
    divImg10.style.width = divImg10.clientWidth + 1 + 'px';
  }
  if (event.code == 'ArrowUp' || event.code == 'ArrowDown') {
    divImg10.style.width = divImg10.clientWidth + 'px';
    divImg10.style.height = divImg10.clientHeight + 1 + 'px';
  }
}
document.querySelector('.i-10').addEventListener('keydown', t10);
// ваше событие здесь!!!

// Task 11 ============================================
/*  Проект. 
1. Выполните в html верстку клавиш клавиатуры. Сверстайте – блок цифровых клавиш от 1 до 0. И ряд клавиш q – p. Добавьте клавишу левый shift, левый  alt, левый ctrl,  пробел, enter.
2. Добавьте на input .i-11 событие onkeypress или onkeyup или onkeydown ( по вашему выбору). Когда событие происходит ( ввод символа в input) необходимо подсветить ( добавить класс active) клавише с таким символом. Со всех остальных клавиш – удалить класс active.
3. Если вводится следующий символ – повторить удаление active и подсветить клавишу с введенным символом.
4. Ограничения проекта – тестируются только указанные клавиши в латинской раскладке. Комбинации клавиш не тестируются. Т.е. нажиматься shift+A, ctrl+shift – не будут. Все символы вводятся в нижнем регистре.
*/
let keyBoardKeys = document.querySelectorAll('.keyBlock, .keyBlockAd ');
function t11(event) {
  for (const iterator of keyBoardKeys) {
    if (
      event.key == iterator.textContent ||
      event.code == iterator.textContent
    ) {
      iterator.classList.add('active');
    } else {
      iterator.classList.remove('active');
    }
  }
}
document.querySelector('.i-11').addEventListener('keyup', t11);
// ваше событие здесь!!!
