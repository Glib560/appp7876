let log_output = document.getElementById("log-output")

function waiting(){
    new Promise((resolve, reject)=>{
    setTimeout(()=>{
        log_output.innerHTML = "Очікування дій."
        resolve()
    }, 800)
    }).then(()=>{
    return new Promise((resolve) => {
        setTimeout(() => {
          log_output.innerHTML = "Очікування дій..";
          resolve();
        }, 800);
      });
    }).then(()=>{
   return new Promise((resolve) => {
        setTimeout(() => {
          log_output.innerHTML = "Очікування дій...";
          resolve();
        }, 800);
      });
    })
}
let waitingId = setInterval(waiting, 2400)
