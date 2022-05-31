class Chronometer {
  constructor() {
    this.currentTime=0;
    this.intervalId=null;
  }

  start(callback) {
    this.intervalId=setInterval(() =>{
      this.currentTime+= 1
      if(typeof callback==='function'){
        callback()
      }
      },1000)
    }
  
  getMinutes() {
   let minutes = Math.floor(this.currentTime/60);
   return minutes;
  }

  getSeconds() {
    let seconds = this.currentTime%60;
    return seconds;
  }

  computeTwoDigitNumber(value) {
    return value<10 ? `0${value}` : value
    // ... your code goes here
  }

  stop() {
    clearInterval(this.intervalId);
  }

  reset() {
    if (this.intervalId) return
    this.currentTime=0
    // ... your code goes here
  }

  split() {
    return `${this.computeTwoDigitNumber(this.getMinutes())} : ${this.computeTwoDigitNumber(this.getSeconds())} `
    // ... your code goes here
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
