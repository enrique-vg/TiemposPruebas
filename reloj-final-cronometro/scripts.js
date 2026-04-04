function muestraInstante(){

    let date = new Date();  

    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();

    hh = (hh < 10) ? '0' + hh : hh; 
    mm = (mm < 10) ? '0' + mm : mm; 
    ss = (ss < 10) ? '0' + ss : ss; 

    let tiempo = hh + ':' +  mm + ':' + ss;

    let reloj = document.querySelector('.reloj');
    reloj.innerHTML = tiempo;
}

setInterval(muestraInstante, 1000);

