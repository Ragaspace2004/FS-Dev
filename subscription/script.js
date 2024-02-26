function addUser(){
var label=document.getElementById("setText");
label.className="text-black font-bold"
var amount=document.getElementById("amount");
amount.remove();
var ima=document.createElement("img");
ima.src="images/cart.png";
ima.className="size-min";
label.innerHTML="Subscription Added to Cart";
var pc=document.getElementById("pricing-container");
pc.appendChild(ima);
document.getElementById("addtocart").remove();
var summa=document.getElementById("summa")
summa.innerHTML="Unlocked access to all!!";
}