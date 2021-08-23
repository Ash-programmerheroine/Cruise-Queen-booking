//ticket quantity input
function getInputQuantity(ticket, isIncrease){

   const ticketQuantityValue = getInputTicketClass(ticket);
   let ticketQuantityNewValue = ticketQuantityValue ;

    if(isIncrease == true){
        ticketQuantityNewValue = ticketQuantityValue + 1;
    }
    if(isIncrease == false && ticketQuantityValue > 0){ 
        ticketQuantityNewValue = ticketQuantityValue - 1;
    }
    document.getElementById(ticket +'-cls-quantity').value = ticketQuantityNewValue;
    
   let ticketToTalPrice = 0;
    if (ticket == 'first'){
        ticketToTalPrice = ticketQuantityNewValue * 150;
    }
    if (ticket == 'economy'){
        ticketToTalPrice = ticketQuantityNewValue * 100;
    }
    document.getElementById('sub-total-price').innerText =  ticketToTalPrice ;
    CalculateTotal(); 
}

// calculation of ticket price
function CalculateTotal(){
    const   firstClassQuantity = getInputTicketClass('first');
    const   economyClassQuantity = getInputTicketClass('economy'); 

    const subTotalPrice = firstClassQuantity * 150 + economyClassQuantity * 100;
    document.getElementById('sub-total-price').innerText =  subTotalPrice ;

    const taxPayPrice = Math.round(subTotalPrice * 0.10);
    document.getElementById('vat-price').innerText = taxPayPrice;
    
    const totalPrice = subTotalPrice +  taxPayPrice;
    document.getElementById("total-price").innerText = totalPrice;
}

//ticket class input
function getInputTicketClass(ticket){
    const ticketQuantityInput = document.getElementById(ticket +'-cls-quantity');
    const ticketQuantityvalue = parseInt(ticketQuantityInput.value);
    return ticketQuantityvalue;
}
//booking successful visibility
const bookNowBtn = document.getElementById('book-now');
bookNowBtn.addEventListener('click', function(){
    document.getElementById('main-content').style.display = 'none';
    document.getElementById('header').style.display = 'none';
    document.getElementById('booking-success-area').style.display = 'block';
})


