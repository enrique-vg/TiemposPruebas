// setInterval(()=>{
//     console.log("tick");
//     console.log("tack");
// }, 1000);

const intervalo =setInterval(()=>{
    console.log("tick");
    console.log("tack");
}, 1000);


setTimeout(()=>{
    clearInterval(intervalo);
    console.log("Fin 5 seg.");
},5000);