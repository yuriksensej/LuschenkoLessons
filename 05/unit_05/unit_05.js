//  Task 1
// Кнопка b-1 запускает функцию t1. Функция должна выводить в out-1 строку вида:
//     1 2 3 4 5 6 7 8 9 ... 49 50
// от 1 до 50 включительно. Разделитель - пробел. Задача решается с помощью цикла.

function t1() {
  let out = '';
  for (let i = 1; i < 51; i++) {
    out += i + ' ';
  }
  document.querySelector('.out-1').textContent = out;
}
document.querySelector('.b-1').onclick = t1;

//  Task 2
// Кнопка b-2 запускает функцию t2. Функция должна выводить в out-2 строку вида:
//     2 4 6 ... 122
// от 2 до 122 c шагом 2. Разделитель - пробел. Задача решается с помощью цикла.

function t2() {
  let out = '';
  for (let i = 2; i < 123; i += 2) {
    out += i + ' ';
  }
  document.querySelector('.out-2').textContent = out;
}

document.querySelector('.b-2').onclick = t2;

//  Task 3
// Кнопка b-3 запускает функцию t3. Функция должна выводить в out-3 строку вида:
//     25 24 23 22 . . 7
// от 25 до 7 c шагом 1. Разделитель - пробел. Задача решается с помощью цикла.

function t3() {
  let out = '';
  for (let i = 25; i > 6; i--) {
    out += i + ' ';
  }
  document.querySelector('.out-3').textContent = out;
}

document.querySelector('.b-3').onclick = t3;

//  Task 4
// Кнопка b-4 запускает функцию t4. Функция должна выводить в out-4 строку вида:
//     77_74_71_68_65_62_ ... _38_35_
// от 77 до 35 c шагом 3. Разделитель - знак подчеркивания. Задача решается с помощью цикла.

function t4() {
  let out = '';
  for (i = 77; i > 34; i -= 3) {
    out += i + '_';
  }
  document.querySelector('.out-4').textContent = out;
}

document.querySelector('.b-4').onclick = t4;

//  Task 5
// Кнопка b-5 запускает функцию t5. Функция должна выводить в out-5 строку вида:
//     1_*2_**3_*4_** ... 17_*
// от 1 до 17 c шагом 1. Разделитель - знак подчеркивания и звездочка (если число нечетное, и две звездочки если четное). Задача решается с помощью цикла.

function t5() {
  let out = '';
  for (i = 1; i < 18; i++) {
    i % 2 > 0 ? (out += i + '_*') : (out += i + '_**');
  }
  document.querySelector('.out-5').textContent = out;
}

document.querySelector('.b-5').onclick = t5;

//  Task 6
// Кнопка b-6 запускает функцию t6. Функция должна выводить в out-6 строку вида:
//
// ******<br>
// ******<br>
// ******<br>
//
//Задача решается с помощью цикла. В каждой итерации цикл выводит 6 звездочек без пробелов. Перенос строки - br. Количество строк (итераций, повторений) цикла вводит пользователь в i-6.
//

function t6() {
  let val_i_6 = +document.querySelector('.i-6').value;
  let out_6 = document.querySelector('.out-6');
  let out = '';
  for (i = 0; i < val_i_6; i++) {
    out += '******' + '<br>';
  }
  out_6.innerHTML = out;
}

document.querySelector('.b-6').onclick = t6;

//  Task 7
// Есть input i-7 куда пользователь может ввести число больше нуля (проверок не делаем, принимаем как факт).
// По нажатию кнопки b-7 должна запускаться функция t7, которая выводит в out-7 числа от введенного пользователем до нуля включительно.
// Разделитель пробел. Если пользователь ввел 4 и нажал кнопку, мы получим:
//     4 3 2 1 0
// Задача решается с помощью цикла.

function t7() {
  let i_7 = document.querySelector('.i-7');
  let out_7 = document.querySelector('.out-7');
  let out = '';
  for (i = +i_7.value; i > -1; i--) {
    out += i + ' ';
  }
  out_7.innerHTML = out;
}

document.querySelector('.b-7').onclick = t7;

//  Task 8
// Есть input i-81 и i-82 куда пользователь может ввести числа больше нуля (проверок не делаем, принимаем как факт).
// Считаем, что второе число всегда больше первого.
// По нажатию кнопки b-8  должна запускаться функция t8, которая выводит в out-8 числа от первого введенного до второго включительно, с шагом 1.
// Разделитель пробел. Если пользователь ввел 4 и 8  и нажал кнопку, мы получим:
//     4 5 6 7 8
// Задача решается с помощью цикла.

