window.promises = [];

// Do not change the code above this
// add your promises to the array `promises`
function getRandomTime(){
    let sec=Math.random()*4+1;
    let randomTime=sec*1000;
    return randomTime;
}

const id = document.getElementById("output")


let prom1 = new Promise((resolve,reject) =>{
  setTimeout(() =>{
    resolve("data1");
  },getRandomTime())
});

let prom2 = new Promise((resolve,reject) =>{
  setTimeout(() =>{
    resolve("data2")
  },getRandomTime())
});
let prom3 = new Promise((resolve,reject) =>{
  setTimeout(() =>{
    resolve("data3")
  },getRandomTime())
});
let prom4 = new Promise((resolve,reject) =>{
  setTimeout(() =>{
    resolve("data4")
  },getRandomTime())
});
let prom5 = new Promise((resolve,reject) =>{
  setTimeout(() =>{
    resolve("data5")
  },getRandomTime())
});
window.promises = [prom1, prom2, prom3, prom4, prom5];
let x = Promise.any([prom1, prom2, prom3, prom4, prom5])

x.then((data) =>{

  // console.log(data);
  id.innerText = data;

});

x.catch((error) =>{
  console.log("error :", error)
});
