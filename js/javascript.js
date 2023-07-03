const userNameInput = document.getElementById("user-name");
const tripKmInput = document.getElementById("trip-km");
const userAgeInput = document.getElementById("user-age");

const generateBtn = document.querySelector(".generate-btn");
const cancelBtn = document.querySelector(".cancel-btn");



generateBtn.addEventListener("click", function() {
    const userName = userNameInput.value;
    const tripKm = tripKmInput.value;
    const userAge = userAgeInput.value;
    let ticketprice = (parseInt(tripKm) * 0.21);
    const under18discount = (ticketprice * 20) / 100;
    const over65discount = (ticketprice * 40) / 100;

    if (userAge < "18")  {
        ticketprice = ticketprice - under18discount;
    
    } else if (userAge > "65") { 
        ticketprice = ticketprice - over65discount;
    }
    else {
        ticketprice = ticketprice
    }
    
    const ticketName = document.querySelector(".ticket-name")
    ticketName.innerHTML += `<strong>${userName}</strong>`


    document.getElementById("output-price").innerHTML =`Il prezzo finale è di ${ticketprice.toFixed(2)} €`
}) 




