let saludo = document.querySelector('#HolaMundo');
saludo.innerHTML = "HOLA MUNDO";


let data = new Date();
let HH = data.getHours();
let MM = data.getMinutes();
let SS = data.getSeconds();

let tiempo = HH + ":" + MM + ":" + SS;

console.log(tiempo);

let mensaje = document.querySelector('#reloj');
mensaje.innerHTML = tiempo;


    HH = (HH<10) ? "0" + HH : HH;
    MM = (MM<10) ? "0" + MM : MM;
    SS = (SS<10) ? "0" + SS : SS;

    tiempo = HH + ":" + MM + ":" + SS;

let cronom = document.querySelector('#relojCeros');
cronom.innerHTML = tiempo;

// function tiempoActual(){
//     let data = new Date();
//     let HH = data.getHours();
//     let MM = data.getMinutes();
//     let SS = data.getSeconds();
//     HH = (HH<10) ? "0" + HH : HH;
//     MM = (MM<10) ? "0" + MM : MM;
//     SS = (SS<10) ? "0" + SS : SS;

//  tiempo = HH + ":" + MM + ":" + SS;
//     return tiempo;
// }


let cronomet = document.querySelector('#crono');
cronomet.innerHTML = tiempo;

function tiempoActualizado(){
    let data = new Date();
    let HH = data.getHours();
    let MM = data.getMinutes();
    let SS = data.getSeconds();
    HH = (HH<10) ? "0" + HH : HH;
    MM = (MM<10) ? "0" + MM : MM;
    SS = (SS<10) ? "0" + SS : SS;
    let tiempo = HH + ":" + MM + ":" + SS;
    return tiempo;
}

let cronoAct = document.querySelector('#cronoActualizado');
cronoAct.innerHTML = tiempoActualizado;
// cronoAct.innerHTML = setInterval(tiempoActualizado, 1000);



//  let tiktak = setInterval(tiempo, 1000);