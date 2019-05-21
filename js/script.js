var bg =
  ['/img/bg/bg-1.jpg',
    '/img/ng/bg-2.jpg',
    'img/bg/bg-3.jpg',
    'img/bg/bg-4.jpg',
    'img/bg/bg-5.jpg'];

     document.querySelector("body").style.backgroundImage = "url(" + bg[Math.floor(Math.random() * bg.length)] + ")";
    


function checkTime(i) {
    if (i < 10) {
      i = "0" + i;
    }
    return i;
  }
  
  function check() {
    var today = new Date();
    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
      document.getElementById("date").innerHTML=today.toLocaleDateString("en-US", options);
    t = setInterval(function() {
      check()
    }, 60000);
    var currentTime = document.getElementById("time");
    function timer(n) {
      return (parseInt(n, 10) < 10 ? '0' : '') + n;
    }
    function updateTime() {
      var timeNow = new Date(),
        hh = timeNow.getHours(),
        mm = timeNow.getMinutes(),
        ss = timeNow.getSeconds(),
        formatAMPM = (hh >= 12 ? 'PM' : 'AM');
      hh = hh % 12 || 12;
      currentTime.innerHTML = hh + "<span>:</span>" + timer(mm) + "<span>:</span>" + timer(ss) + " " + formatAMPM;
      setTimeout(updateTime, 1000);
    }
    updateTime();
  }
  
  check();
  var time = new Date();
  var ch = time.getHours();
if (ch >= 18 && ch <= 23) {
  document.getElementById("msg").innerHTML = "Having a sublime night?";
 
}
else if (ch >= 12 && ch < 18) {
  document.getElementById("msg").innerHTML = "Having a good day?";
  } 
  else {
  document.getElementById("msg").innerHTML = "Good Morning";
}
