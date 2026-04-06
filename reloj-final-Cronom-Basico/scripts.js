function instante(){

    let date = new Date();  

    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();

    hh = (hh < 10) ? '0' + hh : hh; 
    mm = (mm < 10) ? '0' + mm : mm; 
    ss = (ss < 10) ? '0' + ss : ss; 

    let instante = [hh, mm, ss];

    return instante;
}

function muestraInstantesEnReloj(){

    let inst = instante();
    
    let instant = inst[0] + ':' + inst[1] + ':' + inst[2];
    let reloj = document.querySelector('.reloj');
    reloj.innerHTML = instant;
}


setInterval(muestraInstantesEnReloj, 1000);


function incrementar(valor){
    valor = valor+1;
    let crono = document.querySelector('.cronometro');
    crono.innerHTML = valor;

    return valor
}
function mostrarValor(valor){
    let crono = document.querySelector('.cronometro');
    crono.innerHTML = valor;
}


let periodo = 10;

let valor = periodo;

let intervalo =setInterval(() => {
    valor = valor - 1;
    mostrarValor(valor);
    if (valor == 0){
        clearInterval(intervalo);
    }
}, 1000);


