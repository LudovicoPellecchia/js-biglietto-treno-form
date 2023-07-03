/* const ticketkm = prompt ("Quanti chilometri vuoi percorrere?");
const userage = prompt ("Quanti anni hai?"); */

let ticketprice = (parseInt(ticketkm) * 0.21);
const under18discount = (ticketprice * 20) / 100;
const over65discount = (ticketprice * 40) / 100;



if (userage < "18")  {
    ticketprice = ticketprice - under18discount;

} else if (userage > "65") { 
    ticketprice = ticketprice - over65discount;
}
else {
    ticketprice = ticketprice
}


document.getElementById("output-price").innerHTML =`Il prezzo finale è di ${ticketprice.toFixed(2)} €`
