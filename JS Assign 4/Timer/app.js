var timer;
function settimer()
{
 clearInterval(timer);

 var timer_month=document.getElementById("month").value;
 var timer_day=document.getElementById("day").value;
 var timer_year=document.getElementById("year").value;
 var timer_hour=document.getElementById("hour").value;
 if(timer_hour=="")timer_hour=0;
 var timer_min=document.getElementById("min").value;
 if(timer_min=="")timer_min=0;

 var timer_date=timer_month+"/"+timer_day+"/"+timer_year+" "+timer_hour+":"+timer_min;
 var end = new Date(timer_date); 
 var now = new Date(); 
 var second = 1000; 
 var minute = second 
 var hour = minute 
 var day = hour 

 function showtimer() {
  var now = new Date();
  var remain = end - now; 
  if(remain < 0) 
  {
   clearInterval(timer);
   document.getElementById("timerval").innerHTML = 'Reached!';
   return;
  }
  var days = Math.floor(remain / day); 
  var hours = Math.floor((remain % day) / hour); 
  var minutes = Math.floor((remain % hour) / minute); 
  var seconds = Math.floor((remain % minute) / second); 
 
  document.getElementById("timerval").innerHTML = days + 'Days, ';
  document.getElementById("timerval").innerHTML += hours + 'Hrs, ';
  document.getElementById("timerval").innerHTML += minutes + 'Mins, ';
  document.getElementById("timerval").innerHTML += seconds + 'Secs';
 }
 timer = setInterval(showtimer, 1000); 
}