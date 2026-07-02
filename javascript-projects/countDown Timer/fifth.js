setInterval(()=>{
const result = document.getElementById('result');
const currentTime = Date.now();
const olympicTime = new Date(2026,6,14).getTime();
let Timer = olympicTime-currentTime
const day = Math.floor((Timer)/(1000*60*60*24));
Timer%= 1000*60*60*24; 
const hour = Math.floor((Timer)/(1000*60*60));
Timer%= 1000*60*60; 
const minute =Math.floor((Timer)/(1000*60));
Timer%= 1000*60; 
const second = Math.floor((Timer)/(1000));
Timer%= 1000; 
result.textContent = `${day}:days  ${hour}:hour ${minute}:minute ${second}: second`;
},1000);
