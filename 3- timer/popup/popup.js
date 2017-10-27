var start_btn   = document.getElementById('start-btn');
var stop_btn    = document.getElementById('stop-btn');
var timer_input = document.getElementById('timer-input');
var timer = new Timer();

start_btn.addEventListener('click', (e) => {
  timer.start();
});

stop_btn.addEventListener('click', (e) => {
  timer.stop();
});

timer.addEventListener('secondsUpdated', (e) => {
  timer_input.value = timer.getTimeValues().toString();
});

timer_input.value = timer.getTimeValues().toString();
