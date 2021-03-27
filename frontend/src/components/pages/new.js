document.getElementsByClassName("_5f5mN")[0].click();
setTimeout(() => {
  document.getElementsByClassName("_5f5mN")[0].click();
}, 2000);
setTimeout(() => {
  document.getElementsByClassName("aOOlW")[0].click();
}, 4000);

let time = 2000;

for (let i = 0; i < 2; i++) {
  setTimeout(() => {
    document.getElementsByClassName("_5f5mN")[0].click();
  }, time);
  time += 2000;

  setTimeout(() => {
    document.getElementsByClassName("_5f5mN")[0].click();
  }, time);
  time += 4000;
  setTimeout(() => {
    document.getElementsByClassName("aOOlW")[0].click();
  }, time);
  time += 6000;
}
