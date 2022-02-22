let km=parseFloat(prompt("Quanti chilometri vuoi percorrere"));
let eta=parseInt (prompt("Quanti anni hai"));
let prezzo= km * 0.21;
document.getElementById("km").innerHTML =`Devi percorrere ${km} chilometri`;
document.getElementById("eta").innerHTML =`Hai ${eta} anni`;

if(eta<18||eta>65)
document.getElementById("prezzo_O").innerHTML =`Il prezzo Originale: ${prezzo.toFixed(2)}&euro;`;

if(eta<18){
    prezzo-=((prezzo/100)*20);
}
else if(eta>65){
    prezzo-=((prezzo/100)*40);
}

document.getElementById("prezzo_F").innerHTML =`Il prezzo Finale: ${prezzo.toFixed(2)}&euro;`;