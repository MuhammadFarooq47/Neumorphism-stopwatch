var pla = document.querySelector(".fa-play");
var reset = document.querySelector(".fa-undo");
var hr = document.querySelector(".hr");
var min = document.querySelector(".min");
var sec = document.querySelector(".sec");
pla.addEventListener('click',start);
reset.addEventListener('click',reseter);
var seconds = 0;
var minutes = 0;
var hour = 0;
var interval;
var status =1;
var dishr , dismin , dissec
function increase(){
    seconds++ ;
    if(seconds / 100 === 1){
        minutes++
        seconds = 0
        if(minutes / 60 === 1){
            hour++
            minutes = 0
        }
    }
    dissec = seconds ;
    dismin = minutes ;
    dissec = seconds ;
   if(seconds < 10){
        dissec = "0" + seconds;
    }
    if(minutes < 10){
        dismin = "0" + minutes;
    }
    if(hour < 10){
        dishr = "0" + hour;
    }
    sec.innerHTML = dissec ;
    min.innerHTML = dismin + " " +":";
    hr.innerHTML = dishr + " " + ":";
}
function start(){

   if(status==1){
    interval = setInterval(increase,10.5)
    pla.className = "fa fa-stop";
    status = 0;
    }
   else if(status==0){
       clearInterval(interval);
       status = 1;
       pla.className = "fa fa-play";
   }
}
function reseter(){
     seconds = 0;
     minutes = 0;
     hour = 0;
     hr.innerHTML = "00 :" ;
     min.innerHTML = "00 :" ;
     sec.innerHTML = "00" ;
      
      }