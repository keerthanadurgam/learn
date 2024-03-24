
var value=document.getElementById('counter');
var count=0;
var timer;

function start(){
   
 timer = setInterval(()=>{
      value.innerHTML=count++;
   },1000);
}
function reset(){
      clearInterval(timer);
      value.innerHTML=count=0;
}
 function stop(){
    clearInterval(timer);
 }                                                                                                                                                                                              