const chronometer = new Chronometer();

// get the buttons:
const btnLeftElement = document.getElementById('btnLeft');
const btnRightElement = document.getElementById('btnRight');

// get the DOM elements that will serve us to display the time:
const minDecElement = document.getElementById('minDec');
const minUniElement = document.getElementById('minUni');
const secDecElement = document.getElementById('secDec');
const secUniElement = document.getElementById('secUni');
const milDecElement = document.getElementById('milDec');
const milUniElement = document.getElementById('milUni');
const splitsElement = document.getElementById('splits');

function printTime() {
  printMinutes();
  printSeconds();
  printMilliseconds();

}

function printMinutes() {
  let min = chronometer.computeTwoDigitNumber(chronometer.getMinutes());
  minUniElement.textContent = min.toString().slice(1) ;
  minDecElement.textContent = min.toString().slice(0,1);
}

function printSeconds() {
  let sec = chronometer.computeTwoDigitNumber(chronometer.getSeconds());
 secUniElement.textContent = sec.toString().slice(1);
 secDecElement.textContent = sec.toString().slice(0,1);
 console.log(secUniElement.textContent);
 console.log(secDecElement.textContent);
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  // ... your code goes here
}

function clearSplits() {
  // ... your code goes here
}

function setStopBtn() {
  // ... your code goes here
}

function setSplitBtn() {
  // ... your code goes here
}

function setStartBtn() {
  // ... your code goes here
}

function setResetBtn() {
  // ... your code goes here
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  // ... your code goes here
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  // ... your code goes here
});
