let k = 0;

function count_some() {
  do {
    k++;
  } while (k % 1e6 != 0);
  if (k == 1e9) {
    console.log('End');
    console.log(k);
    //  let a = sessionStorage.timer_counter;
    console.log(timer_counter);
    console.log(counter_2);
  } else {
    setTimeout(count_some);
    console.log('pause');
    console.log(k);
  }
}
count_some();
