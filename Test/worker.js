let i = 0;
let obj = {
  name: 'Yurii',
  sername: 'Minchenko',
};
function timedCount() {
  i += 1;
  postMessage(`${i}  ${obj.name} is ${obj.sername}`);
  console.log(i);
  setTimeout(timedCount, 500);
}
timedCount();
