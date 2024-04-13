function relogio(){
    let data = new Date();
    return data.toLocaleTimeString('pt-br', {
        hour12: false
    });
}
const hora = document.querySelector('#hora');
setInterval(() => {
    hora.innerHTML = relogio();
},1000);

    const texto = document.querySelector('#cronometro');
    let hh = 0;
    let mm = 0;
    let ss = 0;
    const temp = 1000;
    let cron;
    function start(){
        cron = setInterval(timer, temp)
    };
    function pause(){
        clearInterval(cron)
    };
    function stop(){
        texto.innerHTML = '00:00:00';
        hh = 0;
        mm = 0;
        ss = 0;
    }
    function timer(){
        ss++;
        if (ss === 60){
            ss = 0;
            mm++;
            if (mm === 60){
                mm = 0;
                hh++;
            }
        }
        let format = (hh < 10 ? '0' + hh : hh) + ':' + (mm < 10 ? '0' + mm : mm) + ':' + (ss < 10 ? '0' + ss : ss);
        texto.innerText = format; 
    }