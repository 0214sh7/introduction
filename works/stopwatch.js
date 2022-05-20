let running = false
let start = 0
let stop = 0

const countstart = () => {
  if(running){
    stop = Date.now();
    const countElement = document.querySelector('#count')
    countElement.innerText = Math.trunc((stop-start)/1000) + '秒' + Math.trunc((stop-start)/100)%10 + Math.trunc((stop-start)/10)%10
    start = 0
    stop = 0
    running = false
  }else{
    running = true
    start = Date.now();
    const countElement = document.querySelector('#count')
    countElement.innerText = '計測中 '
  }
}

