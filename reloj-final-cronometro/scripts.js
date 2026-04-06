function instante(){

    let date = new Date();  

    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();

    hh = (hh < 10) ? '0' + hh : hh; 
    mm = (mm < 10) ? '0' + mm : mm; 
    ss = (ss < 10) ? '0' + ss : ss; 

    let instante = hh + ':' +  mm + ':' + ss;

    return instante;
}

function muestraInstanteEnReloj(){

    let inst = instante();

    let reloj = document.querySelector('.reloj');
    reloj.innerHTML = inst;
}

setInterval(muestraInstanteEnReloj, 1000);