function t8() {
  let val_81 = +document.querySelector('.i-81').value;
  let val_82 = +document.querySelector('.i-82').value;
  let out_8 = document.querySelector('.out-8');
  let out = '';
  for (i = val_81; i <= val_82; i++) {
    out += i + ' ';
  }
  out_8.innerHTML = out;
}

document.querySelector('.b-8').onclick = t8;

//  Task 9
// Есть input i-91 и i-92 куда пользователь может ввести числа.
// По нажатию кнопки b-9 должна запускаться функция t9, которая выводит в out-9 числа от меньшего введенного до большего включительно, с шагом 1.
// Разделитель пробел. Если пользователь ввел 4 и 8  и нажал кнопку, мы получим:
//     4 5 6 7 8
// если ввел 8 и 6, то получим
// 6 7 8
// Задача решается с помощью цикла. Подсказка - вначале делаем проверку, а потом запускаем цикл.
// цикл - один

function t9() {
  let val_91 = +document.querySelector('.i-91').value;
  let val_92 = +document.querySelector('.i-92').value;
  let out_9 = document.querySelector('.out-9');
  let out = '';
  let a, b;
  if (val_91 > val_92) {
    a = val_91;
    b = val_92;
  } else {
    a = val_92;
    b = val_91;
  }
  for (let i = b; i < a + 1; i++) {
    out += i + ' ';
  }
  out_9.textContent = out;
}

document.querySelector('.b-9').onclick = t9;

//  Task 10
// Кнопка b-10 запускает функцию t10. Функция должна выводить в out-10 четные годы от 1950 до 2000 включительно.
// Разделитель - пробел. Задача решается через цикл, а четность - через шаг (равный 2).

function t10() {
  let out = '';
  for (let i = 1950; i < 2001; i += 2) {
    out += i + ' ';
  }
  document.querySelector('.out-10').textContent = out;
}
document.querySelector('.b-10').onclick = t10;

//  Task 11
// Кнопка b-11 запускает функцию t11.  Функция должна:
//     получить все div.div-11
// перебрать их с помощью цикла. Обращение к div выглядит так elem[i]
// вывести в out-11 содержимое каждого блока. Разделитель - пробел.
//     В результате должно получиться так:
//     one 3 4 two

function t11() {
  let divElem = document.querySelectorAll('div.div-11');
  let out = '';
  for (let i = 0; i < divElem.length; i++) {
    out += divElem[i].textContent + ' ';
  }
  document.querySelector('.out-11').textContent = out;
}

document.querySelector('.b-11').onclick = t11;

//  Task 12
// Кнопка b-12 запускает функцию t12.  Функция должна:
//     получить все div.div-12
// перебрать их с помощью цикла. Обращение к div выглядит так elem[i]
// применить к каждому elem[i].style.background = ‘orange’

function t12() {
  let divElem = document.querySelectorAll('div.div-12');
  for (let i = 0; i < divElem.length; i++) {
    divElem[i].style.background = 'orange';
  }
}

document.querySelector('.b-12').onclick = t12;

//  Task 13
// Кнопка b-13 запускает функцию t13.  Функция должна:
//     получить все input.i-13
// перебрать их с помощью цикла. Обращение к элементу выглядит так elem[i]
// применить к каждому elem[i].value, причем к value первого должно равняться 1, второго - 2, третьего - 3...

function t13() {
  let arr = document.querySelectorAll('input.i-13');
  for (let i = 0; i < arr.length; i++) {
    arr[i].value = i + 1;
  }
}

document.querySelector('.b-13').onclick = t13;

//  Task 14
// Кнопка b-14 запускает функцию t14  Функция должна:
//     получить все input.i-14
// перебрать их с помощью цикла. Обращение к элементу выглядит так elem[i]
// вывести в out-14 value выбранного. Проверить выбран ли элемент можно с помощью elem[i].checked.

function t14() {
  let out = '';
  let arr = document.querySelectorAll('input.i-14');
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].checked) {
      out += arr[i].value;
    } else {
      continue;
    }
  }
  document.querySelector('.out-14').textContent = out;
}

document.querySelector('.b-14').onclick = t14;

//  Task 15
// Кнопка b-15 запускает функцию t15  Функция должна выводить следующую последовательность в out-15:
// 10 0 9 1 8 2 7 3 6 4 5 5 4 6 3 7 2 8 1 9 0 10
// Для вывода использовать цикл. Разделитель пробел.
// Подсказка (10 - i) + ' ' + i

function t15() {
  let out = '';
  for (let i = 0; i < 11; i++) {
    out += 10 - i + ' ' + i + ' ';
  }
  document.querySelector('.out-15').textContent = out;
}

document.querySelector('.b-15').onclick = t15;
