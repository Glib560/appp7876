let log_output = document.getElementById("status-log");

function waiting(){
    new Promise((resolve, reject)=>{
    setTimeout(()=>{
        log_output.innerHTML =
          "Лог системи: очікування нових повідомлень.";
        resolve()
    }, 800)
    }).then(()=>{
    return new Promise((resolve) => {
        setTimeout(() => {
          log_output.innerHTML =
            "Лог системи: очікування нових повідомлень..";
          resolve();
        }, 800);
      });
    }).then(()=>{
   return new Promise((resolve) => {
        setTimeout(() => {
          log_output.innerHTML =
            "Лог системи: очікування нових повідомлень...";
          resolve();
        }, 800);
      });
    })
}
let waitingId = setInterval(waiting, 2400)
