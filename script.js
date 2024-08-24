var MainImg = document.getElementById("MainImg");
var smallImg = document.getElementsByClassName("small-img");
let trow = document.getElementById("trow");
smallImg[0].onclick = function(){
    MainImg.src = smallImg[0].src;
    smallImg[0].src = MainImg.src;
}
smallImg[1].onclick = function(){
    MainImg.src = smallImg[1].src;
    smallImg[1].src = MainImg.src;
}
smallImg[2].onclick = function(){
    MainImg.src = smallImg[2].src;
    smallImg[2].src = MainImg.src;
}
function signup(){
    window.alert("An email has been sent to you for the confirmation.")
}
function signup(){
    window.alert("An email has been sent to you for the confirmation.")
}
function addtocart(){
    window.alert("Product has been added to the cart.");
}
function formsubmit(){
    var empty = document.getElementById("forsub");
    if(empty.value.trim()<1)
    {
        window.alert ("This field cannot be left empty.");
    }
    else
    {
        window.alert("Our representative will contact you shortly.");
    }
}
function removeCart(){
    trow.remove();
}
let price = document.getElementById("price");
let subt = document.getElementById("subt");
let quant = document.getElementById("quant");
if(quant.value>1){
    let subtotal = quant*price;
    subt.innerText = subtotal.toFixed(2);
}
function couponApplied(){
    var empty = document.getElementById("forsub");
    if(empty.value.trim()<1)
    {
        window.alert ("This field cannot be left empty.");
    }
    else
    {
        window.alert("Wohoo! You got 20% discount on your order.");
    }
}
function checkout(){
    window.alert("Your order has been placed. Thank you for shopping with us.");
}