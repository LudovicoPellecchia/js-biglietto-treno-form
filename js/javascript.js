const userNameInput = document.getElementById("user-name");
const tripKmInput = document.getElementById("trip-km");
const userAgeInput = document.getElementById("user-age");

const generateBtn = document.querySelector(".generate-btn");
const cancelBtn = document.querySelector(".cancel-btn");

    
const minCarr = 1
const maxCarr = 8
const randomCarr = Math.floor(Math.random() * (maxCarr - minCarr + 1)) + minCarr;
const randomCpCode = Math.floor(10000 + Math.random() * 90000)
const ticketCol=document.getElementById("ticket-col")


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
    


    if (userName && userAge && tripKm !="") {
        ticketCol.classList.remove("d-none")
        document.getElementById("name-gen").innerHTML =`<strong>${userName}</strong>`
        document.getElementById("plan-gen").innerHTML =`Biglietto Standard`
        document.getElementById("carriage-gen").innerHTML =`${randomCarr}`
        document.getElementById("cp-cod-gen").innerHTML =`${randomCpCode}`
        document.getElementById("price-gen").innerHTML =`${ticketprice.toFixed(2)} €`
    }
}) 

cancelBtn.addEventListener("click", function(){
    tripKmInput.value=""
    userNameInput.value=""
    userAgeInput.value=""
    ticketCol.classList.add("d-none")
    document.getElementById("name-gen").innerHTML =""
    document.getElementById("plan-gen").innerHTML =""
    document.getElementById("carriage-gen").innerHTML =""
    document.getElementById("cp-cod-gen").innerHTML =""
    document.getElementById("price-gen").innerHTML =""
})