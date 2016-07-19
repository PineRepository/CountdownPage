window.onload = function () {
  var timerElem = document.getElementById('timer');
  var timenow = parseInt(document.getElementById('timer').getAttribute('data-timer'));
  // var data = new Date(timenow);
  // console.log(data.toJSON());
  setInterval(function () {
    timenow += 10;
  }, 10);

  setInterval(function () {
    var t = getTime(timenow);
    timerElem.innerHTML = '0'+t.days+':'
      +t.hours
      +':'+((t.minutes<10)? '0'+t.minutes : t.minutes)
      +':'+((t.seconds<10)? '0'+t.seconds : t.seconds);
  }, 1000);
}

function getTime(now) {
  var deadline = Date.parse('2016-07-24');
  var t = deadline - now;
  var seconds = Math.floor( (t/1000) % 60 );
  var minutes = Math.floor( (t/1000/60) % 60 );
  var hours = Math.floor( (t/(1000*60*60)) % 24 );
  var days = Math.floor( t/(1000*60*60*24) );
  return {
    'total': t,
   'days': days,
   'hours': hours,
   'minutes': minutes,
   'seconds': seconds
  }
}
