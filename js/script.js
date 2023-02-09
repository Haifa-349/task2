var AllProdects= document.querySelectorAll(".prodect  .para1")
var div1 =document.querySelector(".total-price")
var btn1 =document.querySelector(".btn1")
var totalprice=0

AllProdects.forEach(function(item){
    item.onclick=function(){
        totalprice += parseInt (item.getAttribute("price"))
        div1.innerHTML +=item.textContent +" " + " /" + " "
        if  (div1.innerHTML !=""){
          btn1.style.display="block"  
          btn1.style.color="blue"
          btn1.style.backgroundcolor="grey"
        }

    }
}

)
btn1.onclick=function()
{
    div1.innerHTML= "The total price is " + " " + "=" + " " +  totalprice
}