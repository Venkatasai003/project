var countDate = new Date("march 8,2023 00:00:00").getTime();

var x= setInterval(function(){
    var now = new Date().getTime();
    var distance = countDate - now;

 var DAYS=Math.floor(distance / (1000*60*60*24));
 var HOURS=Math.floor((distance % (1000*60*60*24))/(1000*60*60));
 var MINUTES=Math.floor((distance % (1000*60*60))/(1000*60));
 var SECONDS=Math.floor((distance % (1000*60))/(1000));

 document.getElementById("DAYS").innerHTML=DAYS;
 document.getElementById("HOURS").innerHTML=HOURS;
 document.getElementById("MINUTES").innerHTML=MINUTES;
 document.getElementById("SECONDS").innerHTML=SECONDS;
},1000)















