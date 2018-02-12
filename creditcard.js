function submitFunction(){
    
    var cardNum = $("#cardvalue").val();
    
    var cardNum1 = cardNum.toString();

    cardType(cardNum1);
    cardTypeCheck(cardNum1);
 
}

function cardTypeCheck(cardno){
    var card = cardno.toString()
if(( card.length < 13) || card.length > 16){
return 0;
}
else if(parseInt(card)<0){
return 0;
}
else if(card.length === 0){
return 0;
}
return 1;

}

function cardType(cardno){
if(parseInt(cardno)>0 && cardno.length >1 && cardno.length < 13 || cardno.length > 16){
        alert("card number has to be between 13 and 16");
        }
        else if(parseInt(cardno)<0){
            alert("credit card number has to be positive")
        }
        else if(cardno === ""){
            alert("please enter the credit card number");
        }   
 
 else if(cardno.charAt(0)==='4'){
    alert("The card is of type VISA");
}
else if(cardno.charAt(0)==='5'){
    alert("The Card is of type MasterCard");
}
else if(cardno.charAt(0)==='3'&& cardno.charAt(1)=='6'){
    alert("The Card is of type American Express");
}
else if(cardno.charAt(0)==='6'){
    alert("The Card is of type Discovery");
}

}
