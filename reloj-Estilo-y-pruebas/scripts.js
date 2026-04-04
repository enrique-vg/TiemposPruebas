function Instante(){
    let tiempo = new Date();

    let hora = tiempo.getHours();
    let minutos = tiempo.getMinutes();
    let segundos = tiempo.getSeconds();

    let seg = segundos<10? "0"+ segundos : segundos; 

    let crono = hora + ":" + minutos +":"+seg; 

    // let mensaje = document.querySelector(".mensaje");
    // mensaje.innerHTML = crono;
    return crono;
}

function mostrarInstante(){
    let crono = Instante();
    let mensaje4 = document.querySelector(".mensaje4");
    mensaje4.innerHTML = "mensaje4 :" + crono;
}


let mensaje2 = document.querySelector(".mensaje2");
    mensaje2.innerHTML = "Hola";

let Inst = Instante();
let mensaje3 = document.querySelector(".mensaje3");
    mensaje3.innerHTML = "mensaje3: " + Inst;
   

setInterval(Instante, 1000);

setInterval(mostrarInstante, 1000);
