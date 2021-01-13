let w;
let start_btn = (document.querySelector('.start').onclick = startWorker1);
let stop_btn = (document.querySelector('.stop').onclick = stopWorker2);
let start2_btn = (document.querySelector('.start2').onclick = startWorker3);
let stop2_btn = (document.querySelector('.stop2').onclick = stopWorker4);
let worker2_btn = (document.querySelector('.worker2').onclick = worker2);
function startWorker1() {
  if (typeof w == 'undefined') {
    w = new Worker('worker.js');
  }
  console.log(w);
  w.onmessage = function (event) {
    document.querySelector('.result').innerHTML = event.data;
    console.log('mass');
  };
}
function stopWorker2() {
  w.terminate();
  w = undefined;
}
// let start_btn = (document.querySelector('.start').onclick = startWorker());
// let stop_btn = (document.querySelector('.stop').onclick = stopWorker());
let i = 0;
let stop_i = 0;
function startWorker3() {
  if (stop_i === 0 || i < 5) {
    i += 1;
    postMessage(i);
    let timer_id = setTimeout(startWorker3, 500);
    document.querySelector('.result2').innerHTML = i;
    console.log(timer_id);
    if (stop_i === 1) {
      clearTimeout(time_id);
      stop_i = 0;
      i = 0;
    }
  }
  //   let a = console.log('testtest');
}
function stopWorker4() {
  stop_i = 1;
}
// let str = '';
// function counter() {
//   for (var count = 1; ; count++) {
//     // infinite loop
//     console.log(count + 'A'); // until 5
//     if (count === 5) {
//       return;
//     }
//     console.log(count + 'B'); // until 4
//   }
//   console.log(count + 'C'); // never appears
// }

// // counter();
let k = 0;

function count_some() {
  do {
    k++;
  } while (k % 1e6 != 0);
  if (k == 1e9) {
    console.log('End');
    console.log(k);
  } else {
    setTimeout(count_some);
    console.log('pause');
    console.log(k);
  }
}
let counter_2;
function worker2() {
  if (typeof Worker !== 'undefined' && typeof counter_2 == 'undefined') {
    counter_2 = new Worker('worker2.js');
    console.log(counter_2);
  } else if (typeof Worker !== 'undefined' && typeof counter_2 != 'undefined') {
    let a = () => {
      console.log(counter_2 + 'End');
      console.log(counter_2);
      counter_2.terminate();
      counter_2 = undefined;
    };
    a();
  } else {
    console.log('No support for Workers');
  }
}
let contacts2 = new Map();
contacts2.set('Jess', { phone: '213-555-1234', address: '123 N 1st Ave' });
contacts2.set('Jes', 2);
let contacts = new Map();
contacts.set('Jessie', { phone: '213-555-1234', address: '123 N 1st Ave' });
contacts.set('Jessie1', 2);
contacts.set('Jessie2', 'string here');
contacts.set('Jessie3', true);
contacts.set('Jessie4', contacts2);
contacts.has('Jessie'); // true
contacts.get('Hilary'); // undefined
contacts.set('Hilary', { phone: '617-555-4321', address: '321 S 2nd St' });
contacts.get('Jessie'); // {phone: "213-555-1234", address: "123 N 1st Ave"}
contacts.delete('Raymond'); // false
let aaa = contacts.keys();

function myMap() {
  var mapCanvas = document.getElementById('map');
  var mapOptions = {
    center: new google.maps.LatLng(48.1427456, 33.5839232),
    zoom: 9,
  };
  var map = new google.maps.Map(mapCanvas, mapOptions);
}

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
    console.log(navigator.geolocation.getCurrentPosition(showPosition));
  } else {
    console.log('Geolocation is not supported by this browser.');
  }
}

function showPosition(position) {
  document.querySelector('.posit').innerHTML =
    'Latitude: ' +
    position.coords.latitude +
    '<br>Longitude: ' +
    position.coords.longitude;
  console.log(position);
  console.log(position.coords);
  console.log(position.coords.latitude);
}

getLocation();
