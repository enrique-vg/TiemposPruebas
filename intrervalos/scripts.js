setInterval(()=>{
    console.log("tick");
    console.log("tack");
}, 1000);

let msj = document.querySelector('p');

let intervalo =setInterval(()=>{

    // console.log("tick");
    // msj.innerHTML = msj.innerHTML + "tick";
    // console.log("tack");
     msj.innerHTML = msj.innerHTML + "tack" + "<br>";
}, 1000);


msj.innerHTML = "tick";

setTimeout(()=>{
    clearInterval(intervalo);
    console.log("Fin 5 seg.");
    msj.innerHTML = "Fin 5 seg."
},5000);