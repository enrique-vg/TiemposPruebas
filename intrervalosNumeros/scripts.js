function mostrarValor(valor){
    let crono = document.querySelector('.cronometro');
    crono.innerHTML = valor;
}

// let valor = incrementar(periodo);
let valor = 0;

let intervalo =setInterval(() => {
    valor = valor + 1;
    mostrarValor(valor);    
    if (valor == 10){
        clearInterval(intervalo);
    }
}, 1000);