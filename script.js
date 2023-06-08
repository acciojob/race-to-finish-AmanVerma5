window.promises = [];

// Do not change the code above this
// add your promises to the array `promises`
function getRandomTIme(){
    let sec=Math.random()*4+1;
    let randomTIme=sec*1000;
    return randomTIme;
}

let prom1 = new Promise((resolve) => {
  setTimeout(() => {
    resolve();
  }, getRandomTime());
})
let prom2 = new Promise((resolve) => {
  setTimeout(() => {
    resolve();
  }, getRandomTime());
})
let prom3 = new Promise((resolve) => {
  setTimeout(() => {
    resolve();
  }, getRandomTime());
})
let prom4 = new Promise((resolve) => {
  setTimeout(() => {
    resolve();
  }, getRandomTime());	
})
let prom5 = new Promise((resolve) => {
  setTimeout(() => {
    resolve();
  }, getRandomTime());
})
window.promises=[prom1,prom2,prom3,prom4,prom5];

let x=Promise.any([prom1,prom2,prom3,prom4,prom5]);

let id=document.getElementById("output");

x.then(()=>{
    id.innerText="output";
})

x.catch((error)=>{
    console.log(error);
})
