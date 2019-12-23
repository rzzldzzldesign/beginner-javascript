/*
function buzzer() {
  console.log('ALERT ALERT');
}

// setTimeout(buzzer, 2000);

// setInterval(buzzer, 1000);

function setImmediateInterval(funcToRun, ms) {
  // CALL FUNCTION RIGHT AWAY
  funcToRun();
  //  THEN SET INTERVAL
  return setInterval(funcToRun, ms);
}

// setImmediateInterval(buzzer, 1000);

function destroy() {
  document.body.innerHTML = `<p>🦈 DESTROYED! 🦈</p>`;
}

// By storing the setTimeout in a variable you can stop it later on if needed.
const bombTimer = setTimeout(destroy, 2000);
window.addEventListener('click', function() {
  console.log('YOU CLICKED BUD! YOU STOPPED THE TIMER');
  // HOW TO STOP THE SET TIMEOUT??
  clearTimeout(bombTimer); // STOPS TIMER FROM RUNNING
});
*/

const button = document.querySelector('button');

const nailInterval = setInterval(function() {
  console.log('💅');
}, 100);

function stopInterval() {
  clearInterval(nailInterval);
  console.log('TIMER STOPPED');
}

button.addEventListener('click', stopInterval);
